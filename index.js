function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (const data of collection) {
      callback(data);
    }
  } else if (typeof collection === "object") {
    for (const key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let newArray = [];
  if (Array.isArray(collection)) {
    for (const data of collection) {
      newArray.push(callback(data));
    }
  } else {
    const toArray = Object.values(collection);
    console.log(toArray);
    for (const data of toArray) {
      newArray.push(callback(data));
    }
  }
  return newArray;
}

function myReduce(collection, callback, acc) {
  let startingIndex = 0;

  if (!acc) {
    startingIndex = 1;
    collection = Object.values(collection);
    acc = collection[0];
  }

  for (let i = startingIndex; i < collection.length; i++) {
    acc = callback(acc, collection[i], collection);
  }

  return acc;
}

function myFind(collection, predicate) {
  collection = Object.values(collection);

  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  collection = Object.values(collection);
  let matching = [];

  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      matching.push(collection[i]);
    }
  }

  return matching;
}

function mySize(collection) {
  collection = Object.values(collection);
  let count = 0;
  for (const iterator of collection) {
    count++;
  }

  return count;
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

function callback(num) {
  return num % 2 == 0;
}

const myArray = [3, 2, 5, 5, 4];
const myObject = {
  one: 5,
  two: 3,
  three: 4,
};

console.log(myValues(myObject));
