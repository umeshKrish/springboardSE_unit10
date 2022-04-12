//num planets
//8
//1846

//planet facts
//yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

//get user data
//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//Your name is undefined and you like green

//first, second, third
//Maya, Marisa, and Chi, respectively

//raindrops
//"Raindrops on roses"
//"whiskers on kittens"
//rest of array

//numbers
//10, 30, 20


//assigning variables to object properties
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const { a, b } = obj.numbers;

//array swap
[arr[0], arr[1]] = [arr[1], arr[0]];

//race results
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
