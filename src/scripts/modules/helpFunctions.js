// open modal func
const authModal = ({ openLoginButtons, modal, modalContainer }) => {
  const modalMethods = {
    0: opening => {
      modal.classList.add('--opened')
      modalContainer.classList.add('--opened')
      document.body.classList.add('--lock')
      setTimeout(() => document.getElementById('email').focus(), 800)
    },
    1: closing => {
      modal.classList.remove('--opened')
      modalContainer.classList.remove('--opened')
      if (!document.querySelector('.header__mobile').classList.contains('--open')) document.body.classList.remove('--lock')
    },
    2: propagation => event.stopPropagation(),
  }

  return [openLoginButtons, modal, modalContainer].forEach((element, index) => {
    (index === 0)
      ? element.forEach(btn => btn.addEventListener('click', modalMethods[0]))
      : element.addEventListener('click', modalMethods[index])
  })
}

// show password func
const showInputPassword = event => {
  event.target.classList.toggle('--show')

  const inputPassword = document.getElementById('password')

  if (event.target.classList.contains('--show')) {
    inputPassword.setAttribute('type', 'text')
    event.target.innerHTML = '&#128269'
  } else {
    inputPassword.setAttribute('type', 'password')
    event.target.innerHTML = '&#128270'
  }
}

export { authModal, showInputPassword } 