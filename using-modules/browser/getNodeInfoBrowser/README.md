# IOTA Pico Framework Tutorials - getNodeInfo Browser

## Introduction

This tutorial will demonstrate using the the getNodeInfo API in the browser.

## Installation

We are going to run the code for this tutorial in the browser, we will use SystemJS as the module loader.

```shell
npm install
```

## Code

The [index.html](./index.html) contains the loader configuration and initiates the code, [getNodeInfo.ts](./getNodeInfo.ts) shows some example code in TypeScript, this is compiled to [getNodeInfo.js](./getNodeInfo.js) before execution.

```typescript
// Import the classes we need
import { NetworkEndPoint } from "@iota-pico/core/dist/network/networkEndPoint";
import { NetworkClient } from "@iota-pico/pal-browser/dist/network/networkClient";
import { ApiClient } from "@iota-pico/api/dist/client/apiClient";

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
        console.log(JSON.stringify(response, undefined, "\t"));
    } catch(err) {
        // Or log an error if it failed
        console.error(err);
    }
})();
```

## Running The Code

Now you can run the code by opening the web page in your browser, we suggest running.

```shell
npm run serve
```
You should see something similar to the following output in the console:

```json
{
	"appName": "IRI",
	"appVersion": "1.4.2.2",
	"jreAvailableProcessors": 16,
	"jreFreeMemory": 2048261130,
	"jreVersion": "1.8.0_162",
	"jreMaxMemory": 20997734400,
	"jreTotalMemory": 4683050939,
	"latestMilestone": "ARXYJBRNVLBYUBKYPHUTULEFH9UKACRRURCMOMSULXM9QXYNGIHNJCZUFJ9FXT9BSVCPIADYHRSVZ9999",
	"latestMilestoneIndex": 371598,
	"latestSolidSubtangleMilestone": "ARXYJBRNVLBYUBKYPHUTULEFH9UKACRRURCMOMSULXM9QXYNGIHNJCZUFJ9FXT9BSVCPIADYHRSVZ9999",
	"latestSolidSubtangleMilestoneIndex": 371598,
	"neighbors": 24,
	"packetsQueueSize": 0,
	"time": 1520838793609,
	"tips": 5623,
	"transactionsToRequest": 232,
	"duration": 0
}
```

