export default {
  selector: 'session',    
  templateUrl: '/client/components/session/index.html',
  controller: ($scope, socket) => {
    $scope.sessions = [];
    socket.on('init', data => {
      console.log(data);
      $scope.sessions.push(data.name);
    });
  }
}