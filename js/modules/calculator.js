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

export default calc;