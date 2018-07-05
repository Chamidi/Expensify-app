//Not related to expensify app

import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props) =>(
    <div>
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
    </div>
);

const withAdminWarning =(WrappedComponent) => {
    return (props) => (
        <div>
        <p>This is private Info! Please don't share.</p>
        <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication =(WrappedComponent) =>{
    return (props) => (
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props} /> ) : (<p>Please log in to view the details</p>)}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

export default AuthInfo;