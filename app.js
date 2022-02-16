let burger = document.querySelector("#burger");
let head_list_container = document.querySelector(".header-list-content");
let header_text = document.querySelector(".header-text");

burger.addEventListener('click',() => {
    head_list_container.classList.toggle("list-container");
    header_text.classList.toggle("text-container");
})