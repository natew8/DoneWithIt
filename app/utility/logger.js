import Bugsnag from "@bugsnag/expo";

const log = (error) => Bugsnag.notify(error);

const start = () => Bugsnag.start();

export default { log, start };

// inside our app.js we import this abstraction as a logger object invoking these two functions.

//Anywhere we would console log am error we would use logger.log(error) instead.
