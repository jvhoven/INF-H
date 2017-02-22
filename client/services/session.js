export default function($http) {
  const service = {
    getAll: () => $http.get('http://localhost:3000/sessions', { cache: true }).then(
      (resp) => resp.data
    )
  }

  return service;
};