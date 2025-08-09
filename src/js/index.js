function pauseVideo() {
  var vid = document.getElementById("video1");
  vid.pause();
  var pauseBtn = (document.getElementById("pause").style = "display: none");
  var playBtn = (document.getElementById("play").style = "display: inline");
}
function playVideo() {
  var vid = document.getElementById("video1");
  var pauseBtn = (document.getElementById("pause").style = "display: inline");
  var playBtn = (document.getElementById("play").style = "display: none");
  vid.play();
}
function appear()
{
   var aiSec = document.getElementById("AI");
   aiSec.style.display = 'flex'
}