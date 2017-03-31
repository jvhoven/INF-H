export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')

  const homeState = {
    name: 'home',
    url: '/',
    component: 'home',
    resolve: {
      sessions: (SessionService) => SessionService.sockets
    }
  }

  const accountState = {
    name: 'account',
    url: '/account',
    component: 'account'
  }

  const createSessionState = {
    name: 'create',
    url: '/create',
    component: 'createSession'
  }

  const aboutState = {
    name: 'about',
    url: '/about',
    component: 'about'
  }

  $stateProvider.state(homeState)
  $stateProvider.state(createSessionState)
  $stateProvider.state(accountState)
  $stateProvider.state(aboutState)
}
