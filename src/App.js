import React, {Component} from 'react';
import Clock from "./Clock";

class App extends Component {

   
    state = {latitude: null,
    error: null,
    date: new Date()
    };

    componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({ latitude: position.coords.latitude});
            
        },
        (error) => {

            this.setState({error: "something went wrong"})
        })

    setInterval(() => {
        this.setState({date : new Date()})
    }, 1000)


    }

    

    isItWarm =() => {
        // const { latitude} = this.state;
        // const month = new Date().getMonth() + 1;

        // if (
        // latitude < 0 && (month <3 || month > 9) || 
        // latitude > 0 && (month >=3 || month <=9) || 
        // latitude === 0) {

        //     return true
        // }

        const { latitude } = this.state;

        const month = new Date().getMonth();
    
        if (!latitude) {
    
          return false;
    
        }
    
        if (month >= 2 && month <= 8) {
    
          if (latitude < 0) {
    
            // southern hemisphere during winter
    
            return false;
    
          }
    
          // northern hemisphere during summer
    
          return true;
    
        } else {
    
          if (latitude < 0) {
    
            // southern hemisphere during summer
    
            return true;
    
          }
    
          // northern hemisphere during winter
    
          return false;
    
        }
  
    }


    // weite a getClockIcon method that uses the isItWarm
    // if true return sun.svg
    // if false return snowflake.svg

    getClockIcon = () => {

        if (this.isItWarm()) {

            return "sun.svg"

        } else {
            return "snowflake.svg"
        }


    }


    render() {
        const { latitude, error } = this.state;

        // if (!latitude) {
        //     return null;
        // }
        
        if (error) {
         return ( 
         <div>
                <p>{error}</p>

            </div>
        )
        }

        

        return [
        (<div>

            {latitude}

            <Clock
                icon= {latitude !== null? this.getClockIcon() : null }
                timezone={"Sydney/Australia"}
                date={new Date()}
            />
        </div>),

        (<div>

        {latitude}

        <Clock
            icon= {latitude !== null? this.getClockIcon() : null }
            timezone={"Europ/Rome"}
            date={ new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"})) }
        />
        </div>)

        ]
    }
}

export default App;
