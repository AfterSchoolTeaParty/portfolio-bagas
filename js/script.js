const timing = () =>{
	let time = new Date()
	let hours = time.getHours()
	let minutes = time.getMinutes()
	let seconds = time.getSeconds()
	days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	dates = `${days[time.getDay()-1]}, ${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`

	if(hours<10){
		hours = `0${hours}`
	}
	if(minutes<10){
		minutes = `0${minutes}`
	}
	if(seconds<10){
		seconds = `0${seconds}`
	}
	document.querySelector('#clock').innerText =`${hours} : ${minutes} : ${seconds}`
	document.querySelector('#date').innerText = dates
}
timing()
setInterval(()=>{
	timing()
}, 1000)

const typeNewsTitle = new Typed('#newsTitle', {
  strings: ["This is a title"],
  typeSpeed: 400
});

const newsContent = `Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Incidunt recusandae hic perspiciatis quas doloribus sequi odio aliquid quasi quidem magni iusto aperiam sunt itaque ducimus repellendus illo maxime ex adipisci et tenetur eligendi, ab illum reiciendis tempora impedit! Recusandae, facilis. Impedit, magni? Necessitatibus, eos dolores molestias possimus debitis, beatae sint, repudiandae dolor aspernatur adipisci ea suscipit, blanditiis ullam. Eum libero sed odit consequuntur sint eligendi deleniti atque quos quis asperiores nobis eveniet, optio itaque fugiat voluptatibus perspiciatis fuga rerum officia. `

const typeNewsContent = new Typed('#newsContent', {
  strings: [newsContent],
  typeSpeed: 1
});

const typeMyName = new Typed('#myname', {
  strings: ["Bagas Jonathan", "Bagas", "Me"],
  typeSpeed: 50,
  loop : true
});

const typeMyProjects = new Typed('#projectText', {
  strings: ["Projects", "Working", "Work"],
  typeSpeed: 50,
  loop : true
});

const typeFooterText = new Typed('#footerText', {
  strings: ["Created By Bagas @2021", "Made by Bagas", "This is one of my work", "I don't have any other word", "It's looklike the typing animation is too much"],
  typeSpeed: 50,
  loop : true
});

const getInputAndGo = () =>{
	let input = document.getElementById('search-input').value
	input = input.split(' ');
	input = input.join('+')
	window.location.href=`https://www.google.com/search?q=${input}`
}

document.getElementById('search-input').addEventListener("keyup", (event)=>{
	if(event.key === "Enter"){
		getInputAndGo()
	}
})

document.getElementById('search-btn').addEventListener("click", ()=>{
	getInputAndGo()
})