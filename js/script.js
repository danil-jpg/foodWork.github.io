import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calculator from "./modules/calculator";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {

    let modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 100000);

    tabs(".tabheader__items", ".tabcontent", ".tabheader__item", "tabheader__item_active");
    modal("[data-modal]", ".modal", modalTimerId);
    timer(".timer", "2021-06-30");
    cards();
    calculator();
    forms("form", modalTimerId);
    slider({
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