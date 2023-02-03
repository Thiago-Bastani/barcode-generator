texto = document.getElementById("texto");
gerar = document.getElementById("gerar");
codigo_label = document.getElementById("label");
format = document.getElementById("format");

gerarFunction = () => {
  if (texto.value === "") return undefined;
  try {
    JsBarcode("#barcode", texto.value, {
      format: format.value,
      lineColor: "#000",
      width: 4,
      height: 40,
      displayValue: false,
      flat: true
    });
    codigo_label.innerHTML = texto.value;
  } catch (error) {
    alert("Erro: " + error);
  }
};

gerar.addEventListener("click", () => {
  gerarFunction();
});

format.addEventListener("change", () => {
  gerarFunction();
});

JsBarcode("#barcode", 1234, {
  format: "code128",
  lineColor: "#000",
  width: 4,
  height: 40,
  displayValue: false,
});

codigo_label.innerHTML = 1234;
