export default {
  selector: 'list',
  controller: () => {
  },
  bindings: {
    containerClass: '=',
    component: '=',
    data: '='
  },
  controllerAs: 'listCtrl',  
  template: require('./index.html')
}