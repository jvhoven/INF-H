import angular from 'angular'
import 'angular-ui-router'

import Routes from './routes'

// Controllers
import HomeController from './controllers/home'

// Factories
import socket from './factories/socket'

// Services
import RoomsService from './services/rooms'

// Pages
import About from './pages/about'
import Account from './pages/account'
import CreateRoom from './pages/createRoom'

// Components
import Menu from './components/menu'
import Room from './components/room'

angular.module('keepo', [
  'ui.router'
])
.controller('HomeController', HomeController)
.factory('socket', socket)
.service('RoomsService', RoomsService)
.component(Menu.selector, Menu)
.component(Room.selector, Room)
.component(Account.selector, Account)
.component(About.selector, About)
.component(CreateRoom.selector, CreateRoom)
.config(Routes)

