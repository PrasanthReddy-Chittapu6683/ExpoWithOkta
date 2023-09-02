import React, { Component, useEffect } from 'react'
import { Text } from 'react-native'
// import { createConfig } from '@okta/okta-react-native'
import configFile from './auth.config';

// const tokenClient = new TokenClient({
//     clientId: configFile.oidc.clientId,
//     redirectUri: configFile.oidc.redirectUri,
//     endSessionRedirectUri: configFile.oidc.endSessionRedirectUri,
//     discoveryUri: configFile.oidc.discoveryUri,
//     scopes: configFile.oidc.scopes,
//     requireHardwareBackedKeyStore:
//         configFile.oidc.requireHardwareBackedKeyStore,
// });

export class Auth extends Component {
    constructor(props) {
        super(props);
        // super();
        // this.state = {
        //     authenticated: this.props.authenticated,
        // }
        // this.state = {
        //     context: this.props.context,
        // };
        // this.checkAuthentication = this.checkAuthentication.bind(this);
    }
    debugger;

    async componentDidMount() {
        // let that = this;
        // EventEmitter.addListener('signInSuccess', function (e) {
        //     that.setState({ authenticated: true });
        //     that.setContext('Logged in!');
        // });
        // EventEmitter.addListener('signOutSuccess', function (e) {
        //     that.setState({ authenticated: false });
        //     that.setContext('Logged out!');
        // });
        // EventEmitter.addListener('onError', function (e) {
        //     console.warn(e);
        //     that.setContext(e);
        // });
        // EventEmitter.addListener('onCancelled', function (e) {
        //     console.warn(e);
        // });
        debugger;

        // createConfig({
        //     clientId: configFile.oidc.clientId,
        //     redirectUri: configFile.oidc.redirectUri,
        //     endSessionRedirectUri: configFile.oidc.endSessionRedirectUri,
        //     discoveryUri: configFile.oidc.discoveryUri,
        //     scopes: configFile.oidc.scopes,
        //     requireHardwareBackedKeyStore:
        //         configFile.oidc.requireHardwareBackedKeyStore,
        // }).then((re) => {
        //     debugger;
        // }).catch((err) => {
        //     debugger;
        // });
    }
    render() {
        return (
            <Text>Auth Pagessss</Text>
        )
    }
}

export default Auth