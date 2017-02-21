import io from 'socket.io-client';
import angular from 'angular';
import 'angular-ui-router';

import Session from './components/session/index';
import SessionList from './components/session-list/index';
import Menu from './components/menu/index';

const socket = io('http://localhost:3000');
const app = angular
	.module('keepo', [
		'ui.router',
	])
	.component(Session.selector, Session)
	.component(SessionList.selector, SessionList)
	.component(Menu.selector, Menu);

app.config(($stateProvider) => {
	const homeState = {
		name: 'home',
		url: '/',
		component: 'sessionList'
	}

	const accountState = {
		name: 'account',
		url: '/account'
	}

	const createSessionState = {
		name: 'create',
		url: '/create'
	}

	const aboutState = {
		name: 'about',
		url: '/about'
	}

	$stateProvider.state(homeState);
	$stateProvider.state(createSessionState);
	$stateProvider.state(accountState);
	$stateProvider.state(aboutState);
});