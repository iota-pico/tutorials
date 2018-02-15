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
        // Fill in any data for the search, if you supply multiple values the intersection of the resulting transactions is returned
        const bundles = [ 
            data.Hash.create(data.Trytes.create("XMNKZSHVYZSHCHENJHJ9IBLHILZUUXHP9EVKNUNJKNEYABGWWLJSVZGFIMHLLDONJEDXBN9HGAXLTLQRC"))
        ];

        const addresses = [ 
            // data.Address.create(data.Trytes.create("MGCBEIBTRCXOVCEZKHAGGGA9KMFCEPARA9KDB9MVYMDBPTJF9PCCLKXDUEMDXQFXQOVGDS9MVUUYUUHDZ"))
        ];

        const tags = [ 
            // data.Tag.create(data.Trytes.create("IOTA"))
        ];

        const approvees = [ 
            // data.Hash.create(data.Trytes.create("OMNVLYSUGZDYJYTWMVHJYFUOCHFSUMCTRMVBQLRHBHK9LFCCPRSYINQTIHGZDDGADFOGNHIZVKJY99999"))
        ];

        // Make the call to the transaction client
        const response = await transactionClient.findTransactions(bundles, addresses, tags, approvees);

        // And log the response
        response.forEach(hash => {
            console.log(hash.toTrytes().toString());
        })
    } catch(err) {
        // Or log an error if it failed
        console.log(core.ErrorHelper.format(err, true));
    }
})();
