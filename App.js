import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
// import Auth from './Auth';
import configFile from './auth.config';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, TokenResponse, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';


WebBrowser.maybeCompleteAuthSession()

const useProxy = Platform.select({ web: true, android: true, ios: true, default: true });


export default function App() {
  const discovery = useAutoDiscovery(configFile.oidc.issuer);
  const [loginCode, setloginCode] = useState("")
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: configFile.oidc.clientId,
      scopes: configFile.oidc.scopes,
      responseType: "token",
      extraParams: {
        nonce: "foo"
      },


      // For usage in managed apps using the proxy
      redirectUri: configFile.oidc.redirectUri,
      //     makeRedirectUri({
      //   // For usage in bare and standalone
      //   native: configFile.oidc.redirectUri,
      //   useProxy,
      // }),
    },
    discovery
  );

  console.log("request >>>", request);

  React.useEffect(() => {

    console.log("ONE >>>", response);

    // const token = TokenResponse.fromQueryParams(response.params);
    // console.log("TokenResponse >>>", token)

    if (response?.type === 'success') {
      console.log("TWO >>>", response)
      const { code } = response.params;
    }

    setloginCode(response?.type)
  }, [response]);

  return (
    <View style={styles.container}>
      <Text>OKTA + EXPO</Text>

      <Button
        // disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync({ useProxy });
        }}
      />


      <Text>Response : {loginCode}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});