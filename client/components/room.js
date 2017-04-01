export default {
  selector: 'room',
  bindings: {
    data: '<'
  },
  template: `
    <div class="room">
      <h4 class="room__title"># {{ $ctrl.data.name | lowercase }}</h4>
      <p class="room__subtitle">{{ $ctrl.data.userCount }} users connected</p>
    </div>
  `
}
