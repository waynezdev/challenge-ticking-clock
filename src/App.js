import React from 'react';
import Clock from "./Clock";

const App = (props) => {
    return (
        <div>
            <Clock 
                timezone={Intl.DateTimeFormat().resolvedOptions().timeZone} 
                date={new Date()} 
            />
        </div>
    );
}

export default App;
