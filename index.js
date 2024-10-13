function myEach(collection, callback) {
    // Check if the collection is an array; if not, treat it as an object
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    // Iterate over the values and call the callback on each
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    
    // Return the original collection
    return collection;
}

function myMap(collection, callback) {
    // Check if the collection is an array; if not, treat it as an object
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    // Create a new array to hold the results
    const result = [];
    
    // Iterate over the values and apply the callback to each
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
    }
    
    // Return the new array
    return result;
}
function myReduce(collection, callback, acc) {
    // Convert object collection to an array of values if necessary
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    // If no initial accumulator value is provided, use the first element of the values array
    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1; // Start from the second element
    }

    // Iterate through the values and apply the callback
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    
    // Return the final accumulated value
    return acc;
}
function myFind(collection, predicate) {
    // Convert object collection to an array of values if necessary
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    // Iterate through the values
    for (let i = 0; i < values.length; i++) {
        // If the predicate returns true for the current value, return that value
        if (predicate(values[i])) {
            return values[i];
        }
    }
    
    // If no value satisfies the predicate, return undefined
    return undefined;
}
function myFilter(collection, predicate) {
    // Convert object collection to an array of values if necessary
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    // Create a new array to hold the filtered results
    const result = [];
    
    // Iterate through the values
    for (let i = 0; i < values.length; i++) {
        // If the predicate returns true, add the value to the result array
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    
    // Return the new array of filtered values
    return result;
}
function mySize(collection) {
    // If it's an array, return its length; if it's an object, return the number of its keys
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}
function myFirst(array, n) {
    // If n is not provided, return the first element; otherwise, return the first n elements
    if (n === undefined) {
        return array[0];
    }
    return array.slice(0, n); // Use slice to get the first n elements
}
function myLast(array, n) {
    // If n is not provided, return the last element; otherwise, return the last n elements
    if (n === undefined) {
        return array[array.length - 1];
    }
    return array.slice(-n); // Use slice with negative index to get the last n elements
}
function myKeys(object) {
    // Use Object.keys() to get the enumerable property names of the object
    return Object.keys(object);
}
function myValues(object) {
    // Use Object.values() to get the values of the object's properties
    return Object.values(object);
}