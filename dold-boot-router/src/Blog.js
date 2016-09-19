import React, { PropTypes } from 'react'
import { gitmd } from './utils/helpers.js'
import marked from 'marked'

class Blog extends React.Component {
    constructor(){
        super();
        this.state={
            data:'',
            wait:true
        }
    }
    returns(){
        return(marked(this.state.data))
    }
    componentDidMount() {
        let xss=this.props.params.title
            gitmd(xss)
            .then((we)=>
                   this.setState({
                      data:we.as
                  })
             )
             .catch(()=>{
                 alert('404')
             })

    }
    render () {
        return(
            <div style={{textAlign:'center'}}>
                <div dangerouslySetInnerHTML={{__html: this.returns()}} />
            </div>
        )
    }
}

export default Blog;
