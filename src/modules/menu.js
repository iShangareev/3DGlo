const menu = () => {
  const menu = document.querySelector('menu')
  const body = document.querySelector('body')


  body.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.closest('menu>ul>li>a') || e.target.closest('.menu') || e.target.closest('.close-btn')) {
      menu.classList.toggle('active-menu')
    }
  })
}

export default menu;
