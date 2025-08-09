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

function aiLink() {
  window.open("/src/html/ai.html", "_self");
}
function appear() {
  var aiSec = document.getElementById("AI");
  var serviceSec = document.getElementById("service-links");
  if (!aiSec) return;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      aiSec.animate(
        [
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 1000,
          easing: "ease-out",
          fill: "forwards",
        }
      );
      observer.unobserve(aiSec);
    }
  });

  observer.observe(aiSec);
}
appear();
