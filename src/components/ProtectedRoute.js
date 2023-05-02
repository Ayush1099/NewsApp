import { Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          const to = {
            pathname: "/login",
            state: { from: props.location },
          };
          if (Cookies.get("Ayush")==="Verma") {
            return (
              <>
                <Component {...props} />
              </>
            );
          } else {
            return <Redirect to={to} />;
          }
        }}
      />
    </>
  );
};
export default ProtectedRoute;
