//Añadir nueva área
document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('.crear');
  const modal = document.getElementById('addModal');
  const closeModal = document.getElementById('closeModal');
  const cancelButton = document.getElementById('cancelAdd');
  const confirmButton = document.getElementById('confirmAdd');
  const addForm = document.getElementById('addAreaForm');
  
  // Abrir modal al hacer clic en "Añadir"
  addButton.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('areaName').focus();
  });
  
  // Función para cerrar el modal
  function closeModalFunction() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    addForm.reset();
  }
  
  // Múltiples formas de cerrar el modal
  closeModal.addEventListener('click', closeModalFunction);
  cancelButton.addEventListener('click', closeModalFunction);
  
  // Cerrar al hacer clic fuera del contenido
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModalFunction();
    }
  });
  
  // Cerrar con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModalFunction();
    }
  });
  
  // Manejar el envío del formulario
  confirmButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Validar formulario
    if (!addForm.checkValidity()) {
      addForm.reportValidity();
      return;
    }
    
    // Obtener valores del formulario
    const areaName = document.getElementById('areaName').value;
    
    // Crear nueva fila en la tabla
    const tableBody = document.querySelector('.areas tbody');
    const newRow = document.createElement('tr');
    
    // Alternar clase para el efecto de filas alternas
    const rows = tableBody.querySelectorAll('tr');
    if (rows.length % 2 === 0) {
      newRow.classList.add('n');
    }
    
    newRow.innerHTML = `
      <td><a href="">${areaName}</a></td>
      <td>0</td> <!-- Valor por defecto para cantidad de bodegas -->
      <td>
        <a href=""><i class="fa-solid fa-pen"></i></a>
        <a href=""><i class="fa-solid fa-trash"></i></a>
      </td>
    `;
    
    // Agregar la nueva fila a la tabla
    tableBody.appendChild(newRow);
    
    // Mostrar mensaje de éxito
    alert(`Área "${areaName}" añadida correctamente.`);
    
    // Cerrar el modal
    closeModalFunction();
  });
  
  // Validación en tiempo real
  addForm.addEventListener('input', function(e) {
    if (e.target.validity.valid) {
      e.target.style.borderColor = '#ddd';
    } else {
      e.target.style.borderColor = '#e74c3c';
    }
  });
});