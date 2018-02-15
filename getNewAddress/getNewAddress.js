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
        const seed = data.Hash.create(data.Trytes.create("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

        const start = new Date().getTime();
        // Make the call to the transaction client
        const response = await transactionClient.getNewAddress(seed, 1, true, 15, business.AddressSecurity.low, true);

        const end = new Date().getTime();
        // And log the response
        response.forEach(address => {
            console.log(address.toTrytesWithChecksum().toString());
        })
        console.log((end - start)/15);
    } catch (err) {
        // Or log an error if it failed
        console.log(core.ErrorHelper.format(err, true));
    }
})();
