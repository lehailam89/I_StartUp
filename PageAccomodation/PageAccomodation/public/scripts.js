function addFeature() {
  var featureList = document.getElementById('featureList')
  var listItem = document.createElement('li')
  var input = document.createElement('input')

  input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      var inputValue = input.value.trim()
      if (inputValue !== '') {
        var textNode = document.createTextNode(inputValue)
        listItem.appendChild(textNode)
        // Tạo nút xóa và gán sự kiện xóa
        var deleteButton = document.createElement('button')
        deleteButton.textContent = 'X'
        deleteButton.className = 'delete-button'
        deleteButton.onclick = function () {
          featureList.removeChild(listItem)
        }
        listItem.appendChild(deleteButton)
        featureList.appendChild(listItem)
        input.parentNode.removeChild(input)
      }
    }
  })

  listItem.appendChild(input)
  featureList.appendChild(listItem)
  input.focus()
}
//

//
document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.acm-button i')
  var accommodation = document.querySelector('.accommodation')
  var setupHouse = document.querySelector('.setup-house')

  button.addEventListener('click', function () {
    accommodation.style.display = 'none'
    setupHouse.style.display = 'block'
  })
})
//

//
document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.sth-button i')
  var accommodation = document.querySelector('.accommodation')
  var setupHouse = document.querySelector('.setup-house')

  button.addEventListener('click', function () {
    setupHouse.style.display = 'none'
    accommodation.style.display = 'block'
  })
})
//

//
document.addEventListener('DOMContentLoaded', function () {
  var accommodationHeight = document.querySelector('.accommodation').clientHeight
  var setupHouse = document.querySelector('.setup-house')

  setupHouse.style.height = accommodationHeight + 'px'
})
//

// AI
const form = document.getElementById('myForm')
console.log(`form:`, form)
const paragraph = document.getElementById('myParagraph')
console.log(`paragraph:`, paragraph)

form.addEventListener('submit', event => {
  event.preventDefault()

  const data = {
    text: document.getElementById('text').value,
  }

  fetch('http://localhost:9000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      paragraph.textContent = data
    })
    .catch(error => {
      console.error(error)
    })
})
//End AI
