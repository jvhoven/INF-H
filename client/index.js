import angular from 'angular'
import 'angular-ui-router'

import Routes from './routes'

// Filters
import InitialsFilter from './filters/initials'

// Controllers
import HomeController from './controllers/home'
import IntroController from './controllers/intro'

// Factories
import socket from './factories/socket'

// Services
import RoomsService from './services/rooms'
import UsersService from './services/users'
import MessagesService from './services/messages'

// Pages
import About from './pages/about'
import Account from './pages/account'
import CreateRoom from './pages/createRoom'

// Components
import Menu from './components/menu'
import Room from './components/room'
import Message from './components/message'
import Chat from './components/chat'
import Rooms from './components/rooms'

angular.module('keepo', [
  'ui.router'
])
.controller('HomeController', HomeController)
.controller('IntroController', IntroController)
.filter('initials', InitialsFilter)
.factory('socket', socket)
.service('MessagesService', MessagesService)
.service('UsersService', UsersService)
.service('RoomsService', RoomsService)
.component(Chat.selector, Chat)
.component(Message.selector, Message)
.component(Rooms.selector, Rooms)
.component(Menu.selector, Menu)
.component(Room.selector, Room)
.component(Account.selector, Account)
.component(About.selector, About)
.component(CreateRoom.selector, CreateRoom)
.config(Routes)

