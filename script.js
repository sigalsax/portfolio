var learnButton = document.querySelectorAll(".learn-more");
learnButton.forEach(er => er.addEventListener("click", function () {
	var learnStory = document.querySelectorAll(".learn-more-story");
	for (var i = 0; i < learnStory.length; i++) {
		learnStory[i].classList.add('not-active');
	}
	this.parentNode.nextElementSibling.classList.remove('not-active');
}));

// function hello (e){
// 	if (event.target.parentNode.nextElementSibling.classList.contains('not-active')){
// 		event.target.parentNode.nextElementSibling.classList.remove('not-active');
// 		console.log(event.target.parentNode.nextElementSibling.classList);
// 	} else {
// 		event.target.parentNode.nextElementSibling.classList.add('not-active');
// 		console.log(event.target.parentNode.nextElementSibling.classList);
// 	}

// }