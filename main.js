
function cleanAndValidateInput(input) {
    if (input === null) {
        alert("You have canceled the input. Please try again.");
        return null;
    }
    input = input.trim();
    input = input.replace(/\s/g, '');
    return input;
}

function capitalize(input) {
    input =
        input.charAt(0).toUpperCase() + input.slice(1);
    return input;
}

let firstName = prompt('Pls enter your name', 'John');
firstName = cleanAndValidateInput(firstName);
firstName = capitalize(firstName);

let lastName = prompt('Pls enter your surname', 'Doe');
lastName = cleanAndValidateInput(lastName);
lastName = capitalize(lastName);

let email = prompt('Pls enter your email', 'Ex. john@gmail.com');
email = cleanAndValidateInput(email);


if (!email.includes('@')) {
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (email.indexOf('@') === 0) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.indexOf('@') === email.length - 1) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
}

let birthYear = prompt('Pls enter your birth year:');
birthYear = cleanAndValidateInput(birthYear);

let currentYear = new Date().getFullYear();
let age = currentYear - parseInt(birthYear);

let userFullInfo = document.getElementById('user-info');

let userList = document.createElement('ul');
userList.innerHTML = `
  <li>Full name: ${firstName} ${lastName}</li>
  <li>Email: ${email}</li>
  <li>Age: ${age}</li>
`;
userFullInfo.appendChild(userList);

