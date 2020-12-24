import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'us-east-2',
        userPoolId: 'us-east-2_JxvaVWZOQ',
        userPoolWebClientId: '6554iohvvj2klr5362fdiqr5js',
        oauth: {
            domain: 'wallydevdomain.auth.us-east-2.amazoncognito.com',
            scopes: [
              "email",
              "profile"
            ],
            redirectSignIn: 'http://localhost:3000/home',
            redirectSignOut: 'http://localhost:3000/login',
            responseType: "code"
          },
    }
});