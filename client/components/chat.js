export default {
  selector: 'chat',
  templateUrl: '/client/pages/_partials/chat.html',
  bindings: {
    messages: '=',
    room: '='
  },
  controller: function ($scope, $rootScope, MessagesService, socket) {
    $scope.message = ''

    $scope.sendMessage = () => {
      console.log($scope.message)
    }
  }
}
