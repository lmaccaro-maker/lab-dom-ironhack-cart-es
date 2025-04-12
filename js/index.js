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

//

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelectorAll('.product');

  for(let i=0; i<singleProduct.length; i++) updateSubtotal(singleProduct[i]);
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
  // closest();
  // remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  /*
  if(!name || isNaN(price)) {
    alert("Algo ha ido mal")
    return;
  }
  */
  //... your code goes here
  // 1º Crear el form del HTML
  // 2º Acceder a los valores del form
  // 3º creas el HTML con los valores recogidos
  // 4º Inyectas el HTML en la tabla que ya existe
  // 5º Limpias el formulario
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

