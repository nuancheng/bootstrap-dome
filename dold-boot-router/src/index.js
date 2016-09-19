import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'

import Routers from './routers'

ReactDOM.render(<Routers />, document.getElementById('app'));
