<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не поддерживается']);
    exit;
}

function clean_str($v, $max = 2000) {
    $v = trim(strip_tags((string) $v));
    if (function_exists('mb_substr')) {
        return mb_substr($v, 0, $max);
    }
    return substr($v, 0, $max);
}

$allowedFacilities = [
    'ice' => 'Ледовая арена',
    'gym' => 'Спортивный зал',
    'stadium' => 'Стадион',
    'fitness' => 'Тренажёрный зал / фитнес',
    'other' => 'Другое / уточнить в сообщении'
];

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = $_POST;
}

$name = clean_str($input['name'] ?? '', 200);
$phone = clean_str($input['phone'] ?? '', 40);
$email = clean_str($input['email'] ?? '', 120);
$facilityKey = clean_str($input['facility'] ?? '', 40);
$date = clean_str($input['date'] ?? '', 20);
$timePref = clean_str($input['time_pref'] ?? '', 80);
$comment = clean_str($input['comment'] ?? '', 2000);

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Укажите имя и телефон для связи']);
    exit;
}

if (!isset($allowedFacilities[$facilityKey])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Выберите объект из списка']);
    exit;
}

if ($date === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Укажите желаемую дату']);
    exit;
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Некорректный email']);
    exit;
}

$dataDir = __DIR__ . DIRECTORY_SEPARATOR . 'data';
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

$file = $dataDir . DIRECTORY_SEPARATOR . 'booking_requests.json';
$entry = [
    'id' => bin2hex(random_bytes(8)),
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'facility' => $facilityKey,
    'facility_label' => $allowedFacilities[$facilityKey],
    'date' => $date,
    'time_pref' => $timePref,
    'comment' => $comment,
    'created_at' => date('c'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? ''
];

$fp = fopen($file, 'c+');
if ($fp === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Не удалось сохранить заявку']);
    exit;
}

if (!flock($fp, LOCK_EX)) {
    fclose($fp);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Сервис временно недоступен']);
    exit;
}

$size = filesize($file);
$list = [];
if ($size > 0) {
    rewind($fp);
    $contents = fread($fp, $size);
    $list = json_decode($contents, true);
    if (!is_array($list)) {
        $list = [];
    }
}

$list[] = $entry;
rewind($fp);
ftruncate($fp, 0);
fwrite($fp, json_encode($list, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
fflush($fp);
flock($fp, LOCK_UN);
fclose($fp);

echo json_encode([
    'success' => true,
    'message' => 'Заявка принята. Администрация свяжется с вами для подтверждения времени и условий.'
]);
