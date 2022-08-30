import React from "react";

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

  onAuthChange = () => {
    // This function monitors the user's current authentication status. when paired with the isSignedIn.listen() method...
    // We can determnine if the the user is currently signed in or not.
    // *NB* note that we've defind onAuthChange using an arrow function so that its context is bound to the object (or function) that it's being called from.
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui green google button">
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

export default GoogleAuth;
