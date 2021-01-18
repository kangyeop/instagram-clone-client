import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Welcome, PostRegister, PostPage, Login } from "pages";
import { ThemeProvider } from "styled-components";
import { theme } from "styles";
import { LoginRequest } from "api";

const App = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/PostRegister" component={PostRegister} />
                <Route exact path="/PostPage/:id" component={PostPage} />
                <Route path="/login" component={Login} />
                <Route
                    path="/loginRequest"
                    component={() => {
                        window.location.href = LoginRequest;
                        return null;
                    }}
                />
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
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
