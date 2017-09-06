import * as React from "react";
import {ConnectedRouter} from "react-router-redux";
import {Route} from "react-router";
import {history} from "./store";
import {HashRouter, Link} from "react-router-dom";
import {Home} from "./home";


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
                <div>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/test"}>Test</Link>
                </div>
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
                <Link to={"/"}>Home</Link>
                <Link to={"/test"}>Test</Link>
            </div>
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
    new RouteModel("/", true, Home)
];

export const Routing = (process.env.NODE_ENV === 'production') ? HashRouting : ConnectedRouting;