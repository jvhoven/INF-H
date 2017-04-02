export default {
  selector: 'chat',
  templateUrl: '/client/pages/_partials/chat.html',
  bindings: {
    messages: '='
  },
  controller: function ($scope, MessagesService) {
  }
}
