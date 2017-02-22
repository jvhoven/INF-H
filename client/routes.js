export default ($stateProvider) => {
	const homeState = {
		name: 'home',
		url: '/',
		component: 'session',
		resolve: {
			sessions: function(SessionService) {
				return SessionService.getAll();
			}
  	}
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
};
