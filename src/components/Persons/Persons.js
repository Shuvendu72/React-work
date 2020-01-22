// import React, {Component} from 'react';
import React, {PureComponent} from 'react';
import Person from './Person/Person';


// class Persons extends Component {
    class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentReciveProps', props);
    // }

    // shouldComponentUpdate(nextprops, nextstate) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextprops.persons !== this.props.persons ||
    //         nextprops.changed !== this.props.changed ||
    //         nextprops.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
        
    // }

    getSnapshotBeforeUpdate(prevProps, prevstate) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot'};
    }

    // componentWillUpdate() {

    // }

    componentDidUpdate(prevProps, prevstate, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
//const persons = (props) => {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {
        return (
            <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)}
                //isAuth={this.props.isAuthenticated}
            />
        );
    });
}}

export default Persons;