let count = 0;
let total = 0;

function addToCart(price) {
    count++;
    total += price;

    document.getElementById("cart-count").innerText = count;
    document.getElementById("total").innerText = total;

    let item = document.createElement("li");
    item.innerText = "Item ₹" + price;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.onclick = function () {
        count--;
        total -= price;

        document.getElementById("cart-count").innerText = count;
        document.getElementById("total").innerText = total;

        item.remove();
    };

    item.appendChild(btn);
    document.getElementById("cart-items").appendChild(item);
}