import React from "react";
import { Redirect, Route } from "react-router-dom";

interface IProps {
    component: any;
    path: string;
    exact: boolean;
    to: string;
    isLoggedIn: boolean;
}

const RouteIf: React.FC<IProps> = ({ component, path, exact, to, isLoggedIn }) => {
    return (
        <Route exact={exact} path={path} component={component}>
            {/* {isLoggedIn ? null : <Redirect to={to} />} */}
        </Route>
    );
};

export default RouteIf;
