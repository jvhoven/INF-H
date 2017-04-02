export default function ($scope, $rootScope, _rooms, _messages) {
  $rootScope.currentRoom = 'General'
  $scope.rooms = _rooms
  $scope.messages = _messages
  $scope.currentRoom = $rootScope.currentRoom

  /**
   * When a user switches room, it should update the room title.
   */
  $rootScope.$on('switchRoom', (event, newRoom) => {
    $scope.currentRoom = newRoom
  })
}
