import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "668851605554-2ugnon51relbbli589re23ue38hkfhii.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
          // The .listen function can work as an event listener which calls a callback funciton whenever the user authentication status changes
          // We can use this to update state and therefore rerender the components on screen without refreshing the page using the .listen()
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.singOut();
    }
  };

  // SIGN IN AND SIGN OUT HELPER METHODS FOR BUTTON ONCLICK EVENT HANDLERS
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          {/* Note that we don't call onSignOut with any parentheses. 
          If we called onSignOut with parentheses the function will be called immediately as it's rendered on the screen.  */}
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui green google button">
          {/* Note that we don't call onSignIn with any parentheses. 
          If we called onSignOut with parentheses the function will be called immediately as it's rendered on the screen.  */}
          <i className=" google icon" />
          Sign in With Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);