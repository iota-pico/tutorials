// Import the all-in-one library
import * as IotaPico from "@iota-pico/lib-browser";

(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new IotaPico.NetworkEndPoint("https", "nodes.thetangle.org", 443);

    // Create a network client from the PAL
    const networkClient = new IotaPico.NetworkClient(networkEndpoint);

    // Create an API client using the network client and the API version
    const apiClient = new IotaPico.ApiClient(networkClient);

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
