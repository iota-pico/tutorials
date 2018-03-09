import * as IotaPico from "@iota-pico/lib-browser";

export async function getNodeInfo(): Promise<void> {
    const networkEndpoint = new IotaPico.NetworkEndPoint("https", "nodes.thetangle.org", undefined, 443);
    const networkClient = new IotaPico.NetworkClient(networkEndpoint);
    const apiClient = new IotaPico.ApiClient(networkClient);
    apiClient.getNodeInfo()
        .then((response: IotaPico.IGetNodeInfoResponse) => {
            console.log(response);
        })
        .catch((err: Error) => {
            console.error(err);
        });
}

getNodeInfo();