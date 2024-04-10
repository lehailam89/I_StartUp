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

document.querySelector('.box-ai').classList.add('hidden')

document.addEventListener('DOMContentLoaded', function () {
  var nextAi = document.querySelector('.next-ai i')
  var setupHouse = document.querySelector('.setup-house')
  var boxAI = document.querySelector('.box-ai')

  nextAi.addEventListener('click', function () {
    setupHouse.style.display = 'none'
    boxAI.style.display = 'block'
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var accommodationHeight = document.querySelector('.accommodation').clientHeight;
  var boxAI = document.querySelector('.box-ai'); // Thêm dòng này để lấy tham chiếu đến phần tử .box-ai
  
  if (boxAI) { // Kiểm tra nếu phần tử .box-ai tồn tại
    boxAI.style.height = accommodationHeight + 'px'; // Thay đổi chiều cao của phần tử .box-ai
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var returnAI = document.querySelector('.ai-return i')
  var setupHouse = document.querySelector('.setup-house')
  var boxAI = document.querySelector('.box-ai')

  returnAI.addEventListener('click', function () {
    setupHouse.style.display = 'block'
    boxAI.style.display = 'none'
  })
})

//Next AI

