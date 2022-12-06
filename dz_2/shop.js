const goods = [
    {
        id: 1,
        name: "T-shirt",
        description: "color: green, material: coton",
        sizes: ["M", "L", "XL", "2XL"],
        price: 1500,
        available: true,
    },
    {
        id: 2,
        name: "Dress",
        description: "color: red, material: silk",
        sizes: ["S", "M", "L"],
        price: 10000,
        available: true,
    },
    {
        id: 3,
        name: "Shoes",
        description: "color: black, material: leather",
        sizes: ["S", "M", "L"],
        price: 8000,
        available: false,
    },
    {
        id: 4,
        name: "Jeans",
        description: "color: blue, material: coton",
        sizes: ["M", "L", "XL", "2XL"],
        price: 3500,
        available: true,
    },
    {
        id: 5,
        name: "Gloves",
        description: "color: ,black, material: leather",
        sizes: ["M", "L", "XL", "2XL"],
        price: 2500,
        available: false,
    },
];

let basket = [
    
];


basket.addGood = function(goodIndex, amount) {
    this.push({
        good: goodIndex,
        amount,
    })
}

basket.removeGood = function(goodIndex, amount) {
    for(let i = 0; i < this.length; ++i) {
        if (this[i].good == goodIndex) {
            if (amount >= this[i].amount) {
                this.splice(i, 1);
                return;
            } 

            this[i].amount -= amount;
        }    
    }
}

basket.clear = function() {
    this.splice(0, this.length);
}

basket.getTotalGoods = function(goods) {
    result = {
        totalAmount: 0,
        totalSumm: 0,
    }

    for(let el of this) {
        result.totalAmount += el.amount;
        result.totalSumm += goods[el.good].price * el.amount;
    }

    return result;
}


basket.addGood(0, 5);
basket.removeGood(0, 2);
basket.addGood(1, 2);
basket.addGood(2, 3);
basket.addGood(3, 2);
basket.removeGood(3, 1);

console.log(basket)
console.log(basket.getTotalGoods(goods));
basket.clear();
console.log(basket.getTotalGoods(goods));



