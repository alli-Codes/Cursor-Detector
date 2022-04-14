const eyes = document.querySelectorAll('.eye__iris')
const screen = document.querySelector('#app')

console.log(eyes[0].parentElement)

let radar = {
	x: 0,
	y: 0
}

const halfScreenSize = {
	height: screen.clientHeight/ 2,
	width: screen.clientWidth/ 2
	}

window.addEventListener('click', (e) => {
	/*eyes.forEach(eye => {
		// console.log(e.y , e.x)
		// eye.style.transform = `translate(${e.y}%, ${e.x}%)`;
	})*/

	radar.x = e.x - halfScreenSize.width
	radar.y = e.y - halfScreenSize.height

	console.log(radar.x, radar.y)

})