const productDetails = [
  { productName: "product-one ", quantity: 12, price: 10.09 },
  { productName: "product-two ", quantity: 1, price: 29.09 },
  { productName: "product-three", quantity: 3, price: 90.0 },
  { productName: "product-four", quantity: 8, price: 49.99 },
];

function puttingData() {
  const tableBody = document.getElementById("table-body");
  if (tableBody) {

      tableBody.innerHTML = "";
      productDetails.forEach(product => {

          const tr = document.createElement("tr");
          const tdName = document.createElement("td");
          const tdQuantity = document.createElement("td");
          const tdPrice = document.createElement("td");

          tdName.textContent = product.productName;
          tdQuantity.textContent = product.quantity.toString();
          tdPrice.textContent = product.price.toFixed(2);

          tr.appendChild(tdName);
          tr.appendChild(tdQuantity);
          tr.appendChild(tdPrice);
          tableBody.appendChild(tr);
      });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  puttingData();
});









