export default function ($scope, RoomsService, socket, _rooms) {
  $scope.makingRoom = false
  $scope.rooms = _rooms
  $scope.roomName = ''

  /**
   * Assigns user to a room namespace.
   */
  $scope.joinRoom = (roomName) => {
    RoomsService.join(roomName)
      .then(rooms => $scope.$apply(() => {
        $scope.rooms = rooms
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
    RoomsService.create($scope.roomName)
      .then(rooms => $scope.$apply(() => {
        $scope.rooms = rooms
      }))

    // Reset scope values
    $scope.makingRoom = false
    $scope.roomName = ''
  }

  /**
   * Update rooms when an event modifies the room structure.
   */
  socket.on('update:rooms', (data) => {
    $scope.rooms = data
  })

  socket.on('user:update', (msg) => {
    console.log(msg)
  })
}
