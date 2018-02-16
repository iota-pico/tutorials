# IOTA Pico Framework Tutorials - getTransactionsInProgress using TransactionClient

## Introduction

This tutorial will demonstrate using the getTransactionsInProgress method of TransactionClient on the NodeJS platform.

## Installation

Install the necessary dependencies.

```shell
npm install @iota-pico/core @iota-pico/api @iota-pico/data @iota-pico/business @iota-pico/pal-nodejs --save
```

## Code

Create the file getTransactionsInProgress.js and copy the following into it (or grab the source [here](./getTransactionsInProgress.js).

```js
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
        // Make the call to the transaction client
        const response = await transactionClient.getTransactionsInProgress();

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
node getTransactionsInProgress
```
You should see something similar to the following output:

```js
ZWRTISEMRXWOOYFAAYRIXWKN9ZSQPZYGLNUPLAEXGFOFOERRKCUIDIRDUGSTACDNDMEZDVOZMZKF99999
VFEHAQRF9A9GPKUJOOOTJVYR9DRIRUJODS9FIULOGAESSXSO9DTXVMVLDQGYLLSFEXLHEZPPMHY9Z9999
QW9OUJBVMVY9UAIFDBZWFSSEC9AJ9OFBFKGMXFRFSMPLNXPLRTRLXPQQICXFIOHDNSTGCCFAPFXIZ9999
MDJGWRDXKAPDQHMCRBJI9ACEGQ9LTYTY9KKJOTPNWWQSEJFFA9WAKXPJZFKFTRIYETMHDOUVBMDXA9999
9OBYQUHWQKNXDMIM9GSHOXYHCZFIAVWCWKDMQFKYTFRLJEWFN9TBONYKESPSAGKWRLCEAMR9ZNAQ99999
EWDASFBXQQOIDSPITXPXJIZWVFIMYWNKLRRKRPLODHIMLEUCZKITBWNUQJESEQPSQSISZUML9ONM99999
SUOIPZLTVAMJTNJV9MVXELCFCGZYJHDAMVROYCXCCIOZOSZJABJOOTLCDPZCCDPMGXPFZ9LWRYYR99999
LPEHNEARD99GC9WPHQ9QMBABWEZDEF9ZZZFRXTTEKNGFJVXJIIWRYRNG9BGDANOARNAJAIZZZPQZ99999
CCUKPOSGNTAKHFCYUQAQBHTTUWL9VBDMHY9U9DOMR9K9DYNLNZRHEF9ZFP9GKIZBXZ9BNKGYJKGDA9999
ITYMDCJTFHYKCOMZOWEZXSLSFD9SJJARBJZDVEMWAMGNCUIBUILZFFXHKDFXHRTKKEVFYLFYCSPRZ9999
DHJKVHMOAGYRLOXKKBXSLSGYCRVVLMYAULXREYBQDCEBKUNBUOLESYUGLNNTIMNSMLZJUZQUUXRMA9999
NTV9XOSZYJZMRWUKLZATJMKSVEAYLKP9HSM9NDGSDWNXWKHSSSIVWUCKYKGPYFPMACYFXK9ZBKCOZ9999
```

## Final Remarks

The TransactionClient is one level above the standard APIClient and strongly types all the objects passed to and from it, it also provides validation of parameters. In addition some of the methods include additional logic to process the data.