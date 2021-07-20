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

export default slider;