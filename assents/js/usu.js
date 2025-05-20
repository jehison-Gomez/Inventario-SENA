const permisos = {
  "Módulo Usuarios": ["Gestión De Usuarios", "Permisos Y Roles"],
  "Módulo Bodega": ["Gestión De Áreas Y Bodegas", "Gestión De Materiales"],
  "Módulo Préstamos": ["Gestión De Préstamos", "Historial De Préstamos"],
  "Módulo Reportes": ["Visualización Y Creación De Reportes"]
};

const roles = ["Administrador", "Instructor", "Pasante", "Vocero"];

function crearTabla() {
  const tbody = document.getElementById("tablaCuerpo");
  tbody.innerHTML = "";

  for (const modulo in permisos) {
    // Fila de título del módulo
    const filaModulo = document.createElement("tr");
    filaModulo.classList.add("modulo");
    const celdaModulo = document.createElement("td");
    celdaModulo.textContent = modulo;
    celdaModulo.colSpan = roles.length + 1;
    filaModulo.appendChild(celdaModulo);
    tbody.appendChild(filaModulo);

    // Filas de submódulos
    permisos[modulo].forEach(submodulo => {
      const fila = document.createElement("tr");
      const celdaSubmodulo = document.createElement("td");
      celdaSubmodulo.textContent = submodulo;
      fila.appendChild(celdaSubmodulo);

      roles.forEach(rol => {
        const celda = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.modulo = submodulo.replace(/\s+/g, '');
        checkbox.dataset.rol = rol.replace(/\s+/g, '');
        celda.appendChild(checkbox);
        fila.appendChild(celda);
      });

      tbody.appendChild(fila);
    });
  }
}

function cargarPermisos() {
  const savedPermissions = JSON.parse(localStorage.getItem("permisos")) || {};
  document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    const key = checkbox.dataset.modulo + "_" + checkbox.dataset.rol;
    checkbox.checked = savedPermissions[key] || false;
  });
}

function guardarPermisos() {
  const permissions = {};
  document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    const key = checkbox.dataset.modulo + "_" + checkbox.dataset.rol;
    permissions[key] = checkbox.checked;
  });
  localStorage.setItem("permisos", JSON.stringify(permissions));

  const msg = document.createElement("div");
  msg.textContent = " Cambios guardados correctamente";
  msg.className = "mensaje-exito";
  document.querySelector(".button-container").appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  crearTabla();
  cargarPermisos();
  document.getElementById("guardarCambios").addEventListener("click", guardarPermisos);
});