// document.addEventListener('DOMContentLoaded', () => {
document.getElementById('menu-btn').addEventListener(
	'click',
	ev => {
		ev.preventDefault()
		document.getElementById('sidebar').classList.toggle('sidebar-visible')
		document.getElementById('main-content').classList.toggle('move-right')
		if (
			document.getElementById('main-content').classList.contains('move-right')
		) {
			document.querySelector('.move-right').addEventListener(
				'click',
				() => {
					document.getElementById('sidebar').classList.remove('sidebar-visible')
					document.getElementById('main-content').classList.remove('move-right')
				},
				false
			)
		}
		if (
			document.getElementById('sidebar').classList.contains('sidebar-visible')
		) {
			document.getElementById('sidebar').addEventListener(
				'click',
				eve => {
					eve.stopImmediatePropagation()
					document.getElementById('sidebar').classList.remove('sidebar-visible')
					document.getElementById('main-content').classList.remove('move-right')
				},
				false
			)
		}
	},
	false
)
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
