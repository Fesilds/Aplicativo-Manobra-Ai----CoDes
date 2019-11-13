document.addEventListener('DOMContentLoaded', function() {
	let test = document.querySelector('.test')

	test.addEventListener('click', function() {
		before()

		setTimeout(after, 2000)
	})
})

function before() {

	/* seu código aqui */
	let hide = document.querySelector('.hidden')
	console.log(hide)
	hide.classList.remove('hidden')
	let test = document.querySelector('.test')
	test.classList.add('hidden')



}


function after() {
	let hide = document.querySelector('.load')
	console.log(hide)
	hide.classList.add('hidden')

	/* seu código aqui */

	let test = document.querySelector('.test')
	test.classList.remove('hidden')

	/* seu código aqui */

	test.innerHTML = 'conexão funcionando!'
}
