// print(1132);

const burger = document.querySelector("header .burger");
const menu = document.querySelector("section.menu");
// print(burger)
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("hidden");

    //====Убираю линию прокрутки при вызове меню в десктопе===
    let state_skrollHidden = document.body.style.overflow;
    if (state_skrollHidden === 'hidden') document.body.style.overflow = "";
    else{
        document.body.style.overflow = 'hidden'
    };

})