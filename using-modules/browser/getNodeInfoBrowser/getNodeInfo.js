"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the classes we need
const networkEndPoint_1 = require("@iota-pico/core/dist/network/networkEndPoint");
const networkClient_1 = require("@iota-pico/pal-browser/dist/network/networkClient");
const apiClient_1 = require("@iota-pico/api/dist/client/apiClient");
(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new networkEndPoint_1.NetworkEndPoint("https", "nodes.thetangle.org", undefined, 443);
    // Create a network client from the PAL
    const networkClient = new networkClient_1.NetworkClient(networkEndpoint);
    // Create an API client using the network client and the API version
    const apiClient = new apiClient_1.ApiClient(networkClient);
    try {
        // Make the call to the API
        const response = await apiClient.getNodeInfo();
        // And log the response
        console.log(JSON.stringify(response, undefined, "\t"));
    }
    catch (err) {
        // Or log an error if it failed
        console.error(err);
    }
})();
