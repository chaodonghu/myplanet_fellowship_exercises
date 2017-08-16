# JavaScript 101

## What is JavaScript

JavaScript (JS) is a lightweight dynamic programming language with first-class functions. Most well-known as the scripting language for Web pages, many non-browser environments also use it, such as **node.js**. - [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)

## JavaScript vs Java

	JavaScript !== Java

**Java is to JavaScript as ham is to hamster**

[http://leftoversalad.tumblr.com/post/103503118002](http://leftoversalad.tumblr.com/post/103503118002)

## What is ES6?

- ES6 is JavaScript (just an update)
- So why don't everyone use it?

## Popularity & Relevance

Tech Usage Stats [https://insights.stackoverflow.com/survey/2017#technology](https://insights.stackoverflow.com/survey/2017#technology)

## Code Editor

- Sublime
- Atom
- Visual Studio

## Online Editor

[www.jsbin.com](www.jsbin.com)

## JavaScript

#### values
#### console.log()
#### semicolon
#### operators
#### order of operations
#### data types

+ numbers
+ strings
+ boolean
	* comparison operators
		- `<`
		- `>`
		- `==`
		- `!=`
		- `>=`
		- `<=`

#### automatic type conversion
#### NAN
#### Exact Comparisons

		- `===`
		- `!==`

#### variables

- assignment operator
- var
- naming style: `camelCase`
- reserved names
- dynamic language

#### comments

	//
	/* */

#### functions

	function helloWorld() {
		console.log('hello world');
	}

- arguments

**exercise**
Write a function called `introduction` that has `name`, `movieName` as parameters and would construct a sentence from the given outputs. Ex:

	introduction('Engin', 'Memento');
	Hi, my name is Engin and my favorite movie is Memento.

	<!-- Solution -->
	function introduction(name, movieName) {
		console.log(`Hi, my name is ${name} and my favorite movie is ${movieName}`);
	}

	introduction('Engin', 'Memento');

**exercise**
Write a function called `calculateTheBill` which calculates the final bill by adding %18hst and 15%tip on your order

	calculateTheBill(100)
	133

	<!-- Solution -->

	function calculateTheBill(bill) {
  console.log(bill + (bill * 0.18) + (bill * 0.15));
}

calculateTheBill(100);

- undefined values.
- `return` keyword.
- scope: function scope.
- functions as first-class objects.

**example**

	function add(x, y) {
	  return x + y
	}
	function logName(fn, name) {
	  console.log(name)
	  return fn;
	}
	var add_ = logName(add, 'add');
	var result = add_(3,4);
	console.log(result);

#### some built in functions

- console.log
- prompt **browser only, outdated**
- alert **browser only, outdated**
- setTimeout
- setInterval
- clearInterval

**exercise**
Write a function that would display 5 `hello world` messages in one second intervals and then would stop

<!-- Solution  -->

// Define the setInterval function as a variable,
// which console logs 'Hello world' after 1000 seconds
var intervalId = setInterval(function() {
    console.log('Hello World');
}, 1000);

// Call the clear interval function on intervalId in 5 seconds.
setTimeout(function() {
  clearInterval(intervalId);
}, 5000);

#### controlling flow

- booleans, what are they good for?
- if, if-else, if-else if-else

**exercise** Write a function called `login` that gets a name and
displays the message `authorized` if the given name matches to what is stored inside the function
and `<username> not authorized` if it doesn't match.

	login('engin');
	'authorized'
	login('joe');
	'joe is unauthorized'

<!-- Solution -->
	function login(username) {
  let authorizedName = 'engin';
  if (username === authorizedName) {
    console.log(`authorized`);
  } else {
    console.log(`${username} is not authorized`);
  }
}

login('engin');

- for loop
- while loop

**exercise** Write a function called `countdown` that counts down from a given number and display the message `LAUNCH` at the end of the countdown.
solve it with both `while` and `for-loop`

	countdown(3);
	3
	2
	1
	LAUNCH!!!

<!-- Solution -->
function countdown(number) {
  for (let i = 0; i <= number; i++) {
    while (number != 0) {
      console.log(number);
      number --;
    }
    console.log('LAUNCH!!!');
  }
}

countdown(3);


### Data Structures

#### arrays
- square bracket notation
- zero-indexed

**exercise** Write a function called `multiplyBy` that would display the every item in a given array (first parameter), multiplied by a given number (second parameter)
_You can assume the given array will always have 3 items for now_

	var numbers = [1, 4, 8];
	multiplyBy(numbers, 2)
	2
	8
	16

	<!-- Solution -->

	let numbers = [1, 4, 8];

function multiplyBy(numbers, multiplier) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * multiplier);
  }
}

multiplyBy(numbers, 2);


- array properties & methods
	+ length
	+ push
		**exercise** Write a function that would create and return an array of all the numbers that are below a given number.
		stretch goal: return numbers that are divisible by `4`. hint: use the `remainder operator (%)`

		<!-- Solution -->

		function createArray(number) {
		  var array = [];
		  for (var i = 0; i <= number; i++) {
		    while (number != 0) {
		      array.push(number - 1);
		      number --;
		    }
		  }
		  console.log(array)
		}

		createArray(10);

	<!-- Stretch solution -->
	function createArray(number) {
  var array = [];
  for (var i = 0; i < number; i++){
    if (number % 4 === 0) {
      array.push(number);
      number --;
    } else {
      number --;
    }
  }
  console.log(array);
}

