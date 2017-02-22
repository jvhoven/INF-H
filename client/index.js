import io from 'socket.io-client';
import angular from 'angular';
import 'angular-ui-router';

// Routes
import Routes from './routes';

// Components
import Session from './components/session/index';
import Menu from './components/menu/index';

// Services
import SessionService from './services/session';

const socket = io('http://localhost:3000');
const app = angular
	.module('keepo', [
		'ui.router',
	])
	.service('SessionService', SessionService)	
	.component(Session.selector, Session)
	.component(Menu.selector, Menu)
	.config(Routes)
	