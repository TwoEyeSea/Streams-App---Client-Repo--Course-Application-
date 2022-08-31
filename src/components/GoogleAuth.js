import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends React.Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      console.log("signing in");
      this.props.signIn();
    } else {
      console.log("signing out");
      this.props.signOut();
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
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        console.log(this.props.isSignedIn),
        (
          <button onClick={this.onSignOutClick} className="ui red google button">
            {/* Note that we don't call onSignOut with any parentheses. 
          If we called onSignOut with parentheses the function will be called immediately as it's rendered on the screen.  */}
            <i className="google icon" />
            Sign Out
          </button>
        )
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

const maptStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(maptStateToProps, { signIn, signOut })(GoogleAuth);
