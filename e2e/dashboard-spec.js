describe('Dashboard page', function () {
  beforeEach(() => {
    browser.get('http://localhost:3000/#!/dashboard')
  })

  it('should add a room', () => {
    element(by.id('create-room')).click()
    element(by.model('roomName')).sendKeys('House')
    element(by.id('submit')).click()

    element.all(by.exactRepeater('room in $ctrl.rooms')).then(rooms => {
      expect(rooms.length).toEqual(3)
    })
  })

  it('should send a message to the current room', () => {
    element(by.model('message')).sendKeys('Hello world!')
    element(by.model('message')).sendKeys(protractor.Key.ENTER)

    element.all(by.exactRepeater('message in $ctrl.messages')).then(messages => {
      expect(messages.length).toEqual(1)
    })
  })
})