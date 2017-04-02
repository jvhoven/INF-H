import io from 'socket.io-client'

export default $rootScope => {
  const socket = io('https://inf-h-angular.herokuapp.com/')
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        const args = arguments
        $rootScope.$apply(function () {
          callback.apply(socket, args)
        })
      })
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        const args = arguments
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args)
          }
        })
      })
    }
  }
}
