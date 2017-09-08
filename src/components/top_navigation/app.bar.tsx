import * as React from 'react';
import AppBar from "material-ui/AppBar";
import {Link} from "react-router-dom";

export const TopNavigation = () => {
    return (
        <AppBar
            title="Trainings Statistiken"
            iconElementRight={<Link to={"/login"}>Login</Link>}
        />
    )
};

// const NavigationButtons = () => {
//     return (
//         <FlatButton label="Login"/>
//     )
// };