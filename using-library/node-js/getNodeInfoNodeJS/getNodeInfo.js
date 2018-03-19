var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
// Import the all-in-one library
const IotaPico = __importStar(require("@iota-pico/lib-nodejs"));
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
    }
    catch (err) {
        // Or log an error if it failed
        console.error(err);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Tm9kZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXROb2RlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGdDQUFnQztBQUNoQyxnRUFBa0Q7QUFFbEQsQ0FBQyxLQUFLO0lBQ0YsbURBQW1EO0lBQ25ELE1BQU0sZUFBZSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFMUYsdUNBQXVDO0lBQ3ZDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRWxHLG9FQUFvRTtJQUNwRSxNQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFeEQsSUFBSSxDQUFDO1FBQ0QsMkJBQTJCO1FBQzNCLE1BQU0sUUFBUSxHQUFHLE1BQU0sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRS9DLHVCQUF1QjtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFBQyxLQUFLLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1YsK0JBQStCO1FBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztBQUNMLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==