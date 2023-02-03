texto = document.getElementById("texto");
gerar = document.getElementById("gerar");
codigo_label = document.getElementById("label");
format = document.getElementById("format");

gerarFunction = () => {
  
  if (texto.value === "") return undefined;
  JsBarcode("#barcode", texto.value, {
    format: format.value,
    lineColor: "#000",
    width: 4,
    height: 40,
    displayValue: false,
  });
  codigo_label.innerHTML = texto.value;

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
