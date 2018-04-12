var storyButton = document.getElementById('clik-4-stories')

storyButton.addEventListener('click', function () {
  var hiddenPlace = window.prompt('This is a game called In the Dark. A 16-year-old student from a rich family was kidnapped by two young girls. His name is Wil and was locked in a room. One girl said we sholud remove him to the basement. Another girl said he should be moved to the barn. If you were Wil, you wanted to stay in which places. Choose room, basement or barn.')
  hiddenPlace = hiddenPlace.toLowerCase().trim()
  if (hiddenPlace === 'room') {
    window.alert('The room is empty but it\'s next to a street. Wil can get a chance to find someone for help.')
  } else if (hiddenPlace === 'basement') {
    window.alert('It\'s dark but there are many equipments in basement. Wil can find one stuff to protect himeself and run away')
  } else if (hiddenPlace === 'barn') {
    window.alert('There are several equipments in the barn and it smells bad in there.')
  } else {
    window.alert('Choose one of the places!')
  }
  if (hiddenPlace) {
    if (hiddenPlace === 'basement') {
      var userEquipChoiceInBasement = window.prompt('In the basement, Wil decides to take equipmets to protect himself and run away. He saw a knife, lighters, bricks, and 3 different size of hammers. How many equipmets did Wil have?')
      if (hiddenPlace || userEquipChoiceInBasement) {
        window.alert('Lots of choice. It might help Wil out')
      }
      if (isNaN(userEquipChoiceInBasement)) {
        userEquipChoiceInBasement = 6
      }
      window.alert('Wil felts comfortable with that stuff!!')
    } else if (hiddenPlace === 'barn') {
      var userEquipChoiceInBarn = window.prompt('In the barn, Wil can get weeder and sawmill. How many equipmets did Wil have?')
      if (hiddenPlace || userEquipChoiceInBarn) {
        window.alert('Just 2 choices. They would be helpful?!')
      }
      if (isNaN(userEquipChoiceInBarn)) {
        userEquipChoiceInBarn = 2
      }
      window.alert('Probably!')
    } else if (hiddenPlace === 'room') {
      var userEquipChoiceInRoom = window.prompt('Oh, Wil cannot see anything in this room. How many equipmets did he have?')
      if (hiddenPlace && userEquipChoiceInRoom) {
        window.alert('Maybe he needs to find other way to escape.')
      }
    } else {
      window.alert('Oh, Wil got nothing to use to escape')
    }
  }
  if (userEquipChoiceInRoom || userEquipChoiceInBarn || userEquipChoiceInBasement === null || userEquipChoiceInRoom || userEquipChoiceInBarn || userEquipChoiceInBasement === undefined) {
    var randomNumber = Math.random()

    if (randomNumber > 0.7) {
      window.alert('Great choice. You are helping poor Wil to run away')
    } else if (randomNumber > 0.5) {
      window.alert('Yaaah! That\'s a good place where Wil needs to go')
    } else if (randomNumber > 0.3) {
      window.alert('It is such a nice idea to choose that tool')
    } else if (randomNumber > 0.1) {
      var placeEquipChoice = window.confirm('Are you sure? It\'s is not easy to collect a bunch of equipments')

      if (placeEquipChoice) {
        window.alert('Hmm...The girls will find Wil tries to run due to the equipments')
      } else {
        window.alert('Not a good decision! Wil needs some more information')
      }
    } else if (randomNumber > 0.01) {
      window.alert('Are you sure? Cancel? Like what you did all the time!')
    } else {
      window.alert('Wow, did you know there\'s only a 1% chance you\'d get this message? I never thought it would actually happen. I should have come up with something more interesting to put here...')
    }
  }
})
