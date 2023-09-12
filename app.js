const pepsi = [
	{
		name: "Pepsi Diet",
		amount: "350 cl",
		amount_per: "8.6%",
		fat: "0g",
		fat_per: "0%",
		sodium: "310mg",
		sodium_per: "1%",
		carbohydrate: "48g",
		carbohydrate_per: "15,3%",
		protein: "0g",
		protein_per: "0%",
		ml: "250ml",
		poster1: "img/1 Pepsi white.png",
		poster2: "img/1 Pepsi blue.png",
		main_poster: "img/pepsi diet.png"
	},
	{
		name: "Pepsi Classic",
		amount: "330 cl",
		amount_per: "7.5%",
		fat: "0g",
		fat_per: "0%",
		sodium: "30mg",
		sodium_per: "1%",
		carbohydrate: "41g",
		carbohydrate_per: "14%",
		protein: "0g",
		protein_per: "0%",
		ml: "330ml",
		poster1: "img/2 can white.png",
		poster2: "img/2 can blue.png",
		main_poster: "img/can.png"
	},
	{
		name: "Pepsi 500 ML",
		amount: "350 cl",
		amount_per: "12.9%",
		fat: "0g",
		fat_per: "0%",
		sodium: "40mg",
		sodium_per: "2%",
		carbohydrate: "52g",
		carbohydrate_per: "21,7%",
		protein: "0g",
		protein_per: "0%",
		ml: "500ml",
		poster1: "img/3 Pepsi white.png",
		poster2: "img/3 Pepsi blue.png",
		main_poster: "img/pepsi .5ltr.png"
	},
	{
		name: "Pepsi 1 LTR",
		amount: "510 cl",
		amount_per: "16.9%",
		fat: "0g",
		fat_per: "0%",
		sodium: "59mg",
		sodium_per: "2%",
		carbohydrate: "61g",
		carbohydrate_per: "27,7%",
		protein: "0g",
		protein_per: "0%",
		ml: "1 LTR",
		poster1: "img/4 Pepsi white.png",
		poster2: "img/4 Pepsi blue.png",
		main_poster: "img/pepsi 1ltr.png"
	},
	{
		name: "Pepsi 1.5 LTR",
		amount: "650 cl",
		amount_per: "19.9%",
		fat: "0g",
		fat_per: "0%",
		sodium: "50mg",
		sodium_per: "3%",
		carbohydrate: "66g",
		carbohydrate_per: "30,7%",
		protein: "0g",
		protein_per: "0%",
		ml: "1.5 LTR",
		poster1: "img/5 Pepsi white.png",
		poster2: "img/5 Pepsi blue.png",
		main_poster: "img/pepsi 1.5ltr.png"
	},
	{
		name: "Pepsi 2 LTR",
		amount: "729 cl",
		amount_per: "37.9%",
		fat: "0g",
		fat_per: "0%",
		sodium: "60mg",
		sodium_per: "4%",
		carbohydrate: "69g",
		carbohydrate_per: "33,7%",
		protein: "0g",
		protein_per: "0%",
		ml: "2 LTR",
		poster1: "img/6 Pepsi white.png",
		poster2: "img/6 Pepsi blue.png",
		main_poster: "img/pepsi 2ltr.png"
	}
]

// change poster

Array.from(document.getElementsByClassName('card_pepsi')).forEach((ele, i) => {
	ele.addEventListener('mouseover', () => {
		document.getElementsByClassName('pepsi_hover_img')[i].src = pepsi[i].poster1;
	})
	ele.addEventListener('mouseout', () => {
		document.getElementsByClassName('pepsi_hover_img')[i].src = pepsi[i].poster2;
	})
})

// change main_poster
Array.from(document.getElementsByClassName('card_pepsi')).forEach((ele, i) => {
	ele.addEventListener('click', ()=> {
		document.getElementById('Main_bottle').src = pepsi[i].main_poster;
		document.getElementById('main_title').innerText = pepsi[i].name;
		document.getElementById('ml_title').innerText = pepsi[i].ml;
		document.getElementById('cl').innerText = pepsi[i].amount;
		document.getElementById('cl1').innerText = pepsi[i].amount_per;
		document.getElementById('fat').innerText = pepsi[i].fat;
		document.getElementById('fat1').innerText = pepsi[i].fat_per;
		document.getElementById('carbohydrate').innerText = pepsi[i].carbohydrate;
		document.getElementById('carbohydrate1').innerText = pepsi[i].carbohydrate_per;
		document.getElementById('sodium').innerText = pepsi[i].sodium;
		document.getElementById('sodium1').innerText = pepsi[i].sodium_per;
		document.getElementById('protein').innerText = pepsi[i].protein;
		document.getElementById('protein1').innerText = pepsi[i].protein_per;
	})
})

let index = 1;
document.getElementById('left_btn').addEventListener('click', ()=>{
	index -= 1;
	if(index < 0){
		index = pepsi.length;
	}
		document.getElementById('Main_bottle').src = pepsi[index].main_poster;
		document.getElementById('main_title').innerText = pepsi[index].name;
		document.getElementById('ml_title').innerText = pepsi[index].ml;
		document.getElementById('cl').innerText = pepsi[index].amount;
		document.getElementById('cl1').innerText = pepsi[index].amount_per;
		document.getElementById('fat').innerText = pepsi[index].fat;
		document.getElementById('fat1').innerText = pepsi[index].fat_per;
		document.getElementById('carbohydrate').innerText = pepsi[index].carbohydrate;
		document.getElementById('carbohydrate1').innerText = pepsi[index].carbohydrate_per;
		document.getElementById('sodium').innerText = pepsi[index].sodium;
		document.getElementById('sodium1').innerText = pepsi[index].sodium_per;
		document.getElementById('protein').innerText = pepsi[index].protein;
		document.getElementById('protein1').innerText = pepsi[index].protein_per;
})

document.getElementById('right_btn').addEventListener('click', ()=>{
	index ++;
	if(index > pepsi.length){
		index = pepsi.length;
	}
		document.getElementById('Main_bottle').src = pepsi[index].main_poster;
		document.getElementById('main_title').innerText = pepsi[index].name;
		document.getElementById('ml_title').innerText = pepsi[index].ml;
		document.getElementById('cl').innerText = pepsi[index].amount;
		document.getElementById('cl1').innerText = pepsi[index].amount_per;
		document.getElementById('fat').innerText = pepsi[index].fat;
		document.getElementById('fat1').innerText = pepsi[index].fat_per;
		document.getElementById('carbohydrate').innerText = pepsi[index].carbohydrate;
		document.getElementById('carbohydrate1').innerText = pepsi[index].carbohydrate_per;
		document.getElementById('sodium').innerText = pepsi[index].sodium;
		document.getElementById('sodium1').innerText = pepsi[index].sodium_per;
		document.getElementById('protein').innerText = pepsi[index].protein;
		document.getElementById('protein1').innerText = pepsi[index].protein_per;
})