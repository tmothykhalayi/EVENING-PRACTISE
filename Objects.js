//object literals
const blogs =[
    {title:'Why mac & cheese rules',likes:30},
    {title:'10 things to make with marmite',likes:50},
]
console.log(blogs);
let user ={
    name:'Timothy',
    Age:21,
    Email:'Timothykhalayi96@gmail.com',
    location:'Nairobi',
    blogs:[
        {title:'Why mac & cheese rules',likes:30},
        {title:'10 things to make with marmite',likes:50},
    ],
    login:function(){
        console.log('The user logged in');
    },
    logout:function(){
        console.log('The user logged out');
    },
    logblogs:function(){
        //console.log(this.blogs);
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog=>{
            console.log(blog .title,blog.likes);
        });
    }
};
user.login();
user.logout();
console.log(user);
user.logblogs();
console.log(this);

//Adding methods to objects
const name = 'Timothy';
name.toUppercase();
console.log(name);

//math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));
//random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random*100));


//premitive values
let scoreone = 50;
let scoretwo = scoreone;
console.log(`scoreone: ${scoreone}`,`scoretwo: ${scoretwo}`);
scoreone = 100;
console.log(`scoreone: ${scoreone}`,`scoretwo: ${scoretwo}`);


//reference values
let  user
let  userOne = {name:'Timothy',age
:21};   
let  userTwo = userOne;
console.log(userOne,userTwo);
userOne.age = 22;
console.log(userOne,userTwo);