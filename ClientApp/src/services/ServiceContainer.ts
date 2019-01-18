import { NetworkService } from "./NetworkService";

export interface ServiceContainer {
    networkService: NetworkService;
}

export class BasicServiceContainer implements ServiceContainer {

    private _networkService: NetworkService;
    get networkService(): NetworkService {
        return this._networkService;
    }

    constructor(networkService: NetworkService) {
        this._networkService = networkService;
    }
}

/**
 * An empty ServiceContainer implementation, used to satisfy React's context _requiring_ a default
 * object immediately upon construction.
 */
export class DefaultServiceContainer implements ServiceContainer {
    networkService: NetworkService;
}