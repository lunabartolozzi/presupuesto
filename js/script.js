const precios = [100, 200, 300, 400, 500, 600, 700];

const presupuesto = {
  precioTotal: 0,
};

function obtenerPresupuesto() {
  var nombreProyecto = prompt('Ingrese el nombre de su proyecto');
  alert('Gracias por el pedido para ' + nombreProyecto);

  var checkboxes = document.getElementsByName('checkbox');
  var posicion = 0;
  for (var checkbox of checkboxes) {
    if (checkbox.checked) {
      presupuesto.precioTotal = presupuesto.precioTotal + precios[posicion];
    }
    posicion++;
  }
  document.getElementById('precio').innerHTML = presupuesto.precioTotal;
}
