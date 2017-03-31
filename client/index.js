import angular from 'angular'
import 'angular-ui-router'

import Routes from './routes'

// Factories
import socket from './factories/socket'

// Services
import SessionService from './services/session'

// Pages
import About from './pages/about'
import Account from './pages/account'
import CreateSession from './pages/createSession'
import Home from './pages/home'

// Components
import Menu from './components/menu'
import Session from './components/session'

angular.module('keepo', [
  'ui.router'
])
.factory('socket', socket)
.service('SessionService', SessionService)
.component(Menu.selector, Menu)
.component(Session.selector, Session)
.component(Home.selector, Home)
.component(Account.selector, Account)
.component(About.selector, About)
.component(CreateSession.selector, CreateSession)
.config(Routes)

