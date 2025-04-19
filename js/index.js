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

// ITERATION 3
  
  const totalElement = document.querySelector('#total-value');
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

 window.addEventListener('load', () => {
  // Obtén todos los botones "Eliminar"
  const removeButtons = document.querySelectorAll('.btn-remove');

  // Añadir un event listener a cada botón de eliminación
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  // Calcula precios (asegúrate de que esta parte también está en tu listener de carga)
  document.getElementById('calculate').addEventListener('click', calculateAll);
});

function removeProduct(event) {
  // Obtén el botón que fue clicado
  const target = event.currentTarget;
  
  // Accede a la fila del producto desde el botón y remuévelo
  const productRow = target.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);
  
  // Calcula todos los precios nuevamente
  calculateAll();
}



// ITERATION 5 CREAR PRODUCTO NUEVO
//.

  //... your code goes here
  // 1º Crear el form del HTML
  // 2º Acceder a los valores del form
  // 3º creas el HTML con los valores recogidos
  // 4º Inyectas el HTML en la tabla que ya existe
  // 5º Limpias el formulario

  function createProduct() {
    // 2º Acceder a los valores del form
    const productNameInput = document.querySelector('.create-product input[type="text"]');
    const productPriceInput = document.querySelector('.create-product input[type="number"]');
  
    const name = productNameInput.value;
    const price = Number(productPriceInput.value).toFixed(2);
  
    // Validación de entrada de usuario
    if (!name || isNaN(price) || price <= 0) {
      alert("Algo ha ido mal. Por favor, proporciona un nombre de producto válido y un precio mayor que 0.");
      return;
    }
  
    // 3º Crear el HTML con los valores recogidos
    const newRow = document.createElement('tr');
    newRow.className = 'product';
    newRow.innerHTML = `
      <td class="name"><span>${name}</span></td>
      <td class="price">$<span>${price}</span></td>
      <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action"><button class="btn btn-remove">Remove</button></td>
    `;
  
    // 4º Inyectas el HTML en la tabla que ya existe
    const tbody = document.querySelector('tbody');
    tbody.appendChild(newRow);
    
    // Asegúrate de que el nuevo botón "Remove" funcione
    const newRemoveButton = newRow.querySelector('.btn-remove');
    newRemoveButton.addEventListener('click', removeProduct);
  
    // 5º Limpias el formulario
    productNameInput.value = '';
    productPriceInput.value = '';
  }