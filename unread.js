(function() {
  function createUnreadButton() {
    var unreadDiv, buttonDiv, unreadText
    unreadDiv = document.createElement('div')
    unreadDiv.className = 'G-Ni J-J5-Ji'
    unreadDiv.style.display = 'inline-block'

    buttonDiv = document.createElement('div')
    buttonDiv.className = 'T-I J-J5-Ji ar7 nf T-I-ax7 L3 unread-button'
    buttonDiv.setAttribute('role', 'button')
    buttonDiv.setAttribute('data-tooltip', 'Filter Unread')

    unreadText = document.createElement('span')
    unreadText.innerHTML = 'Unread'

    buttonDiv.appendChild(unreadText)
    unreadDiv.appendChild(buttonDiv)
    return unreadDiv
  }

  function showUnread() {
    var filterInput, searchButton
    filterInput = document.getElementById('gbqfq')
    originalValue = filterInput.value
    filterInput.value = "is:unread "+originalValue
    searchButton = document.getElementById('gbqfb')
    searchButton.click()
  }

  function addButtons() {
    var buttonDivs, unreadButton
    buttonDivs = document.querySelectorAll('.D.E.G-atb')
    for (var i=0;i<buttonDivs.length;i++) {
      var currentDiv = buttonDivs[i].children[0].children[0].children[0].children[0]
      if (currentDiv.className != 'has-unread') {
        unreadButton = createUnreadButton()
        unreadButton.addEventListener('click', showUnread)
        currentDiv.appendChild(unreadButton)
        currentDiv.className = 'has-unread'
      }
    }
  }

  document.addEventListener("DOMNodeInserted", function(e) {
    if (e.target.className == 'D E G-atb') {
      setTimeout(addButtons,0)
    }
  }, false)
})()
