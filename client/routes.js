export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(false) // set to true for nice urls
  $urlRouterProvider.otherwise('/')

  const introState = {
    name: 'intro',
    url: '/',
    controller: 'IntroController as vm',
    templateUrl: '/client/pages/intro.html'
  }

  const homeState = {
    name: 'home',
    url: '/dashboard',
    controller: 'HomeController as vm',
    templateUrl: '/client/pages/home.html',
    resolve: {
      _rooms: (RoomsService) => RoomsService.rooms.then(data => data),
      _messages: (MessagesService) => MessagesService.messages.then(data => data)
    }
  }

  const accountState = {
    name: 'account',
    url: '/account',
    component: 'account'
  }

  const aboutState = {
    name: 'about',
    url: '/about',
    component: 'about'
  }

  $stateProvider.state(introState)
  $stateProvider.state(homeState)
  $stateProvider.state(accountState)
  $stateProvider.state(aboutState)
}
