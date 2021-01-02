import React from "react";
import useAxios from "axios-hooks";
import { StandardTemplate } from "components/templates";
// import { Container } from "./styles";

const Welcome: React.FC = () => {
    const [{ data, loading, error }] = useAxios("/users?page=2");

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error!!!</p>;
    }

    return (
        <StandardTemplate>
            <div className="App" />
        </StandardTemplate>
    );
};

export default Welcome;
