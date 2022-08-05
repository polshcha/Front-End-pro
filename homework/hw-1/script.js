    let currentDay = new Date().getDate(),
    currentMonth = new Date().getMonth(),
    currentYear = new Date().getFullYear();
    currentMonth++;

    let captionString = `Food prices ≠ ${currentDay}.${currentMonth}.${currentYear}: \n\n`;
    captionString = captionString.replaceAll(`≠`, `–`);
    
    let apple = `🍎`,
    applePrice = 10,
    appleCount = 3,
    appleSalePercent = 7,
    appleFinalPrice = applePrice*((100-appleSalePercent)/100)*appleCount,
    // i'm not very good at Math so i hope this formula gonna work

    orange = `🍊`,
    orangePrice = 12,
    orangeCount = 2,
    orangeSalePercent = 3,
    orangeFinalPrice = orangePrice*((100-orangeSalePercent)/100)*orangeCount,


    kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = 10,
    kiwiCountryPercent = 10,
    kiwiFinalPrice = kiwiPrice*((100+kiwiCountryPercent)/100)*kiwiCount;

    
    appleFinalPrice = appleFinalPrice.toFixed(2);
    orangeFinalPrice = orangeFinalPrice.toFixed(2);
    kiwiFinalPrice = kiwiFinalPrice.toFixed(2);
    // we need only 2 numbers after komma (as all stores do when they count price) so we are using toFixed(2)

    appleFinalPrice = Number(appleFinalPrice);
    orangeFinalPrice = Number(orangeFinalPrice);
    kiwiFinalPrice = Number(kiwiFinalPrice);
    // we also have to remember that converting to number type is required for + operations

    let finalPriceAll = appleFinalPrice + orangeFinalPrice + kiwiFinalPrice;

    console.log(captionString);
    console.log(`Final price for ${apple} is ${appleFinalPrice} UAN \n`);
    console.log(`Final price for ${orange} is ${orangeFinalPrice} UAN \n`);
    console.log(`Final price for ${kiwi} is ${kiwiFinalPrice} UAN \n\n`);
    console.log(`The final price for all fruits is ${finalPriceAll} UAN`);


