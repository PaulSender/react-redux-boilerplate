# react-redux-boilerplate

A repository to hold a very basic react app that has redux implemented in the front-end. Index.js has code to set up axios for production, App.js is the parent component for the Home component and where you should set up routing and other components. It is a functional component and uses the useEffect method with an empty array parameter to mimic componenetDidMount. In order to check if redux is successfully implemented, please instal [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) and start the client using `npm run start` or `yarn start`. Open the developers console (ctrl + shift + i) and click on the redux tab. Within the redux tab you should see a GET_ITEMS action and to its right a window with tabs for action, state, diff, trace, and test. Click on state and verify you are getting an empty array being returned to state (SEE FIGURE BELOW).

[Expected Result] (https://github.com/PaulSender/react-redux-boilerplate/blob/main/expected.PNG)

## installation Instructions
  1. clone code into a seperate repo
  2. copy the client folder from the new repo into your project repo
  3. open your project in a terminal window and navigate to client
  4. run npm install to install required node modules
  5. run npm run start or yarn start
  6. check the redux state to make sure you are getting an empty array back for items
