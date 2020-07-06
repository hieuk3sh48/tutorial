import React,{Component} from 'react';

import NumberContext from './NumberContext';

export default class extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0
        }

    }
    setNumber(){
        this.setState({
            number:this.state+1
        })
    }
    render(){
        return(
            <NumberContext.Provider
                value={{
                    number:this.state.number,
                    setNumber:this.setNumber.bind(this)
                }}
            >
                {this.props.children}
            </NumberContext.Provider>
        )
    }
}