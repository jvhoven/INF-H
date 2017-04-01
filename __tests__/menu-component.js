import 'angular'
import 'angular-mocks'
import Menu from '../client/components/menu'

const { angular } = window
const { mock } = window.angular

angular.module('keepo', [])
.component(Menu.selector, Menu)

describe('Menu component', () => {
  let parentScope;
  let element;

  beforeEach(mock.module('keepo'))
  beforeEach(mock.inject(($compile, $rootScope) => {
    parentScope = $rootScope.$new()

    element = angular.element(`<menu></menu>`)
    $compile(element)(parentScope)

    parentScope.$digest()
  }))

  it('should render menu', () => {
    const elem = angular.element(element[0])
    expect(elem.find('aside')).not.toEqual({})
  })
})
