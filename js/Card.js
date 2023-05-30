'use strict'

print = console.log;
let cards_productName = document.querySelectorAll('.Card_product .product_name')
let cards = document.querySelectorAll('.Card_product')

cut_text(cards_productName, 50);
addEvents(cards);


function cut_text(target, number_of_characters) {
    target.forEach(item => {
        if (item.innerText.length > number_of_characters + 3)
            item.innerText = item.innerText.slice(0, number_of_characters) + '...';
    })
}

function addEvents(elements) {
    elements.forEach(item=>{
        item.addEventListener("click", addInComparison);
        item.addEventListener("click", addInBasket);
    })

    function addInComparison(event){
        let target = event.target;
        if (!target.closest(".comparison"))return;
        target = target.closest(".comparison");
        target.classList.toggle("active");
    }
    function addInBasket(event){
        let target = event.target;
        if (!target.closest(".basket"))return;
        target = target.closest(".basket");
        target.classList.toggle("active");
    }

}