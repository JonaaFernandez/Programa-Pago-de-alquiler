/* Declaracion de variables */
let fecha = document.getElementById("fecha");
let valorBruto = document.getElementById("bruto");
let montoFijo = document.getElementById("montoFijo");

let luz = document.getElementById("luz");
let gas = document.getElementById("gas");

let retributiva = document.getElementById("retributiva");
let agua = document.getElementById("agua");

let botonEnviar = document.getElementById("botonCalcular");
let valorTotal = document.getElementById("modaltotal");


/* MODAL */
let modalLuzTotal = document.getElementById("modalLuzTotal");
let modalLuzMitad = document.getElementById("modalLuzMitad");

let modalGasTotal = document.getElementById("modalGasTotal");
let modalGasOchenta = document.getElementById("modalGasOchenta");

let modalRetributiva = document.getElementById("modalRetributiva");
let modalAgua = document.getElementById("modalAgua");
let modalAguaSiete = document.getElementById("modalAguaSiete");
let modalFecha = document.getElementById("modalFecha");
let modalsumaParcialTotal = document.getElementById("modalSumaParcial");

let btnConfirmar = document.getElementById("btnConfirmar");
let divSpinner = document.getElementById("divSpinner");
let mensajeError = document.getElementById("mensajeValidacionError");
let mensajeCorrecto = document.getElementById("mensajeValidacionCorrecto");
let icono = document.getElementById("iconito");
/* SUMA PARCIAL */

montoFijo.value= 94383 ;


botonEnviar.addEventListener("click", () => {
  /* VALIDACION CAMPOS VACIOS */
  if (
    fecha.value == "" ||
    valorBruto.value == "" ||
    luz.value == "" ||
    gas.value == "" ||
    retributiva.value == "" ||
    agua.value == ""
  ) {   
    mensajeError.classList.add("d-flex");   
  }
  else{ 
    mensajeError.classList.remove("d-flex"); 
    mensajeCorrecto.classList.add("d-flex");
  }
  console.log(fecha.value);
  console.log(valorBruto.value);
  console.log(luz.value);
  console.log(gas.value);
  console.log(retributiva.value);
  console.log(agua.value);

  modalFecha.innerHTML = fecha.value;
  modalLuzTotal.innerHTML = luz.value;
  modalLuzMitad.innerHTML = luz.value / 2;
  modalGasTotal.innerHTML = gas.value;
  modalGasOchenta.innerHTML = parseInt(gas.value * 0.2);
  modalRetributiva.innerHTML = retributiva.value;
  modalAgua.innerHTML = agua.value;
  modalAguaSiete.innerHTML = parseInt(agua.value - agua.value / 7);

  /* SUMA PARCIAL */
  let sumaParcial =
    parseInt(luz.value / 2) +
    parseInt(gas.value * 0.2  ) +
    parseInt(retributiva.value) +
    parseInt(agua.value - agua.value / 7);
  modalsumaParcialTotal.innerHTML =
    parseInt(luz.value / 2) +
    parseInt(gas.value * 0.2) +
    parseInt(retributiva.value) +
    parseInt(agua.value - agua.value / 7);

  /* SUMA TOTAL */

  valorTotal.innerHTML =
    valorBruto.value +
    " - " +
    sumaParcial +
    " = " +
    (parseInt(valorBruto.value) - parseInt(sumaParcial));

  console.log(modalsumaParcialTotal.innerHTML);
  console.log(valorTotal.innerHTML);
  
});

btnConfirmar.addEventListener("click", () => {
  divSpinner.classList.toggle("d-flex");
  setTimeout(() => {
    divSpinner.classList.toggle("d-flex");
    alert("GRACIAS");
  }, 3000);

});
