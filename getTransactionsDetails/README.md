# IOTA Pico Framework Tutorials - findTransactions using TransactionClient

## Introduction

This tutorial will demonstrate using the findTransactions method of TransactionClient on the NodeJS platform.

## Installation

Install the necessary dependencies.

```shell
npm install @iota-pico/core @iota-pico/api @iota-pico/data @iota-pico/business @iota-pico/pal-nodejs --save
```

## Code

Create the file findTransactions.js and copy the following into it (or grab the source [here](./findTransactions.js)).

```js
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
        // Fill in any data for the search, if you supply multiple values the intersection of the resulting transactions is returned
        const bundles = [ 
            data.Hash.create(data.Trytes.fromString("XMNKZSHVYZSHCHENJHJ9IBLHILZUUXHP9EVKNUNJKNEYABGWWLJSVZGFIMHLLDONJEDXBN9HGAXLTLQRC"))
        ];

        const addresses = [ 
            // data.Address.create(data.Trytes.fromString("MGCBEIBTRCXOVCEZKHAGGGA9KMFCEPARA9KDB9MVYMDBPTJF9PCCLKXDUEMDXQFXQOVGDS9MVUUYUUHDZ"))
        ];

        const tags = [ 
            // data.Tag.create(data.Trytes.fromString("IOTA"))
        ];

        const approvees = [ 
            // data.Hash.create(data.Trytes.fromString("OMNVLYSUGZDYJYTWMVHJYFUOCHFSUMCTRMVBQLRHBHK9LFCCPRSYINQTIHGZDDGADFOGNHIZVKJY99999"))
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
```

## Running The Code

Now you can run the code using NodeJS.

```shell
node findTransactions
```
You should see something similar to the following output:

```js
IPDZLL9VEBHCEFMZWJBLOPXWTLT9GSSHR9PCXWXZKYNRSYJBQWLGNIQKNLCLMH9FJG9HCHO9XKXO99999
```

## Final Remarks

The TransactionClient is one level above the standard APIClient and strongly types all the objects passed to and from it, it also provides validation of parameters. In addition some of the methods include additional logic to process the data.