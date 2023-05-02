import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedLogin = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentPath  = localStorage.getItem("NewsCategory");
        var to = {
          pathname: `/news/${currentPath}`,
          state: { from: props.location }
        };
        
        if (Cookies.get("Ayush") === "Verma") 
        {
          return <Redirect to={to} />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
export default ProtectedLogin;
