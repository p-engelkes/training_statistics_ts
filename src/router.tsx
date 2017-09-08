import * as React from "react";
import {ConnectedRouter} from "react-router-redux";
import {Route} from "react-router";
import {history} from "./store";
import {HashRouter} from "react-router-dom";
import {Home} from "./home";
import {TopNavigation} from "./components/top_navigation/app.bar";
import {LoginForm} from "./components/login/login.form";


class RouteModel {
    path: string;
    exact: boolean;
    component: any;

    constructor(path: string, exact: boolean, component: any) {
        this.path = path;
        this.exact = exact;
        this.component = component;
    }
}

const ConnectedRouting = () => {
    return (
        <ConnectedRouter history={history}>
            <div>
               <TopNavigation />
                <div>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                </div>
            </div>
        </ConnectedRouter>
    )
};

const HashRouting = () => {
    return (
        <HashRouter>
            <div>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </div>
        </HashRouter>
    )
};

const routes: RouteModel[] = [
    new RouteModel("/", true, Home),
    new RouteModel("/login", false, LoginForm)
];

export const Routing = (process.env.NODE_ENV === 'production') ? HashRouting : ConnectedRouting;