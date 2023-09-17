const barIcon = document.getElementById("bar");
const sideBar = document.getElementById("sidebar");
const listContainer = document.getElementById("listContainer");
const listvideo = document.getElementById("listvideo");

const toggleBar = () => {
	sideBar.classList.toggle("small-bar");
	listContainer.classList.toggle("large-container");
	listvideo.classList.toggle("list-video");
};

barIcon.addEventListener("click", toggleBar);

