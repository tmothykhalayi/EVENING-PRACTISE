//dom manipulation
//querying the dom
const para = document.querySelector('p');
console.log(para);

//grab all elements of a certain type
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);
});
console.log(paras);

//get element by id
const title = document.getElementById('page-title');
console.log(title);

//get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);


