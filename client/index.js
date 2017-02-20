import io from 'socket.io-client';
import angular from 'angular';
import 'angular-ui-router';

import SessionList from './components/session-list/index';
import Menu from './components/menu/index';

const socket = io('http://localhost:3000');
const app = angular
	.module('keepo', [
		'ui.router',
	])
	.component(SessionList.selector, SessionList)
	.component(Menu.selector, Menu);

app.config(($stateProvider) => {
	const homeState = {
		name: 'hello',
		url: '/hello',
	}

	const aboutState = {
		name: 'about',
		url: '/about'
	}

	$stateProvider.state(homeState);
	$stateProvider.state(aboutState);
});