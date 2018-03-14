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
        const networkEndpoint = new IotaPico.NetworkEndPoint("https", "field.carriota.com", 443);
        // Create a network client from the PAL
        const networkClient = IotaPico.NetworkClientFactory.instance().create("default", networkEndpoint);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Tm9kZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXROb2RlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBR0EsQ0FBQyxLQUFLO1FBQ0YsbURBQW1EO1FBQ25ELE1BQU0sZUFBZSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFekYsdUNBQXVDO1FBQ3ZDLE1BQU0sYUFBYSxHQUFHLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVsRSxvRUFBb0U7UUFDcEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQztZQUNELDJCQUEyQjtZQUMzQixNQUFNLFFBQVEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUUvQyx1QkFBdUI7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQUMsS0FBSyxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNWLCtCQUErQjtZQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDIn0=