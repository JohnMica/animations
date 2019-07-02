document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('menu-btn').addEventListener('click', ev => {
		ev.preventDefault()
		document.getElementById('menu-btn').parentNode.classList.toggle('open')
	})
	;[...document.querySelectorAll('.page-link')].forEach(el => {
		el.addEventListener('click', ev => {
			ev.preventDefault()
			;[...document.querySelectorAll('.page-link')].forEach(item => {
				const dataTarget = item.dataset.target
				document.getElementById(dataTarget).classList.remove('open-section')
			})
			const target = el.dataset.target
			const $targetEl = document.getElementById(target)

			if (!document.querySelector('.page-links').classList.contains('moved')) {
				document.querySelector('.page-links').classList.add('moved')
			}
			document.querySelector('.inpage-links').classList.add('child-open')
			$targetEl.classList.add('open-section')
		})
	})
})