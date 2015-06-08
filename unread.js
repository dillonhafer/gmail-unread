(function() {
  // Create the DOM 'unread' button.
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

  // This action is fired when an 'unread' button is clicked.
  // We prepend 'is:unread' to the main gmail filter and submit it.
  function showUnread() {
    var filter, originalValue, searchButton, newValue
    filter        = document.getElementById('gbqfq')
    originalValue = filter.value
    newValue      = "is:unread " + originalValue.replace("is:unread ", "")
    filter.value  = newValue
    document.getElementById('gbqfb').click()
  }

  // Find all the menus on the page and add an 'unread' button to them.
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

  // The initializer method for the extension. If the inserted node is a menu bar
  // add buttons to it. This is needed for when a user changes labels in gmail.
  // This also fires when the first page is loaded.
  document.addEventListener("DOMNodeInserted", function(e) {
    if (e.target.className == 'D E G-atb') {
      setTimeout(addButtons,0)
    }
  }, false)
})()
