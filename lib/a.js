var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const IotaPico = __importStar(require("@iota-pico/lib-nodejs/"));
// console.log(IotaPico.NumberHelper.isInteger(false));
// console.log(IotaPico.NumberHelper.isInteger(1));
async function doPow() {
    const networkEndpoint = new IotaPico.NetworkEndPoint("https", "nodes.thetangle.org", undefined, 443);
    const networkClient = new IotaPico.NetworkClient(networkEndpoint, new IotaPico.ConsoleLogger(), 5000);
    const apiClient = new IotaPico.ApiClient(networkClient, "1");
    const networkEndpointPowBox = new IotaPico.NetworkEndPoint("https", "powbox.testnet.iota.org", "/api/v1/commands", 443);
    const networkClientPowBox = new IotaPico.NetworkClient(networkEndpointPowBox);
    const pow = new IotaPico.ProofOfWorkBox(networkClientPowBox, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTAzMDMzNCwiZW1haWwiOiJtYXJ0eW5Ab2JhbnkuY29tIiwiaWF0IjoxNTE5ODgxOTE5LCJpc3MiOiJpb3RhIn0.zNkggCAmZb8wQi7QlcmxxrKKFNnIHLs4danfEWp02XU");
    //const pow = new IotaPico.ProofOfWorkNodeJs();
    await pow.initialize();
    const seed = IotaPico.Hash.fromTrytes(IotaPico.Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));
    const transfers = [
        IotaPico.Transfer.fromParams(IotaPico.Address.fromTrytes(IotaPico.Trytes.fromString("NPDGGSIMKPQSMTAHVWFSLEYVISJGTKOBRVBSXPNLJITKVUAFKKISGB9ZDGJRYVMWCSDIZUNXHZGEXJKWYEGEKVC9BY")), 1, IotaPico.Trytes.fromString("BLAHBLAHBLAHBLAH"), IotaPico.Tag.fromTrytes(IotaPico.Trytes.fromString("THISISATAG")))
    ];
    const transactionClient = new IotaPico.TransactionClient(apiClient, pow);
    const sendTransferResponse = await transactionClient.sendTransfer(seed, 1, 15, transfers);
    console.log(sendTransferResponse);
}
doPow()
    .catch(function (err) {
    console.log(IotaPico.ErrorHelper.format(err, true));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxpRUFBbUQ7QUFFbkQsdURBQXVEO0FBQ3ZELG1EQUFtRDtBQUVuRCxLQUFLO0lBQ0QsTUFBTSxlQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckcsTUFBTSxhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RyxNQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTdELE1BQU0scUJBQXFCLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4SCxNQUFNLG1CQUFtQixHQUFHLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxrTEFBa0wsQ0FBQyxDQUFDO0lBRWpQLCtDQUErQztJQUMvQyxNQUFNLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV2QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDLENBQUM7SUFFdkosTUFBTSxTQUFTLEdBQUc7UUFDZCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FDeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsNEZBQTRGLENBQUMsQ0FBQyxFQUNySixDQUFDLEVBQ0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFDOUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDcEU7S0FDSixDQUFDO0lBRUYsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekUsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVELEtBQUssRUFBRTtLQUNGLEtBQUssQ0FBQyxVQUFVLEdBQUc7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUMsQ0FBQyJ9