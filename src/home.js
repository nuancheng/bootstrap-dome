import React, { PropTypes } from 'react'
import { Router, Route, hashHistory,IndexRoute } from 'react-router';

class Home extends React.Component {
    btnca(){
        hashHistory.push('a')
    }
    btncb(){
        hashHistory.push('m')
    }
    render () {
        return(
            <div>
                <div className="jumbotron" style={{textAlign:'center'}}>
                    <h1>hello</h1>
                    <p>do you live my home?</p>
                    <p><a className="btn btn-primary btn-lg" role="button" onClick={this.btnca.bind(this)}>go to about</a></p>
                    <p><a className="btn btn-primary btn-lg" role="button" onClick={this.btncb.bind(this)}>go to main</a></p>
                </div>
            </div>
        )
    }
}

export default Home;
