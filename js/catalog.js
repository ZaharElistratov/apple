const swiper = new Swiper('.connecting__slider', {
	spaceBetween: 20,

	navigation: {
		prevEl: '.connecting-pagination__button_prev',
		nextEl: '.connecting-pagination__button_next',
	},

	breakpoints: {
		320: {
			slidesPerView: 1
		},
		768: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 3
		}
	}
})

const dropdown = document.querySelectorAll('.feedback__item')

dropdown.forEach(event => {
	const button = event.querySelector('.feedback-item__heading')
	button.addEventListener('click', () => {
		event.classList.toggle('feedback__item_active')
	})
})