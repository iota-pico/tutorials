# IOTA Pico Framework Tutorials - getNodeInfo API

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

[getNodeInfo.ts](./getNodeInfo.ts) shows some example code in TypeScript, this is compiled to [getNodeInfo.js](./getNodeInfo.js) before execution.

```typescript
// Import the classes we need
import { NetworkEndPoint } from "@iota-pico/core";
import { NetworkClient } from "@iota-pico/pal-nodejs";
import { ApiClient } from "@iota-pico/api";

(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new NetworkEndPoint("https", "field.carriota.com", 443);

    // Create a network client from the PAL
    const networkClient = new NetworkClient(networkEndpoint);

    // Create an API client using the network client and the API version
    const apiClient = new ApiClient(networkClient);

    try {
        // Make the call to the API
        const response = await apiClient.getNodeInfo();

        // And log the response
        console.log(response);
    } catch(err) {
        // Or log an error if it failed
        console.error(err);
    }
})();
```

## Running The Code

Now you can run the code using NodeJS.

```shell
node getNodeInfo
```
You should see something similar to the following output in the console:

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

