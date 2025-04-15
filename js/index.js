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



// ITERATION 2 

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let totalValue = 0;

  products.forEach(product => {
    totalValue += updateSubtotal(product); // Utiliza el subtotal retornado de `updateSubtotal`
  });

  // Actualiza el total en el DOM
  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = totalValue.toFixed(2); // Muestra el total con dos decimales
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', function() {
    calculateAll();
  });
});


// ITERATION 4
//.function removeProduct(event) {
// const target = event.currentTarget;
// console.log('The target in remove is:', target);
  //... your code goes here
  // closest();
  // remove();
  // calculateAll();
 // }



// ITERATION
// 
// function createProduct() {
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

