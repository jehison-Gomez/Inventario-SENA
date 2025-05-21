
  
  document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".add-area");
    const deleteButton = document.querySelector(".delete-area");
    const areasContainer = document.querySelector(".areas");

    let selectedCard = null;

    // Hacer clic en una tarjeta la selecciona o deselecciona
    areasContainer.addEventListener("click", (e) => {
      const card = e.target.closest(".area-card");
      if (card) {
        // Deseleccionar la anterior
        if (selectedCard) {
          selectedCard.classList.remove("selected");
        }

        // Si haces clic en la misma, deselecciona
        if (selectedCard === card) {
          selectedCard = null;
        } else {
          selectedCard = card;
          card.classList.add("selected");
        }
      }
    });

    // Añadir nueva área
    addButton.addEventListener("click", () => {
      const areaName = prompt("Ingrese el nombre del área:");
      const cantidad = prompt("Ingrese la cantidad de productos:");
      const fuera = prompt("Ingrese la cantidad de productos fuera del área:");

      if (areaName && cantidad && fuera) {
        const newArea = document.createElement("a");
        newArea.href = "#";
        newArea.className = "area-link";
        newArea.innerHTML = `
          <div class="area-card">
            <div class="area-header">${areaName}</div>
            <div class="area-content">
              <p>Cantidad de productos: ${cantidad}</p>
              <p>Productos fuera del área: ${fuera}</p>
            </div>
          </div>
        `;
        areasContainer.appendChild(newArea);
      } else {
        alert("Todos los campos son obligatorios.");
      }
    });

    // Eliminar área seleccionada
    deleteButton.addEventListener("click", () => {
      if (selectedCard) {
        const areaLink = selectedCard.closest(".area-link");
        areaLink.remove();
        selectedCard = null;
      } else {
        alert("Por favor, selecciona un área para eliminar.");
      }
    });
  });

