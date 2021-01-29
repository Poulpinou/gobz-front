import React from 'react';
import {Redirect, Route} from "react-router-dom";


const PrivateRoute = ({component: Component, authenticated, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            authenticated ? (
                this?.props?.children
                    ? this.props.children
                    : <Component {...rest} {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

export default PrivateRoute