// Import the classes we need
const core = require("@iota-pico/core");
const api = require("@iota-pico/api");
const pal = require("@iota-pico/pal-nodejs");

(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new core.NetworkEndPoint("https", "nodes.thetangle.org", undefined, 443);

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
