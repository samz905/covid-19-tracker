import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            country: ''
        }
    }

    componentDidMount = async () => {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedCountryData = await fetchData(country);
        this.setState({ data: fetchedCountryData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return(
            <div className={styles.container}>
                <img src='https://i.ibb.co/7QpKsCX/image.png' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;