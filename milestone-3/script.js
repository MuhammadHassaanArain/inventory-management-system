var productDetails = [
    { productName: "product-one ", quantity: 12, price: 10.09 },
    { productName: "product-two ", quantity: 1, price: 29.09 },
    { productName: "product-three", quantity: 3, price: 90.0 },
    { productName: "product-four", quantity: 8, price: 49.99 },
];
function puttingData() {
    var tableBody = document.getElementById("table-body");
    if (tableBody) {
        tableBody.innerHTML = "";
        productDetails.forEach(function (product) {
            var tr = document.createElement("tr");
            var tdName = document.createElement("td");
            var tdQuantity = document.createElement("td");
            var tdPrice = document.createElement("td");
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
document.addEventListener('DOMContentLoaded', function () {
    puttingData();
});
