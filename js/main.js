let changeIcon = () => {
	;[...document.querySelectorAll('.menu-img')].forEach(item => {
		if (
			document.getElementById('sidebar').classList.contains('sidebar-visible')
		) {
			item.style.transform = 'rotate(90deg)'
			item.style.opacity = 0
			setTimeout(() => {
				item.style.transition = 'all .35s'
				item.src = item.dataset.menu
				item.style.opacity = 1
			}, 350)
		} else {
			item.style.transform = 'rotate(0deg)'
			item.style.opacity = 0
			setTimeout(() => {
				item.style.transition = 'all .35s'
				item.src = item.dataset.initial
				item.style.opacity = 1
			}, 350)
		}
	})
}
changeIcon()
document.getElementById('menu-btn').addEventListener(
	'click',
	ev => {
		ev.preventDefault()
		document.getElementById('sidebar').classList.toggle('sidebar-visible')
		document.getElementById('main-content').classList.toggle('move-right')
		if (
			document.getElementById('main-content').classList.contains('move-right')
		) {
			document.querySelector('.move-right').addEventListener('click', () => {
				document.getElementById('sidebar').classList.remove('sidebar-visible')
				document.getElementById('main-content').classList.remove('move-right')
			})
		}
		if (
			document.getElementById('sidebar').classList.contains('sidebar-visible')
		) {
			document.getElementById('sidebar').addEventListener('click', eve => {
				eve.stopImmediatePropagation()
				document.getElementById('sidebar').classList.remove('sidebar-visible')
				document.getElementById('main-content').classList.remove('move-right')
			})
		}
		changeIcon()
	},
	false
)

document.getElementById('sidebar-menu-btn').addEventListener(
	'click',
	ev => {
		ev.preventDefault()
		document.getElementById('sidebar').classList.toggle('sidebar-visible')
		document.getElementById('main-content').classList.toggle('move-right')
		if (
			document.getElementById('main-content').classList.contains('move-right')
		) {
			document.querySelector('.move-right').addEventListener('click', () => {
				document.getElementById('sidebar').classList.remove('sidebar-visible')
				document.getElementById('main-content').classList.remove('move-right')
			})
		}
		if (
			document.getElementById('sidebar').classList.contains('sidebar-visible')
		) {
			document.getElementById('sidebar').addEventListener('click', eve => {
				eve.stopImmediatePropagation()
				document.getElementById('sidebar').classList.remove('sidebar-visible')
				document.getElementById('main-content').classList.remove('move-right')
			})
		}
		changeIcon()
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
		document.querySelector('.page-content').classList.add('child-open')
		$targetEl.classList.add('open-section')
	})
})

document.addEventListener(
	'keyup',
	event => {
		if (event.keyCode === 27 || event.key === 'Escape') {
			if (
				document.getElementById('main-content').classList.contains('move-right')
			) {
				document.getElementById('sidebar').classList.remove('sidebar-visible')
				document.getElementById('main-content').classList.remove('move-right')
				changeIcon()
			}
			if (
				document.getElementById('sidebar').classList.contains('sidebar-visible')
			) {
				document.getElementById('sidebar').classList.remove('sidebar-visible')
				document.getElementById('main-content').classList.remove('move-right')
				changeIcon()
			}
		}
	},
	false
)
