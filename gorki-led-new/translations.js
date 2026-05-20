// Переводы для сайта
const translations = {
    ru: {
        'nav-home': 'Главная',
        'nav-about': 'О нас',
        'nav-services': 'Услуги',
        'nav-facilities': 'Объекты',
        'nav-news': 'Новости',
        'nav-gallery': 'Фотогалерея',
        'nav-visitor': 'Расписание и запись',
        'nav-contacts': 'Контакты',
        'hero-title': 'Государственное учебно-спортивное учреждение',
        'hero-subtitle': '"Горецкая детско-юношеская спортивная школа"',
        'hero-description': 'Ледовая арена, спортивные залы, тренажерные залы, конный спорт и многое другое!',
        'btn-facilities': 'Наши объекты',
        'btn-booking': 'Расписание и запись',
        'btn-contacts': 'Связаться с нами',
        'about-title': 'О нас',
        'about-description': 'Горецкая детско-юношеская спортивная школа - современный спортивный комплекс, предлагающий широкий выбор услуг для занятий спортом и активного отдыха.',
        'about-stat-1': 'Лет работы',
        'about-stat-2': 'Спортсменов',
        'about-stat-3': 'Объектов',
        'about-stat-4': 'Тренеров',
        'services-title': 'Услуги',
        'services-description': 'Комплексные спортивные услуги для всех возрастов и уровней подготовки',
        'facilities-title': 'Наши объекты и услуги',
        'facilities-description': 'Современные спортивные сооружения с актуальными ценами',
        'news-title': 'Новости и объявления',
        'news-description': 'Последние события и важная информация',
        'gallery-title': 'Фотогалерея',
        'gallery-description': 'Фотографии наших объектов и мероприятий',
        'visitor-title': 'Расписание и онлайн-запись',
        'visitor-desc': 'Ориентировочное расписание и заявка на аренду или посещение — администрация подтвердит детали по телефону',
        'visitor-schedule-title': 'Расписание',
        'visitor-schedule-lead': 'Массовое катание и ключевые слоты по дням недели',
        'visitor-booking-title': 'Онлайн-бронирование',
        'visitor-booking-lead': 'Заявка на аренду площадки или уточнение слота',
        'visitor-offline-hint': 'Для загрузки актуального расписания и отправки заявок откройте сайт через веб-сервер (http/https), а не как файл с диска.',
        'th-schedule-time': 'Время',
        'th-schedule-title': 'Мероприятие',
        'th-schedule-place': 'Площадка',
        'booking-facility-label': 'Объект',
        'booking-facility-placeholder': 'Выберите объект',
        'booking-facility-ice': 'Ледовая арена',
        'booking-facility-gym': 'Спортивный зал',
        'booking-facility-stadium': 'Стадион',
        'booking-facility-fitness': 'Тренажёрный зал / фитнес',
        'booking-facility-other': 'Другое',
        'booking-date-label': 'Желаемая дата',
        'booking-time-label': 'Удобное время',
        'booking-time-placeholder': 'Например: вечер после 18:00',
        'booking-name-label': 'ФИО',
        'booking-phone-label': 'Телефон',
        'booking-email-optional': 'необязательно',
        'booking-comment-label': 'Комментарий',
        'booking-comment-placeholder': 'Количество человек, цель аренды и др.',
        'booking-submit': 'Отправить заявку',
        'feedback-form-title': 'Обратная связь',
        'feedback-form-lead': 'Вопросы по услугам, сотрудничеству и предложения — напишите нам',
        'form-submitting': 'Отправка…',
        'schedule-empty-day': 'На этот день слотов в расписании нет — уточните по телефону.',
        'booking-error-required': 'Заполните объект, дату, имя и телефон.',
        'booking-success': 'Заявка принята.',
        'feedback-error-required': 'Заполните имя, email и текст сообщения.',
        'feedback-success': 'Сообщение отправлено.',
        'error-generic': 'Не удалось выполнить запрос.',
        'error-network': 'Нет соединения с сервером. Попробуйте позже.',
        'contacts-title': 'Контакты',
        'contacts-description': 'Свяжитесь с нами для консультации',
        'contact-address': 'Адрес',
        'contact-phones': 'Телефоны',
        'contact-email': 'Email',
        'contact-schedule': 'График работы',
        'management-title': 'Руководство',
        'add-svc-title': 'Дополнительные услуги',
        'add-billiard': 'Бильярд',
        'add-billiard-price': '9.00 руб./час',
        'add-tt': 'Настольный теннис',
        'add-tt-price': '2.10 руб./30 мин',
        'add-foosball': 'Настольный футбол',
        'add-foosball-price': '1.70-3.40 руб.',
        'add-conf': 'Конференц-зал',
        'add-conf-price': '17.00 руб./час',
        'add-bus': 'Услуга автобуса',
        'add-bus-price': '39.00 руб./час',
        'add-tractor': 'Услуга трактора',
        'add-tractor-price': '55.00 руб./час',
        'add-photo': 'Фото- видеосъемка',
        'add-photo-price': '21.00 руб./30 мин',
        'add-rooms': 'Дополнительные помещения',
        'add-rooms-price': '14.00 руб./час',
        'mgmt-director': 'Директор',
        'mgmt-deputy-main': 'Заместитель директора по основной деятельности',
        'mgmt-deputy-ahd': 'Заместитель директора по АХД',
        'mgmt-accountant': 'Главный бухгалтер',
        'mgmt-engineer': 'Главный инженер',
        'mgmt-lawyer': 'Юрисконсульт',
        'bank-details-title': 'Банковские реквизиты',
        'form-name': 'Ваше имя',
        'form-email': 'Email',
        'form-phone': 'Телефон',
        'form-message': 'Сообщение',
        'form-submit': 'Отправить',
        'footer-copyright': '© 2024 Горецкая ДЮСШ. Все права защищены.'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-facilities': 'Facilities',
        'nav-news': 'News',
        'nav-gallery': 'Gallery',
        'nav-visitor': 'Schedule & booking',
        'nav-contacts': 'Contacts',
        'hero-title': 'State Educational Sports Institution',
        'hero-subtitle': '"Gorki Children and Youth Sports School"',
        'hero-description': 'Ice arena, sports halls, gyms, equestrian sports and much more!',
        'btn-facilities': 'Our Facilities',
        'btn-booking': 'Schedule & booking',
        'btn-contacts': 'Contact Us',
        'about-title': 'About Us',
        'about-description': 'Gorki Children and Youth Sports School is a modern sports complex offering a wide range of services for sports and active recreation.',
        'about-stat-1': 'Years of Work',
        'about-stat-2': 'Athletes',
        'about-stat-3': 'Facilities',
        'about-stat-4': 'Coaches',
        'services-title': 'Services',
        'services-description': 'Comprehensive sports services for all ages and skill levels',
        'facilities-title': 'Our Facilities and Services',
        'facilities-description': 'Modern sports facilities with current prices',
        'news-title': 'News and Announcements',
        'news-description': 'Latest events and important information',
        'gallery-title': 'Photo Gallery',
        'gallery-description': 'Photos of our facilities and events',
        'visitor-title': 'Schedule & online booking',
        'visitor-desc': 'Tentative schedule and a request for venue rental or a time slot — staff will confirm details by phone',
        'visitor-schedule-title': 'Schedule',
        'visitor-schedule-lead': 'Public skating and key slots by weekday',
        'visitor-booking-title': 'Online booking',
        'visitor-booking-lead': 'Request venue rental or a time slot',
        'visitor-offline-hint': 'Open the site over http/https (not as a local file) to load the live schedule and submit requests.',
        'th-schedule-time': 'Time',
        'th-schedule-title': 'Activity',
        'th-schedule-place': 'Venue',
        'booking-facility-label': 'Facility',
        'booking-facility-placeholder': 'Select a facility',
        'booking-facility-ice': 'Ice arena',
        'booking-facility-gym': 'Sports hall',
        'booking-facility-stadium': 'Stadium',
        'booking-facility-fitness': 'Gym / fitness',
        'booking-facility-other': 'Other',
        'booking-date-label': 'Preferred date',
        'booking-time-label': 'Preferred time',
        'booking-time-placeholder': 'e.g. evening after 6 PM',
        'booking-name-label': 'Full name',
        'booking-phone-label': 'Phone',
        'booking-email-optional': 'optional',
        'booking-comment-label': 'Comment',
        'booking-comment-placeholder': 'Group size, purpose of rental, etc.',
        'booking-submit': 'Submit request',
        'feedback-form-title': 'Feedback',
        'feedback-form-lead': 'Questions about services, partnerships and suggestions — write to us',
        'form-submitting': 'Sending…',
        'schedule-empty-day': 'No slots listed for this day — please call to confirm.',
        'booking-error-required': 'Please select a facility, date, name and phone.',
        'booking-success': 'Request received.',
        'feedback-error-required': 'Please fill in name, email and message.',
        'feedback-success': 'Message sent.',
        'error-generic': 'The request could not be completed.',
        'error-network': 'Could not reach the server. Try again later.',
        'contacts-title': 'Contacts',
        'contacts-description': 'Contact us for consultation',
        'contact-address': 'Address',
        'contact-phones': 'Phones',
        'contact-email': 'Email',
        'contact-schedule': 'Working Hours',
        'management-title': 'Management',
        'add-svc-title': 'Additional Services',
        'add-billiard': 'Billiards',
        'add-billiard-price': '9.00 BYN/hour',
        'add-tt': 'Table Tennis',
        'add-tt-price': '2.10 BYN/30 min',
        'add-foosball': 'Table Football',
        'add-foosball-price': '1.70-3.40 BYN',
        'add-conf': 'Conference Room',
        'add-conf-price': '17.00 BYN/hour',
        'add-bus': 'Bus Service',
        'add-bus-price': '39.00 BYN/hour',
        'add-tractor': 'Tractor Service',
        'add-tractor-price': '55.00 BYN/hour',
        'add-photo': 'Photo/Video Shoot',
        'add-photo-price': '21.00 BYN/30 min',
        'add-rooms': 'Additional Rooms',
        'add-rooms-price': '14.00 BYN/hour',
        'mgmt-director': 'Director',
        'mgmt-deputy-main': 'Deputy Director for Core Activities',
        'mgmt-deputy-ahd': 'Deputy Director for Administrative and Economic Affairs',
        'mgmt-accountant': 'Chief Accountant',
        'mgmt-engineer': 'Chief Engineer',
        'mgmt-lawyer': 'Legal Counsel',
        'bank-details-title': 'Bank Details',
        'form-name': 'Your Name',
        'form-email': 'Email',
        'form-phone': 'Phone',
        'form-message': 'Message',
        'form-submit': 'Send',
        'footer-copyright': '© 2024 Gorki CYSS. All rights reserved.'
    },
    be: {
        'nav-home': 'Галоўная',
        'nav-about': 'Пра нас',
        'nav-services': 'Паслугі',
        'nav-facilities': 'Аб\'екты',
        'nav-news': 'Навіны',
        'nav-gallery': 'Фотагалерэя',
        'nav-visitor': 'Расклад і запіс',
        'nav-contacts': 'Кантакты',
        'hero-title': 'Дзяржаўная вучэбна-спартыўная ўстанова',
        'hero-subtitle': '"Горацкая дзіцяча-юнацкая спартыўная школа"',
        'hero-description': 'Лядовая арэна, спартыўныя залы, трэнажорныя залы, конны спорт і многае іншае!',
        'btn-facilities': 'Нашы аб\'екты',
        'btn-booking': 'Расклад і запіс',
        'btn-contacts': 'Звязацца з намі',
        'about-title': 'Пра нас',
        'about-description': 'Горацкая дзіцяча-юнацкая спартыўная школа - сучасны спартыўны комплекс, які прапануе шырокі выбар паслуг для заняткаў спортам і актыўнага адпачынку.',
        'about-stat-1': 'Гадоў працы',
        'about-stat-2': 'Спартсменаў',
        'about-stat-3': 'Аб\'ектаў',
        'about-stat-4': 'Трэнераў',
        'services-title': 'Паслугі',
        'services-description': 'Комплексныя спартыўныя паслугі для ўсіх узростаў і узроўняў падрыхтоўкі',
        'facilities-title': 'Нашы аб\'екты і паслугі',
        'facilities-description': 'Сучасныя спартыўныя збудаванні з актуальнымі цэнамі',
        'news-title': 'Навіны і аб\'явы',
        'news-description': 'Апошнія падзеі і важная інфармацыя',
        'gallery-title': 'Фотагалерэя',
        'gallery-description': 'Фотаграфіі нашых аб\'ектаў і мерапрыемстваў',
        'visitor-title': 'Расклад і анлайн-запіс',
        'visitor-desc': 'Арыентыровачны расклад і заяўка на арэнду або наведванне — адміністрацыя пацвердзіць дэталі па тэлефоне',
        'visitor-schedule-title': 'Расклад',
        'visitor-schedule-lead': 'Масавыя катанні і ключавыя слоты па днях тыдня',
        'visitor-booking-title': 'Анлайн-браніраванне',
        'visitor-booking-lead': 'Заяўка на арэнду пляцоўкі або ўдакладненне слота',
        'visitor-offline-hint': 'Каб загрузіць актуальны расклад і адправіць заяўкі, адкрыйце сайт праз вэб-сервер (http/https), а не як файл з дыска.',
        'th-schedule-time': 'Час',
        'th-schedule-title': 'Мерапрыемства',
        'th-schedule-place': 'Пляцоўка',
        'booking-facility-label': 'Аб\'ект',
        'booking-facility-placeholder': 'Выберыце аб\'ект',
        'booking-facility-ice': 'Лядовая арэна',
        'booking-facility-gym': 'Спартыўная зала',
        'booking-facility-stadium': 'Стадыён',
        'booking-facility-fitness': 'Трэнажорная зала / фітнес',
        'booking-facility-other': 'Іншае',
        'booking-date-label': 'Жаданая дата',
        'booking-time-label': 'Зручны час',
        'booking-time-placeholder': 'Напрыклад: вечар пасля 18:00',
        'booking-name-label': 'ПІБ',
        'booking-phone-label': 'Тэлефон',
        'booking-email-optional': 'неабавязкова',
        'booking-comment-label': 'Каментар',
        'booking-comment-placeholder': 'Колькасць чалавек, мэта арэнды і інш.',
        'booking-submit': 'Адправіць заяўку',
        'feedback-form-title': 'Зваротная сувязь',
        'feedback-form-lead': 'Пытанні па паслугах, супрацоўніцтве і прапановы — напішыце нам',
        'form-submitting': 'Адпраўка…',
        'schedule-empty-day': 'На гэты дзень слотаў у раскладзе няма — удакладніце па тэлефоне.',
        'booking-error-required': 'Запоўніце аб\'ект, дату, імя і тэлефон.',
        'booking-success': 'Заяўка прынята.',
        'feedback-error-required': 'Запоўніце імя, email і тэкст паведамлення.',
        'feedback-success': 'Паведамленне адпраўлена.',
        'error-generic': 'Не ўдалося выканаць запыт.',
        'error-network': 'Няма злучэння з серверам. Паспрабуйце пазней.',
        'contacts-title': 'Кантакты',
        'contacts-description': 'Звяжыцеся з намі для кансультацыі',
        'contact-address': 'Адрас',
        'contact-phones': 'Тэлефоны',
        'contact-email': 'Email',
        'contact-schedule': 'Графік працы',
        'management-title': 'Кіраўніцтва',
        'add-svc-title': 'Дадатковыя паслугі',
        'add-billiard': 'Більярд',
        'add-billiard-price': '9,00 руб./гадз.',
        'add-tt': 'Настольны тэніс',
        'add-tt-price': '2,10 руб./30 хв',
        'add-foosball': 'Настольны футбол',
        'add-foosball-price': '1,70–3,40 руб.',
        'add-conf': 'Канферэнц-зала',
        'add-conf-price': '17,00 руб./гадз.',
        'add-bus': 'Паслуга аўтобуса',
        'add-bus-price': '39,00 руб./гадз.',
        'add-tractor': 'Паслуга трактара',
        'add-tractor-price': '55,00 руб./гадз.',
        'add-photo': 'Фота- і відэаздымка',
        'add-photo-price': '21,00 руб./30 хв',
        'add-rooms': 'Дадатковыя памяшканні',
        'add-rooms-price': '14,00 руб./гадз.',
        'mgmt-director': 'Дырэктар',
        'mgmt-deputy-main': 'Намеснік дырэктара па асноўнай дзейнасці',
        'mgmt-deputy-ahd': 'Намеснік дырэктара па АГД',
        'mgmt-accountant': 'Галоўны бухгалтар',
        'mgmt-engineer': 'Галоўны інжынер',
        'mgmt-lawyer': 'Юрысконсульт',
        'bank-details-title': 'Банкаўскія рэквізіты',
        'form-name': 'Ваша імя',
        'form-email': 'Email',
        'form-phone': 'Тэлефон',
        'form-message': 'Паведамленне',
        'form-submit': 'Адправіць',
        'footer-copyright': '© 2024 Горацкая ДЮСШ. Усе правы абаронены.'
    }
};

