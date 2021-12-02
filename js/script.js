'use strict';
import * as data from './data.js';
import * as dom from './domElements.js';

// Functions
const renderVegetables = function () {
  const vegetables = data.vegetables;
  dom.productContent.innerHTML = '';
  dom.vegetable.classList.toggle('active');

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
    dom.productContent.insertAdjacentHTML('afterbegin', html);
  });
};

const renderJuice = function () {
  dom.juice.classList.toggle('active');
  dom.vegetable.classList.remove('active');

  const juices = data.juice;
  dom.productContent.innerHTML = '';

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

    dom.productContent.insertAdjacentHTML('afterbegin', html);
  });
};

// Event listeners
dom.vegetable.addEventListener('click', renderVegetables);
dom.juice.addEventListener('click', renderJuice);
window.addEventListener('load', renderVegetables);
