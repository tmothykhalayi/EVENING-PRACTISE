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


//get elements by tagname
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
//changing text content of an element
const para = document.querySelector('p');   
console.log(para.innerText);
//changing text content of an element
para.innerText = 'Devs are awesome!';
//changing text content of an element
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});
//changing html content of an element
const content = document.querySelector('.content');
console.log(content.innerHTML);
//changing html content of an element
content.innerHTML += '<h2>This is a new h2</h2>';
//changing html content of an element
const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
//changing attributes of an element
const link = document.querySelector('a');
console.log(link.getAttribute('href')); 
//changing attributes of an element
link.setAttribute('href', 'https://www.thenetninja.co.uk');
//changing attributes of an element
link.innerText = 'The Net Ninja Website';
//changing attributes of an element     
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
//changing attributes of an element
mssg.setAttribute('class', 'success');
//changing attributes of an element
//changing attributes of an element
mssg.setAttribute('style', 'color: green;');
//changing attributes of an element
mssg.style.color = 'red';
//changing attributes of an element
mssg.style.margin = '50px';
//adding classes to an element  
const content = document.querySelector('p');
console.log(content.classList);
//adding classes to an element
content.classList.add('error');
//adding classes to an element
content.classList.remove('error');
//adding classes to an element
content.classList.add('success');
//adding classes to an element
const paras = document.querySelectorAll('p');
//adding classes to an element  
paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    if(para.innerText.includes('success')){
        para.classList.add('success');
    }
});
//toggle classes
const title = document.querySelector('.title');
//toggle classes
title.classList.toggle('test');
//toggle classes
//toggle classes
title.classList.toggle('test');
//toggle classes
//toggle classes
//parents, children and siblings
const article = document.querySelector('article');
console.log(article.children);
//parents, children and siblings


