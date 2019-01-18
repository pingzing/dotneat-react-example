export interface NetworkService {
    /**
     * Ping the backend server.
     */
    ping(): Promise<boolean>;
}

export class ServiceCoreNetworkService implements NetworkService {
    async ping(): Promise<boolean> {
        let response = await fetch("./ping");
        return response.ok === true;
    }
}