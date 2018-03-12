var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
define(["require", "exports", "@iota-pico/lib-browser"], function (require, exports, IotaPico) {
    Object.defineProperty(exports, "__esModule", { value: true });
    IotaPico = __importStar(IotaPico);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Tm9kZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXROb2RlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBR0EsQ0FBQyxLQUFLO1FBQ0YsbURBQW1EO1FBQ25ELE1BQU0sZUFBZSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFMUYsdUNBQXVDO1FBQ3ZDLE1BQU0sYUFBYSxHQUFHLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVsRSxvRUFBb0U7UUFDcEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUM7WUFDRCwyQkFBMkI7WUFDM0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFL0MsdUJBQXVCO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUFDLEtBQUssQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDViwrQkFBK0I7WUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9