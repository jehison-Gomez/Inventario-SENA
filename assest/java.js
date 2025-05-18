const usuarios = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    id: "12345678",
    edad: 35,
    correo: "juan@correo.com",
    area: "TIC",
    rol: "Administrador",
    estado: "Activo"
  }
];

const CuerpoTabla = document.getElementById("CuerpoTabla");
const BuscarInput = document.getElementById("BuscarInput");
const FiltroRol = document.getElementById("FiltroRol");
const FiltroEstado = document.getElementById("FiltroEstado");
const Modal = document.getElementById("ModalFormulario");
const BtnGuardarUsuario = document.getElementById("BtnGuardarUsuario");
const BtnCancelar = document.getElementById("BtnCancelar");
const TituloFormulario = document.getElementById("TituloFormulario");

let modoEdicion = false;
let usuarioEditando = null;

function renderizarUsuarios() {
  CuerpoTabla.innerHTML = "";
  const textoFiltro = BuscarInput.value.toLowerCase();
  const rol = FiltroRol.value;
  const estado = FiltroEstado.value;

  usuarios
    .filter(u =>
      (u.nombre + u.correo).toLowerCase().includes(textoFiltro) &&
      (!rol || u.rol === rol) &&
      (!estado || u.estado === estado)
    )
    .forEach((usuario, index) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.id}</td>
        <td>${usuario.edad}</td>
        <td>${usuario.correo}</td>
        <td>${usuario.area}</td>
        <td>${usuario.rol}</td>
        <td class="${usuario.estado}">${usuario.estado}</td>
        <td>
          <span class="Accion Editar" onclick="editarUsuario(${index})">Editar</span>
          <span class="Accion ${usuario.estado === "Activo" ? "Desactivar" : "Activar"}" onclick="cambiarEstado(${index})">
            ${usuario.estado === "Activo" ? "Desactivar" : "Activar"}
          </span>
          <span class="Accion Eliminar" onclick="eliminarUsuario(${index})">Eliminar</span>
        </td>
      `;
      CuerpoTabla.appendChild(fila);
    });
}

document.getElementById("BtnRegistrarUsuario").addEventListener("click", () => {
  modoEdicion = false;
  limpiarFormulario();
  Modal.classList.remove("oculto");
  TituloFormulario.textContent = "Registrar Usuario";
});

BtnCancelar.addEventListener("click", () => {
  Modal.classList.add("oculto");
});

BtnGuardarUsuario.addEventListener("click", () => {
  const nuevoUsuario = {
    nombre: document.getElementById("InputNombre").value,
    apellido: document.getElementById("InputApellido").value,
    id: document.getElementById("InputIdentificacion").value,
    edad: parseInt(document.getElementById("InputEdad").value),
    correo: document.getElementById("InputCorreo").value,
    area: document.getElementById("InputArea").value,
    rol: document.getElementById("InputRol").value,
    estado: "Activo"
  };

  if (Object.values(nuevoUsuario).includes("") || isNaN(nuevoUsuario.edad)) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (modoEdicion && usuarioEditando !== null) {
    usuarios[usuarioEditando] = nuevoUsuario;
  } else {
    usuarios.push(nuevoUsuario);
  }

  renderizarUsuarios();
  Modal.classList.add("oculto");
});

function editarUsuario(index) {
  const u = usuarios[index];
  document.getElementById("InputNombre").value = u.nombre;
  document.getElementById("InputApellido").value = u.apellido;
  document.getElementById("InputIdentificacion").value = u.id;
  document.getElementById("InputEdad").value = u.edad;
  document.getElementById("InputCorreo").value = u.correo;
  document.getElementById("InputArea").value = u.area;
  document.getElementById("InputRol").value = u.rol;
  modoEdicion = true;
  usuarioEditando = index;
  Modal.classList.remove("oculto");
  TituloFormulario.textContent = "Editar Usuario";
}

function cambiarEstado(index) {
  usuarios[index].estado = usuarios[index].estado === "Activo" ? "Inactivo" : "Activo";
  renderizarUsuarios();
}

function eliminarUsuario(index) {
  if (confirm("¿Desea eliminar este usuario?")) {
    usuarios.splice(index, 1);
    renderizarUsuarios();
  }
}

function limpiarFormulario() {
  document.querySelectorAll(".FormularioRegistro input, .FormularioRegistro select").forEach(e => e.value = "");
}

BuscarInput.addEventListener("input", renderizarUsuarios);
FiltroRol.addEventListener("change", renderizarUsuarios);
FiltroEstado.addEventListener("change", renderizarUsuarios);

renderizarUsuarios();
