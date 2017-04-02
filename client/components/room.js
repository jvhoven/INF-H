export default {
  selector: 'room',
  bindings: {
    data: '<'
  },
  template: `
    <div class="room">
      <h4 class="room__title"># {{ $ctrl.data.name | lowercase }}</h4>
      <p class="room__subtitle">
        {{ $ctrl.data.userCount }} 
        <span ng-show="$ctrl.data.userCount > 1">users</span> 
        <span ng-show="$ctrl.data.userCount == 1">user</span>
        <span ng-show="$ctrl.data.userCount == 0">users</span>
        connected
      </p>
    </div>
  `
}
