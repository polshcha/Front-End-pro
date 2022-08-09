let burgerType,
    extraCheese,
    friesSize, 
    sauceType,
    orderPrice = 0;

burgerType = prompt(`What kind of burger do you want? Input: hamburger/cheeseburger`);
if (burgerType !== null) {
    burgerType = burgerType.replaceAll(` `, ``).toLowerCase();

    if (burgerType.includes(`hamburger`)){
        orderPrice += 10;
    } else if (burgerType.includes(`cheeseburger`)) {
        orderPrice += 15;
        extraCheese = confirm(`Should we add some extra cheese in your cheeseburger? (for $5)`);
        if (extraCheese) orderPrice += 5;
    } else {
        burgerType = `hamburger`;
        orderPrice += 10;
    }
} else {
    burgerType = `hamburger`;
    orderPrice += 10;
}

friesSize = confirm(`Would you like some french fries?`);
if (friesSize) {
    friesSize = prompt(`What size of french fries you want? Input: small/regular/big`);
    if (friesSize !== null)
    {
        friesSize = friesSize.replaceAll(` `, ``).toLowerCase();
        if (friesSize.includes(`small`)) {
            orderPrice += 10;
        } else if (friesSize.includes(`regular`)) {
            orderPrice += 15;
        } else if (friesSize.includes(`big`)) {
            orderPrice += 20;
        } else {
            friesSize = `small`;
            orderPrice += 10;
        }
    } else {
        friesSize = `small`;
        orderPrice += 10;
    }
}

sauceType = confirm(`Any extra sauce for your order?`);
if (sauceType) {
    sauceType = prompt(`What kind of sauce you want? Input: ketchup or mayonnaise`);
    if (sauceType !== null)
    {
        sauceType = sauceType.replaceAll(` `, ``).toLowerCase();
        if (sauceType.includes(`ketchup`)) {
            orderPrice += 2;
        } else if (sauceType.includes(`mayonnaise`)) {
            orderPrice += 3;
        } else {
            sauceType = `ketchup`;
            orderPrice += 2;
        }
    } else {
        sauceType = `ketchup`;
        orderPrice += 2;
    }
}

document.write(`<h3>Your order:</h3>
    <ul>
		<li>Burger 🍔: ${burgerType}`,
        extraCheese ? ` with extra cheese` : ``, `</li>`,
        friesSize ? `<li>French fries 🍟: ${friesSize} </li>` : ``,
        sauceType ? `<li>Sauce 🧂: ${sauceType} </li>` : ``,
	`</ul> <br> <br> <p>PRICE:  $${orderPrice} </p>`
    );