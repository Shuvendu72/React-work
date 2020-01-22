//  import React from 'react';
import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';


const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //HTTP request...
    //  setTimeout(() => {
    //   alert ('Saved data to cloud!');
    // }, 1000);

    toggleBtnRef.current.click();
    return () => {
      //clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPerson) {
    btnClass = classes.Red;
  }

  // if (props.persons.length <=2) {
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes= {'red'}
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes= {'red', 'bold'}
  }

  return (

    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>this is working</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
      {/* <AuthContext.Consumer> */}
        {/* {(context) =>  */}
        <button 
          onClick={authContext.login}
          // {context.login}
          >LogIn
        </button>
      {/* </AuthContext.Consumer> */}

    </div>
  );
};

export default React.memo(Cockpit);