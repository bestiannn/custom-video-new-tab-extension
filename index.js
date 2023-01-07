const video = document.querySelector("video");
if (random) {
  // choose a random video of the array videoList
  video.src =
    videosFolder + videoList[Math.floor(Math.random() * videoList.length)];
} else {
  video.src = videosFolder + videoList[0];
}

document.addEventListener("contextmenu", (event) => event.preventDefault());