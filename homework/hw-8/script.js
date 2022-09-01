const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

let tableHeading;

function getInfo(arr, tableHeading){
	let TRs = [];
	for (let i = 0; i < arr.length; i++) {
		TRs.push(`<tr>`);
		for (let j = 0; j < 3; j++) {
			TRs.push(`<td>${arr[i][j]}</td>`);
		}
		TRs.push(`</tr>`);
	}

    return `
        <table>
            <caption>${tableHeading} info</caption>
                <tbody>
                    ${TRs.join(``)}
                </tbody>
        </table>  

		<br>
    `;
}

document.write(getInfo(animals, `Animals`));
document.write(getInfo(food, `Food`));


