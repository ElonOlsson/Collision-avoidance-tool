import { loadData }  from './loadData';
import { Voyage, Ship } from './loadData';
import * as React from 'react';
import Header from './components/Header';
import CatVisuals from './components/CatVisuals'

interface State {
    voyages: Voyage[] 
    ships: Ship[]
}
interface Props { 
}

export class Application extends React.Component<Props, State> { 
    state: State = {
        voyages: [],
        ships: []
    };
    constructor(props: Props) {
       super(props);  
    }

    componentDidMount() {
        this.load();
    }

    private async load() {
        
        const data = await loadData();
        //console.log(data.ships);
        //console.log(data.voyages);
        this.setState({
            voyages : data.voyages,
            ships : data.ships
        });
        
    }

    render() {
        
        return <div>
        <Header />
        <CatVisuals voyages={this.state.voyages}
                    ships={this.state.ships} />
        
        </div>;
    }
}
