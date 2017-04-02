import 'angular'
import 'angular-mocks'
import Message from '../../client/components/message'
import Initials from '../../client/filters/initials'

const { angular } = window
const { mock } = window.angular

angular.module('keepo', [])
.filter('initials', Initials)
.component(Message.selector, Message)

describe('Message component', () => {
  let parentScope
  let element

  beforeEach(mock.module('keepo'))
  beforeEach(mock.inject(($compile, $rootScope) => {
    parentScope = $rootScope.$new()

    element = angular.element(`<message data="{ author: 'Jeffrey', content: 'Test message', timestamp: '20-03-1938 20:37' }"></message>`)
    $compile(element)(parentScope)

    parentScope.$digest()
  }))

  it('should render properly', () => {
    const elem = angular.element(element[0])
    expect(elem).not.toEqual({})
  })
})
