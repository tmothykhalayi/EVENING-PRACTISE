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

