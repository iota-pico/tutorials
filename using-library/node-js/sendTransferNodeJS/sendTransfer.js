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
    const consoleLogger = new IotaPico.ConsoleLogger();
    // Create a network client from the PAL
    const networkClient = IotaPico.NetworkClientFactory.instance().create("default", networkEndpoint);
    // Create an API client using the network client and the API version
    const apiClient = new IotaPico.ApiClient(networkClient);
    try {
        const pow = new IotaPico.ProofOfWorkNodeJs();
        await pow.initialize();
        const transactionClient = new IotaPico.TransactionClient(apiClient, pow, undefined, undefined, consoleLogger);
        const seed = IotaPico.Hash.fromTrytes(IotaPico.Trytes.fromString("SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9S"));
        const transfers = [
            IotaPico.Transfer.fromParams(IotaPico.Address.fromTrytes(IotaPico.Trytes.fromString("NPDGGSIMKPQSMTAHVWFSLEYVISJGTKOBRVBSXPNLJITKVUAFKKISGB9ZDGJRYVMWCSDIZUNXHZGEXJKWY")), 1, IotaPico.Trytes.fromString("BLAHBLAHBLAHBLAH"), IotaPico.Tag.fromTrytes(IotaPico.Trytes.fromString("THISISATAG")))
        ];
        // Make the call to the transaction client
        const response = await transactionClient.sendTransfer(seed, 1, 15, transfers);
        // And log the response
        consoleLogger.log("Completed Successfully", response);
    }
    catch (err) {
        // Or log an error if it failed
        consoleLogger.error("Error During Transfer", err);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZFRyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VuZFRyYW5zZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZ0NBQWdDO0FBQ2hDLGdFQUFrRDtBQUVsRCxDQUFDLEtBQUs7SUFDRixtREFBbUQ7SUFDbkQsTUFBTSxlQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUUxRixNQUFNLGFBQWEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUVuRCx1Q0FBdUM7SUFDdkMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFbEcsb0VBQW9FO0lBQ3BFLE1BQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV4RCxJQUFJLENBQUM7UUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdDLE1BQU0sR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXZCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxRQUFRLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTlHLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLG1GQUFtRixDQUFDLENBQUMsQ0FBQztRQUV2SixNQUFNLFNBQVMsR0FBd0I7WUFDbkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQ3hCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLG1GQUFtRixDQUFDLENBQUMsRUFDNUksQ0FBQyxFQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQzlDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQ3BFO1NBQ0osQ0FBQztRQUVGLDBDQUEwQztRQUMxQyxNQUFNLFFBQVEsR0FBRyxNQUFNLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU5RSx1QkFBdUI7UUFDdkIsYUFBYSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQUMsS0FBSyxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNWLCtCQUErQjtRQUMvQixhQUFhLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7QUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDIn0=