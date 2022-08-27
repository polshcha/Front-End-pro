let hero = ['Ivan'],
    native = ['York', 'Of'],
    destination = ['Poltava','In'],
    rainbow = [],
    rainbowCopy = [],
    rainbowColor;

rainbow = rainbow.concat(hero, native, destination);
rainbow.reverse();

for (let i = 0; i < rainbow.length; i++) {
    switch(rainbow[i]){
        case `Richard`:
            rainbowCopy.push(rainbow[i]);
            break;
        case `Of`:
            rainbowCopy.push(rainbow[i]);
            break;
        case `York`:
            rainbowCopy.push(rainbow[i]);
            break;
        case `Gave`:
            rainbowCopy.push(rainbow[i]);
            break;
        case `Battle`:
            rainbowCopy.push(rainbow[i]);
            break;
        case `In`:
            rainbowCopy.push(rainbow[i]);
            break;
        case `Vain`:
            rainbowCopy.push(rainbow[i]);
            break;
    }
    
}

rainbow.length = rainbowCopy.length;
for (let i = 0; i < rainbow.length; i++) {
    rainbow[i] = rainbowCopy[i];
}

let proverbLenght = 7;
if (rainbow.length < proverbLenght){
    let temp = proverbLenght-rainbow.length;

    for (let i = 0; i < temp; i++) {
        rainbow.push(` `);
    }
}

if (rainbow.indexOf(`Richard`) == -1) {
    rainbow.unshift(`Richard`);
    rainbow.pop();
} else if (rainbow.indexOf(`Richard`) !== -1) {
    let tempID = rainbow.indexOf(`Richard`);
    let tempWord = rainbow[0];
    rainbow[0] = `Richard`;
    rainbow[tempID]  = tempWord;
}

if (rainbow.indexOf(`Of`) == -1) {
    rainbow.splice(1, 0, `Of`);
    rainbow.pop();
} else if (rainbow.indexOf(`Of`) !== -1) {
    let tempID = rainbow.indexOf(`Of`);
    let tempWord = rainbow[1];
    rainbow[1] = `Of`;
    rainbow[tempID]  = tempWord;
}

if (rainbow.indexOf(`York`) == -1) {
    rainbow.splice(2, 0, `York`);
    rainbow.pop();
} else if (rainbow.indexOf(`York`) !== -1) {
    let tempID = rainbow.indexOf(`York`);
    let tempWord = rainbow[2];
    rainbow[2] = `York`;
    rainbow[tempID]  = tempWord;
}

if (rainbow.indexOf(`Gave`) == -1) {
    rainbow.splice(3, 0, `Gave`);
    rainbow.pop();
} else if (rainbow.indexOf(`Gave`) !== -1) {
    let tempID = rainbow.indexOf(`Gave`);
    let tempWord = rainbow[3];
    rainbow[3] = `Gave`;
    rainbow[tempID]  = tempWord;
}

if (rainbow.indexOf(`Battle`) == -1) {
    rainbow.splice(4, 0, `Battle`);
    rainbow.pop();
} else if (rainbow.indexOf(`Battle`) !== -1) {
    let tempID = rainbow.indexOf(`Battle`);
    let tempWord = rainbow[4];
    rainbow[4] = `Battle`;
    rainbow[tempID]  = tempWord;
}

if (rainbow.indexOf(`In`) == -1) {
    rainbow.splice(5, 0, `In`);
    rainbow.pop();
} else if (rainbow.indexOf(`In`) !== -1) {
    let tempID = rainbow.indexOf(`In`);
    let tempWord = rainbow[5];
    rainbow[5] = `In`;
    rainbow[tempID]  = tempWord;
}

if (rainbow.indexOf(`Vain`) == -1) {
    rainbow.splice(6, 0, `Vain`);
    rainbow.pop();
} else if (rainbow.indexOf(`Vain`) !== -1) {
    let tempID = rainbow.indexOf(`Vain`);
    let tempWord = rainbow[6];
    rainbow[6] = `Vain`;
    rainbow[tempID]  = tempWord;
}

document.write(`<div style="display: flex;">`);

for (let i = 0; i < rainbow.length; i++) {
    switch (rainbow[i]) {
        case `Richard`:
            rainbowColor = `red`;
            break;
        case `Of`:
            rainbowColor = `orange`;
            break;
        case `York`:
            rainbowColor = `yellow`;
            break;
        case `Gave`:
            rainbowColor = `green`;
            break;
        case `Battle`:
            rainbowColor = `blue`;
            break;
        case `In`:
            rainbowColor = `indigo`;
            break;
        case `Vain`:
            rainbowColor = `violet`;
            break;    
    }

    document.write(`<div>
        <span style="margin-left: 20px;">${rainbow[i]}</span>
        <div style="background: ${rainbowColor}; width: 40px; height: 40px; border-radius: 50%; margin-left: 17px;"></div>
    </div>`);
}

document.write(`</div>`);
    
