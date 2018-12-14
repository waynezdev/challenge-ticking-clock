import React from 'react';
import Clock from "./Clock";

const App = (props) => {
    return (
        <div>
            <Clock location="Sydney/Australia" date={new Date()} />
        </div>
    );
}

export default App;
