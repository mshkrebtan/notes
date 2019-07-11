(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{185:function(e,n,a){e.exports=a.p+"assets/img/firefox_profile_manager.dfa4b65a.png"},186:function(e,n,a){e.exports=a.p+"assets/img/your_certificates.19d528ff.png"},187:function(e,n,a){e.exports=a.p+"assets/img/firefox-authorities.2c63b5c7.png"},188:function(e,n,a){e.exports=a.p+"assets/img/firefox-lkipgost.67dc66c7.png"},208:function(e,n,a){"use strict";a.r(n);var r=a(0),s=Object(r.a)({},function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"испоnьзование-эnектронной-подписи-на-сайте-nalog-ru"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзование-эnектронной-подписи-на-сайте-nalog-ru","aria-hidden":"true"}},[e._v("#")]),e._v(" Использование электронной подписи на сайте nalog.ru")]),e._v(" "),r("p",[r("em",[e._v("Данная статья описывает использование электронной подписи с квалифицированным\nсертификатом, записанной на защищённый носитель Рутокен, и СКЗИ КриптоПро CSP\nна операционной системе macOS Sierra (10.12).")])]),e._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",[e._v("Данная статья была написана мной в августе 2017 года. С тех пор актуальность\nинформации в статье могла быть утрачена.")])]),e._v(" "),r("h2",{attrs:{id:"поnучение-кваnифицированной-эnектронной-подписи"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#поnучение-кваnифицированной-эnектронной-подписи","aria-hidden":"true"}},[e._v("#")]),e._v(" Получение квалифицированной электронной подписи")]),e._v(" "),r("p",[r("em",[e._v("Генерацией ключей шифрования квалифицированных электронных подписей (КЭП) и\nвыпуском квалифицированных сертификатов открытых ключей занимаются\nудостоверяющие центры.")])]),e._v(" "),r("p",[e._v("Уведомление с сайта nalog.ru:")]),e._v(" "),r("blockquote",[r("p",[e._v("Для авторизации в сервисе необходим квалифицированный сертификат ключа\nпроверки электронной подписи (КСКПЭП), выданный Удостоверяющим центром,\nаккредитованным Минкомсвязи России, который может храниться на любом\nносителе: жёстком диске, USB-ключе или смарт-карте.")])]),e._v(" "),r("blockquote",[r("p",[e._v("Для корректной авторизации в сервисе рекомендуем использовать\nквалифицированный сертификат ключа проверки электронной подписи\n(КСКПЭП),соответствующий положениям Федерального закона от 06.04.2011 N63-ФЗ.")])]),e._v(" "),r("p",[e._v("Для изготовления своей квалифицированной подписи я обратился в удостоверяющий\nцентр "),r("a",{attrs:{href:"https://kontur.ru/ca/price/fiz",target:"_blank",rel:"noopener noreferrer"}},[e._v("СКБ Контур"),r("OutboundLink")],1),e._v(". В результате я получил\nквалифицированную ЭП вместе с квалифицированным сертификатом, записанные на\nзащищённый носитель Рутокен Lite, а также лицензию на право использования СКЗИ\nКриптоПро CSP сроком действия 1 год.")]),e._v(" "),r("h2",{attrs:{id:"установка-скзи-криптопро-csp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#установка-скзи-криптопро-csp","aria-hidden":"true"}},[e._v("#")]),e._v(" Установка СКЗИ КриптоПро CSP")]),e._v(" "),r("p",[e._v("Загрузить сертифицированные версии СКЗИ КриптоПро CSP можно отсюда: "),r("a",{attrs:{href:"https://www.cryptopro.ru/products/csp/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("КриптоПро\nCSP - Загрузка файлов"),r("OutboundLink")],1),e._v(".\nОднако, необходимо предварительно зарегистрироваться на сайте cryptopro.ru.")]),e._v(" "),r("p",[e._v("Необходимо загрузить и установить пакет "),r("strong",[e._v("«КриптоПро CSP для Apple OS X (со\nвстроенным КриптоПро Fox с поддержкой TLS на ГОСТ)»")]),e._v(".")]),e._v(" "),r("p",[e._v("КриптоПро Fox представляет собой веб-браузер на основе Mozilla Firefox ESR,\nподдерживающий установку защищённых соединений (Transport Layer Security, TLS)\nс использованием российских криптографических алгоритмов. Браузер с поддержкой\nшифрования защищённых соединений по ГОСТ 34.10-2001, 28147-89 — это одно из\nтребований сервиса nalog.ru; подробнее о требованиях можно прочитать здесь:\n"),r("a",{attrs:{href:"https://lkip.nalog.ru/certificate/requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("nalog-ru-digital-signature"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"установка-сертификата-в-систему"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#установка-сертификата-в-систему","aria-hidden":"true"}},[e._v("#")]),e._v(" Установка сертификата в систему")]),e._v(" "),r("p",[r("em",[e._v("На примере с моим Рутокеном.")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Подключаем защищённый носитель к Макинтошу;")])]),e._v(" "),r("li",[r("p",[e._v("запускаем Terminal ("),r("code",[e._v("/Applications/Terminal.app")]),e._v(") и переходим в\nдиректорию КриптоПро CSP:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ cd /opt/cprocsp/bin\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])]),e._v(" "),r("li",[r("p",[e._v("выводим список подключённых защищённых носителей:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ ./csptest -card -enum\nAktiv Rutoken lite\nTotal: SYS: 0.000 sec USR: 0.000 sec UTC: 0.030 sec\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])])]),e._v(" "),r("li",[r("p",[e._v("видим, что на данный момент подключён один носитель с именем "),r("code",[e._v("Aktiv Rutoken lite")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("выводим список всех контейнеров на всех носителях:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ ./csptest -keyset \\\n    -enum_containers \\\n    -verifycontext \\\n    -fqcn \\\n    -unique\nCSP (Type:80) v4.0.9014 KC1 Release Ver:4.0.9842 OS:MacOS CPU:AMD64 FastCode:READY:AVX.\nAcquireContext: OK. HCRYPTPROV: 4314903251\n\\\\.\\Aktiv Rutoken lite\\12441848@2017-08-03-???????? ?????? ?????????|\\\\.\\Aktiv Rutoken lite\\SCARD\\rutoken_lt_36ec64d1\\0A00\\1C71\nOK.\nTotal: SYS: 0.060 sec USR: 0.490 sec UTC: 0.870 sec\n[ErrorCode: 0x00000000]\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br")])]),r("p",[e._v("Опция "),r("code",[e._v("-fqcn")]),e._v(" используется для вывода полного имени контейнера в\nформате "),r("code",[e._v("<имя носителя>\\<имя контейнера>")]),e._v(".")]),e._v(" "),r("p",[e._v("Опция "),r("code",[e._v("-unique")]),e._v(" используется для вывода уникального имени контейнера,\nкоторое отображается сразу после вертикальной черты ("),r("code",[e._v("|")]),e._v("). Оно\nпонадобится для выполнения следующей команды.")])]),e._v(" "),r("li",[r("p",[e._v("установим сертификат из контейнера "),r("code",[e._v("SCARD\\rutoken_lt_36ec64d1\\0A00\\1C71")]),e._v("\n(имя вашего контейнера, конечно, будет отличаться):")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ ./csptestf -absorb -certs \\\n    -pattern 'SCARD\\rutoken_lt_36ec64d1\\0A00\\1C71'\nMatch: SCARD\\rutoken_lt_36ec64d1\\0A00\\1C71\nOK.\nTotal: SYS: 0.170 sec USR: 1.470 sec UTC: 2.450 sec\n[ErrorCode: 0x00000000]\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])])]),e._v(" "),r("li",[r("p",[e._v("выведем список установленных сертификатов:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('$ ./certmgr -list\nCertmgr 1.0 (c) "CryptoPro",  2007-2010.\nprogram for managing certificates, CRLs and stores\n\n=============================================================================\n1-------\nIssuer              : E=ca@skbkontur.ru, OGRN=XXXXXXXXXXXXX, INN=XXXXXXXXXXXX, C=RU, S=66 Свердловская область, L=Екатеринбург, STREET=Пр. Космонавтов д. 56, OU=Удостоверяющий центр, O="ЗАО ""ПФ ""СКБ Контур""", CN="УЦ ЗАО ""ПФ ""СКБ Контур"""\nSubject             : INN=XXXXXXXXXXXX, E=XXXXXXXXXX@gmail.com, C=RU, S=78 г. Санкт-Петербург, L=Санкт-Петербург, CN=Шкребтан Максим, SN=Шкребтан, G=Максим, SNILS=XXXXXXXXXXX\n...\nSHA1 Hash           : 0x85f75ab194300ee8493c3c0cb48dd374e6505da6\nSignature Algorithm : ГОСТ Р 34.11/34.10-2001\nPublicKey Algorithm : ГОСТ Р 34.10-2001 (512 bits)\nNot valid before    : 02/08/2017  21:44:01 UTC\nNot valid after     : 02/08/2018  21:54:01 UTC\nPrivateKey Link     : Yes\nContainer           : SCARD\\rutoken_lt_36ec64d1\\0A00\\1C71\nProvider Name       : Crypto-Pro GOST R 34.10-2012 KC1 CSP\nProvider Info       : ProvType: 80, KeySpec: 1, Flags: 0x0\n...\n=============================================================================\n\n[ErrorCode: 0x00000000]\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br")])])])]),e._v(" "),r("h2",{attrs:{id:"настройка-и-испоnьзование-cp-fox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#настройка-и-испоnьзование-cp-fox","aria-hidden":"true"}},[e._v("#")]),e._v(" Настройка и использование CP Fox")]),e._v(" "),r("div",{staticClass:"danger custom-block"},[r("p",[e._v("Если вы используете Firefox в качестве основного веб-браузера, то\nя настоятельно рекомендую создать "),r("strong",[e._v("отдельный профиль")]),e._v(" для CP Fox и "),r("strong",[e._v("не\nиспользовать")]),e._v(" ваш основной профиль в CP Fox. Это позволит сохранить ваш\nосновной профиль "),r("strong",[e._v("в целости")]),e._v(". Проверено на себе.")])]),e._v(" "),r("h3",{attrs:{id:"создание-нового-профиnя-дnя-cp-fox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#создание-нового-профиnя-дnя-cp-fox","aria-hidden":"true"}},[e._v("#")]),e._v(" Создание нового профиля для CP Fox")]),e._v(" "),r("p",[e._v("Для создания профиля необходимо запустить Firefox Profile Manager; подробную\nинструкцию можно прочитать в статье на сайте "),r("a",{attrs:{href:"https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mozilla\nSupport"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Если коротко, то:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("запускаем Terminal ("),r("code",[e._v("/Applications/Terminal.app")]),e._v(");")])]),e._v(" "),r("li",[r("p",[e._v("из терминала запускаем CP Fox с опцией "),r("code",[e._v("--ProfileManager")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("/Applications/cpfox.app/Contents/MacOS/cpfox --ProfileManager\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(185),alt:"Firefox Profile Manager"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("в появившемся окне нажимаем "),r("em",[e._v("Create Profile")]),e._v(", "),r("em",[e._v("Continue")]),e._v(", вводим имя нового\nпрофиля, нажимаем "),r("em",[e._v("Done")]),e._v(";")])]),e._v(" "),r("li",[r("p",[e._v("если вы используете Firefox в качестве основного браузера, "),r("strong",[e._v("обязательно\nснимаем галочку")]),e._v(" "),r("em",[e._v("Use the selected profile without asking at startup")]),e._v(". Мы\nни в коем случае не хотим, чтобы CP Fox вдруг запустился с нашим основным\nпрофилем Firefox.")])]),e._v(" "),r("li",[r("p",[e._v("запускаем CP Fox с новым профилем.")])])]),e._v(" "),r("h3",{attrs:{id:"проверка-сертификатов"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#проверка-сертификатов","aria-hidden":"true"}},[e._v("#")]),e._v(" Проверка сертификатов")]),e._v(" "),r("p",[e._v("Для начала необходимо убедиться, что в CP Fox установлено расширение\n"),r("em",[e._v("CPROCadesPlugin")]),e._v(". Для этого достаточно перейти на страницу "),r("code",[e._v("about:addons")]),e._v(" и\nпроверить, что расширение есть в списке. Если же расширение не установлено, то\nследует загрузить его и установить: "),r("a",{attrs:{href:"https://www.cryptopro.ru/products/cades/plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("КриптоПро ЭЦП Browser\nplug-in"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("После того, как вы установите ваш сертификат в систему с помощью "),r("code",[e._v("csptestf")]),e._v(", он\nдолжен отобразиться в CP Fox. Необходимо перейти в настройки браузера, в раздел\nAdvanced ("),r("code",[e._v("about:preferences#advanced")]),e._v("), на вкладку "),r("em",[e._v("Certificates")]),e._v(" и нажать\n"),r("em",[e._v("View Certificates")]),e._v(". В окне с сертификатами, на вкладке "),r("em",[e._v("Your Certificates")]),e._v(", вы\nдолжны увидеть свой сертификат.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(186),alt:"macOS Firefox Certificates"}})]),e._v(" "),r("h3",{attrs:{id:"установка-необходимых-сертификатов"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#установка-необходимых-сертификатов","aria-hidden":"true"}},[e._v("#")]),e._v(" Установка необходимых сертификатов")]),e._v(" "),r("p",[e._v("Для работы с сервисом nalog.ru необходимо установить несколько сертификатов\nудостоверяющих центров Минкомсвязи России. Их можно скачать со специального\nпортала Госуслуг: "),r("a",{attrs:{href:"http://e-trust.gosuslugi.ru/MainCA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Портал УФО: Головной\nУЦ"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Отпечатки необходимых сертификатов:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("8B983B891851E8EF9C0278B8EAC8D420B255C95D")])]),e._v(" "),r("li",[r("code",[e._v("9E78A331020E528C046FFD57704A21B7D2241CB3")])]),e._v(" "),r("li",[r("code",[e._v("538AD264547716302401CDFB316B287DB12BA675")])]),e._v(" "),r("li",[r("code",[e._v("1AF6FCE68CE3F822C6FAD4CB32AD58FF59FBC221")])]),e._v(" "),r("li",[r("code",[e._v("B11108FFDCAD99D7A845023AB552CB1ABE845A1B")])]),e._v(" "),r("li",[r("code",[e._v("9D05A704C8C1E565ACDE5878FE0BB96EC53C2A40")])]),e._v(" "),r("li",[r("code",[e._v("0408435EB90E5C8796A160E69E4BFAC453435D1D")])]),e._v(" "),r("li",[r("code",[e._v("0932E483C4420E668F64D360006D0BEB0BFACCA7")])])]),e._v(" "),r("p",[e._v("Данные сертификаты необходимо устанавливать в хранилище root, так они являются\nсертификатами головных (root) удостоверяющих центров.")]),e._v(" "),r("p",[e._v("Установка ключей также производится с помощью утилиты "),r("code",[e._v("certmgr")]),e._v("; в\nкачестве значения параметра "),r("code",[e._v("-f")]),e._v(" указывается файл ключа. Например:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("/opt/cprocsp/bin/certmgr -inst \\\n  -store uroot \\\n  -f 8B983B891851E8EF9C0278B8EAC8D420B255C95D.cer\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("После установки сертификатов, перезапустите CP Fox, и убедитесь, что эти\nсертификаты видны в списке "),r("em",[e._v("Authorities")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:a(187),alt:"macOS Firefox Certificate Authorities"}})]),e._v(" "),r("h2",{attrs:{id:"вход-в-nичный-кабинет-на-nalog-ru"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#вход-в-nичный-кабинет-на-nalog-ru","aria-hidden":"true"}},[e._v("#")]),e._v(" Вход в личный кабинет на nalog.ru")]),e._v(" "),r("p",[e._v("При входе в личный кабинет индивидуального предпринимателя\n("),r("a",{attrs:{href:"https://lkipgost.nalog.ru/lk",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lkipgost.nalog.ru/lk"),r("OutboundLink")],1),e._v(") появится предупреждение "),r("em",[e._v("Your connection is\nnot secure")]),e._v(", так как браузеру ничего не известно об удостоверяющем центре АО\n«ГНИВЦ». Необходимо добавить сертификат в список доверенных, то есть в\nисключения.")]),e._v(" "),r("p",[e._v("Теперь при входе в личный кабинет сайт потребует от вас идентифицировать себя с\nпомощью сертификата. Выбираете нужный и нажимаете "),r("em",[e._v("OK")]),e._v(". Не забывайте, что при\nэтом защищённый носитель должен ключей и сертификатов быть подключён к\nкомпьютеру.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(188),alt:"macOS Firefox — Личный кабинет ИП"}})])])},[],!1,null,null,null);n.default=s.exports}}]);