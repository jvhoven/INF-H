import 'angular'
import 'angular-mocks'
import Initials from '../../client/filters/initials'

const { angular } = window
const { mock } = window.angular

angular.module('keepo', [])
.filter('initials', Initials)

describe('Initials filter', () => {
  let initialsFilter

  beforeEach(mock.module('keepo'))
  beforeEach(mock.inject((_initialsFilter_) => {
    initialsFilter = _initialsFilter_
  }))

  it('should extract initials from a name', () => {
    expect(initialsFilter('Jeffrey van Hoven')).toBe('JH')
    expect(initialsFilter('Jeffrey')).toBe('J')
    expect(initialsFilter('Jeffrey Hoven')).toBe('JH')
  })
})
