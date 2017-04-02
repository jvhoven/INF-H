import 'angular'
import 'angular-mocks'
import 'angular-ui-router'
import IntroController from '../../client/controllers/intro'

const { angular } = window
const { mock } = window.angular

angular.module('keepo', ['ui.router'])
.service('UsersService', class UsersService {
  authenticate () {
    return new Promise((resolve, reject) => {
      reject('It seems your name is taken.')
    })
  }
})
.controller('IntroController', IntroController)

describe('Intro controller', () => {
  let $scope

  beforeEach(mock.module('keepo'))
  beforeEach(mock.inject(($rootScope, $controller) => {
    $scope = $rootScope.$new()
    $controller('IntroController', {$scope: $scope})
  }))

  it('should initialise', () => {
    expect($scope.error).toEqual('')
    expect($scope.name).toEqual('')
  })

  it('should set an error that name is too small', () => {
    $scope.submit()
    expect($scope.error).toEqual('Name must be longer than 4 characters.')
  })

  xit('should set an error that the name is taken', () => {
    $scope.name = 'Janssen'
    $scope.submit()
    expect($scope.error).toEqual('It seems your name is taken.')
  })
})
