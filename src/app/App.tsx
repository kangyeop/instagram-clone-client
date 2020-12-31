import React from "react";
import { Switch, Route } from "react-router-dom";
import { Welcome } from "pages";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

const App = () => (
    <ThemeProvider theme={theme}>
        <Switch>
            <Route exact path="/" component={Welcome} />
            {/* <Route
                    exact
                    path="/NotFound"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage type="404" {...props} />
                    )}
                />
                <Route
                    exact
                    path="/Unauthorized"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage type="403" {...props} />
                    )}
                />
                <Route
                    exact
                    path="/Error"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage type="500" {...props} />
                    )}
                /> */}

            {/* <Redirect to="/NotFound" /> */}
        </Switch>
    </ThemeProvider>
);

export default App;
