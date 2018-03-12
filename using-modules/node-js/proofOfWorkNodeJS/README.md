# IOTA Pico Framework Tutorials - proofOfWork

## Introduction

This tutorial will demonstrate using the different proof of work implementations that can be used in NodeJS.

## Installation

We are going to run the code for this tutorial on NodeJS so we have a choice of which proof of work module we can use, either the [JavaScript](https://github.com/iotaeco/iota-pico-pow-js), [NodeJS](https://github.com/iotaeco/iota-pico-pow-nodejs) or [WebAssembly](https://github.com/iotaeco/iota-pico-pow-wasm)  implementation. There is also a [WebGL](https://github.com/iotaeco/iota-pico-pow-webgl) version but this will only work when used in the browser.

```shell
npm install @iota-pico/pow-js --save

or

npm install @iota-pico/pow-nodejs --save

or

npm install @iota-pico/pow-wasm --save
```

@iota-pico/pow-js is a pure JavaScript implementation so can be very slow, but good for debugging.

@iota-pico/pow-nodejs uses the IOTA [ccurl](https://github.com/iotaledger/ccurl/) binaries.

@iota-pico/pow-wasm is a port of the [ccurl](https://github.com/iotaledger/ccurl/) source which is compiled using emscripten to be a WebAssembly.

These module will also bring with them [@iota-pico/core](https://github.com/iotaeco/iota-pico-core), [@iota-pico/data](https://github.com/iotaeco/iota-pico-data) and [@iota-pico/crypto](https://github.com/iotaeco/iota-pico-crypto) libraries for some additional functionality.

## Code

[proofOfWork.ts](./proofOfWork.ts) shows some example code in TypeScript, this is compiled to [proofOfWork.js](./proofOfWork.js) before execution.

```typescript
// Import the classes we need
import { Trytes } from "@iota-pico/data";
import { ProofOfWorkNodeJs as ProofOfWork } from "@iota-pico/pow-nodejs";

(async function () {
    try {
        console.log("Performing proof of work");

        const trinaryString = "999999999999...99999";
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
        const newTrytes = await obj.pow(undefined, undefined, [ Trytes.fromString(trinaryString) ], minWeightMagnitude);
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

Now you can run the code using NodeJS.

```shell
node proofOfWork
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
import { ProofOfWorkNodeJs as ProofOfWork } from "@iota-pico/pow-nodejs/dist/proofOfWorkNodeJs";
```
or
```typescript
import { ProofOfWorkWasm as ProofOfWork } from "@iota-pico/pow-wasm/dist/proofOfWorkWasm";
```
or
```typescript
import { proofOfWorkWebGl as ProofOfWork } from "@iota-pico/pow-webgl/dist/proofOfWorkWebGl";
```



In addition there is the [WebGL](https://github.com/iotaeco/iota-pico-pow-webgl) version but that requires a browser with WebGL implemented so will not work with this NodeJS tutorial.