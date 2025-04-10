// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

// Obtener el precio del producto
const price = parseFloat(product.querySelector('.price span').innerText);

// Obtener el valor de cantidad
const quantity = product.querySelector('.quantity input').valueAsNumber;

// Calcular subtotal
const subtotal = price * quantity;

// Establecer el subtotal resultante en el DOM
product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);

}

// Selecciona el elemento del producto fuera de la función
const productElement = document.querySelector('.product');

// Llama a la función una vez para probarlo
updateSubtotal(productElement);

// Añadir un event listener para el input de cantidad
const quantityInput = productElement.querySelector('.quantity input');
quantityInput.addEventListener('change', () => updateSubtotal(productElement));



//

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
