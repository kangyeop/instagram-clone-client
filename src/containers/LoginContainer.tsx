import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginLoading } from "pages";
import { setLogin } from "store/auth/actions";

const LoginContainer: React.FC = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        dispatch(setLogin());
        history.push("/");
    }, []);

    return <LoginLoading />;
};

export default LoginContainer;
