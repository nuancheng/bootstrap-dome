import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';
// import jQuery from 'jquery/dist/jQuery.js'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.js'

import Routers from './routers'

ReactDOM.render(<Routers />, document.getElementById('app'));
