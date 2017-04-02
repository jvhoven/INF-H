export default function ($scope, $state, UsersService) {
  $scope.name = ''
  $scope.error = ''

  $scope.submit = () => {
    $scope.error = ''
    if ($scope.name.length < 4) {
      $scope.error = 'Name must be longer than 6 characters.'
    } else {
      UsersService.authenticate($scope.name).then(
        () => $state.go('home', {}),
        (error) => $scope.$apply(() => {
          $scope.error = error
        })
      )
    }
  }
}
