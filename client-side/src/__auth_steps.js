/**
 * 1.create a new firebase project in console.firebase.google.com
 * 2. npm install firebase
 * 3.create firebase.init.js and import getAuth to export auth;
 * 4.go to firebase settings/authentication > enable Email and Password auth
 * 5.Create LogIn,SignUp component set up route
 * 6.attach event handlers(form field handler and submit handler)
 * 7.install 'npm install --save react-firebase-hooks' from 'react-router-hooks' on github
 * 8.useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 9.if user is created,redirect to the expected page
 * 10.useSignInWithEmailAndPassword for log in
 * 11. create requireAuth component => check user existance, track user location
 * 12.In route,wrap protected component by using requireAuth component
 */

/**
 * Firebase hosting steps
 * 1.npm install -g firebase-tools
 * 2.firebase login
 * 3.firebase init
 * 4.npm run build
 * 5.firebase deploy
 */