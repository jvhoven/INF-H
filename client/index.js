import angular from 'angular';
import 'angular-ui-router';

// Routes
import Routes from './routes';

// Components
import Session from './components/session/index';
import Menu from './components/menu/index';

// Factory
import SocketFactory from './factories/socket';

// Services

const app = angular
	.module('keepo', [
		'ui.router',
	])
	.factory('socket', SocketFactory)
	.component(Session.selector, Session)
	.component(Menu.selector, Menu)
	.config(Routes)
	