//filter out odds
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//find min
const findMin = (...args) => Math.min(...args);

//merge objects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

//double and return
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];


//remove random
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

//extend
const extend = (arr1, arr2) => [...arr1, ...arr2];

//add key val
const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

}

//remove key
const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

//combine
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

//update
const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}