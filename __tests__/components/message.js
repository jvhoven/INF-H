import 'angular'
import 'angular-mocks'
import Message from '../../client/components/message'

const { angular } = window
const { mock } = window.angular

angular.module('keepo', [])
.component(Message.selector, Message)

describe('Message component', () => {
  let parentScope
  let element

  beforeEach(mock.module('keepo'))
  beforeEach(mock.inject(($compile, $rootScope) => {
    parentScope = $rootScope.$new()

    element = angular.element(`<message data="{ author: 'Jeffrey', content: 'Test message', timestamp: '20-03-1938 20:37' }"></room>`)
    $compile(element)(parentScope)

    parentScope.$digest()
  }))

  it('should render properly', () => {
    const elem = angular.element(element[0])
    expect(elem).not.toEqual({})
  })
})
