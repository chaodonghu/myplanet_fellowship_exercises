### ES6

#### variables

- const
- let 

#### arrow functions
#### template literals
#### Classes

##### Constructor Functions

	function Person(first, last) {
	  this.first = first;
	  this.last = last;
	  
	  this.sayName = function() {
	    console.log('my name is ' + this.first);
	  }
	}

	var p = new Person('engin', 'arslan');
	p.sayName();

##### Classes

	class Person {
	  constructor(first, last) {
	    this.first = first;
	    this.last = last;
	  }
	  
	  sayName() {
	    console.log('my name is ' + this.first);
	  }
	}

	var p = new Person('engin', 'arslan');
	p.sayName();

- Class Syntax:
[http://2ality.com/2015/02/es6-classes-final.html](http://2ality.com/2015/02/es6-classes-final.html)

### JQuery

- using selectors
- adding event listeners.

### REACT

### What is React?

React is a JavaScript library to build user interfaces. 

#### framework vs library

It being a library it doesn't assume anything about the other parts of your application. it just focuses on just just one thing and on doing that thing very well. Which is managing and rendering user interfaces.

React is declarative. It _describes_ a user interface.

Imperative code tells your application HOW to do something (JQuery is imperative). Declarative code is telling your application WHAT to do.

#### Components

In react we describe the user interfaces using components. 
Think about a to-do list:

- to-do header
- to-do list item section
- to-do list item
- input section.

You can think of components as simple functions in any program. They take some input (and sometimes not) and generate an output (a visual representation) in response.

We can reuse components (functions) in multiple user interfaces and components can contain other components.

Components can have inputs and an internal state. When the state of a component or the input changes, the user interface it represents changes as well.

### Getting Started with React in JSBin

- Load in the library
- Have a div element with a unique 'id' to render your React components inside.
- Set the JavaScript mode to JSX.

### Hello World with React

	ReactDOM.render(
	  <h1>Hello, world!</h1>,
	  document.getElementById('root')
	);

- JSX

### Using Components

**example**

	class HelloWorld extends React.Component {
	  render() {
	    return(
	      <h1>Hello World!</h1>
	    );
	  }
	}

	ReactDOM.render(
	  <HelloWorld />,
	  document.getElementById('root')
	);

### Using Components (button example)

	class HelloWorld extends React.Component {
	  render() {
	    return(
	      <button>Click Me!</button>
	    );
	  }
	}

	ReactDOM.render(
	  <HelloWorld />,
	  document.getElementById('root')
	);

### Using Components (with two divs)

You can only return one element from the `render` method.

	class HelloWorld extends React.Component {
	  render() {
	    return(
	      <div>
	        <button>Click Me!</button>
	        <div>0</div>
	      </div>
	    );
	  }
	}

	ReactDOM.render(
	  <HelloWorld />,
	  document.getElementById('root')
	);

### Using Props

Parametrize your component by passing props to it.

	class HelloWorld extends React.Component {
	  render() {
	    return(
	      <div>
	        <div>{this.props.title}</div>
	        <button>Click Me!</button>
	        <div>0</div>
	      </div>
	    );
	  }
	}

	ReactDOM.render(
	  <HelloWorld title="My Awesome First Tool"/>,
	  document.getElementById('root')
	);

### Using Classes

`class` is a reserved keyword in JavaScript. You need to use `className` instead when using JSX.

	class HelloWorld extends React.Component {
	  render() {
	    return(
	      <div className="awesome-tool">
	        <div>{this.props.title}</div>
	        <button>Click Me!</button>
	        <div>0</div>
	      </div>
	    );
	  }
	}

	ReactDOM.render(
	  <HelloWorld title="My Awesome First Tool"/>,
	  document.getElementById('root')
	);

### Containing State inside the Component and Props.

the constructor method & state

	class HelloWorld extends React.Component {
	  constructor(props) {
	    super(props);
	    
	    this.state = {
	      amount: 0
	    }
	  }
	  render() {
	    return(
	      <div className="awesome-tool">
	        <div>{this.props.title}</div>
	        <button>Click Me!</button>
	        <div>{this.state.amount}</div>
	      </div>
	    );
	  }
	}

	ReactDOM.render(
	  <HelloWorld title="My Awesome First Tool"/>,
	  document.getElementById('root')
	);

### updating the state

	class HelloWorld extends React.Component {
	  constructor(props) {
	    super(props);
	    
	    this.state = {
	      amount: 0
	    };
	    
	    this.handleClick = this.handleClick.bind(this);
	  }
	  
	  handleClick() {
	    this.setState({
	      amount: this.state.amount + 1,
	    });
	  }
	  
	  render() {
	    return(
	      <div className="awesome-tool">
	        <div>{this.props.title}</div>
	        <button onClick={this.handleClick}>Click Me!</button>
	        <div>{this.state.amount}</div>
	      </div>
	    );
	  }
	}

	ReactDOM.render(
	  <HelloWorld title="My Awesome First Tool"/>,
	  document.getElementById('root')
	);

### Composing Components

	class HelloWorld extends React.Component {
	  constructor(props) {
	    super(props);
	    
	    this.state = {
	      amount: 0
	    };
	    
	    this.handleClick = this.handleClick.bind(this);
	  }
	  
	  handleClick() {
	    this.setState({
	      amount: this.state.amount + 1,
	    });
	  }
	  
	  render() {
	    return(
	      <div className="awesome-tool">
	        <div>{this.props.title}</div>
	        <button onClick={this.handleClick}>Click Me!</button>
	        <DisplayNumber value={this.state.amount}/>
	      </div>
	    );
	  }
	}

	class DisplayNumber extends React.Component {
	  render() {
	    return (
	      <div className="display-number">
	        <div className="display-number__content">{this.props.value}</div>
	      </div>
	    )
	  }
	}

	ReactDOM.render(
	  <HelloWorld title="My Awesome First Tool"/>,
	  document.getElementById('root')
	);

### Let's Create a TO-DO App

	class ToDo extends React.Component {
	  render() {
	    return(
	    <div>
	      <div>Header</div>
	      <div>
	        <input />
	        <button>Submit</button>
	      </div>
	      <div>
	        <ul>
	          <li><div>Buy Milk</div><div><input type="checkbox" /></div></li>
	          <li><div></div></li>
	          <li><div></div></li>
	          <li><div></div></li>
	        </ul>
	      </div>
	    </div>
	    );
	  }
	}

	class ToDoItem extends React.Component {
	  render() {
	    return (
	      <li><div>Buy Milk</div><div><input type="checkbox" /></div></li>
	    );
	  }
	}


	ReactDOM.render(
	  <ToDo title="My Awesome First Tool"/>,
	  document.getElementById('root')
	);




