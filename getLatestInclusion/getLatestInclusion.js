// Import the classes we need
const core = require("@iota-pico/core");
const api = require("@iota-pico/api");
const pal = require("@iota-pico/pal-nodejs");
const data = require("@iota-pico/data");
const business = require("@iota-pico/business");

(async function () {
    // Create an end point to communicate with the node
    const networkEndpoint = new core.NetworkEndPoint("https", "nodes.thetangle.org", undefined, 443);

    // Create a network client from the PAL
    const networkClient = new pal.NetworkClient(networkEndpoint);

    // Create an API client using the network client and the API version
    const apiClient = new api.ApiClient(networkClient, "1");

    // Create a transaction client 
    const transactionClient = new business.TransactionClient(apiClient);

    try {
        const transactions = [ 
            data.Hash.fromTrytes(data.Trytes.fromString("V9MSZLPEDELSILGWDWXIZVK9SMYQ9FRFIUCQ9TTHQXEPCXTTAJCRKDCAXNFDDLIOIULKBVRJM9NMZ9999")),
            data.Hash.fromTrytes(data.Trytes.fromString("JMECUJIFAQKYCPMPRATVEFLAKHLHBRFHSJXUKQSZNZCEXVG9EANYIGHBVUTXLBNRCHXLCPT9MPKCA9999")),
            data.Hash.fromTrytes(data.Trytes.fromString("THENWGPTAPZIIDWHQJ9GREHOVPXNTFWTSTEUGMBPHCHVPGPCEOLGHKZWH9FKACAUIMXJIAFVN9TJZ9999"))
        ];

        // Make the call to the transaction client
        const response = await transactionClient.getLatestInclusion(transactions);

        // And log the response
        response.forEach(state => {
            console.log(state);
        })
    } catch(err) {
        // Or log an error if it failed
        console.log(core.ErrorHelper.format(err, true));
    }
})();
