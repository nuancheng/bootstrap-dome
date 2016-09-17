import React, { PropTypes } from 'react'
import Card from './component/card'

let Carddata=[
    {imgsrc:'https://img.alicdn.com/imgextra/i4/411329340/TB2hozsopXXXXbjXXXXXXXXXXXX_!!411329340.jpg',Hthree:'Thumbnail label',Ptitle:'...',srcurl:'1'},
    {imgsrc:'https://img.alicdn.com/imgextra/i4/894224787/TB2d4GGcVXXXXbBXpXXXXXXXXXX_!!894224787.jpg',Hthree:'Thumbnail label',Ptitle:'...',srcurl:'2'},
    {imgsrc:'https://img.alicdn.com/imgextra/i4/1123956656/TB2a_vFXWm5V1BjSspbXXX6sXXa_!!1123956656.jpg',Hthree:'Thumbnail label',Ptitle:'...',srcurl:'3'},
]

class About extends React.Component {
    render () {
        return(
            <div className="row">
            {Carddata.map((item,k)=><Card {...item} key={k} />)}
            </div>
        )
    }
}

export default About;
