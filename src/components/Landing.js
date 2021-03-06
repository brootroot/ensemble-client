import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Hero from './Hero';
import Trio from './Trio';
import Footer from './Footer';
import Modal from './Modal';
import RegistrationForm from './RegistrationForm';

import { toggleSignUpModal, toggleLogInModal } from '../actions';

import './Landing.css';

export class Landing extends React.Component {
  toggleSignUpModal() {
    this.props.dispatch(toggleSignUpModal());
  }

  toggleLogInModal() {
    this.props.dispatch(toggleLogInModal());
  }

  toggleBoth() {
    this.props.dispatch(toggleLogInModal());
    this.props.dispatch(toggleSignUpModal());
  }

  render() {
    return (
      <div className="landing">
        <Hero>
          <h1 className="title is-size-1">
            Your favorite new way to collaborate.
          </h1>
          <h3 className="subtitle is-size-4">
            Ensemble is a digital meeting ground for theatre artists to create
            projects and form communities.
          </h3>
          <Button
            text="Create Account"
            newClasses="is-rounded hero-button signup-button"
            clickFunction={() => this.toggleSignUpModal()}
          />
          <Button
            text="Login"
            newClasses="is-rounded hero-button login-button"
            clickFunction={() => this.toggleLogInModal()}
          />
        </Hero>
        <Modal
          newClasses={`${this.props.activeSignUp ? 'is-active' : ''}`}
          clickFunction={() => this.toggleSignUpModal()}
        >
          <RegistrationForm signUp />
        </Modal>
        <Modal
          newClasses={`${this.props.activeLogIn ? 'is-active' : ''}`}
          clickFunction={() => this.toggleLogInModal()}
        >
          <RegistrationForm />
        </Modal>
        <Trio />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeSignUp: state.activeSignUp,
  activeLogIn: state.activeLogIn,
});

export default connect(mapStateToProps)(Landing);
