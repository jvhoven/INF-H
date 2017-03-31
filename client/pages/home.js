export default {
  selector: 'home',
  controller: function ($scope, SessionService) {
    $scope.sessions = SessionService.sockets
    $scope.create = () => {
      SessionService.create({
        name: 'test'
      }, data => { $scope.sessions = data })

      console.log($scope.sessions)
    }
  },
  template: `
    <menu></menu>    
    <main>
      <a href="#" ng-click="create()">Maak</a>
      <session data="$ctrl.sessions"></session>
    </main>
  `
}
