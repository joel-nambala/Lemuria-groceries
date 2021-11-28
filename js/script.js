'use strict';
import * as data from './data.js';

const vegetable = document.querySelector('.vegetables');
const fruit = document.querySelector('.fruits');
const juice = document.querySelector('.juice');
const meat = document.querySelector('.meat');
const productContent = document.querySelector('.products-content');

// Functions
const renderVegetables = function () {
  const vegetables = data.vegetables;
  productContent.innerHTML = '';
  vegetable.classList.toggle('active');

  vegetables.forEach(item => {
    const html = `
      <div class="product-card">
        <img src="${item.img}" alt="" />
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p>Price ksh ${item.price}</p>
      </div>
    `;

    // productContent.innerHTML = '';
    productContent.insertAdjacentHTML('afterbegin', html);
  });
};

const renderJuice = function () {
  juice.classList.toggle('active');
  vegetable.classList.remove('active');

  const juices = data.juice;
  productContent.innerHTML = '';

  juices.forEach(item => {
    console.log(item);
    const html = `
      <div class="product-card">
        <img src="${item.img}" alt="" />
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p>Price ksh ${item.price}</p>
      </div>
    `;

    productContent.insertAdjacentHTML('afterbegin', html);
  });
};

// Event listeners
vegetable.addEventListener('click', renderVegetables);
juice.addEventListener('click', renderJuice);
window.addEventListener('load', renderVegetables);
