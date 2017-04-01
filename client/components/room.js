export default {
  selector: 'room',
  bindings: {
    data: '<'
  },
  template: `
    <div class="room">
      <h1>{{$ctrl.data.name}}</h1>
    </div>
  `
}
