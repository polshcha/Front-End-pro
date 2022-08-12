let userName,
    userSurname,
    userEmail,
    userBirth,
    date,
    userAge;

userName = prompt(`What's your name?:`);
while (!userName){
    userName = prompt(`Please, input your name!`);
}
userName = userName.trim();

userSurname = prompt(`What's your surname?:`);
while (!userSurname){
    userSurname = prompt(`Please, input your surname!`);
}
userSurname = userSurname.trim();

userEmail = prompt(`Your email:`);
while (!userEmail || !userEmail.includes(`@`) || userEmail.startsWith(`@`) || userEmail.startsWith(`@`)){
    userEmail = prompt(`Try again! Your email:`);
}
userEmail = userEmail.toLocaleLowerCase().replaceAll(` `, ``)

userBirth = +prompt(`Please, input your birth year:`);
while (!userBirth){
    userBirth = +prompt(`Please, input your birth year!`);
}

date = new Date;
date = date.getFullYear();
userAge = date - userBirth;

document.write(`
<ul>
    <li>Full name: ${userName} ${userSurname}</li>
    <li>Email: ${userEmail}</li>
    <li>Age: ${userAge}</li>
</ul>`);