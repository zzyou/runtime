/* 
Read the following functions. For each one, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run the function with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
*/


// O(n)
console.time('mysteryFunction0');
const mysteryFunction0 = function(array) {
    const myFavoriteNum = 7;
    for (i = 0; i < array.length; i++) {
      if (array[i] === myFavoriteNum) {
        return true;
      }
    }
    return false;
  };

// mysteryFunction0([7]); // 0.124ms
// mysteryFunction0([1, 7]); // 0.126ms
// mysteryFunction0([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 0.132ms
console.timeEnd('mysteryFunction0');

  

// O(1)
console.time('mysteryFunction1');
const mysteryFunction1 = function(array) {
    index = 4;
    return array[index];
};

// mysteryFunction1([0, 1, 2, 3, 4]); // 0.086ms
// mysteryFunction1(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']); // 0.036ms
console.timeEnd('mysteryFunction1');


  
// O(n^2) 
console.time('mysteryFunction2'); 
  var mysteryFunction2 = function(n) {
    let primes = [];
    for (i = 2; i < n; i++) {
      let factorFound = false;
      for (j = 2; j < n; j++) {
        if (i % j === 0) {
          factorFound = true;
        }
      }
      if (factorFound === false) {
        primes.push(i);
      }
    }
    return primes.length;
  };

// mysteryFunction2(10); // 0.100ms
// mysteryFunction2(100); // 0.605ms
console.timeEnd('mysteryFunction2');
  


// O(1)
console.time('mysteryFunction3');
  const mysteryFunction3 = function(array) {
    myLength = array.length;
    if (myLength % 2 == 0) {
      return "even length";
    } else {
      return "odd length";
    }
  };

// mysteryFunction3([0, 1, 2]); // 0.072ms
// mysteryFunction3([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]); // 0.082ms
console.timeEnd('mysteryFunction3');
  


// O(n)
 console.time('mysteryFunction4');
  var mysteryFunction4 = function(string) {
    let eCount = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] === 'e') {
        eCount++;
      }
    }
    return eCount;
  };

// mysteryFunction4('doihaveeeeee?'); // 0.122ms
// mysteryFunction4('ok now i don\'t hav     it               '); // 0.118ms
// mysteryFunction4('what if i have many eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'); // 0.123ms
console.timeEnd('mysteryFunction4');

  

// O(n log n)
console.time('mysteryFunction5');
  var mysteryFunction5 = function(array) {
    array.sort();
  };

// mysteryFunction5([9, 4, 2, 10, 20, 0, -1]); // 0.990ms
// mysteryFunction5(['a', 'z', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']); // 0.789ms
console.timeEnd('mysteryFunction5'); 

  
 
// O(1);
console.time('mysteryFunction6');
  const mysteryFunction6 = function(dict, key) {
    var value = dict[key];
    return value;
  };

// mysteryFunction6({a: 'apple', b: 'banana', c: 'cat, car', d: 'dog'}, 'a'); // 0.078ms
console.timeEnd('mysteryFunction6');  
  


// O(log n)  
console.time('mysteryFunction7');
  const mysteryFunction7 = function(array) {
    // Assume `array` is an array of ints sorted from smallest to biggest
    const lookingFor = 9;
    let lowerBound = 0;
    let upperBound = array.length - 1;
    let guessIndex = Math.floor(upperBound / 2);
    while (lowerBound <= upperBound) {
      if (array[guessIndex] === lookingFor) {
        return true;
      } else if (lookingFor < array[guessIndex]) {
        upperBound = guessIndex - 1;
      } else {
        lowerBound = guessIndex + 1;
      }
      guessIndex = Math.floor((lowerBound + upperBound) / 2);
    }
    return false;
  };

// mysteryFunction7([9]); // 0.161ms
// mysteryFunction7([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]); // 0.121ms
// mysteryFunction7([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 0.130ms
console.timeEnd('mysteryFunction7');
  
  

// O(n);
console.time('mysteryFunction8');
  const mysteryFunction8 = function(dictionary) {
    for(var key in dictionary) {
        var value = dictionary[key];
        if (key === value) {
        return true;
        }
    return false;
    }
};

// mysteryFunction8({a: 'apple', b: 'banana', c: 'cat, car', d: 'dog'}); // 0.158ms
console.timeEnd('mysteryFunction8');
