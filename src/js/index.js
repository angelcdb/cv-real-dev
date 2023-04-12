(() => {
  const button = document.querySelector("#pdf");
  const resumeHtml = document.querySelector("body");

  function generadorPDF() {
    html2pdf().from(resumeHtml).save();
  }

  //Cuando el boton sea precionado descargar documento
  button.addEventListener("click", async () => {
    //quitar pdf
    button.style.display = "none";
    await generadorPDF();
    //regresar el icono PDF
    button.style.display = "block";
  });
})();
