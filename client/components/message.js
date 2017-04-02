export default {
  selector: 'message',
  bindings: {
    data: '='
  },
  template: `
    <div class="message">
      <div class="message__author">
        <span class="author__intials">{{ $ctrl.data.author | initials }}</span>
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
