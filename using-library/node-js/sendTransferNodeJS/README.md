# IOTA Pico Framework Tutorials - getNodeInfo API

## Introduction

This tutorial will demonstrate using the getNodeInfo API on the NodeJS platform using the all-in-one library.

## Installation

### API Library

To install the all-in-one library we simply use npm/yarn to install it.

```shell
npm install @iota-pico/lib-nodejs --save
```

## Code

[getNodeInfo.ts](./getNodeInfo.ts) shows some example code in TypeScript, this is compiled to [getNodeInfo.js](./getNodeInfo.js) before execution.

```typescript
// Import the all-in-one library
import * as IotaPico from "@iota-pico/lib-nodejs";

(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new IotaPico.NetworkEndPoint("https", "nodes.thetangle.org", 443);

    // Create a network client from the PAL
    const networkClient = IotaPico.NetworkClientFactory.instance().create("default", networkEndpoint);

    // Create an API client using the network client and the API version
    const apiClient = new IotaPico.ApiClient(networkClient);

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

