import React, { Component } from 'react';
// import React from 'react';
// import Radium from 'radium';
import PropsTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';
// import classes from './Person.css'
//const person = (props) => {
class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliary>
        {/* <AuthContext.Consumer> */}
        {/* {(context) =>  */}
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
            <p>Please log in </p>
          )}
        {/* </AuthContext.Consumer> */}
        {/* <React.Fragment> */}
        {/* <div className="Person" style={style}>
                  <div className={classes.Person} > */}
        <p onClick={this.props.click}>
          I am a {this.props.name} and I am {this.props.age} year old
                    </p>
        <p key="i2" >{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.change}
          value={this.props.name}
          //ref={(inputEl) => {this.inputElement = inputEl} }
          ref={this.inputElementRef}
        />
        {/* </div> */}
      </Auxiliary>

    );
  }
}

Person.PropsTypes = {
  click: PropsTypes.func,
  name: PropsTypes.string,
  age: PropsTypes.number,
  change: PropsTypes.func
};


//console.log('[Person.js] rendering...');

// const style = {
//     '@media (min-width: 500px)': {
//         width: '450px'
//     }
// };
//     return (
//         // <div className="Person" style={style}>
//         <div className={classes.Person} >
//             <p onClick={props.click}>
//                 I am a {props.name} and I am {props.age} year old
//             </p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.change} value={props.name}/>
//         </div>
//     )
// };

// export default Radium(person)
// export default person;
export default withClass(Person, classes.Person);
