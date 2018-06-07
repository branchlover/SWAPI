import React from 'react';
import {SwlisDetail} from './swdetail';
import {HashRouter as Router, Link} from 'react-router-dom';

export class List extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            data:  ''
        }
    }
    handleClick(event) {
        this.setState({ data: event });
    }
    render(){
        return (
            <Router>
            <div> {this.props.params.map( item => 
                <Link   className="list-group-item nav-link" 
                        key={item.name} 
                        onClick={(e) => this.handleClick(item.name)} 
                        to={'/Detail/'+item.url.toString().replace("https://swapi.co/api/people/","").replace("/","") }>
                    <h5 
                        className="list-group-item-heading"> 
                        {item.name}
                    </h5>
                </Link>
                )}
            </div>
            </Router>
        )
    }
}

export class Swlist extends React.Component {
    constructor(){
        super();
        this.state = { 
            params:  [], 
            pruebas: [],
            componente_B: ''
        }
    }
    filterList(event) {
        var updatedList = this.state.pruebas;
        updatedList = updatedList.filter(function(item) {
        return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ params: updatedList });
    }
    search(){
        fetch( 'https://swapi.co/api/people/?format=json')
        .then( response => response.json())
        .then( ({results: result}) => this.setState({params: result,pruebas: result}));
    }
    componentWillMount() {
        this.search();
    }
    render(){
      return (
        <div className="container">
            <h1 className="page-header text-center">STAR WARS - PEOPLE LIST</h1>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <input className="form-control col-12" type="text" placeholder="Search" onChange={(e) => this.filterList(e)} />
                </div>
                <div className="col-md-12 col-sm-12">
                    <div className="list-group">
                        <List params={this.state.params} />
                    </div>
                </div>
            </div>
        </div>
      )
    }  
  }