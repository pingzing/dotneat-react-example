import * as React from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import StartPage from "./components/StartPage";
import { NetworkService, ServiceCoreNetworkService } from "./services/NetworkService";
import { ServiceContainer, BasicServiceContainer, DefaultServiceContainer } from "./services/ServiceContainer";

// Main:
const browserHistory = createBrowserHistory();
const networkService: NetworkService = new ServiceCoreNetworkService();
const serviceContainer: ServiceContainer = new BasicServiceContainer(networkService);

const ServiceContainerContext = React.createContext<ServiceContainer>(new DefaultServiceContainer());
export const ServiceContainerContextProvider = ServiceContainerContext.Provider;
export const ServiceContainerContextConsumer = ServiceContainerContext.Consumer;

interface AppProps { }

interface AppState { }

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return <ServiceContainerContextProvider value={serviceContainer}>
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/" component={StartPage} />
                </Switch>
            </Router>
        </ServiceContainerContextProvider>        
    }
}