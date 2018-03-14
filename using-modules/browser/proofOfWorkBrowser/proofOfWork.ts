// Import the classes we need
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { ProofOfWorkWebGl as ProofOfWork } from "@iota-pico/pow-webgl/dist/proofOfWorkWebGl";

(async function () {
    try {
        console.log("Performing proof of work");

        const trinaryString = "99999999999999999999999999999999999999IOTA9ECO99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
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
