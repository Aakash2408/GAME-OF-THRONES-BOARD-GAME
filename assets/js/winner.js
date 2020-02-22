/**
 * Fetching the Winner 👥
 */

const winnerKey = localStorage.key(0);
const winner = localStorage.getItem(winnerKey);



/**
 * Creating the shield 🛡️
 */

const shieldWinner = document.querySelector('.shield-winner');
const nameWinner = document.querySelector('.name-winner');

let winnerName = document.createElement('p');
winnerName.innerHTML = winner;
winnerName.classList.add('winner-name');
nameWinner.appendChild(winnerName);

let shield = document.createElement('img');
shield.classList.add('shield');
shieldWinner.appendChild(shield);


let shieldUrl = 'assets/images/shields/shield';
let winnershield = '';

if (winner === 'Eddard Stark') { shield.src = shieldUrl + '1.svg'; winnershield = shield; }
if (winner === 'Loras Tyrell') { shield.src = shieldUrl + '2.svg'; winnershield = shield; }
if (winner === 'Daenerys Targaryen') { shield.src = shieldUrl + '3.svg'; winnershield = shield; }
if (winner === 'Renly Baratheon') { shield.src = shieldUrl + '4.svg'; winnershield = shield; }
if (winner === 'Cersei Lannister') { shield.src = shieldUrl + '5.svg'; winnershield = shield; }
if (winner === 'Jon Arryn') { shield.src = shieldUrl + '6.svg'; winnershield = shield; }
if (winner === 'Maege Mormont') { shield.src = shieldUrl + '7.svg'; winnershield = shield; }
if (winner === 'Quellon Greyjoy') { shield.src = shieldUrl + '8.svg'; winnershield = shield; }
if (winner === 'Gregor Clegane') { shield.src = shieldUrl + '9.svg'; winnershield = shield; }
if (winner === 'Hoster Tully') { shield.src = shieldUrl + '10.svg'; winnershield = shield; }



/**
 * Starting the fireworks 🎆
 */

document.addEventListener("DOMContentLoaded", function (event) {
// <!--Firework Credis to Scott Schiller @ http://www.schillmania.com/-->
	var r = 4 + parseInt(Math.random() * 16);
	for (var i = r; i--;) {
		setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)', (i + 1) * (1 + parseInt(Math.random() * 1000)));
		setTimeout('createFirework(25,187,5,1,null,null,null,null,false,true)', (i + 1) * (1 + parseInt(Math.random() * 1000)));
	}
	setTimeout(function(){
		createFirework(100,800,8,5,1,100,50,50,false,false);return false
	}, 8000);
	return false
});