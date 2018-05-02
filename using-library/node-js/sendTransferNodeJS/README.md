# IOTA Pico Framework Tutorials - sendTransfer API

## Introduction

This tutorial will demonstrate using the sendTransfer API on the NodeJS platform using the all-in-one library. The proof of work will be carried out using the Ccurl library.

## Installation

### API Library

To install the all-in-one library we simply use npm/yarn to install it.

```shell
npm install @iota-pico/lib-nodejs --save
```

## Code

[sendTransfer.ts](./sendTransfer.ts) shows some example code in TypeScript, this is compiled to [sendTransfer.js](./sendTransfer.js) before execution.

```typescript
// Import the all-in-one library
import * as IotaPico from "@iota-pico/lib-nodejs";

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
        const transfers: IotaPico.Transfer[] = [
            IotaPico.Transfer.fromParams(
                IotaPico.Address.fromTrytes(IotaPico.Trytes.fromString("NPDGGSIMKPQSMTAHVWFSLEYVISJGTKOBRVBSXPNLJITKVUAFKKISGB9ZDGJRYVMWCSDIZUNXHZGEXJKWY")),
                0,
                IotaPico.Trytes.fromString("BLAHBLAHBLAHBLAH"),
                IotaPico.Tag.fromTrytes(IotaPico.Trytes.fromString("THISISATAG"))
            )
        ];

        // Make the call to the transaction client
        const response = await transactionClient.sendTransfer(seed, 1, 15, transfers);                                                                                          

        // And log the response
        consoleLogger.log("Completed Successfully", response);
        consoleLogger.log(`You can now view your transaction bundle online at https://thetangle.org/bundle/${response.transactions[0].bundle}`);
    } catch(err) {
        // Or log an error if it failed
        consoleLogger.error("Error During Transfer", err);
    }
})();
```

## Running The Code

Now you can run the code using NodeJS.

```shell
node sendTransfer
```
You will see lots of logging as the transaction client performs its operations, on success you should be presented with something similar to the output below:

```js
Completed Successfully
{
    transactions: [
    {
        signatureMessageFragment: "BLAHBLAHBLAHBLAH99...99999999999999999999999999999999999999999"
        address: "NPDGGSIMKPQSMTAHVWFSLEYVISJGTKOBRVBSXPNLJITKVUAFKKISGB9ZDGJRYVMWCSDIZUNXHZGEXJKWY"
        value: 0
        obsoleteTag: "BIISISATAG99999999999999999"
        timestamp: 1525239440
        currentIndex: 0
        lastIndex: 0
        bundle: "FCGTFNDZDUKLKOGWVOIFPRCG9UIHXQICIZIKTIYXCBEWLDAYAFKAGTGDZMRICQUGHBHKGKECGQOCZZGOZ"
        trunkTransaction: "RYRTGUFBPJAAKQMBVMVYWMAMJJQHGXQOIGSYQHIERRJOIFLRXKGFRVFHSKXSNGMMUGR9DBZSOUONA9999"
        branchTransaction: "ZSGLEDSETDMU9VQUUGTCCGSBSDVVOIZSNRUNXOPBYR9MUHWQDPVPGPANLXRVWGTNEAWCSWEUZFAAA9999"
        tag: "THISISATAG99999999999999999"
        attachmentTimestamp: 1525239442332
        attachmentTimestampLowerBound: 0
        attachmentTimestampUpperBound: 3812798742493
        nonce: "WCA9999999LL999999999999999"
    }
    ]
}

You can now view your transaction bundle online at https://thetangle.org/bundle/FCGTFNDZDUKLKOGWVOIFPRCG9UIHXQICIZIKTIYXCBEWLDAYAFKAGTGDZMRICQUGHBHKGKECGQOCZZGOZ
```

