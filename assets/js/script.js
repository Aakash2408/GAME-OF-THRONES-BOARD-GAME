const api = 'https://anapioficeandfire.com/api/characters/';
const characters = [339, 640, 1303, 862, 238, 572, 692, 836, 1442, 503];

for (let i = 0; i < characters.length; i++) {
	let url = api + characters[i];

	fetch(url)
		.then(result => result.json())
		.then((res) => {
			createCard(res);
		})
		.catch(err => console.log(err));
}


/**
 * Creating the output
 */

const cards = document.getElementById('cards');
localStorage.clear();

function createCard(result) {

	let div1 = document.createElement('div');
	div1.classList.add('card');
	div1.classList.add('overlay');
	cards.appendChild(div1);

	let name = document.createElement('p');
	name.classList.add('name');
	div1.appendChild(name);
	name.innerHTML = 'Name: <b>' + result['name'] + '</b>';

	let shield = document.createElement('img');
	shield.classList.add('shield');
	div1.appendChild(shield);
	let shieldUrl = 'assets/images/shields/shield';

	if (result['name'] === 'Eddard Stark') { div1.style.backgroundColor = '#343434'; shield.src = shieldUrl + '1.svg'}
	if (result['name'] === 'Loras Tyrell') { div1.style.backgroundColor = '#44892A'; shield.src = shieldUrl + '2.svg'; }
	if (result['name'] === 'Daenerys Targaryen') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '3.svg'; }
	if (result['name'] === 'Renly Baratheon') { div1.style.backgroundColor = '#EBA000'; shield.src = shieldUrl + '4.svg'; }
	if (result['name'] === 'Cersei Lannister') { div1.style.backgroundColor = '#2E3248'; shield.src = shieldUrl + '5.svg'; }
	if (result['name'] === 'Jon Arryn') { div1.style.backgroundColor = '#312B3C'; shield.src = shieldUrl + '6.svg'; }
	if (result['name'] === 'Maege Mormont') { div1.style.backgroundColor = '#79AB61'; shield.src = shieldUrl + '7.svg'; }
	if (result['name'] === 'Quellon Greyjoy') { div1.style.backgroundColor = '#6C5F45'; shield.src = shieldUrl + '8.svg'; }
	if (result['name'] === 'Gregor Clegane') { div1.style.backgroundColor = '#CF9723'; shield.src = shieldUrl + '9.svg'; }
	if (result['name'] === 'Hoster Tully') { div1.style.backgroundColor = '#7E828D'; shield.src = shieldUrl + '10.svg'; }

	let gender = document.createElement('p');
	gender.classList.add('gender');
	div1.appendChild(gender);
	if (result['gender'] === 'Female') {
		gender.innerHTML = 'Gender: <b class="gender-sign">♀</b>';
	} else {
		gender.innerHTML = 'Gender: <b class="gender-sign">♂</b>';
	}

	let culture = document.createElement('p');
	culture.classList.add('culture');
	div1.appendChild(culture);
	if (result['culture'] === '') culture.innerHTML = 'Culture: <b>Unknown</b>';
	else culture.innerHTML = 'Culture: <b>' + result['culture'] + '</b>';

	let born = document.createElement('p');
	born.classList.add('born');
	div1.appendChild(born);
	if (result['born'] === '') {
		born.innerHTML = 'Born: <b>Unknown</b>';
	} else {
		born.innerHTML = 'Born: <b>' + result['born'] + '</b>';
	}


	div1.addEventListener('click', function () {
		if (localStorage.player1 && localStorage.player2) {
			localStorage.clear();
			reset();
			localStorage.player1 = result['name'];
			div1.style.outline = '5px solid white';
			shield.style.transform = 'scale(1.1)';
			createBadgePlayer1();
		} else if (localStorage.player1) {
			localStorage.player2 = result['name'];
			div1.style.outline = '5px solid white';
			shield.style.transform = 'scale(1.1)';
			createBadgePlayer2();
		} else {
			localStorage.player1 = result['name'];
			div1.style.outline = '5px solid white';
			shield.style.transform = 'scale(1.1)';
			createBadgePlayer1();
		}
	});

	function createBadgePlayer1() {
		let badge = document.createElement('div');
		badge.classList.add('badge');
		badge.classList.add('badge1');
		div1.appendChild(badge);
	}

	function createBadgePlayer2() {
		let badge = document.createElement('div');
		badge.classList.add('badge');
		badge.classList.add('badge2');
		div1.appendChild(badge);
	}
}



/**
 * Remove & reset functions
 */

function reset() {
	document.querySelectorAll(".badge").forEach(function (elem) {
		elem.remove();
	});
	document.querySelectorAll(".badge").forEach(function (elem) {
		elem.remove();
	});
	document.querySelectorAll(".card").forEach(function (elem) {
		elem.style.outline = 'none';
	});
	document.querySelectorAll(".shield").forEach(function (elem) {
		elem.style.transform = 'scale(1)';
	});
}



/**
 * Start Game button
 */

const startGame = document.querySelector('.start-game-button');

startGame.addEventListener('click', function () {
	if (localStorage.player1 && localStorage.player2) {
		startGame.href = 'game.html';
		startGame.click();
	} else {
		alert('💡 Cant play without 2 players...');
		startGame.href = '#';
	}
}, false);
