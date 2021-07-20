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

export default modal;
export { openModal };
export { modalCloseFunc };