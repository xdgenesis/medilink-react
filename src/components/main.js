import React from 'react';
import Index from './index';
import Benefit from './benefit';
import BenefitView from './benefitview'
import { browserHistory, Router, Route} from 'react-router';

const Main = () => (
	<Router history={browserHistory}>
	<Route exact path="/" component={Index} />
	<Route path={"/benefits"} component={Benefit} />
	<Route path={"/benefits/:code/view"} component={BenefitView} />
	</Router>
)

export default Main