print = console.log;
//========Setting=========
const NUM_SHOW_CARD = 4;    //====сколько карточек будет показано
const WIDTH_CARD = 255;     //px===ширина карточки
const INTERVAL = 15+15;        //px===дистанция между карточками
const WIDTH_WINDOW = 1140; //px===ширина окна просмотра карточек

let carusels = document.querySelectorAll(".Carusel");
// window.addEventListener("resize", () => print(window.innerWidth));

//====перебор всех каруселей для их настройки=====
carusels.forEach(item => {
    buildPositionIndicator(item); //====создание индикаторов
    item.addEventListener("click", carusel_arrow_click);  //====события на кнопки навигации

    function buildPositionIndicator(carusel) {
        let num_cards = carusel
            .querySelector('.ribbon')
            .children.length;
        carusel.dataset.num_line = Math.ceil(num_cards / NUM_SHOW_CARD);
        // print(carusel.dataset.num_line)

        let box_indicators = carusel.querySelector('.indicator_nav')
        for (let i = 0; i < carusel.dataset.num_line; i++) {
            box_indicators.insertAdjacentHTML("beforeend", `<div class="shortLine"></div>`);
            if (i === 0) {
                box_indicators.firstElementChild.classList.add("active");
            }
        }
    }

    function carusel_arrow_click(event) {
        let target = event.target;
        if (!target.closest(".button")) return;
        button = target.closest(".button");
        if (button.classList.contains("button_left")) {
            scroll_ribbon(-1);
            changeIndicator(-1);
        }
        if (button.classList.contains("button_right")) {
            scroll_ribbon(1);
            changeIndicator(1);
        }

        function scroll_ribbon(scroll_ribbon) {  //== -1 или 1 (влево-вправо)
            let carusel = target.closest(".Carusel");
            let ribbon = carusel.querySelector(".ribbon");

            if (ribbon.style.left === '') ribbon.style.left = "0px";

            let current_val = +ribbon.style.left.slice(0, -2);
            let new_val = current_val + -scroll_ribbon * WIDTH_WINDOW;
            let max_val = WIDTH_WINDOW * (1 - carusel.dataset.num_line);
            let min_val = 0;

            if (new_val > min_val) new_val = max_val;
            if (new_val < max_val) new_val = min_val;

            ribbon.style.left = new_val + 'px';
            // print(ribbon.style.left);
        }

        function changeIndicator(scroll_ribbon) {//== -1 или 1 (влево-вправо)
            let carusel = target.closest(".Carusel");
            let indicator = carusel.querySelector(".indicator_nav");
            let number_point = indicator.children.length;
            for (let i = 0; i < number_point; i++) {
                let point = indicator.children[i];
                if (point.classList.contains("active")) {
                    point.classList.remove("active")

                    if (i + scroll_ribbon >= number_point) {
                        i = 0;
                        indicator.children[i].classList.add("active")
                        return;
                    }
                    if (i + scroll_ribbon < 0) {
                        i = number_point - 1;
                        indicator.children[i].classList.add("active")
                        return;
                    }
                    else{
                        indicator.children[i + scroll_ribbon].classList.add("active")
                        return
                    }
                }
            }

            print(number_point)

        }
    }
});

