# IOTA Pico Framework Tutorials - getNodeInfo

## Introduction

This tutorial will demonstrate using the getNodeInfo API on the NodeJS platform.

## Installation

### API Library

To install the API library we simply use npm/yarn to install it.

```shell
npm install @iota-pico/api --save
```

This will also bring with it the @iota-pico/core library for some core functionality.

### NodeJS Platform Abstraction Layer

We are going to run the code for this tutorial on NodeJS so we need to install the NodeJS PAL (if you wanted to use the API in the browser we would just install pal-browser instead).

```shell
npm install @iota-pico/pal-nodejs --save
```

## Code

Create the file getNodeInfo.js and copy the following into it (or grab the source  [here](./getNodeInfo.js)).

```js
// Import the classes we need
const core = require("@iota-pico/core");
const api = require("@iota-pico/api");
const pal = require("@iota-pico/pal-nodejs");

(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new core.NetworkEndPoint("http", "n1.iota.eco", undefined, 14265);

    // Create a network client from the PAL
    const networkClient = new pal.NetworkClient(networkEndpoint);

    // Create an API client using the network client and the API version
    const apiClient = new api.ApiClient(networkClient, "1");

    try {
        // Make the call to the API
        const response = await apiClient.getNodeInfo();

        // And log the response
        console.log(response);
    } catch(err) {
        // Or log an error if it failed
        console.log(err);
    }
})();
```

## Running The Code

Now you can run the code using NodeJS.

```shell
node getNodeInfo
```
You should see something similar to the following output:

```js
{ 
    appName: 'IRI',
    appVersion: '1.4.2.1',
    jreAvailableProcessors: 1,
    jreFreeMemory: 254842624,
    jreVersion: '1.8.0_162',
    jreMaxMemory: 2436628480,
    jreTotalMemory: 1551228928,
    latestMilestone: 'DTOBKQFTMARPDQUMUTYMKGWFZRRLYRYTFDRHBDBDSPMLNMIJRUBMQBLSFINR9DEXFW9EESMAIN9AZ9999',
    latestMilestoneIndex: 340487,
    latestSolidSubtangleMilestone: 'DTOBKQFTMARPDQUMUTYMKGWFZRRLYRYTFDRHBDBDSPMLNMIJRUBMQBLSFINR9DEXFW9EESMAIN9AZ9999',
    latestSolidSubtangleMilestoneIndex: 340487,
    neighbors: 6,
    packetsQueueSize: 0,
    time: 1517462460178,
    tips: 9110,
    transactionsToRequest: 538,
    duration: 0
}
```

## Final Remarks

In this tutorial we use the async/await pattern but you can just as easily replace this with the Promise pattern.

```js
// Make the call to the API
apiClient.getNodeInfo()
    .then((response) => {
        // And log the response
        console.log(response);
    })
    .catch((err) => {
        // Or log an error if it failed
        console.log(err);
    });
```

If we were using ES6/TypeScript and transpiling our code then we could be more specific about our require statements.

```js
import { NetworkEndPoint } from "@iota-pico/core/dist/network/networkEndPoint";
import { NetworkClient } from "@iota-pico/pal-nodejs/dist/network/networkClient";
import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
```

This would mean that any bundling we do of the application e.g. webpack/browserify would do a better job with its tree shaking algorithm and only add the classes it needed into the final bundle.
