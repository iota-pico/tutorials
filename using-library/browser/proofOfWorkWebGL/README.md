# IOTA Pico Framework Tutorials - proofOfWork WebGL using vanilla script include

## Introduction

This tutorial will demonstrate using the the proof of work WebGL from the all-in-one library loaded with vanilla script includes.

## Installation

We are going to run the code for this tutorial in the browser, we will not use a module loader.

```shell
npm install @iota-pico/lib-browser
```

## Code

The [index.html](./index.html) contains all the script loading and code.

```html
<script src="./node_modules/big-integer/BigInteger.min.js"></script>
<script src="./node_modules/@iota-pico/lib-browser/pkg/iota-pico-lib-browser.js"></script>
<script>
    (async function () {
        try {
            console.log("Performing proof of work");

            const trinaryString = "999999999...99999999999";
            const minWeightMagnitude = 5;

            console.log("Min Weight Magnitude:", minWeightMagnitude);
            console.log("Input Data:", trinaryString);

            const obj = new IotaPico.ProofOfWorkWebGl();

            // Initialize the proof of work, this might throw and exception if it is using a 
            // method that is not supported
            await obj.initialize();
            // Record the start time
            const start = Date.now();
            // Perform the proof of work
            const newTrytes = await obj.singlePow(IotaPico.Trytes.fromString(trinaryString), minWeightMagnitude);
            // Record the end time
            const end = Date.now();
            const newTrytesString = newTrytes.toString();
            // And log the response
            console.log("Output Data:", newTrytesString);
            // Just the nonce
            console.log("Nonce only:", newTrytesString.substr(-81));
            // Time taken
            console.log("Time taken:", end - start, "ms");
        } catch (err) {
            // Or log an error if it failed
            console.error(err);
        }
    })();
</script>
```

## Running The Code

Now you can run the code by opening the web page in your browser, we suggest running.

```shell
npm run serve
```
You should see something similar to the following output in the console:

```json
Performing proof of work
Min Weight Magnitude: 5
Input Data: 999999999999...9999999999999999999999999999999999
Output Data: 999999999999...99999999LA999I999999999999999999999
Time taken: 2419 ms
```

