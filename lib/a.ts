import * as IotaPico from "@iota-pico/lib-nodejs/";

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
        IotaPico.Transfer.fromParams(
            IotaPico.Address.fromTrytes(IotaPico.Trytes.fromString("NPDGGSIMKPQSMTAHVWFSLEYVISJGTKOBRVBSXPNLJITKVUAFKKISGB9ZDGJRYVMWCSDIZUNXHZGEXJKWYEGEKVC9BY")),
            1,
            IotaPico.Trytes.fromString("BLAHBLAHBLAHBLAH"),
            IotaPico.Tag.fromTrytes(IotaPico.Trytes.fromString("THISISATAG"))
        )
    ];

    const transactionClient = new IotaPico.TransactionClient(apiClient, pow);
    const sendTransferResponse = await transactionClient.sendTransfer(seed, 1, 15, transfers);
    console.log(sendTransferResponse);
}

doPow()
    .catch(function (err) {
        console.log(IotaPico.ErrorHelper.format(err, true));
    });

