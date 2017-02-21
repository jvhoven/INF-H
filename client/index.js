import io from 'socket.io-client';
import angular from 'angular';
import 'angular-ui-router';

import Session from './components/session/index';
import SessionList from './components/session-list/index';
import Menu from './components/menu/index';
import ParticipationList from './components/participant-list/index';

const socket = io('http://localhost:3000');
const app = angular
	.module('keepo', [
		'ui.router',
	])
	.component(ParticipationList.selector, ParticipationList)
	.component(Session.selector, Session)
	.component(SessionList.selector, SessionList)
	.component(Menu.selector, Menu);

app.config(($stateProvider) => {
	const homeState = {
		name: 'hello',
		url: '/hello',
		component: 'sessionList'
	}

	const aboutState = {
		name: 'about',
		url: '/about'
	}

	$stateProvider.state(homeState);
	$stateProvider.state(aboutState);
});