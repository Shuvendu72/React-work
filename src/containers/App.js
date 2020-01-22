import React, { Component } from 'react';
//import React, { useState } from 'react';
// import Radium, {StyleRoot} from 'radium';
import classes from './App.module.css';
// import './App.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // this.state = {
    //   persons: [
    //     { id:'na1', name: 'Max', age: 25 },
    //     { id:'na2', name: 'Manu', age: 27 },
    //     { id:'na3', name: 'Rohit', age: 29 }
    //   ],
    //   otherState: 'some other value',
    //   showPerson: false
    // };
  }

  state = {
    persons: [
      { id: 'na1', name: 'Max', age: 25 },
      { id: 'na2', name: 'Manu', age: 27 },
      { id: 'na3', name: 'Rohit', age: 29 }
    ],
    otherState: 'some other value',
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    //  const person = this.state.person;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  // 2nd
  // switchNameHandler = (newName) => {
  //   // console.log('was Click');
  //   this.setState({
  //     person: [
  //       { name: newName, age: 25 },
  //       { name: 'Manu', age: 28 },
  //       { name: 'Rohit Singh', age: 29 }
  //     ]
  //   })
  // }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });


    // this.setState({
    //   person: [
    //     { name: 'max', age: 25 },
    //     { name: event.target.value, age: 28 },
    //     { name: 'Rohit Singh', age: 29 }
    //   ]
    // })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {

    console.log('[App.js] render');

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '2px solid blue',
    //   padding: '5px',
    //   corsor: 'pointer',
    // ':hover': {
    //   backgroundColor: 'lightgreen',
    //   color: 'black'
    // }
    // };

    let persons = null;
    // let btnClass = '';

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
            isAuthenticated={this.state.authenticated}
          />


          {/* {this.state.persons.map((person, index) => {
          return <Person 
            click = {() => this.deletePersonHandler(index)} 
            name={person.name}
            age={person.age}
            key={person.id}
            change={(event) => this.changeNameHandler(event, person.id)}
            />
        })} */}
        </div>
      );

      // btnClass = classes.Red;

      // style.backgroundColor = 'red';
      // style[':hover']= {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }


      //  person = (
      //   <div>
      //   <Person name={this.state.person[0].name}
      //      age={this.state.person[0].age}
      //    />

      //    <Person name={this.state.person[1].name}
      //      age={this.state.person[1].age}
      //      click={this.switchNameHandler.bind(this, 'maxi!!!')}
      //      change={this.changeNameHandler}>My Hobbies: Racing</Person>

      //    <Person name={this.state.person[2].name}
      //      age={this.state.person[2].age}
      //    />
      //  </div>
      //  );
    }

    // const assignedClasses = [];
    // if (this.state.persons.length <=2) {
    //   assignedClasses.push(classes.red); // classes= {'red'}
    // }
    // if (this.state.persons.length <=1) {
    //   assignedClasses.push(classes.bold); // classes= {'red', 'bold'}
    // }

    return (
      // <StyleRoot>    
      //< WithClass classes={classes.App} >
      <Auxiliary>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
         }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPerson={this.state.showPerson}
              personsLength={this.state.persons.length}
              // persons={this.state.persons}
              clicked={this.togglePersonHandler}
              //login={this.loginHandler}
            />
          ) : null}
          {/* <Cockpit  */}
          {/* title={this.props.appTitle}
         showPerson={this.state.showPerson}
         persons={this.state.persons}
         clicked={this.togglePersonHandler}
        
         /> */}

          {/* <h1>Hi, I am react</h1>
         <p className={assignedClasses.join(' ')}>this is working</p>
         <button
         className = {btnClass}
          // style={style}
          onClick={this.togglePersonHandler}>Switch Name</button> */}
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
      //</ WithClass>
      //  </StyleRoot>




      // first 
      // <div className="App" >
      //   <h1>Hi, I am react</h1>
      //   <button
      //     style={style}
      //     // onClick={() => this.switchNameHandler('maxi')}>Switch Name</button>

      //     onClick={this.togglePersonHandler}>Switch Name</button>
      //   {
      //     this.state.showPerson ?
      //     <div>
      //       <Person name={this.state.person[0].name}
      //         age={this.state.person[0].age}
      //       />

      //       <Person name={this.state.person[1].name}
      //         age={this.state.person[1].age}
      //         click={this.switchNameHandler.bind(this, 'maxi!!!')}
      //         change={this.changeNameHandler}>My Hobbies: Racing</Person>

      //       <Person name={this.state.person[2].name}
      //         age={this.state.person[2].age}
      //       />
      //     </div> : null
      //   }

      // </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am react'));
  }
}

// export default Radium(App);
// export default App;
export default withClass(App, classes.App);



//                                                  use of hook (useState())

// const App = props => {
//   const [personState, setPersonState] = useState({
//     person: [
//       { name: 'Max', age: 25 },
//       { name: 'Manu', age: 27 },
//       { name: 'Rohit', age: 29 }
//     ]
//   });

//   const switchNameHandler = () => {
//     //console.log('was Click');
//     setPersonState({
//       person: [
//         { name: 'Maximilian', age: 25 },
//         { name: 'Manu', age: 28 },
//         { name: 'Rohit Singh', age: 29 }
//       ]
//     });
//   };

//   return (
//     <div className="App" >
//       <h1>Hi, I am react</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personState.person[0].name} age={personState.person[0].age} />
//       <Person name={personState.person[1].name} age={personState.person[1].age} >My Hobbies: Racing</Person>
//       <Person name={personState.person[2].name} age={personState.person[2].age} />
//     </div>
//   );

// }