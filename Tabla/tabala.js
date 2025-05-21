function asignarEventosFila(fila) {
  const editarBtn = fila.querySelector('.editar-btn');
  const eliminarBtn = fila.querySelector('.eliminar-btn');

  editarBtn.addEventListener('click', () => {
    const celdas = fila.querySelectorAll('td');
    const [nombreCell, codigoCell, caracteristicasCell, disponibilidadCell, areaCell] = celdas;

    const nuevoNombre = prompt('Editar nombre del producto:', nombreCell.textContent);
    const nuevoCodigo = prompt('Editar código:', codigoCell.textContent);
    const nuevasCaracteristicas = prompt('Editar características:', caracteristicasCell.textContent);
    const nuevaDisponibilidad = prompt('Editar disponibilidad:', disponibilidadCell.textContent);
    const nuevaArea = prompt('Editar área:', areaCell.textContent);

    if (nuevoNombre && nuevoCodigo && nuevasCaracteristicas && nuevaDisponibilidad && nuevaArea) {
      nombreCell.textContent = nuevoNombre;
      codigoCell.textContent = nuevoCodigo;
      caracteristicasCell.textContent = nuevasCaracteristicas;
      disponibilidadCell.textContent = nuevaDisponibilidad;
      areaCell.textContent = nuevaArea;

      fila.querySelector('.solicitar').setAttribute('data-producto', nuevoNombre);
      editarBtn.setAttribute('data-producto', nuevoNombre);
      eliminarBtn.setAttribute('data-producto', nuevoNombre);
    } else {
      alert('Todos los campos deben completarse para editar.');
    }
  });

  eliminarBtn.addEventListener('click', () => {
    const nombre = fila.querySelector('td').textContent;
    if (confirm(`¿Eliminar el producto "${nombre}"?`)) {
      fila.remove();
    }
  });
}

document.getElementById('btnSolicitar').addEventListener('click', () => {
  const seleccionados = document.querySelectorAll('.solicitar:checked');
  if (seleccionados.length > 0) {
    const productos = Array.from(seleccionados).map(chk =>
      chk.closest('tr').querySelector('td').textContent
    );
    alert('Productos solicitados: ' + productos.join(', '));
  } else {
    alert('No has seleccionado ningún producto.');
  }
});

document.getElementById('btnAgregar').addEventListener('click', () => {
  const nombre = prompt('Nombre del producto:');
  const codigo = prompt('Código:');
  const caracteristicas = prompt('Características:');
  const disponibilidad = prompt('Disponibilidad:');
  const area = prompt('Área:');

  if (nombre && codigo && caracteristicas && disponibilidad && area) {
    const table = document.querySelector('table tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
      <td>${nombre}</td>
      <td>${codigo}</td>
      <td>${caracteristicas}</td>
      <td>${disponibilidad}</td>
      <td>${area}</td>
      <td>
        <input type="checkbox" class="solicitar" data-producto="${nombre}" />
        <button class="editar-btn" data-producto="${nombre}">Editar</button>
        <button class="eliminar-btn" data-producto="${nombre}">Eliminar</button>
      </td>
    `;

    table.appendChild(newRow);
    asignarEventosFila(newRow);
  } else {
    alert('Todos los campos son obligatorios para agregar el producto.');
  }
});

document.querySelectorAll('table tbody tr').forEach(fila => {
  asignarEventosFila(fila);
});
