export default {
  selector: 'session',    
  controller: function($scope) {
    this.sessions = [{ 
      name: 'INF-G Zuipavond',
      participants: 4,
      open: false
    }, {
      name: 'INF-H Zuipavond',
      participants: 2,
      open: false
    }];
    this.open = (session) => {
      session.open = !session.open;
    };
  },
  controllerAs: 'sessionCtrl',
  templateUrl: '/client/components/session/index.html'
}