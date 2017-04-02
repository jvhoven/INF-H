describe('title', function () {
  it('should add a todo', function () {
    browser.get('http://localhost:3000')

    expect(browser.getTitle()).toEqual('Keepo | Keep your shit organized')
  })
})
