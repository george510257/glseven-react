import React from 'react';
import {AlertComponent, ToastComponent} from "amis";
import AmisComponent from "./component/AmisComponent";

import "amis/lib/themes/default.css"

class App extends React.Component<any, any> {

    render() {
        return (
            <div className="App">
                <ToastComponent key="toast" position={'top-right'}/>
                <AlertComponent key="alert"/>
                <AmisComponent/>
            </div>
        );
    }
}

export default App;
