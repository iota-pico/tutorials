// Import the all-in-one library
import * as IotaPico from "@iota-pico/lib-nodejs";

(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new IotaPico.NetworkEndPoint("https", "field.carriota.com", 443);

    const consoleLogger = new IotaPico.ConsoleLogger();

    // Create a network client from the PAL
    const networkClient = new IotaPico.NetworkClient(networkEndpoint);

    // Create an API client using the network client and the API version
    const apiClient = new IotaPico.ApiClient(networkClient);

    try {
        const pow = new IotaPico.ProofOfWorkNodeJs();
        await pow.initialize();

        const transactionClient = new IotaPico.TransactionClient(apiClient, pow, undefined, undefined, consoleLogger);

        const seed = IotaPico.Hash.fromTrytes(IotaPico.Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

        const transfers: IotaPico.Transfer[] = [
            IotaPico.Transfer.fromParams(
                IotaPico.Address.fromTrytes(IotaPico.Trytes.fromString("NPDGGSIMKPQSMTAHVWFSLEYVISJGTKOBRVBSXPNLJITKVUAFKKISGB9ZDGJRYVMWCSDIZUNXHZGEXJKWY")),
                1,
                IotaPico.Trytes.fromString("BLAHBLAHBLAHBLAH"),
                IotaPico.Tag.fromTrytes(IotaPico.Trytes.fromString("THISISATAG"))
            )
        ];

        // Make the call to the transaction client
        const response = await transactionClient.sendTransfer(seed, 1, 15, transfers);                                                                                          

        // And log the response
        consoleLogger.log("Completed Successfully", response);
    } catch(err) {
        // Or log an error if it failed
        consoleLogger.error("Error During Transfer", err);
    }
})();
