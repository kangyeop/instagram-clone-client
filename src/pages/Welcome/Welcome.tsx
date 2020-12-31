import React from "react";
import useAxios from "axios-hooks";
import { StandardTemplate } from "components/templates";
// import { Container } from "./styles";

const Welcome: React.FC = () => {
    const [{ data, loading, error }] = useAxios("/users?page=2");

    if (error) {
        console.log(error);
    }

    return (
        <StandardTemplate>
            <div className="App">
                {loading && <p>Loading...</p>}
                {error && <p>Error!!!</p>}
                {data && (
                    <div>
                        data
                        {data.data.map((res: any) => (
                            <div>{res.id}</div>
                        ))}
                    </div>
                )}
            </div>
        </StandardTemplate>
    );
};

export default Welcome;
