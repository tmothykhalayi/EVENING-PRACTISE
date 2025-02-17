//function declaration
function greet(){
    console.log('hello there!');
}
//function expression
const greetings =function(){
    console.log('good morning');
};
//function calling
greet();
greetings();

//arguments and parameters
const seek = function( name,time){
    console.log(`Good ${time} ${name}`);
};

seek("Timothy" ,"morning");

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
    for(let i=0;i<products.length;i++){
        total+=products[i] + product[i]*tax
    }
    return total;
}
console.log(bill([240,100,50]*0.2));