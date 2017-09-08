import * as React from 'react';
import {TextField} from "material-ui";

export const MaterialTextField = (props: any) => {
    console.log(props);
    return (
        <TextField
            hintText={props.placeholder}
            floatingLabelText={props.placeholder}
            type={props.type}
            errorText={props.meta.invalid && props.meta.error}
        />
    )
};