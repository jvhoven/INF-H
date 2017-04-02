export default {
  selector: 'message',
  bindings: {
    data: '<'
  },
  template: `
    <div class="message">
      <div class="message__author">
        <span class="author__intials"></span>
      </div>
      <span class="message__content">
        Lorem ipsum solor det amit
      </span>
      <span class="message__timestamp">
        20-02-1924
      </span>
    </div>
  `
}
