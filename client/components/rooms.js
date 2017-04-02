export default {
  selector: 'rooms',
  templateUrl: '/client/pages/_partials/rooms.html',
  bindings: {
    rooms: '='
  },
  controller: function ($scope, $rootScope, RoomsService, socket) {
    $scope.makingRoom = false
    $scope.roomName = ''

    $scope.isActive = (roomName) => {
      this.currentRoom === roomName ? 'active' : ''
    }

    /**
     * Assigns user to a room namespace.
     */
    $scope.joinRoom = (roomName) => {
      RoomsService.join(roomName)
        .then(rooms => $scope.$apply(() => {
          this.rooms = rooms
          $rootScope.$broadcast('switchRoom', roomName)
        }))
    }

    /**
     * Toggles the creation field for making a new room.
     */
    $scope.toggleCreate = () => {
      $scope.makingRoom = !this.makingRoom
    }

    /**
     * Registers a new room at the server.
     */
    $scope.createRoom = () => {
      if ($scope.roomName.length > 0) {
        RoomsService.create($scope.roomName)
          .then(rooms => $scope.$apply(() => {
            this.rooms = rooms
          }))

        // Reset scope values
        $scope.makingRoom = false
        $scope.roomName = ''
      }
    }

    /**
     * Update rooms when an event modifies the room structure.
     */
    socket.on('update:rooms', (data) => {
      this.rooms = data
    })
  }
}
