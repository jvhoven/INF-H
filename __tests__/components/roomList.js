import 'angular'
import 'angular-mocks'
import RoomList from '../../client/components/roomList'
import Socket from '../../client/factories/socket'

const { angular } = window
const { mock } = window.angular

angular.module('keepo', [])
.factory('socket', Socket)
.component(RoomList.selector, RoomList)

describe('RoomList component', () => {
  let parentScope
  let element

  beforeEach(mock.module('keepo'))
  beforeEach(mock.inject(($compile, $rootScope) => {
    parentScope = $rootScope.$new()

    element = angular.element(`<room-list></room-list>`)
    $compile(element)(parentScope)

    parentScope.$digest()
  }))

  it('should render correctly', () => {
    const elem = angular.element(element[0])
    expect(elem.find('aside')).not.toEqual({})
  })
})
