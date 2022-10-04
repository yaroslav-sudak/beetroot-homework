document.querySelectorAll('.js-footer-item').forEach(element => {
  element.addEventListener('click', () =>{
    element.classList.toggle('yar-footer-item--open')
  })
})