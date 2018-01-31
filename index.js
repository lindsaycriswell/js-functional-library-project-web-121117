fi = (function() {

  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = [];
      const vals = Object.values(collection);

      for(const element of vals) {
        newCollection.push(iteratee(element));
      }
    return collection;
    },

    map: function(collection, iteratee) {
      let newCollection = [];
      const vals = Object.values(collection);

      for(const element of vals) {
        newCollection.push(iteratee(element));
      }
      return newCollection;
    },
    // think about incorporating object keys
    reduce: function(collection, acc, iteratee) {
      const vals = Object.values(collection);
      vals.forEach(function(element){
        acc = iteratee(acc, element)
      })
      return acc
    },

    find: function(collection,predicate){
      const vals = Object.values(collection);
      vals.forEach(function(element){
        if (predicate(element)){
          return element
        }
      })
    },

    filter: function(collection, predicate){
      let returnArray = []
      const vals = Object.values(collection);
      vals.forEach(function(element){
        if (predicate(element)){
          returnArray.push(element)
        }
      })
      return returnArray
    },

    size: function(collection){
      const vals = Object.values(collection);
      let counter = 0
      vals.forEach(function(element){
        counter++
      })
      return counter
    },

    first: function(array, n = 1){
      return array.slice(0,n)
    },

    last: function(array, n = 1){
      if (n > 0){
        n = n*-1
      }
      return array.slice(n)
    },

    compact: function(array){
      let returnArray = []
      const falsyArray = [false, null, 0, "", undefined, NaN]
      array.forEach(function(element){
        if(!falsyArray.includes(element)){
          returnArray.push(element)
        }
      })
      return returnArray
    },

    sortBy: function (array, iteratee) {
      let returnArray = [];

      array.forEach(function(element) {
        returnArray.push(iteratee(element));
      })
      return returnArray;
    },

    uniq: function (array, isSorted, iteratee) {
      let returnArray = [];
      let mathHold = [];

      if (iteratee) {
        array.forEach(function(element) {
          if (!mathHold.includes(iteratee(element))) {
            mathHold.push(iteratee(element));
            returnArray.push(element);
          }
        })
      } else {
        array.forEach(function(element) {
          if (!returnArray.includes(element)) {
            returnArray.push(element);
          }
        })
      }
      return returnArray;
    },

    keys: function(object) {
      let returnArray = [];
      for(element in object) {
        returnArray.push(element)
      }
      return returnArray;
    },

    values: function(object) {
      let returnArray = [];
      for(element in object) {
        returnArray.push(object[element])
      }
      return returnArray;
    },

    functions: function(object) {

    },
  }
})()

fi.libraryMethod()
