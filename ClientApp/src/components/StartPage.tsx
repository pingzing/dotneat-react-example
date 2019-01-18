import * as React from "react";
import { Link } from "react-router-dom";
import "./StartPage.scss";
import "./Common.scss";
import { NetworkService } from "../services/NetworkService";
import { ServiceContainerContextConsumer } from "../app";

interface AppProp { }

interface AppState {
    text: string;
}

class App extends React.Component<AppProp, AppState> {
    constructor(props: AppProp) {
        super(props);        
    }

    async handlePing(e: React.MouseEvent, networkService: NetworkService) {
        e.preventDefault();
        let result = await networkService.ping();
        let now = new Date(Date.now());
        this.setState({ text: `${now.toISOString()}: Ping response: ${result}` });
    }    

    render() {
        return (
            <ServiceContainerContextConsumer>
                {context => (
                    <div>                                                    
                        <input className="ping-box" disabled value={this.state.text}></input>
                        <br />                            
                        <button onClick={e => this.handlePing(e, context.networkService)}>Click me to ping!</button>                                                    
                    </div>
                )}
            </ServiceContainerContextConsumer>
        );
    }
}

export default App;
