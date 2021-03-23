//You can manage configuration for different environments.

import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.1.245:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.1.245:9000/api",
  },
  production: {
    apiUrl: "http://192.168.1.245:9000/api",
  },
};

const getCurrentSettings = () => {
  //Checks if we are in development mode
  if (__DEV__) return settings.dev;
  //Checks if we are in staging mode
  //IMPORTANT the state of release channel comes from the command you type when you publish the app with Expo (--release-channel staging)
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  //We must be in production mode.
  return settings.production;
};

export default getCurrentSettings();
