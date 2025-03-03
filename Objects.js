// Object literals
const blogs = [
    { title: 'Why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
];
console.log(blogs);

// User object with methods
let user = {
    name: 'Timothy',
    age: 21,
    email: 'Timothykhalayi96@gmail.com',
    location: 'Nairobi',
    blogs: [
        { title: 'Why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    login: function () {
        console.log('The user logged in');
    },
    logout: function () {
        console.log('The user logged out');
    },
    logBlogs: function () {
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

// Calling user methods
user.login();
user.logout();
user.logBlogs();

// Adding methods to primitive value (fixed issue with .toUppercase())
const name = 'Timothy';
console.log(name.toUpperCase());  // Corrected method toUpperCase()

// Math object usage
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

// Area examples
const area = 7.7;
console.log(Math.round(area));  // 8
console.log(Math.floor(area));  // 7
console.log(Math.ceil(area));   // 8
console.log(Math.trunc(area));  // 7

// Random number generation
const random = Math.random();
console.log(random);  // Random number between 0 and 1
console.log(Math.floor(random * 100));  // Random number between 0-99

// Primitive values
let scoreone = 50;
let scoretwo = scoreone;
console.log(`scoreone: ${scoreone}`, `scoretwo: ${scoretwo}`);  // scoreone: 50, scoretwo: 50
scoreone = 100;
console.log(`scoreone: ${scoreone}`, `scoretwo: ${scoretwo}`);  // scoreone: 100, scoretwo: 50

// Reference values
let userOne = { name: 'Timothy', age: 21 };
let userTwo = userOne;
console.log(userOne, userTwo);  // Both refer to the same object
userOne.age = 22;
console.log(userOne, userTwo);  // Both userOne and userTwo are affected
