import React, { PropTypes } from 'react'
import axios from 'axios'

class About extends React.Component {
    constructor(){
        super();
        this.state={
            data:{},
            wait:true
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/nuancheng')
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data,
                wait:false
            })
        })
    }
    render () {
        return(
            <div style={{padding:'30px'}}>
                <h3 style={{float:'left'}}>my name is:</h3><h2 style={{float:'left'}}>{this.state.data.name}</h2><br />
                {this.state.wait ? 'loading' : <img src={this.state.data.avatar_url} />}
            </div>
        )
    }
}

export default About;
