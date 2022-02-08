import { Route,Redirect } from "react-router-dom";

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
    return (
      <Route {...rest} render={() => auth ? (<Redirect to="/dashboard" />) : (<Component />)}/>
    );
  };
  export default ProtectedLogin; 