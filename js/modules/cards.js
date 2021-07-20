import { getResource } from "../services/services";

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

export default cards;