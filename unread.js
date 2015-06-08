(function() {
  var intervalID = 0

  function createUnreadButton() {
    var unreadDiv, buttonDiv, unreadText
    unreadDiv = document.createElement('div')
    unreadDiv.className = 'G-Ni J-J5-Ji'

    buttonDiv = document.createElement('div')
    buttonDiv.className = 'T-I J-J5-Ji ar7 nf T-I-ax7 L3'
    buttonDiv.setAttribute('role', 'button')

    unreadText = document.createElement('span')
    unreadText.innerHTML = 'Unread'

    buttonDiv.appendChild(unreadText)
    unreadDiv.appendChild(buttonDiv)
    return unreadDiv
  }

  function buttonsOnPage() {
    var buttons = document.getElementsByClassName('Ykrj7b')
    return Boolean(buttons.length)
  }

  function buttonList() {
    var buttons = document.getElementsByClassName('Ykrj7b')
    return buttons[0].parentElement.parentElement.parentElement
  }

  function showUnread() {
    var filterInput, searchButton
    filterInput = document.getElementById('gbqfq')
    originalValue = filterInput.value
    filterInput.value = "is:unread "+originalValue
    searchButton = document.getElementById('gbqfb')
    searchButton.click()
  }

  function main() {
    var buttonDiv, unreadButton
    if (buttonsOnPage()) {
      buttonDiv    = buttonList()
      unreadButton = createUnreadButton()
      unreadButton.addEventListener('click', showUnread)
      buttonDiv.appendChild(unreadButton)
      clearInterval(intervalID)
    }
  }

  intervalID = setInterval(main, 800)
})()
