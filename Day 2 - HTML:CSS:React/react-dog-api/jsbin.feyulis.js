class Displayer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", {className: "app__counter"}, this.props.counter)
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      breeds: [],
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({
    inputValue: e.target.value
    })
  }
  
  componentDidMount() {
    const that = this;
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((response, reject) => {
      return response.json();
    })
    .then((data) => {  
      const breeds = [];
      for (let key in data.message) {
        breeds.push(key)
      }
      that.setState({ breeds });
    });
  }
  
  render() {
    const breeds = this.state.breeds.map((breed, i) => {
      return (React.createElement("li", {className: "breed__item", key: breed}, breed));
    });
    
    const filter = this.state.inputValue.split(',');
    
    const filteredBreeds = breeds.filter((breed) => {
      let display = false;
      for (let i = 0; i < filter.length; i++) {
        let currentFilter = filter[i];
        if (breed.key.includes(currentFilter.trim())) {
          display = true; 
          break;
        }
      }
      
        if (display) {
          return true;
        }
      });
    
    return (
      React.createElement("div", null, 
        React.createElement("input", {onChange: this.handleChange, value: this.state.inputValue}), 
        React.createElement("ul", null, 
          filteredBreeds
        )
      )
    );
  }
}


ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
);