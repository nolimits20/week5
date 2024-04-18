const idOne = document.getElementById('one')

idOne.textContent = 'Brenda'

document.getElementById('lone').textContent = 'George'

const title = document.querySelector('h1')

alert(title.textContent)

title.textContent = 'Dom Manipulation'

const lists = document.querySelectorAll('ul li')

lists[1].textContent = 'John'
lists[2].textContent = 'Peter'

const twos = document.querySelectorAll('.two')

twos[0].innerHTML = 'Mikko'

const deuxes = document.getElementsByClassName('two')

deuxes[1].innerText = `Joshua is \n always \n late in class`
deuxes[3].innerText = 'AbdulKareem'

lists[3].style.color = 'blue'
lists[3].style.backgroundColor = 'green'
lists[3].style.padding = '30px'
lists[3].style.fontSize = '20px'

//alert.content