// Import the classes we need
import { NetworkEndPoint } from "@iota-pico/core/dist/network/networkEndPoint";
import { NetworkClient } from "@iota-pico/pal-browser/dist/network/networkClient";
import { ApiClient } from "@iota-pico/api/dist/client/apiClient";

(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new NetworkEndPoint("https", "nodes.thetangle.org", 443);

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
