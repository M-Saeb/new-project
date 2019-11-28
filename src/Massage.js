import React, {Component} from 'react'
import './Massage.css'

export default class Massage extends Component{

    render(){
        return(
            <div id="container">
                <h3 style= {{color: this.props.textColor,
                        background: this.props.backgroundColor,
                        fontSize: this.props.fontSize}}>
                    {this.props.text}
                </h3>
            </div>
        )
    }
}