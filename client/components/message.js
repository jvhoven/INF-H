export default {
  selector: 'message',
  bindings: {
    data: '='
  },
  template: `
    <div class="message">
      <div class="message__author">
        <span class="author__initials">{{ $ctrl.data.author | initials }}</span>
        <span class="author__name">{{ $ctrl.data.author }} -</span>
      </div>
      <span class="message__content">
        {{ $ctrl.data.content }}
      </span>
      <span class="message__timestamp">
        {{ $ctrl.data.timestamp }}
      </span>
    </div>
  `
}
