/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    let calculatingResult = document.querySelector(".calculating__result span"),
        sex, height, weight, age, ratio;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    } else {
        sex = "female";
        sex = localStorage.setItem("sex", "female");
    }

    if (localStorage.getItem("ratio")) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        ratio = localStorage.setItem("ratio", 1.375);
    }



    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            calculatingResult.textContent = "нехватает данных";
            return;
        }
        if (ratio === female) {
            calculatingResult.textContent = ((447.6 + (9, 2 * weight) + (3.1 * height) - (4.3 * age)) * ratio).toFixed(0);
        } else {
            calculatingResult.textContent = ((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio).toFixed(0);
        }
    }

    calcTotal();

    function getStaticInf(Selector, activeElement) {
        let element = document.querySelectorAll(`${Selector} `);

        element.forEach(i => {
            i.addEventListener("click", (e) => {
                if (e.target.getAttribute("data-ratio")) {
                    ratio = e.target.getAttribute("data-ratio");
                    localStorage.setItem("ratio", e.target.getAttribute("data-ratio"));
                    calcTotal();
                } else {
                    sex = e.target.getAttribute("id");
                    localStorage.setItem("sex", e.target.getAttribute("id"));
                    calcTotal();
                }
                element.forEach((i) => {
                    i.classList.remove(activeElement);
                });
                e.target.classList.add(activeElement);
            });
        });
        calcTotal();
    }

    function getStaticInfFromLocal(Selector, activeElement) {
        let element = document.querySelectorAll(`${Selector}`);

        element.forEach(i => {
            i.classList.remove(activeElement);
            if (i.getAttribute("id") === localStorage.getItem("sex")) {
                i.classList.add(activeElement);
            }
            if (i.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
                i.classList.add(activeElement);
            }
        });
    }

    function getDymnamicInf(parentSelector) {
        let element = document.querySelectorAll(`${parentSelector} input`);

        document.querySelector(parentSelector).addEventListener("input", (e) => {
            switch (e.target.getAttribute("id")) {
                case "height":
                    height = +document.getElementById("height").value;
                    console.log(height);
                    break;
                case "weight":
                    weight = +document.getElementById("weight").value;
                    console.log(weight);
                    break;
                case "age":
                    age = +document.getElementById("age").value;
                    console.log(age);
                    break;
            }
            if (e.target.value.match(/\D/g)) {
                e.target.style.border = "1px solid red";
            } else {
                e.target.style.border = "none";
            }
            calcTotal();
        });

    }
    getStaticInf("#gender div", "calculating__choose-item_active");
    getStaticInf(".calculating__choose_big div", "calculating__choose-item_active");
    getDymnamicInf(".calculating__choose_medium");
    getStaticInfFromLocal("#gender div", "calculating__choose-item_active");
    getStaticInfFromLocal(".calculating__choose_big div", "calculating__choose-item_active");
    console.log(sex, height, weight, age, ratio);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
    class Menufiller {
        constructor(title, desk, price, src, alt, parentSelector, ...classes) {
            this.title = title;
            this.desk = desk;
            this.price = price;
            this.src = src;
            this.classes = classes;
            this.alt = alt;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 28;
            this.changeToUan();

        }

        changeToUan() {
            this.price = this.price * this.transfer;
        }


        render() {
            let element = document.createElement("div");

            if (this.classes.length === 0) {
                element.classList.add("menu__item");
            } else {
                this.classes.forEach((value) => {
                    element.classList.add(value);
                });
            }

            this.classes.forEach((value) => {
                element.classList.add(value);
            });
            element.innerHTML = ` 
          
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.desk}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
          `;

            this.parent.append(element);

        }

    }

    axios.get("http://localhost:3000/menu")
        .then(data => {
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new Menufiller(title, descr, price, img, altimg, ".menu .container").render();
            });
        });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
    const form = document.querySelectorAll(formSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    form.forEach(item => {
        bindPostData(item);
    });



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            let json = JSON.stringify(Object.fromEntries(formData.entries()));

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal", modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.modalCloseFunc)(".modal");
        }, 4000);
    }
    fetch("058db.json").
    then(data => data.json()).
    then(res => console.log(res)).
    catch(() => { console.log("Mistake"); });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "modalCloseFunc": () => (/* binding */ modalCloseFunc)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
    let modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide");
    document.body.style.overflow = "hidden";
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modalCloseFunc(modalSelector) {
    let modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('hide');
    modalWindow.classList.remove("show");
    document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    let modals = document.querySelectorAll(triggerSelector),
        modalWindow = document.querySelector(modalSelector);

    modals.forEach((item) => {
        item.addEventListener("click", () => openModal(modalSelector, modalTimerId));
    });

    modalWindow.addEventListener("click", (event) => {
        if (event.target === modalWindow || event.target.getAttribute("data-modalclose") == "") {
            modalCloseFunc(modalSelector);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.code == "Escape" && modalWindow.classList.contains("show")) {
            modalCloseFunc(modalSelector);
        }
    });



    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);


    //back-end interaction
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({ container, nextArrow, prevArrow, slide, totalCounter, currentCounter, wrapper, field }) {
    let slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        current = document.querySelector(currentCounter),
        total = document.querySelector(totalCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0,
        dots = [];

    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";
    slidesWrapper.style.overflow = "hidden";
    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach((item) => {
        item.style.width = width;
    });
    total.textContent = slides.length;

    slider.style.position = "relative";

    let indicators = document.createElement("ol");
    indicators.classList.add("carousel-indicators");
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.classList.add("dot");
        indicators.append(dot);
        dots.push(dot);
        if (i === 0) {
            dot.style.opacity = "1";
        }
    }

    next.addEventListener("click", () => {
        if (offset == wC(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += wC(width);
        }
        slidesField.style.transform = `translateX(${-offset}px)`;
        if (slideIndex == slides.length) {
            slideIndex = 1;
            current.textContent = slideIndex;

        } else {
            slideIndex++;

            current.textContent = slideIndex;
        }
        dotsforEach();
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = wC(width) * (slides.length - 1);
        } else {
            offset -= wC(width);
        }
        slidesField.style.transform = `translateX(${-offset}px)`;
        if (slideIndex == 1) {
            slideIndex = slides.length;
            current.textContent = slideIndex;
        } else {
            slideIndex--;
            current.textContent = slideIndex;
        }
        dotsforEach();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            let slideTo = e.target.getAttribute("data-slide-to");
            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideIndex - 1);
            slidesField.style.transform = `translateX(${-offset}px)`;
            dotsforEach();
            current.textContent = slideIndex;
        });
    });

    function dotsforEach() {
        dots.forEach(dot => {
            dot.style.opacity = ".5";
            dots[slideIndex - 1].style.opacity = "1";
        });
    }

    function wC(w) {
        return +w.replace(/\D/g, "");
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    var tabsParent = document.querySelectorAll(tabsSelector)[0],
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabs = document.querySelectorAll(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show");
        });
    }

    tabs.forEach(item => {
        item.classList.remove(activeClass);
    });

    function showTabContent(index = 0) {
        tabsContent[index].classList.add("show", "fade");
        tabsContent[index].classList.remove("hide");
        tabs[index].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {

    function date(endline) {
        let t = Date.parse(endline) - Date.parse(new Date()),
            sec = Math.floor(t / 1000) % 60,
            min = Math.floor(t / 1000 / 60) % 60,
            hour = Math.floor(t / 1000 / 60 / 60) % 24,
            day = Math.floor(t / 1000 / 60 / 60 / 24);

        if (sec < 10) {
            sec = "0" + Math.floor(t / 1000) % 60;
        } else if (min < 10) {
            min = "0" + Math.floor(t / 1000 / 60) % 60;
        } else if (hours < 10) {
            hour = Math.floor(t / 1000 / 60 / 60);
        }

        return {
            "total": t,
            "seconds1": sec,
            "min": min,
            "hours": hour,
            "day": day
        };
    }

    function interval(selector, endline) {

        let timerInt = setInterval(clock, 1000);

        function clock() {
            let timer = document.querySelector(selector),
                days = document.querySelector("#days"),
                hours = document.querySelector("#hours"),
                minutes = document.querySelector("#minutes"),
                seconds = document.querySelector("#seconds");

            let t = date(endline);
            days.textContent = t.day;
            hours.textContent = t.hours;
            minutes.textContent = t.min;
            seconds.textContent = t.seconds1;

            if (t.total <= 0) {
                mins.textContent = "00";
                hours.textContent = "00";
                seconds.textContent = "00";
                clearInterval(timeInt);
            }
        }
    }

    date(deadline);
    interval(id, deadline);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
let postData = async(url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

let getResource = async(url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url} , status ${res.status}`);
    }

    return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");









window.addEventListener("DOMContentLoaded", () => {

    let modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(".modal", modalTimerId), 100000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)(".tabheader__items", ".tabcontent", ".tabheader__item", "tabheader__item_active");
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)("[data-modal]", ".modal", modalTimerId);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.default)(".timer", "2021-06-30");
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__.default)();
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__.default)("form", modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.default)({
        container: ".offer__slider",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        slide: ".offer__slide",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
    });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map