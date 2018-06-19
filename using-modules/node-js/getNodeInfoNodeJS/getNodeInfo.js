Object.defineProperty(exports, "__esModule", { value: true });
// Import the classes we need
const core_1 = require("@iota-pico/core");
const pal_nodejs_1 = require("@iota-pico/pal-nodejs");
const api_1 = require("@iota-pico/api");
(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new core_1.NetworkEndPoint("https", "nodes.thetangle.org", 443);
    // Create a network client from the PAL
    const networkClient = new pal_nodejs_1.NetworkClient(networkEndpoint);
    // Create an API client using the network client and the API version
    const apiClient = new api_1.ApiClient(networkClient);
    try {
        // Make the call to the API
        const response = await apiClient.getNodeInfo();
        // And log the response
        console.log(response);
    }
    catch (err) {
        // Or log an error if it failed
        console.error(err);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Tm9kZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXROb2RlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkJBQTZCO0FBQzdCLDBDQUFrRDtBQUNsRCxzREFBc0Q7QUFDdEQsd0NBQTJDO0FBRTNDLENBQUMsS0FBSztJQUNGLG1EQUFtRDtJQUNuRCxNQUFNLGVBQWUsR0FBRyxJQUFJLHNCQUFlLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRWpGLHVDQUF1QztJQUN2QyxNQUFNLGFBQWEsR0FBRyxJQUFJLDBCQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFekQsb0VBQW9FO0lBQ3BFLE1BQU0sU0FBUyxHQUFHLElBQUksZUFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRS9DLElBQUk7UUFDQSwyQkFBMkI7UUFDM0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0MsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDekI7SUFBQyxPQUFNLEdBQUcsRUFBRTtRQUNULCtCQUErQjtRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCO0FBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9