export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')

  const homeState = {
    name: 'home',
    url: '/',
    controller: 'HomeController as vm',
    templateUrl: '/client/pages/home.html',
    resolve: {
      _rooms: (RoomsService) => RoomsService.rooms.then(data => data)
    }
  }

  const accountState = {
    name: 'account',
    url: '/account',
    component: 'account'
  }

  const createRoomState = {
    name: 'create',
    url: '/create',
    component: 'createRoom'
  }

  const aboutState = {
    name: 'about',
    url: '/about',
    component: 'about'
  }

  $stateProvider.state(homeState)
  $stateProvider.state(createRoomState)
  $stateProvider.state(accountState)
  $stateProvider.state(aboutState)
}
