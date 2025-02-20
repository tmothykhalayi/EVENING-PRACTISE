//function declaration
/*function greet(){
    console.log('hello there!');
}

//function expression
const greetings =function(){
    console.log('good morning');
};

//function calling
/*greet();
greetings();

//arguments and parameters
const seek = function( name,time){
    console.log(`Good ${time} ${name}`);
};

seek("Timothy" ,"morning");*/

//returning functions
/*let  area =function(radius){
    area =3.142*radius*radius;
    return area
}
let results = area(7);
console.log(results);*/

//arrow function
/*let  area =(radius) =>{
    area =3.142*radius*radius;
    return area
}
//let results = area(7);
console.log(results);*/

const bill =(products ,tax)=>{
    let total=0;
    for(let i=0;i < products.length;i++){
        total += products[i] + products[i]*tax
    }
    return total;
}
console.log(bill([240,100,50],0.2));

    
//Callbacks for each.
let people=['mario','luigi','toad','bowser','peach'];
const logPerson = (person,index) =>{
    console.log(`${index} - hello ${person}`);
}
people.forEach((person ,index) =>{
    console.log( index ,person);
});

//get reference to the 'ul'
const ul = document.querySelector('.people');
const  people=['mario','luigi','toad','bowser','peach'];
let html =``;
people.forEach(person =>{
    //create html template
    html += `<li style="color:purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;


