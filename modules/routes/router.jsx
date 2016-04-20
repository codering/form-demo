import React from 'react'

import Router from 'react-router/lib/Router'
import hashHistory from 'react-router/lib/hashHistory'
import Route from 'react-router/lib/Route'
import Redirect from 'react-router/lib/Redirect'
import IndexRoute from 'react-router/lib/IndexRoute'
import IndexRedirect from 'react-router/lib/IndexRedirect'

import Layout from './layout.jsx'
import Company from './company/index.jsx'

const history = hashHistory

const routes = (
    <Router history={history}>
        <Route path="/" breadcrumbName='首页' component={Layout}>
            <IndexRedirect to="/companies" />
            <Route path="companies" breadcrumbName='xxxx' component={Company} />
        </Route>
    </Router>
)

export default routes
