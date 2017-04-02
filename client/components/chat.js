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
      if ($scope.message.length > 0) {
        const { name } = $rootScope
        console.log(this.room)
   
        const message = {
          room: this.room,
          content: $scope.message,
          author: name,
          timestamp: Date.now()
        }

        MessagesService.create(message)
          .then(messages => $scope.$apply(() => {
            this.messages = messages
          }))

        // Reset scope values
        $scope.message = ''
      }
    }

    /**
     * Update rooms when an event modifies the room structure.
     */
    socket.on('update:messages', (data) => {
      this.messages = data
    })
  }
}
