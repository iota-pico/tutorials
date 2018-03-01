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
        const transactions = [ 
            data.Hash.fromTrytes(data.Trytes.fromString("V9MSZLPEDELSILGWDWXIZVK9SMYQ9FRFIUCQ9TTHQXEPCXTTAJCRKDCAXNFDDLIOIULKBVRJM9NMZ9999")),
            data.Hash.fromTrytes(data.Trytes.fromString("JMECUJIFAQKYCPMPRATVEFLAKHLHBRFHSJXUKQSZNZCEXVG9EANYIGHBVUTXLBNRCHXLCPT9MPKCA9999")),
            data.Hash.fromTrytes(data.Trytes.fromString("THENWGPTAPZIIDWHQJ9GREHOVPXNTFWTSTEUGMBPHCHVPGPCEOLGHKZWH9FKACAUIMXJIAFVN9TJZ9999"))
        ];

        // Make the call to the transaction client
        const response = await transactionClient.getTransactionsDetails(transactions);

        // And log the response
        response.forEach(transaction => {
            console.log(`Address: ${transaction.address.toTrytes().toString()}`);
            console.log(`Value: ${transaction.value.toNumber()}`);
            console.log(`Obsolete Tag: ${transaction.tag.toTrytes().toString()}`);
            console.log(`Timestamp: ${transaction.timestamp.toNumber()}`);
            console.log(`Current Index: ${transaction.currentIndex.toNumber()}`);
            console.log(`Last Index: ${transaction.lastIndex.toNumber()}`);
            console.log(`Bundle: ${transaction.bundle.toTrytes().toString()}`);
            console.log(`Trunk Transaction: ${transaction.trunkTransaction.toTrytes().toString()}`);
            console.log(`Branch Transaction: ${transaction.branchTransaction.toTrytes().toString()}`);
            console.log(`Tag: ${transaction.tag.toTrytes().toString()}`);
            console.log(`Attachment Timestamp: ${transaction.attachmentTimestamp.toNumber()}`);
            console.log(`Attachment Timestamp Lower Bound: ${transaction.attachmentTimestampLowerBound.toNumber()}`);
            console.log(`Attachment Timestamp Upper Bound: ${transaction.attachmentTimestampUpperBound.toNumber()}`);
            console.log(`Nonce: ${transaction.nonce.toTrytes().toString()}`);
            console.log();
        })
    } catch(err) {
        // Or log an error if it failed
        console.log(core.ErrorHelper.format(err, true));
    }
})();
