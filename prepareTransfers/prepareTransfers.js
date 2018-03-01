// Import the classes we need
const core = require("@iota-pico/core");
const api = require("@iota-pico/api");
const pal = require("@iota-pico/pal-nodejs");
const data = require("@iota-pico/data");
const business = require("@iota-pico/business");

(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new core.NetworkEndPoint("http", "n1.iota.eco", undefined, 14265);

    // Create a network client from the PAL
    const networkClient = new pal.NetworkClient(networkEndpoint);

    // Create an API client using the network client and the API version
    const apiClient = new api.ApiClient(networkClient, "1");

    // Create a transaction client 
    const transactionClient = new business.TransactionClient(apiClient);

    try {
        const seed = data.Hash.fromTrytes(data.Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

        const inputs = [
            data.Input.fromParams(data.Address.fromTrytes(data.Trytes.fromString("GGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD")),
                data.AddressSecurity.medium,
                0,
                43)
        ];

        // Make the call to the transaction client
        const response = await transactionClient.prepareTransfers(seed, [
            data.Transfer.fromParams(
                data.Address.fromTrytes(data.Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
                44,
                data.Trytes.fromString("BLAHBLAHBLAHBLAH"),
                data.Tag.fromTrytes(data.Trytes.fromString("THISISATAG"))
            )
        ], undefined, undefined, data.AddressSecurity.medium, undefined);

        // And log the response
        response.forEach(r => {
            console.log(r.toString());
        });
    } catch (err) {
        // Or log an error if it failed
        console.log(core.ErrorHelper.format(err, true));
    }
})();
