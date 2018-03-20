# IOTA Pico Framework Tutorials - proofOfWork Browser

## Introduction

This tutorial will demonstrate using the different proof of work implementations that can be used in a browser.

## Installation

We are going to run the code for this tutorial in the browser so we have a choice of which proof of work module we can use, either the [JavaScript](https://github.com/iotaeco/iota-pico-pow-js), [WebGL](https://github.com/iotaeco/iota-pico-pow-webgl) or [WebAssembly](https://github.com/iotaeco/iota-pico-pow-wasm)  implementation.

```shell
npm install @iota-pico/pow-js --save

or

npm install @iota-pico/pow-wasm --save

or

npm install @iota-pico/pow-webgl --save
```

@iota-pico/pow-js is a pure JavaScript implementation so can be very slow, but good for debugging.

@iota-pico/pow-wasm is a port of the [ccurl](https://github.com/iotaledger/ccurl/) source which is compiled using emscripten to be a WebAssembly.

@iota-pico/pow-webgl is a port of the [ccurl.lib.js](https://github.com/iotaledger/curl.lib.js) WebGL2 implementation.

These module will also bring with them [@iota-pico/core](https://github.com/iotaeco/iota-pico-core), [@iota-pico/data](https://github.com/iotaeco/iota-pico-data) and [@iota-pico/crypto](https://github.com/iotaeco/iota-pico-crypto) libraries for some additional functionality.

## Code

The [index.html](./index.html) contains the loader configuration and initiates the code, [proofOfWork.ts](./proofOfWork.ts) shows some example code in TypeScript, this is compiled to [proofOfWork.js](./proofOfWork.js) before execution.

```typescript
// Import the classes we need
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { ProofOfWorkWebGl as ProofOfWork } from "@iota-pico/pow-webgl/dist/proofOfWorkWebGl";

(async function () {
    try {
        console.log("Performing proof of work");

        const trinaryString = "999999999...99999";
        const minWeightMagnitude = 5;

        console.log("Min Weight Magnitude:", minWeightMagnitude);
        console.log("Input Data:", trinaryString);

        const obj = new ProofOfWork();

        // Initialize the proof of work, this might throw and exception if it is using a 
        // method that is not supported
        await obj.initialize();

        // Record the start time
        const start = Date.now();
        // Perform the proof of work
        const newTrytes = await obj.singlePow(Trytes.fromString(trinaryString), minWeightMagnitude);
        // Record the end time
        const end = Date.now();

        const newTrytesString = newTrytes.toString();

        // And log the response
        console.log("Output Data:", newTrytesString);

        // Just the nonce
        console.log("Nonce only:", newTrytesString.substr(-81));

        // Time taken
        console.log("Time taken:", end-start, "ms");
    } catch(err) {
        // Or log an error if it failed
        console.error(err);
    }
})();

```

## Running The Code

Now you can run the code by opening the web page in your browser, we suggest running.

```shell
npm run serve
```
You should see something similar to the following output in the console:

```
Performing proof of work
Min Weight Magnitude: 5
Input Data: 99999999999999999999999999999999999999IOTA9ECO9999999999...999999999
Output Data: 99999999999999999999999999999999999999IOTA9ECO999999999999999...999999999999999999999999999999999999999999999999999999999999WZ99999999OA999999999999999
Nonce only: 999999999999999999999999999999999999999999999999999999WZ99999999OA999999999999999
Time taken: 4128 ms
```

## Final Remarks

By installing an alternative pow module and just changing the require line you can try out the alternatives implementations, the rest of the code stays the same.

```typescript
import { ProofOfWorkJs as ProofOfWork } from "@iota-pico/pow-js/dist/proofOfWorkJs";
```
or
```typescript
import { ProofOfWorkWasm as ProofOfWork } from "@iota-pico/pow-wasm/dist/proofOfWorkWasm";
```
or
```typescript
import { proofOfWorkWebGl as ProofOfWork } from "@iota-pico/pow-webgl/dist/proofOfWorkWebGl";
```

