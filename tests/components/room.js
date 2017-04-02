import 'angular'
import 'angular-mocks'
import Room from '../../client/components/room'

const { angular } = window
const { mock } = window.angular

angular.module('keepo', [])
.component(Room.selector, Room)

describe('Room component', () => {
  let parentScope
  let element

  beforeEach(mock.module('keepo'))
  beforeEach(mock.inject(($compile, $rootScope) => {
    parentScope = $rootScope.$new()

    element = angular.element(`<room data="{ name: 'test', userCount: 0 }"></room>`)
    $compile(element)(parentScope)

    parentScope.$digest()
  }))

  it('should render properly', () => {
    const elem = angular.element(element[0])
    expect(elem.find('h4').text()).toEqual('# test')
    expect(elem.find('p').text()).not.toEqual('')
  })
})
