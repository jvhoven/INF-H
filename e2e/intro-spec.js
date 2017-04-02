describe('Introduction page', function () {
  beforeEach(() => {
    browser.get('http://localhost:3000')
  })

  it('should give an error that the name is too short', () => {
    element(by.model('name')).sendKeys('1')
    element(by.id('submit')).click()

    expect(element(by.binding('error')).getText()).toEqual('Name must be longer than 4 characters.')
  })

  it('should accept the name', () => {
    element(by.model('name')).sendKeys('a cool username')
    element(by.id('submit')).click()

    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#!/dashboard')
  })

  it('should give an error that the name is taken', () => {
    element(by.model('name')).sendKeys('a cool username')
    element(by.id('submit')).click()

    expect(element(by.binding('error')).getText()).toEqual('It seems your username has already been taken.')
  })
})
