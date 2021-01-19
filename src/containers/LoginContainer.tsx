import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginLoading } from "pages";
import { setToken } from "store/auth/actions";

const LoginContainer: React.FC = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const params = new URLSearchParams(history.location.search);
    const accessToken = params.get("accessToken");

    useEffect(() => {
        if (accessToken) {
            dispatch(setToken({ accessToken }));
            history.push("/");
        }
    }, []);

    return <LoginLoading />;
};

export default LoginContainer;
