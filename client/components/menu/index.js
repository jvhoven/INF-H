export default {
  selector: 'menu',
  template: require('./index.html'),
  controller: () => {
    let ctrl = this;
    ctrl.name = 'hallo';
    ctrl.menu = [
      { name: 'Session list', link: 'home' },
      { name: 'Create session', link: 'create' },
      { name: 'Session history', link: 'session-history' }
    ]
  }
}