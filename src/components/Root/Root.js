import React from 'react'
import * as Routes from 'constants/Routes'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import PhonesList from 'components/PhonesList/PhonesList'
import PhoneInfo from 'components/PhoneInfo/PhoneInfo'

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={Routes.MAIN} component={PhonesList} />
                <Route path={`${Routes.PHONE}/:id`} component={PhoneInfo} />
            </Switch>
        </BrowserRouter>
    )
}

export default Root
