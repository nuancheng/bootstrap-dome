import React, { PropTypes } from 'react'

class Blog extends React.Component {
    render () {
        console.log(this.props)
        return(
            <div>
                {this.props.params.title=='1' ? 'one':
                this.props.params.title=='2' ? 'tow':
                this.props.params.title=='3' ? 'three':'404'}
            </div>
        )
    }
}

export default Blog;
