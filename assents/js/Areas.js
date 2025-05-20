document.addEventListener('DOMContentLoaded', function() {
// Elementos del DOM para bodegas
const btnAddBodega = document.getElementById('btnAddBodega');
const modalBodega = document.getElementById('modalAddBodega');
const closeBtnBodega = document.getElementById('closeModalBodega');
const formBodega = document.getElementById('formAddBodega');
const tableBodyBodegas = document.querySelector('.bodegas tbody');

// Abrir modal de bodegas
btnAddBodega.addEventListener('click', () => {
modalBodega.style.display = 'block';
});

// Cerrar modal de bodegas
closeBtnBodega.addEventListener('click', () => {
modalBodega.style.display = 'none';
});

// Cerrar al hacer clic fuera del modal
window.addEventListener('click', (e) => {
if (e.target === modalBodega) {
    modalBodega.style.display = 'none';
}
});

// Manejar el envío del formulario de bodegas
formBodega.addEventListener('submit', (e) => {
e.preventDefault();

// Obtener valores del formulario
const name = document.getElementById('bodegaName').value;
const ubicacion = document.getElementById('bodegaUbicacion').value;
// const area = document.getElementById('bodegaArea').value;

// Crear nueva fila en la tabla
const newRow = document.createElement('tr');
newRow.className = tableBodyBodegas.children.length % 2 === 0 ? 'n' : '';

newRow.innerHTML = `
    <td><a href="">${name}</a></td>
    <td>${ubicacion}</td>
    <td></td>
    <td>0</td>
    <td>
        <a href=""><i class="fa-solid fa-pen"></i></a>
        <a href=""><i class="fa-solid fa-trash"></i></a>
    </td>
`;

tableBodyBodegas.appendChild(newRow);

// Limpiar formulario y cerrar modal
formBodega.reset();
modalBodega.style.display = 'none';
});
});