createArray(10)

	* pop
	* splice
	* reverse
	* sort
	* forEach

#### properties & methods
- strings
	+ square bracket notation
- string methods

#### mutability
- strings
- numbers
- arrays

#### array methods continued.
- map
- filter
- reduce

**BREAK?**

#### objects
- key-value pairs
- square bracket notation

**exercise** write a function called `letterFrequency` which takes a sentence and returns an object that shows the frequench of every letter in the sentence.

	var sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis imperdiet massa. Vivamus pellentesque eros dapibus nibh consequat, in maximus.';

	var count = letterFrequency(sentence)
	console.log(count);
	{a: 7, b: 1, c: 3, d: 3, e: 12, g: 0, h: 0, I: 0, i: 13, l: 5, L: 0, m: 8, n: 6, o: 6, p: 4, q: 1, r: 4, s: 12, t: 7, u: 6, V: 0, v: 0, x: 0}

- properties
- methods
- this

**exercise** try to create an object that represents yourself (like add a property called 'name', maybe try to add some behaviour by adding in methods)

- constructor functions

#### array methods (revisited)

**exercise** say you are given an array like this.

	[
		{
			name: {
				first: 'joe',
				last: 'marshall'
			},
			age: 18,
			city: 'toronto'
		},
		{
			name: {
				first: 'eric',
				last: 'smith'
			},
			age: 23,
			city: 'kingston'
		},
		{
			name: {
				first: 'sarah',
				last: 'jane'
			},
			age: 32,
			city: 'montreal'
		},
		{
			name: {
				first: 'jack',
				last: 'black'
			},
			age: 17,
			city: 'toronto'
		}
	]

You will be using map, filter, sort for the next couple of exercises

**exercises**
write code that:
- creates a new array where all the items (each object) in the array have a new property called `registered` with value equal to `true` ex: `{registered: true}`
- creates a new array that consists of people only from toronto
- creates a new array that only consists of people older than 20.
- sort items in the array based on their age.

### Asynchronous Programming

#### Callbacks

##### blocking execution

	var x = true;
	setTimeout(function() {
	  x = false;
	}, 50);

	var counter = 0;
	console.log(1);
	console.log(2);

	while (x) {
	  counter++;
	  if (counter > 1000) {
	    console.log('processing');
	  }
	}

	console.log(3);

##### async execution

	var c;

	console.log(1);
	console.log(2);
	st();
	console.log(c);
	console.log(c+1);

	function st() {
	  setTimeout(function() {
	    c = 3;
	  }, 1000);
	}

##### callbacks

	var c;

	console.log(1);
	console.log(2);
	st(function() {
	  console.log(c);
	  console.log(c+1);
	});

	function st(cb) {
	  setTimeout(function() {
	    c = 3;
	    cb();
	  }, 2000);
	}

**less contrived example**

#### sync (blocking)

	var fs = require('fs');
	var bcrypt = require('bcrypt');
	var saltRounds = 15;
	var password = 'Password1234';

	console.log('1 - some process');
	var salt = bcrypt.genSaltSync(saltRounds);
	var hash = bcrypt.hashSync(password, salt);
	console.log(hash);
	console.log('2 - some other process');

#### sync (non-blocking (async))

	var fs = require('fs');
	var bcrypt = require('bcrypt');
	var saltRounds = 15;
	var password = 'Password1234';

	console.log('1 - some process');
	bcrypt.genSalt(saltRounds, function(err, salt) {
		bcrypt.hash(password, salt, function(err, hash) {
			console.log(hash);
		});
	});
	console.log('2 - some other process');

#### callback hell

	bcrypt.genSalt(saltRounds, function(err, salt) {
		bcrypt.hash(password, salt, function(err, hash) {
			writeHashToDB(path, hash, function() {
				sendResponseToClient();
			})
		});
	});

[https://collinmakersquare.files.wordpress.com/2016/02/b4uajfmcqae67qb.png?w=1000](https://collinmakersquare.files.wordpress.com/2016/02/b4uajfmcqae67qb.png?w=1000)

[https://www.twilio.com/blog/wp-content/uploads/2016/09/31orCejQRkSvmchYeZC2GKswNtst-d_xEoSPoP3X-bAm9RRe8hxz59vVZrrRm78VvJgVbuUo5R7dAikR2gY1rxtqQ14yMJP8K4CS3Siiir_wRpB6IYgoWGlpokE51vV4eYAI2lpP-1.png](https://www.twilio.com/blog/wp-content/uploads/2016/09/31orCejQRkSvmchYeZC2GKswNtst-d_xEoSPoP3X-bAm9RRe8hxz59vVZrrRm78VvJgVbuUo5R7dAikR2gY1rxtqQ14yMJP8K4CS3Siiir_wRpB6IYgoWGlpokE51vV4eYAI2lpP-1.png)

#### Promises

	console.log('some process');

	new Promise(function(resolve, reject) {
	  setTimeout(function() {
	    console.log('async - 1');
	    resolve();
	  }, 2000)
	})
	.then(function() {
	  return new Promise(function(resolve, reject) {
	    setTimeout(function() {
	      console.log('async - 2');
	      resolve();
	    }, 2000)
	  });
	})
	.then(function() {
	  console.log('async - 3')
	});

	console.log('some process - 2');

#### Promises - Fetch API

### ES6

#### variables

- const
- let

#### arrow functions
#### template literals

### STRETCH

- bind
- Prototypes

### SKIPPING:

- recursion
- closures
