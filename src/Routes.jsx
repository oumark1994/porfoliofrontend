import {Route,Redirect } from "@babel/core"
 export const PrivateRoute = (props) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return token ? (<Route {...props} />) : ( <Redirect
        to={{
          pathname: "/login"
        }}
     
      />
    );
  };
  
  export const PublicRoute = (props) => {
    const token = JSON.parse(localStorage.getItem("token"));
  
    return token ? (
      <Redirect to={{ pathname: "/dashboard" }} />
    ) : (
      <Route {...props} />
    );
  };
 