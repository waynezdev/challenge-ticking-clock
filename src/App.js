import React from 'react';
import Clock from "./Clock";

const App = (props) => {
    return (
        <div>
            <Clock 
                icon="sun.svg"
                timezone={"Sydney/Australia"} 
                date={new Date()} 
            />
        </div>
    );
}

export default App;
