const intro = document.getElementById('intro')
intro.innerHTML = 'My Name is <strong>oladele akomolede</strong>, i am from Ekiti State born and brought up in Lagos State i went to King-solomon Nur/Pry School, then Lagos State Model College, Kankon Badagry, i further more to the Lagos State University and graduated with Bsc Computer Science i am into Auto sales and services.'

intro.style.color = 'blue'
intro.style.textTransform = 'capitalize'
intro.style.fontSize = '20px'

const title = document.querySelectorAll('h1')
title[0].style.color = 'red'
title[0].style.borderBottom = '5px solid blue '
title[0].style.textAlign = 'center'
title[0].style.textTransform = 'uppercase'
title[0].style.fontFamily = 'sans-serif'







title.textContent = 'About Myself'
alert(title.textContent)

const about = document.getElementsByClassName('body')

about[0].innerHTML = 'I am learning <abbr title="HyperText Mark up Language"><strong>HTML</strong> </abbr><abbr title="Cascading Style Sheet"><strong>CSS</strong></abbr> and <abbr title="JavaScript"><strong>JS</strong></abbr>'
about[1].innerText = `I like learning new things \n I like reading \n I like coding \n I am eager to learn`
about[2].innerText ='I am determined '

about[0].style.color = 'Blue'
about[0].style.fontSize = '20px'
about[0].style.textTransform = 'capitalize'


about[1].style.color = 'blue'
about[1].style.fontSize = '20px'
about[1].style.textTransform = 'capitalize'

about[2].style.color = 'blue'
about[2].style.fontSize = '20px'
about[2].style.textTransform = 'capitalize'


const ptag1 = document.getElementsByTagName('p')


ptag1[4].innerText = ('I never give up until i get something right ')

const ptag2 = document.getElementsByTagName('p')


ptag2[5].innerHTML = ('I like traveling')

const ptag3 = document.getElementsByTagName('p')

ptag3[6].innerText = ('I like to keep a positive attitude')

ptag1[4].style.color = 'blue'
ptag1[4].style.fontSize = '20px'
ptag1[4].style.textTransform = 'capitalize'


ptag1[5].style.color = 'blue'
ptag1[5].style.fontSize = '20px'
ptag1[5].style.textTransform = 'capitalize'

ptag1[6].style.color = 'blue'
ptag1[6].style.fontSize = '20px'
ptag1[6].style.textTransform = 'capitalize'

