const items = document.getElementById('items');
let price = 0;

function updatePrice() {
    document.querySelector('.price').innerText = `$${price}.00`;
}

function addToItems(value, num) {
    items.innerHTML += `<option value="${value}">${value}</option>`;
    price += num;
    updatePrice()
} 

function removeFromItems(input, num) {
    console.log(input)
    for (let i = 0; i < items.children.length; i++) {
        if (items.children[i].value === input) {
            items.children[i].remove()
            i = items.children.length;
        }
    }
    price -= num;
    updatePrice()
}

document.getElementById('threeplus').onclick = function(){
    addToItems('3 Piece Fried Chicken', 10)
};

document.getElementById('fiveplus').onclick = function(){
    addToItems('5 Piece Fried Chicken', 12)
};

document.getElementById('famplus').onclick = function(){
    addToItems('25 Piece Family Meal', 30)
};

document.getElementById('fryplus').onclick = function(){
    addToItems('Fries', 5)
};

document.getElementById('onionplus').onclick = function(){
    addToItems('Onion Rings', 7);
};

document.getElementById('macplus').onclick = function(){
    addToItems('Mac & Cheese', 5);
};

document.getElementById('threeminus').onclick = function(){
    removeFromItems('3 Piece Fried Chicken', 10);
};

document.getElementById('fiveminus').onclick = function(){
    removeFromItems('5 Piece Fried Chicken', 12);
};

document.getElementById('famminus').onclick = function(){
    removeFromItems('25 Piece Family Meal', 30)
};

document.getElementById('fryminus').onclick = function(){
    removeFromItems('Fries', 5)
};

document.getElementById('onionminus').onclick = function(){
    removeFromItems('Onion Rings');
};

document.getElementById('macminus').onclick = function(){
    removeFromItems('Mac & Cheese', 7);
};