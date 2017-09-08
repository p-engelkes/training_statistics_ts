import * as React from 'react';
import {Field, reduxForm} from "redux-form";
import {MaterialTextField} from "../form/material.text.field";
import {required} from "../form/utils";

class LoginFormPresentation extends React.Component<any, any> {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field
                    name="E-Mail"
                    component={MaterialTextField}
                    props={{
                        placeholder: 'E-Mail',
                        type: 'input',
                    }}
                    validate={[required]}
                />
                <Field
                    name="Password"
                    component={MaterialTextField}
                    props={{
                        placeholder: 'Password',
                        type: 'password'
                    }}
                    validate={[required]}
                />
            </form>
        )
    }
}

export const LoginForm = reduxForm({
    form: 'login'
})(LoginFormPresentation);

