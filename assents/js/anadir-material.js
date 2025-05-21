document.addEventListener('DOMContentLoaded', function() {
        // Elementos del DOM
        const btnAdd = document.getElementById('btnAddMaterial');
        const modal = document.getElementById('modalAddMaterial');
        const closeBtn = document.getElementById('closeModal');
        const form = document.getElementById('formAddMaterial');
        const tableBody = document.querySelector('.materiales tbody');
        
        // Abrir modal
        btnAdd.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        
        // Cerrar modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Cerrar al hacer clic fuera del modal
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Manejar el envío del formulario
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('materialName').value;
            const code = document.getElementById('materialCode').value;
            const stock = document.getElementById('materialStock').value;
            const area = document.getElementById('materialArea').value;
            const bodega = document.getElementById('materialBodega').value;
            
            // Crear nueva fila en la tabla
            const newRow = document.createElement('tr');
            newRow.className = tableBody.children.length % 2 === 0 ? 'n' : '';
            
            newRow.innerHTML = `
                <td><a href="">${name}</a></td>
                <td>${stock}</td>
                <td>${code}</td>
                <td>${area}</td>
                <td>${bodega}</td>
                <td>
                    <a href=""><i class="fa-solid fa-pen"></i></a>
                    <a href=""><i class="fa-solid fa-trash"></i></a>
                </td>
            `;
            
            tableBody.appendChild(newRow);
            
            // Limpiar formulario y cerrar modal
            form.reset();
            modal.style.display = 'none';
        });
    });