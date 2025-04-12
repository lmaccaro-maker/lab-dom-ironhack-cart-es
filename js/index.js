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

  return subtotal;
}

//document.getElementById('calculate').addEventListener('click', () => {
//  alert('Calculate Prices clicked!'); // Muestra la alerta
// calculateAll(); // Llama a calculateAll para procesar los cálculos
//});


// ITERATION 2
//... your code goes here

function calculateAll() {

  const singleProduct = document.querySelectorAll('.product');

  for (let i = 0; i < singleProduct.length; i++) updateSubtotal(singleProduct[i]);


  const products = document.querySelectorAll('.product');

  Array.from(products), array.forEach((product) => {

    updateSubtotal(products);

  });


  // ITERATION 3

  let totalvalue = 0;
  Array.from(products), array.forEach((product) => {
    const subtotalElement = singleProduct.querySelector('.subtotal span');
    const subtotal = parseFloat(subtotalElement.innerText);
    totalvalue += subtotal;
  });

  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = total.toFixed(2);

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

