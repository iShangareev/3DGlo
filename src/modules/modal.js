import { animate } from './helpers'

const modal = () => {
  const modal = document.querySelector('.popup')
  const modalWindow = document.querySelector('.popup-content')
  const buttons = document.querySelectorAll('.popup-btn')

	let myMobile = {
					Android: function() {
							return navigator.userAgent.match(/Android/i);
					},
					BlackBerry: function() {
							return navigator.userAgent.match(/BlackBerry/i);
					},
					iOS: function() {
							return navigator.userAgent.match(/iPhone|iPad|iPod/i);
					},
					Opera: function() {
							return navigator.userAgent.match(/Opera Mini/i);
					},
					Windows: function() {
							return navigator.userAgent.match(/IEMobile/i);
					},
					any: function() {
							return (myMobile.Android() ||
											myMobile.BlackBerry() ||
											myMobile.iOS() ||
											myMobile.Opera() ||
											myMobile.Windows());
					}
			}

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
			if(myMobile.any()) {
				modal.style.display = 'block'
			} else {
				modal.style.display = 'block'
        animate({
          duration: 100,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalWindow.style.top = 15 * progress + '%'
          }
        })
			}
		})
  })

  modal.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){
      modal.style.display = 'none'
    }
  })

}

export default modal
