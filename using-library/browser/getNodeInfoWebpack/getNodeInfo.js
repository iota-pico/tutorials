var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
// Import the all-in-one library
const IotaPico = __importStar(require("@iota-pico/lib-browser"));
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
    }
    catch (err) {
        // Or log an error if it failed
        console.error(err);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Tm9kZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXROb2RlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGdDQUFnQztBQUNoQyxpRUFBbUQ7QUFFbkQsQ0FBQyxLQUFLO0lBQ0YsbURBQW1EO0lBQ25ELE1BQU0sZUFBZSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFMUYsdUNBQXVDO0lBQ3ZDLE1BQU0sYUFBYSxHQUFHLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVsRSxvRUFBb0U7SUFDcEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUU3RCxJQUFJLENBQUM7UUFDRCwyQkFBMkI7UUFDM0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0MsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUFDLEtBQUssQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDViwrQkFBK0I7UUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0FBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9