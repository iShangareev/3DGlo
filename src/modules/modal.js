const modal = () => {
  const modal = document.querySelector('.popup')
  const modalWindow = document.querySelector('.popup-content')
  const buttons = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')

	let count = 0
	let idInterval

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

  const modalOpen = () => {
		count++
    idInterval = requestAnimationFrame(modalOpen)
    if(count < 15) {
			modalWindow.style.top = count + '%'
    } else {
			cancelAnimationFrame(idInterval)
		}
  }

  const modalClose = () => {
		count--
    idInterval = requestAnimationFrame(modalClose)
    if(count > -15) {
			modalWindow.style.top = count + '%'
    } else {
			cancelAnimationFrame(idInterval)
		}
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
			if(myMobile.any()) {
				modal.style.display = 'block'
			} else {
				modal.style.display = 'block'
				idInterval = requestAnimationFrame(modalOpen)
			}
		})
  })

  closeBtn.addEventListener('click', () => {
		if(myMobile.any()) {
			modal.style.display = 'none'
		} else {
			idInterval = requestAnimationFrame(modalClose)
			modal.style.display = 'none'
		}
  })

}

export default modal