function getTranslation(lang, key) {
    if (!key) return null;
    if (translations[lang] && translations[lang][key] != null) {
        return translations[lang][key];
    }
    if (translations.ru && translations.ru[key] != null) {
        return translations.ru[key];
    }
    return null;
}

function applyTranslationsToElements(elements, lang) {
    elements.forEach((element) => {
        const translateKey = element.getAttribute('data-translate');
        if (translateKey) {
            const text = getTranslation(lang, translateKey);
            if (text != null) {
                element.textContent = text;
            }
        }
        const htmlKey = element.getAttribute('data-translate-html');
        if (htmlKey) {
            const html = getTranslation(lang, htmlKey);
            if (html != null) {
                element.innerHTML = html;
            }
        }
        const placeholderKey = element.getAttribute('data-translate-placeholder');
        if (placeholderKey) {
            const placeholder = getTranslation(lang, placeholderKey);
            if (placeholder != null) {
                element.placeholder = placeholder;
            }
        }
        const titleKey = element.getAttribute('data-translate-title');
        if (titleKey) {
            const title = getTranslation(lang, titleKey);
            if (title != null) {
                element.setAttribute('title', title);
            }
        }
    });
}

// Функция переключения языка
function switchLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    applyTranslationsToElements(document.querySelectorAll('[data-translate], [data-translate-html], [data-translate-placeholder], [data-translate-title]'), lang);

    document.querySelectorAll('option[data-translate]').forEach(element => {
        const text = getTranslation(lang, element.getAttribute('data-translate'));
        if (text != null) {
            element.textContent = text;
        }
    });

    const titleEl = document.querySelector('title[data-translate]');
    if (titleEl) {
        const titleText = getTranslation(lang, titleEl.getAttribute('data-translate'));
        if (titleText != null) {
            document.title = titleText;
        }
    }

    const metaDesc = document.querySelector('meta[name="description"][data-translate]');
    if (metaDesc) {
        const descText = getTranslation(lang, metaDesc.getAttribute('data-translate'));
        if (descText != null) {
            metaDesc.setAttribute('content', descText);
        }
    }

    window.dispatchEvent(new CustomEvent('gorkiLanguageChanged', { detail: { lang } }));
    document.documentElement.lang = lang === 'be' ? 'be' : lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'he') ? 'rtl' : 'ltr';
}

window.switchLanguage = switchLanguage;
window.getTranslation = getTranslation;
window.applyTranslationsToElements = applyTranslationsToElements;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Получаем сохраненный язык или используем русский по умолчанию
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
    
    // Устанавливаем сохраненный язык
    switchLanguage(savedLanguage);
    
    // Добавляем обработчики событий для кнопок языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});
