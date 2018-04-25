System.register(["@iota-pico/lib-browser"], function (exports_1, context_1) {
    var __moduleName = context_1 && context_1.id;
    var IotaPico;
    return {
        setters: [
            function (IotaPico_1) {
                IotaPico = IotaPico_1;
            }
        ],
        execute: function () {
            (async function () {
                // Create an end point to communicate with the node
                const networkEndpoint = new IotaPico.NetworkEndPoint("https", "nodes.thetangle.org", 443);
                // Create a network client from the PAL
                const networkClient = IotaPico.NetworkClientFactory.instance().create("default", networkEndpoint);
                // Create an API client using the network client and the API version
                const apiClient = new IotaPico.ApiClient(networkClient);
                try {
                    // Make the call to the API
                    const response = await apiClient.getNodeInfo();
                    // And log the response
                    console.log(JSON.stringify(response, undefined, "\t"));
                }
                catch (err) {
                    // Or log an error if it failed
                    console.error(err);
                }
            })();
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Tm9kZUluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXROb2RlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1lBR0EsQ0FBQyxLQUFLO2dCQUNGLG1EQUFtRDtnQkFDbkQsTUFBTSxlQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFMUYsdUNBQXVDO2dCQUN2QyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFFbEcsb0VBQW9FO2dCQUNwRSxNQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRXhELElBQUksQ0FBQztvQkFDRCwyQkFBMkI7b0JBQzNCLE1BQU0sUUFBUSxHQUFHLE1BQU0sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUUvQyx1QkFBdUI7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNELENBQUM7Z0JBQUMsS0FBSyxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDViwrQkFBK0I7b0JBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7WUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ0wsQ0FBQyJ9