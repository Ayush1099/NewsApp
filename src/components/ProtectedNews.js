import { Route, Redirect } from "react-router-dom";
import Routes from "./Routes";
import Authentication from "./Authentication";

const ProtectedNews = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const to = {
          pathname: "/login",
          state: {
            from: props.location,
          },
        };
        if (Authentication.isAuthenticated()) return <Component {...props} />;
        else return <Redirect to={to} />;
      }}
    />
  );
};
export default ProtectedNews;
