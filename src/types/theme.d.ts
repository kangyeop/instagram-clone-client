/* eslint-disable no-unused-vars */
import "styled-components";

declare module "styled-components" {
    interface DefaultTheme {
        colors: {
            background: string;
            border: string;
            lightText: string;
            boldText: string;
        };
    }
}
