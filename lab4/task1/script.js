'use strict';
const main = document.querySelector('main');
const body =document.querySelector('body')
const color = ['#e03131', '#c2255c', '#9c36b5'
    , '#6741d9', '#3b5bdb', '#1971c2', '#0c8599', '#63e6be']

color.forEach(color => {
    const e = document.createElement('button');
    e.setAttribute('data-button-color', color);
    e.textContent = `EXT_color_buffer_float ${color}`;
    e.style.background = color;
    e.classList.add('btn');
    main.insertAdjacentElement('beforeend',e);
})
body.addEventListener('click', function (e){
    const eTarget = e.target;
    if(eTarget.classList.contains('btn')) this.style.backgroundColor = eTarget.dataset.buttonColor;
})