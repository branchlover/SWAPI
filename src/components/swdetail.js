import React from 'react';
import {browserHistory} from "react-router";
import {Link} from 'react-router-dom';

export class SwlisDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            data:  [],
            id: this.props.match.params.id
        }
    }
    search(){
        fetch( 'https://swapi.co/api/people/'+this.state.id+'?format=json')
        .then( response => response.json())
        .then( ({results: result}) => this.setState({data: result}));
    }
    componentWillMount() {
        this.search();
    }
    render(){
        
        return (
          <div className="container">
                <h1 className="page-header text-center">STAR WARS - PEOPLE DETAIL</h1>
                <Link className={"btn btn-primary"} to="/Swlist"> Go Swlist </Link>
          </div>
        )
      } 
}