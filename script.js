const emojis = ['&#128512','&#128513','&#128514','&#128515','&#128516','&#128517','&#128518','&#128519','&#128520','&#128521','&#128522', '&#128523','&#128524','&#128525','&#128526','&#128527','&#128528','&#128529','&#128530','&#128531','&#128532','&#128533','&#128534', '&#128535','&#128536','&#128537','&#128538','&#128539','&#128540','&#128541','&#128542','&#128543','&#128544','&#128545','&#128546','&#128547', '&#128548', '&#128549', '&#128550', '&#128551', '&#128552', '&#128553', '&#128554','&#128555','&#128556','&#128557','&#128558','&#128559','&#128560','&#128561','&#128562','&#128563','&#128564','&#128565','&#128566','&#128567','&#128577','&#128578','&#128579','&#128580','&#129296','&#129297','&#129298','&#129299','&#129300','&#129301','&#129312','&#129313','&#129314','&#129315' ,'&#129316','&#129317','&#129319','&#129320','&#129321' ,'&#129322','&#129323','&#129324','&#129325','&#129326' ,'&#129327','&#129488','&#127877','&#128102','&#128103','&#128104','&#128105','&#128110','&#128112','&#128113','&#128114','&#128115','&#128116','&#128117' ,'&#128118','&#128119','&#128120','&#128124','&#128129','&#128130']
const items = []
const $container = document.getElementById('container')
for (const emoji of emojis) {
    items.push(`<li>${emoji}</li>`)
}

$container.innerHTML = items.join('')

$container.innerHTML = $container.innerHTML 

