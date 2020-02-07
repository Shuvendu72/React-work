import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliary>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
            <p>Please log in </p>
          )}
        <p onClick={this.props.click}>
          I am a {this.props.name} and I am {this.props.age} year old
                    </p>
        <p key="i2" >{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.change}
          value={this.props.name}
          ref={this.inputElementRef}
        />
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

export default withClass(Person, classes.Person);
