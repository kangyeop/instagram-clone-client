import React from "react";
import { Switch, Route, BrowserRouter, RouteComponentProps } from "react-router-dom";
import { Welcome, PostRegister, PostPage, Login, SignUp } from "pages";
import { LoginContainer } from "containers";
import { ThemeProvider } from "styled-components";
import { theme } from "styles";
import { GithubLoginRequest, GoogleLoginRequest } from "api/login";
import { useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import RouteIf from "./RouteIf";

const App: React.FC = () => {
    const isLoggedIn = useSelector((state: RootState) => state.authReducer.isLogin);
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <RouteIf
                        isLoggedIn={isLoggedIn}
                        exact
                        path="/"
                        component={Welcome}
                        to="/login"
                    />
                    <RouteIf
                        isLoggedIn={isLoggedIn}
                        exact
                        path="/PostRegister"
                        component={PostRegister}
                        to="/login"
                    />
                    <RouteIf
                        isLoggedIn={isLoggedIn}
                        exact
                        path="/PostPage/:id"
                        component={PostPage}
                        to="/login"
                    />
                    <RouteIf
                        isLoggedIn={!isLoggedIn}
                        exact
                        path="/login"
                        component={Login}
                        to="/"
                    />
                    <Route
                      path="/loginRequest/:site"
                      component={({
                        match: {
                            params: { site },
                        },
                      }: RouteComponentProps<any>) => {
                        window.location.href =
                            site === "Github" ? GithubLoginRequest : GoogleLoginRequest;
                        return null;
                      }}
                    />
                    <RouteIf
                        isLoggedIn={!isLoggedIn}
                        exact
                        path="/loginLoading"
                        component={LoginContainer}
                        to="/"
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
};

export default App;
