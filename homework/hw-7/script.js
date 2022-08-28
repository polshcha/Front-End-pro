let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let winter_sports = [],
    summer_sports = [],
    fruits = [];

winter_sports = sports.slice(0, 5);
summer_sports = sports.slice(5, 11);

fruits[0] = winter_sports[2];
fruits[1] = summer_sports[2];
fruits[2] = summer_sports[3];
winter_sports.splice(2, 1);
summer_sports.splice(2, 2);

console.log(`*** Winter sports ***`)
for (let i = 0; i < winter_sports.length; i++) {
    console.log(winter_sports[i].join(`: `));
}

console.log(`\n*** Summer sports ***`)
for (let i = 0; i < summer_sports.length; i++) {
    console.log(summer_sports[i].join(`: `));
}

console.log(`\n*** Fruits ***`)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].join(`: `));
}

