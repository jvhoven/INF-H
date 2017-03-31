export default {
  selector: 'session',
  bindings: {
    data: '<'
  },
  controller: function (socket) {
  },
  template: `
    <a href="#" ng-click="$ctrl.create()">Create sessions</a>
    <div 
      class="session session--big" 
      ng-repeat="session in $ctrl.data"
      session="session"
    >
      <div ng-click="sessionCtrl.open(session)" class="session__title">
        <h2>{{session.name}}</h2>
        <div class="session__title__icons">
        </div>
      </div>
      <div class="session__participants">
        <participant-list></participant-list>
      </div>
      <div class="session__footer">
        <button class="btn">Enroll</button>
      </div>
    </div>
  `
}