var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
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
        // Setup the proof of work using Ccurl
        const pow = new IotaPico.ProofOfWorkNodeJs();
        await pow.initialize();
        // Create the transaction client with the proof of work module
        const transactionClient = new IotaPico.TransactionClient(apiClient, pow, undefined, undefined, consoleLogger);
        // This is the seed we are going to send the transfer from
        const seed = IotaPico.Hash.fromTrytes(IotaPico.Trytes.fromString("SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9SEED9S"));
        // The transfers we are going to make destination address, amount, message and tag
        const transfers = [
            IotaPico.Transfer.fromParams(IotaPico.Address.fromTrytes(IotaPico.Trytes.fromString("NPDGGSIMKPQSMTAHVWFSLEYVISJGTKOBRVBSXPNLJITKVUAFKKISGB9ZDGJRYVMWCSDIZUNXHZGEXJKWY")), 0, IotaPico.Trytes.fromString("BLAHBLAHBLAHBLAH"), IotaPico.Tag.fromTrytes(IotaPico.Trytes.fromString("THISISATAG")))
        ];
        // Make the call to the transaction client
        const response = await transactionClient.sendTransfer(seed, 1, 15, transfers);
        // And log the response
        consoleLogger.log("Completed Successfully", response);
        consoleLogger.log(`You can now view your transaction bundle online at https://thetangle.org/bundle/${response.transactions[0].bundle}`);
    }
    catch (err) {
        // Or log an error if it failed
        consoleLogger.error("Error During Transfer", err);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZFRyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VuZFRyYW5zZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZ0NBQWdDO0FBQ2hDLGdFQUFrRDtBQUVsRCxDQUFDLEtBQUs7SUFDRixtREFBbUQ7SUFDbkQsTUFBTSxlQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUUxRixNQUFNLGFBQWEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUVuRCx1Q0FBdUM7SUFDdkMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFbEcsb0VBQW9FO0lBQ3BFLE1BQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV4RCxJQUFJO1FBQ0Esc0NBQXNDO1FBQ3RDLE1BQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDN0MsTUFBTSxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFdkIsOERBQThEO1FBQzlELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxRQUFRLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTlHLDBEQUEwRDtRQUMxRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDLENBQUM7UUFFdkosa0ZBQWtGO1FBQ2xGLE1BQU0sU0FBUyxHQUF3QjtZQUNuQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FDeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsbUZBQW1GLENBQUMsQ0FBQyxFQUM1SSxDQUFDLEVBQ0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFDOUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDcEU7U0FDSixDQUFDO1FBRUYsMENBQTBDO1FBQzFDLE1BQU0sUUFBUSxHQUFHLE1BQU0saUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTlFLHVCQUF1QjtRQUN2QixhQUFhLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELGFBQWEsQ0FBQyxHQUFHLENBQUMsbUZBQW1GLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUMzSTtJQUFDLE9BQU0sR0FBRyxFQUFFO1FBQ1QsK0JBQStCO1FBQy9CLGFBQWEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDckQ7QUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDIn0=