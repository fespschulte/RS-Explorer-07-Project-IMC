// variáveis 

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')




// 3 maneiras de criar e atribuir uma função a um evento 

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const result = IMC (weight, height)
  const message = `O seu IMC é ${result} kg/m²`
  modalMessage.innerText = message
  modalWrapper.classList.add('open')
  console.log(result)

}

modalBtnClose.onclick = () => modalWrapper.classList.remove('open')

function IMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)

}

// form.onsubmit = () => {

// }

// form.onsubmit = handleSubmit

// function handleSubmit() {

// }