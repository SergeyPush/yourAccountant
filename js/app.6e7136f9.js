(function(t){function e(e){for(var s,n,c=e[0],l=e[1],u=e[2],m=e[3]||[],d=0,f=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e),o.push.apply(o,m);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var u=a[n];0!==i[u]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return 0===r.length&&(o.forEach((function(t){if(void 0===i[t]){i[t]=null;var e=document.createElement("link");l.nc&&e.setAttribute("nonce",l.nc),e.rel="prefetch",e.as="script",e.href=c(t),document.head.appendChild(e)}})),o.length=0),t}var s={},n={app:0},i={app:0},r=[],o=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-6497fc3e":"d3363236","chunk-718f9e40":"2940f263"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-6497fc3e":1,"chunk-718f9e40":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-6497fc3e":"a05ea437","chunk-718f9e40":"a2990369"}[t]+".css",i=l.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===i))return e()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){c=m[o],u=c.getAttribute("data-href");if(u===s||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],d.parentNode.removeChild(d),a(r)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var m=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",m.name="ChunkLoadError",m.type=s,m.request=n,a[1](m)}i[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],m=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=m,f=function(){return r.push([0,"chunk-vendors"]),a()}();e([[],{},0,["chunk-718f9e40","chunk-6497fc3e"]])})({0:function(t,e,a){t.exports=a("56d7")},"072f":function(t,e,a){},"0afc":function(t){t.exports=JSON.parse('{"menu":{"services":"Услуги","quality":"Преимущества","advantages":"Условия","calculator":"Калькулятор","contacts":"Контакты"},"header":{"title":"Бухгалтерская компания","description":"Мы предоставляем весь спектр <span class=\'colored\'>бухгалтерских</span> услуг, от разовых консультаций до полного ведения учета. Поможем <span class=\'colored\'>оптимизировать</span> налоги и навести порядок в Вашей бухгалтерии"},"contactForm":{"name":"Ваше имя","phone":"Ваш телефон","question":"Ваш вопрос","submitButton":"Заказать звонок","buttonSecond":"Рассчитать стоимость","yourData":"Ваши данные в безопасности и не будут переданы третьим особам","validatephone":"Введите телефон","validatename":"Введите Имя","success":"Сообщение отправлено"},"services":{"header":"Наши услуги","header_tov":"Для ООО","header_fop":"ДЛЯ ФЛП","price_tov":"от 2000 грн","price_fop":"от 800 грн","tov":{"1":"Обработка первинной документации с помощью програмного обеспечения 1С","2":"Оптимизация Ваших налогов","3":"Восстановление учета","4":"Начисление заработной платы и кадровый учет","5":"Подготовка платежей в системе «Клиент-Банк»","6":"Подготовка и подача ежемесячных, квартальных и годовых отчетов","7":"Активное участие в прохождении проверок контролирующими органами"},"fop":{"1":"Регистрация предпринимателем и помощь в выборе системы налогообложения","2":"Подготовка платежных поручений","3":"Контроль оплаты налогов","4":"Подготовка, подача отчетности и мониторинг личного кабинета","5":"Информационно-консультационная поддержка","6":"Ежемесячный контроль оборота согласно группы ФОП ","7":"Разовые услуги и обслуживание на постоянной основе"}},"advantages":{"title":"Что Вы получите, выбрав нас","items":{"knowledge":"Знания и опыт","improvement":"Развитие и совершенствование","agility":"Гибкость и новаторство","terms":"Порядочность и соблюдение сроков","approach":"Индивидуальный подход","confidentiality":"Соблюдение конфиденциальности"}},"cooperation":{"title":"Начало сотрудничества","items":{"1":"Заявка, встреча и согласование работ","2":"Подписание договора","3":"Передача документов в работу","4":"Ведение бухгалтерии"}},"calculator":{"title":"Калькулятор стоимости","subtitle":"Вы можете примерно рассчитать стоимость работ для Вашей компании. Заполните форму и мы свяжемся с Вами","form":{"title":"Организационная форма","items":{"1":"ФЛП","2":"ООО","3":"другое"}},"system":{"title":"Система нологообложения","items":{"1":"Общая система","2":"единый налог, 2гр.","3":"единый налог, 3гр.","4":"другое"}},"type":{"title":"Вид деятельности","items":{"1":"Продажи","2":"Производство","3":"Услуги"}},"additionally":{"title":"Дополнительно","items":{"1":"НДС","2":"Акциз","3":"ВЭД","4":"Кассовые аппараты"}},"employees":{"title":"Колличество сотрудников"},"documents":{"title":"Колличество документов/мес"}},"contacts":{"title":"Контакты","subtitle":"Как нас найти","items":{"subscribe":"Подписывайтесь","phone":"Звоните","mail":"Пишите","address":"улица Евгена Сверстюка, 11А","facebook":"WisExpert"}}}')},"0bf6":function(t,e,a){t.exports=a.p+"img/footer-heart.82704d8f.svg"},"0c84":function(t,e,a){"use strict";var s=a("dfa3"),n=a.n(s);n.a},"13e7":function(t,e,a){t.exports=a.p+"img/coop-sign.a501d309.svg"},2171:function(t,e,a){"use strict";var s=a("4a21"),n=a.n(s);n.a},2406:function(t){t.exports=JSON.parse('{"messeges":{"validatephone":"Введіть телефон","validatename":"Введіть Ім\'я","success":"Повідомлення відправлене"},"menu":{"services":"Послуги","quality":"Переваги","advantages":"Умови","calculator":"Калькулятор","contacts":"Контакти"},"header":{"title":"Бухгалтерська компанія","description":"Ми надаємо весь спектр <span class=\'colored\'>бухгалтерських</span> послуг, від разових консультацій до повного ведення обліку. Допоможемо <span class=\'colored\'>оптимізувати</span> податки та навести порядок в Вашій бухгалтерії"},"contactForm":{"name":"Ваше ім\'я","phone":"Ваш телефон","question":"Ваше питання","submitButton":"Замовити дзвінок","buttonSecond":"Розрахувати вартість","yourData":"Ваші дані в безпеці і не будуть передані третім особам","validatephone":"Введіть телефон","validatename":"Введіть Ім\'я","success":"Повідомлення відправлено"},"services":{"header":"Наші послуги","header_tov":"ДЛЯ ТОВ","header_fop":"ДЛЯ ФОП","price_tov":"від 2000 грн.","price_fop":"від 800 грн.","tov":{"1":"Обробка первинної документації за допомогою програмного забезпечення 1С","2":"Оптимізація Ваших податків","3":"Відновлення обліку","4":"Нарахування заробітної плати та кадровий облік","5":"Підготовка платежів в системі “Клієнт-Банк”","6":"Підготовка та подача щомісячної, квартальної та річної звітності","7":"Активна участь у проходженні перевірок контролюючими органами"},"fop":{"1":"Реєстрація підприємцем та допомога при виборі системи оподаткування","2":"Підготовка платіжних доручень","3":"Контроль сплати податків","4":"Підготовка та подача звітності та моніторинг особистого кабінету","5":"Інформаційно-консультаційна підтримка","6":"Щомісячний контроль обороту згідно групи ФОП","7":"Разові послуги та обслуговування на постійній основі"}},"advantages":{"title":"Що Ви отримаете, обравши нас","items":{"knowledge":"Знання та досвід","improvement":"розвиток та вдосконалення","agility":"Гнучкість та новаторство","terms":"Порядність і дотримання термінів","approach":"Індивідуальний підхід","confidentiality":"Збереження конфіденційності"}},"cooperation":{"title":"Початок cпівробітництва","items":{"1":"Заявка, зустріч та узгодження робіт","2":"Підписання договору","3":"Передача документів в роботу","4":"Ведення бухгалтерії"}},"calculator":{"title":"Калькулятор вартості","subtitle":"Ви можете приблизно розрахувати вартість робіт для Вашої компанії. Заповніть форму і ми зв’яжемось з Вами","form":{"title":"ОРГАНІЗАЦІЙНА ФОРМА","items":{"1":"ФОП","2":"ТОВ","3":"інше"}},"system":{"title":"СИСТЕМА ОПОДАТКУВАННЯ","items":{"1":"Загальна система","2":"Єдиний податок, 2гр.","3":"Єдиний податок, 3гр.","4":"інше"}},"type":{"title":"ВИД ДІЯЛЬНОСТІ","items":{"1":"Продажі","2":"Виробництво","3":"Послуги"}},"additionally":{"title":"ДОДАТКОВО","items":{"1":"ПДВ","2":"Акциз","3":"ЗЕД","4":"Касові апарати"}},"employees":{"title":"КІЛЬКІСТЬ СПІВРОБІТНИКІВ"},"documents":{"title":"КІЛЬКІСТЬ ДОКУМЕНТІВ /МІС."}},"contacts":{"title":"Контакти","subtitle":"Як нас знайти","items":{"subscribe":"Підписуйтесь","phone":"Телефонуйте","mail":"Пишіть","address":"вулиця Євгена Сверстюка, 11А","facebook":"WisExpert"}}}')},2468:function(t,e,a){t.exports=a.p+"img/isolated-monochrome-white.6b277b8c.svg"},"2ce6":function(t,e,a){"use strict";var s=a("e157"),n=a.n(s);n.a},"33c1":function(t,e,a){},"3e42":function(t,e,a){"use strict";var s=a("efca"),n=a.n(s);n.a},4901:function(t,e,a){t.exports=a.p+"img/adv-student.174a6472.svg"},"4a21":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-scroll-progress-bar",{attrs:{height:"0.25rem",barClass:{progress_bar:!0},backgroundColor:""}}),a("Header",{attrs:{language:t.language},on:{changeLanguage:function(e){return t.handleChangeLanguage(e)}}}),a("Services"),a("Advantages"),a("Cooperation"),a("Calculator"),a("Contacts"),a("Footer"),a("OnTop")],1)},i=[],r=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{duration:1e3},expression:"{ duration: 1000 }",modifiers:{reset:!0}}],staticClass:"header",attrs:{id:"#top"}},[a("Menu",{on:{changeLanguage:function(e){return t.changeLanguage(e)}}}),a("transition",{attrs:{name:"appear",appear:""}},[a("div",{staticClass:"content container"},[a("div",{staticClass:"hero"},[a("h1",{staticClass:"hero__title"},[t._v(" "+t._s(t.$t("header.title"))+" "),a("br"),a("span",{staticClass:"colored"},[t._v("WisExpert")])]),a("p",{staticClass:"hero__desc",domProps:{innerHTML:t._s(t.$t("header.description"))}})]),a("ContactForm",{attrs:{buttonText:t.$t("contactForm.submitButton")}})],1)])],1)}),o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu container"},[t._m(0),a("nav",{staticClass:"navigation"},[a("ul",{staticClass:"menu__list"},t._l(t.dafaultData,(function(e,s){return a("li",{key:s,staticClass:"menu__item header-item"},[a("a",{staticClass:"menu__link",attrs:{href:e.link}},[t._v(t._s(e.text))])])})),0),a("div",{staticClass:"language header-item"},[a("p",{on:{click:t.changeLocale}},[t._v(t._s(t.language))])]),t._m(1)]),a("button",{staticClass:"hamburger hamburger--collapse",class:[t.menuIsOpened?"is-active":""],attrs:{type:"button"},on:{click:t.handleOpenMenu}},[t._m(2)]),a("transition",{attrs:{name:"draver"}},[t.menuIsOpened?a("Drawer",{attrs:{closeMenu:t.handleCloseMenu,items:t.dafaultData,language:t.language,changeLocale:t.changeLocale}}):t._e()],1)],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("p",{staticClass:"logo__text"},[t._v("WisExpert")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"socials"},[a("div",{staticClass:"phone header-item"},[a("i",{staticClass:"fas fa-phone"}),a("ul",{staticClass:"sub_menu"},[a("li",{staticClass:"sub_menu-item"},[a("i",{staticClass:"fas fa-phone"}),a("span",[t._v("+38(099)381-11-18")])]),a("li",{staticClass:"sub_menu-item"},[a("i",{staticClass:"fab fa-telegram-plane"}),a("a",{staticClass:"submenu_link",attrs:{href:"tg://resolve?domain=@WisExpert"}},[t._v("@WisExpert")])]),a("li",{staticClass:"sub_menu-item"},[a("i",{staticClass:"fab fa-skype"}),a("a",{staticClass:"submenu_link",attrs:{href:"skype:live:.cid.24d1ded5ed4af49?chat"}},[t._v("WisExpert")])]),a("li",{staticClass:"sub_menu-item"},[a("i",{staticClass:"far fa-envelope"}),a("a",{staticClass:"submenu_link",attrs:{href:"mailto:w.expert.company@gmail.com"}},[t._v("w.expert.company@gmail.com")])])])]),a("div",{staticClass:"facebook header-item"},[a("a",{attrs:{href:"https://facebook.com/wisexpert",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-facebook-f"})])]),a("div",{staticClass:"instagram header-item"},[a("a",{attrs:{href:"https://www.instagram.com/wisexpert_buh/",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-instagram"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"hamburger-box"},[a("span",{staticClass:"hamburger-inner"})])}],u=a("2468"),m=a.n(u),d={components:{Drawer:function(){return a.e("chunk-718f9e40").then(a.bind(null,"bbae"))}},data:function(){return{menuIsOpened:!1,face:m.a,language:"ukr"}},computed:{dafaultData:function(){return[{text:this.$t("menu.services"),link:"#services"},{text:this.$t("menu.quality"),link:"#advantages"},{text:this.$t("menu.advantages"),link:"#cooperation"},{text:this.$t("menu.calculator"),link:"#calculator"},{text:this.$t("menu.contacts"),link:"#contacts"}]}},methods:{handleOpenMenu:function(){this.menuIsOpened=!this.menuIsOpened},handleCloseMenu:function(t){t.target===t.currentTarget&&(this.menuIsOpened=!1)},changeLocale:function(){localStorage.setItem("language",this.language),this.$emit("changeLanguage",this.language),"rus"===this.language?this.language="ukr":this.language="rus"}},mounted:function(){var t=localStorage.getItem("language");t&&(this.language=t),this.changeLocale()}},p=d,f=(a("2171"),a("2877")),v=Object(f["a"])(p,c,l,!1,null,"449b535e",null),g=v.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-form"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.sendEmail({formdata:t.formdata,parent:t.parent})}}},[a("div",{staticClass:"input-form"},[t.validators.formIsValid||t.validators.nameIsValid?t._e():a("span",{staticClass:"validation"},[t._v(t._s(t.$t("contactForm.validatename")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.name,expression:"formdata.name"}],staticClass:"name",attrs:{type:"text",placeholder:t.$t("contactForm.name")},domProps:{value:t.formdata.name},on:{input:function(e){e.target.composing||t.$set(t.formdata,"name",e.target.value)}}})]),a("div",{staticClass:"input-form"},[t.validators.formIsValid||t.validators.phoneIsValid?t._e():a("span",{staticClass:"validation"},[t._v(t._s(t.$t("contactForm.validatephone")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.phone,expression:"formdata.phone"},{name:"mask",rawName:"v-mask",value:"+38(###)###-##-##",expression:"'+38(###)###-##-##'"}],ref:"phone",staticClass:"phone",attrs:{type:"text",placeholder:t.$t("contactForm.phone")},domProps:{value:t.formdata.phone},on:{input:function(e){e.target.composing||t.$set(t.formdata,"phone",e.target.value)}}})]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formdata.question,expression:"formdata.question"}],staticClass:"question",attrs:{cols:"30",rows:"10",placeholder:t.$t("contactForm.question")},domProps:{value:t.formdata.question},on:{input:function(e){e.target.composing||t.$set(t.formdata,"question",e.target.value)}}}),a("button",{staticClass:"submit"},[t._v(t._s(t.buttonText))]),a("p",{staticClass:"data"},[t._v(t._s(t.$t("contactForm.yourData")))])]),t.messageIsDisplayed?a("app-success"):t._e()],1)},_=[],C=(a("b0c0"),a("0f91")),b=a.n(C),y={props:["buttonText"],data:function(){return{formdata:{name:"",phone:"",question:""},parent:this.$parent.$data.formData,validators:{nameIsValid:!1,phoneIsValid:!1,formIsValid:!0},messageIsDisplayed:!1}},methods:{validateForm:function(){this.validators.formIsValid=!1,this.formdata.name.length>0&&(this.validators.nameIsValid=!0),17===this.formdata.phone.length&&(this.validators.phoneIsValid=!0),this.validators.formIsValid=this.validators.nameIsValid&&this.validators.phoneIsValid},displayMessage:function(){var t=this;this.messageIsDisplayed=!0,setTimeout((function(){t.messageIsDisplayed=!1}),2e3)},sendEmail:function(t){var e=this;this.validateForm(),!1!==this.validators.formIsValid&&(this.displayMessage(),b.a.send("wegmail","template_sbRg0J0U",t,"user_5p0b4IT3bwkF3nOhn3S5L").then((function(t){console.log("SUCCESS!",t.status,t.text),e.formdata.name="",e.formdata.phone="",e.formdata.question="",e.$parent.$data.formData={form:[],system:[],type:[],additionally:[],employees:[]}}),(function(t){console.log("FAILED...",t)})))}}},x=y,k=(a("d3c3"),Object(f["a"])(x,h,_,!1,null,"05559093",null)),$=k.exports,D={components:{Menu:g,ContactForm:$},methods:{changeLanguage:function(t){this.$emit("changeLanguage",t)}}},w=D,E=(a("bd90"),Object(f["a"])(w,r,o,!1,null,"03777500",null)),O=E.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{duration:1e3},expression:"{ duration: 1000 }",modifiers:{reset:!0}}],staticClass:"services",attrs:{id:"services"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"section_title"},[t._v(t._s(t.$t("services.header")))]),a("div",{staticClass:"services_items"},[a("div",{staticClass:"services_tov"},[a("h3",{staticClass:"tov_title"},[t._v(t._s(t.$t("services.header_tov")))]),a("p",{staticClass:"prices"},[t._v(t._s(t.$t("services.price_tov")))]),a("ul",{staticClass:"tov_list"},t._l(t.getTovs,(function(e,s){return a("li",{key:s,staticClass:"list_item"},[a("div",{staticClass:"list_item_image"},[a("img",{staticClass:"arrow",attrs:{src:t.green_arrow,alt:"image"}})]),a("p",{staticClass:"list_item_text"},[t._v(t._s(e))])])})),0)]),a("div",{staticClass:"services_fop"},[a("h3",{staticClass:"fop_title"},[t._v(t._s(t.$t("services.header_fop")))]),a("p",{staticClass:"prices"},[t._v(t._s(t.$t("services.price_fop")))]),a("ul",{staticClass:"fop_list"},t._l(t.getFops,(function(e,s){return a("li",{key:s,staticClass:"list_item"},[a("div",{staticClass:"list_item_image"},[a("img",{staticClass:"arrow",attrs:{src:t.red_arrow,alt:"image"}})]),a("p",{staticClass:"list_item_text"},[t._v(t._s(e))])])})),0)])])])])},F=[],A=a("b090"),S=a.n(A),j=a("e718"),N=a.n(j),B={data:function(){return{red_arrow:S.a,green_arrow:N.a}},computed:{getTovs:function(){return this.$t("services.tov")},getFops:function(){return this.$t("services.fop")}}},T=B,L=(a("8545"),Object(f["a"])(T,I,F,!1,null,"38e7d11c",null)),P=L.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{duration:1e3},expression:"{ duration: 1000 }",modifiers:{reset:!0}}],staticClass:"container advantages",attrs:{id:"advantages"}},[a("h2",{staticClass:"section_title"},[t._v(t._s(t.$t("advantages.title")))]),a("div",{staticClass:"section_content"},t._l(t.getAdvantages,(function(e,s,n){return a("div",{key:s,staticClass:"item"},[a("div",{staticClass:"image_container"},[a("img",{staticClass:"image",attrs:{src:t.images[n],alt:"image"}})]),a("p",{staticClass:"item_text"},[t._v(t._s(e))])])})),0)])},M=[],V=a("4901"),W=a.n(V),J=a("bfc4"),H=a.n(J),U=a("c87c"),G=a.n(U),z=a("6cf8"),K=a.n(z),R=a("9206"),Q=a.n(R),X=a("772d"),Y=a.n(X),Z={data:function(){return{images:[W.a,H.a,G.a,K.a,Q.a,Y.a]}},computed:{getAdvantages:function(){return this.$t("advantages.items")}}},tt=Z,et=(a("0c84"),Object(f["a"])(tt,q,M,!1,null,"ab134a86",null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{duration:1e3},expression:"{duration:1000}",modifiers:{reset:!0}}],staticClass:"cooperation",attrs:{id:"cooperation"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"section_title"},[t._v(t._s(t.$t("cooperation.title")))]),a("div",{staticClass:"section_content"},t._l(t.getItems,(function(e,s,n){return a("div",{key:s,staticClass:"items"},[a("div",{staticClass:"image_container"},[a("img",{staticClass:"item_image",attrs:{src:t.images[n],alt:"image"}})]),a("p",{staticClass:"items_text"},[t._v(t._s(e))])])})),0)])])},nt=[],it=a("d03f"),rt=a.n(it),ot=a("13e7"),ct=a.n(ot),lt=a("eee6"),ut=a.n(lt),mt=a("bbb8"),dt=a.n(mt),pt=a("ee1d"),ft=a.n(pt),vt={data:function(){return{images:[rt.a,ct.a,ut.a,dt.a],vector:ft.a}},computed:{getItems:function(){return this.$t("cooperation.items")}}},gt=vt,ht=(a("2ce6"),Object(f["a"])(gt,st,nt,!1,null,"22f6c33e",null)),_t=ht.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{duration:1e3},expression:"{ duration: 1000 }",modifiers:{reset:!0}}],staticClass:"contact",attrs:{id:"contacts"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"section_title"},[t._v(t._s(t.$t("contacts.title")))]),a("div",{staticClass:"section_content"},[a("div",{staticClass:"contacts"},[a("div",{staticClass:"contacts_list"},[a("div",{staticClass:"contacts_inner"},[a("p",{staticClass:"inner_subtitle"},[t._v(t._s(t.$t("contacts.subtitle")))]),a("ul",{staticClass:"list"},[a("li",{staticClass:"list_item"},[a("i",{staticClass:"fas fa-map-marker-alt item_icon"}),a("span",{staticClass:"item_text"},[t._v(t._s(t.$t("contacts.items.address")))])]),t._m(0),t._m(1),a("li",{staticClass:"list_item"},[a("i",{staticClass:"fab fa-facebook-f item_icon"}),a("span",{staticClass:"item_text"},[a("a",{staticClass:"item_link",attrs:{href:"https://facebook.com/wisexpert",target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("contacts.items.facebook")))])])])])])]),a("div",{staticClass:"contacts_map"},[a("GoogleMap")],1)])])])])},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list_item"},[a("i",{staticClass:"fas fa-phone item_icon"}),a("span",{staticClass:"item_text"},[t._v("+38(099)381-11-18")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list_item"},[a("i",{staticClass:"far fa-envelope item_icon"}),a("span",{staticClass:"item_text"},[a("a",{staticClass:"item_link",attrs:{href:"mailto:w.expert.company@gmail.com"}},[t._v("w.expert.company@gmail.com")])])])}],yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mapouter"},[a("div",{staticClass:"gmap_canvas"},[a("iframe",{attrs:{width:"100%",height:"100%",id:"gmap_canvas",src:"https://maps.google.com/maps?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%84%D0%B2%D0%B3%D0%B5%D0%BD%D0%B0%20%D0%A1%D0%B2%D0%B5%D1%80%D1%81%D1%82%D1%8E%D0%BA%D0%B0%2C%2011%D0%90%2C%20%D0%9A%D0%B8%D0%B5%D0%B2&t=&z=15&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}})])])}],kt={},$t=kt,Dt=(a("aac3"),Object(f["a"])($t,yt,xt,!1,null,"12dd9f3c",null)),wt=Dt.exports,Et={components:{GoogleMap:wt}},Ot=Et,It=(a("3e42"),Object(f["a"])(Ot,Ct,bt,!1,null,"329c6375",null)),Ft=It.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{duration:1e3,mobile:!1},expression:"{ duration: 1000, mobile: false }",modifiers:{reset:!0}}],staticClass:"footer"},[a("div",{staticClass:"section_content container"},[a("p",{staticClass:"sign"},[t._v("Made with")]),a("img",{staticClass:"heart",attrs:{src:t.heart,alt:"image"}}),t._m(0)])])},St=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"by"},[t._v(" by "),a("span",{staticClass:"company"},[t._v("SP Development")])])}],jt=a("0bf6"),Nt=a.n(jt),Bt={data:function(){return{heart:Nt.a}}},Tt=Bt,Lt=(a("e83e"),Object(f["a"])(Tt,At,St,!1,null,"7e189cc3",null)),Pt=Lt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{duration:1e3},expression:"{duration:1000}",modifiers:{reset:!0}}],staticClass:"calculator container",attrs:{id:"calculator"}},[a("h2",{staticClass:"section_title"},[t._v(t._s(t.$t("calculator.title")))]),a("p",{staticClass:"section_subtitle"},[t._v(t._s(t.$t("calculator.subtitle")))]),a("div",{staticClass:"section_content"},[a("ContactForm",{attrs:{buttonText:t.$t("contactForm.buttonSecond")}}),a("div",{staticClass:"part1 parts"},[a("div",{staticClass:"category"},[a("p",{staticClass:"category_title"},[t._v(t._s(t.$t("calculator.form.title")))]),t._l(t.getForm,(function(e,s){return a("label",{key:s,staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.form,expression:"formData.form"}],attrs:{type:"radio",name:"form"},domProps:{value:e,checked:t._q(t.formData.form,e)},on:{change:function(a){return t.$set(t.formData,"form",e)}}}),a("span",[t._v(t._s(e))])])}))],2),a("div",{staticClass:"category"},[a("p",{staticClass:"category_title"},[t._v(t._s(t.$t("calculator.system.title")))]),t._l(t.getSystem,(function(e,s){return a("label",{key:s,staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.system,expression:"formData.system"}],attrs:{type:"radio",name:"system"},domProps:{value:e,checked:t._q(t.formData.system,e)},on:{change:function(a){return t.$set(t.formData,"system",e)}}}),a("span",[t._v(t._s(e))])])}))],2),a("div",{staticClass:"category"},[a("p",{staticClass:"category_title"},[t._v(t._s(t.$t("calculator.employees.title")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.employees,expression:"formData.employees"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.formData.employees},on:{input:function(e){e.target.composing||t.$set(t.formData,"employees",e.target.value)}}})])]),a("div",{staticClass:"part2 parts"},[a("div",{staticClass:"category"},[a("p",{staticClass:"category_title"},[t._v(t._s(t.$t("calculator.type.title")))]),a("ul",t._l(t.getType,(function(e,s,n){return a("li",{key:s,staticClass:"list_item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.type,expression:"formData.type"}],staticClass:"styled-checkbox",attrs:{type:"checkbox",name:"type",id:"type"+n},domProps:{value:e,checked:Array.isArray(t.formData.type)?t._i(t.formData.type,e)>-1:t.formData.type},on:{change:function(a){var s=t.formData.type,n=a.target,i=!!n.checked;if(Array.isArray(s)){var r=e,o=t._i(s,r);n.checked?o<0&&t.$set(t.formData,"type",s.concat([r])):o>-1&&t.$set(t.formData,"type",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.formData,"type",i)}}}),a("label",{attrs:{for:"type"+n}},[t._v(t._s(e))])])})),0)]),a("div",{staticClass:"category"},[a("p",{staticClass:"category_title"},[t._v(t._s(t.$t("calculator.additionally.title")))]),a("ul",t._l(t.getAdditionally,(function(e,s,n){return a("li",{key:s,staticClass:"list_item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.additionally,expression:"formData.additionally"}],staticClass:"styled-checkbox",attrs:{type:"checkbox",name:"additionally",id:"additionally"+n},domProps:{value:e,checked:Array.isArray(t.formData.additionally)?t._i(t.formData.additionally,e)>-1:t.formData.additionally},on:{change:function(a){var s=t.formData.additionally,n=a.target,i=!!n.checked;if(Array.isArray(s)){var r=e,o=t._i(s,r);n.checked?o<0&&t.$set(t.formData,"additionally",s.concat([r])):o>-1&&t.$set(t.formData,"additionally",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.formData,"additionally",i)}}}),a("label",{attrs:{for:"additionally"+n}},[t._v(t._s(e))])])})),0)]),a("div",{staticClass:"category"},[a("p",{staticClass:"category_title"},[t._v(t._s(t.$t("calculator.documents.title")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.documents,expression:"formData.documents"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.formData.documents},on:{input:function(e){e.target.composing||t.$set(t.formData,"documents",e.target.value)}}})])])],1)])},Mt=[],Vt={components:{ContactForm:$},data:function(){return{formData:{form:[],system:[],type:[],additionally:[],employees:[]}}},computed:{getForm:function(){return this.$t("calculator.form.items")},getSystem:function(){return this.$t("calculator.system.items")},getType:function(){return this.$t("calculator.type.items")},getAdditionally:function(){return this.$t("calculator.additionally.items")}}},Wt=Vt,Jt=(a("b476"),Object(f["a"])(Wt,qt,Mt,!1,null,"745db919",null)),Ht=Jt.exports,Ut={components:{Header:O,Services:P,Advantages:at,Cooperation:_t,Contacts:Ft,Calculator:Ht,Footer:Pt,OnTop:function(){return a.e("chunk-6497fc3e").then(a.bind(null,"aa42"))}},data:function(){return{language:"ukr"}},methods:{handleChangeLanguage:function(t){localStorage.setItem("language",t),this.$i18n.locale=t}}},Gt=Ut,zt=(a("5c0b"),Object(f["a"])(Gt,n,i,!1,null,null,null)),Kt=zt.exports,Rt=a("2f62");s["a"].use(Rt["a"]);var Qt=new Rt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Xt=a("a925"),Yt=a("b6d0"),Zt=a("4c95"),te=a.n(Zt),ee=a("5530"),ae=a("0afc"),se=a("2406");s["a"].use(Xt["a"]);var ne=new Xt["a"]({locale:"ukr",fallbackLocale:"rus",messages:{ukr:Object(ee["a"])({},se),rus:Object(ee["a"])({},ae)}}),ie=a("9483");Object(ie["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("becf");var re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"success-window animation"},[a("i",{staticClass:"far fa-check-circle icon"}),a("p",{staticClass:"message_text"},[t._v(t._s(t.$t("contactForm.success")))])])},oe=[],ce={},le=ce,ue=(a("91f2"),Object(f["a"])(le,re,oe,!1,null,"7d607011",null)),me=ue.exports,de=a("9b0f");s["a"].use(Yt["a"]),s["a"].use(Xt["a"]),s["a"].use(de["a"]),s["a"].component("app-success",me),s["a"].config.productionTip=!1,s["a"].use(te.a,{mobile:!1}),new s["a"]({store:Qt,i18n:ne,render:function(t){return t(Kt)}}).$mount("#app")},"5aa1":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"6cf8":function(t,e,a){t.exports=a.p+"img/adv-clock.2a63c113.svg"},"72f8":function(t,e,a){},"772d":function(t,e,a){t.exports=a.p+"img/adv-secret.4ae706b1.svg"},8182:function(t,e,a){},8545:function(t,e,a){"use strict";var s=a("072f"),n=a.n(s);n.a},"91f2":function(t,e,a){"use strict";var s=a("97be"),n=a.n(s);n.a},9206:function(t,e,a){t.exports=a.p+"img/adv-solution.7babc6b9.svg"},"97be":function(t,e,a){},"9c0c":function(t,e,a){},a6c9:function(t,e,a){},aac3:function(t,e,a){"use strict";var s=a("33c1"),n=a.n(s);n.a},b090:function(t,e,a){t.exports=a.p+"img/red-arrow.ba939881.svg"},b476:function(t,e,a){"use strict";var s=a("72f8"),n=a.n(s);n.a},bbb8:function(t,e,a){t.exports=a.p+"img/coop-buh.46c2e40f.svg"},bd90:function(t,e,a){"use strict";var s=a("a6c9"),n=a.n(s);n.a},bfc4:function(t,e,a){t.exports=a.p+"img/adv-improvement.6d4cdf18.svg"},c87c:function(t,e,a){t.exports=a.p+"img/adv-think.787978f8.svg"},d03f:function(t,e,a){t.exports=a.p+"img/coop-demand.703857b8.svg"},d3c3:function(t,e,a){"use strict";var s=a("5aa1"),n=a.n(s);n.a},dfa3:function(t,e,a){},e157:function(t,e,a){},e718:function(t,e,a){t.exports=a.p+"img/green-arrow.d7fd428b.svg"},e83e:function(t,e,a){"use strict";var s=a("8182"),n=a.n(s);n.a},ee1d:function(t,e,a){t.exports=a.p+"img/coop-vector.82db7a20.svg"},eee6:function(t,e,a){t.exports=a.p+"img/coop-pass.e6a49a3a.svg"},efca:function(t,e,a){}});
//# sourceMappingURL=app.6e7136f9.js.map