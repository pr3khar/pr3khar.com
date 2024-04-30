document.addEventListener("DOMContentLoaded", function () {
  // Check if the loader has already been shown in this session
  if (!sessionStorage.getItem("loaderShown")) {
    // Hide the loader with a slide-up animation after the page has fully loaded
    setTimeout(function () {
      const loaderWrapper = document.getElementById("loader");

      // Calculate 80% of the loader height
      const eightyPercentHeight = 0.8 * loaderWrapper.clientHeight;

      // Add the hide-loader class after a delay
      setTimeout(function () {
        loaderWrapper.classList.add("hide-loader");
      }, 200);

      // Update opacity based on slide-up progress
      function updateOpacity() {
        const currentTransform = getComputedStyle(loaderWrapper).transform;
        const translateY = parseFloat(currentTransform.split(",")[5]);

        // Update opacity based on slide-up progress
        loaderWrapper.style.opacity = translateY < -eightyPercentHeight ? 0 : 1;

        // After the animation is complete, hide the loader completely
        if (translateY <= -loaderWrapper.clientHeight) {
          loaderWrapper.style.display = "none";
          // Set a flag in sessionStorage to indicate that the loader has been shown
          sessionStorage.setItem("loaderShown", "true");
        } else {
          requestAnimationFrame(updateOpacity);
        }
      }

      // Start the animation
      requestAnimationFrame(updateOpacity);
    }, 2000); // Adjust the delay as needed
  } else {
    // If the loader has already been shown in this session, hide it immediately
    const loaderWrapper = document.getElementById("loader");
    loaderWrapper.style.display = "none";
  }
});

// VANTA.FOG({
//   el: "#white-bg",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.0,
//   minWidth: 200.0,
//   highlightColor: 0x201f20,
//   midtoneColor: 0x313131,
//   lowlightColor: 0x1a1b1b,
//   baseColor: 0x010101,
//   blurFactor: 0.55,
//   speed: 2.0,
//   zoom: 0.7,
// });

var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

var ticker = document.querySelector(".ticker"),
  list = document.querySelector(".ticker-list"),
  clone = list.cloneNode(true);

ticker.append(clone);

var ticker4 = document.querySelector(".ticker-4"),
  list4 = document.querySelector(".ticker-list-4"),
  clone4 = list4.cloneNode(true);

ticker4.append(clone4);

var ticker2 = document.querySelector(".ticker-2"),
  list2 = document.querySelector(".ticker-list-2"),
  clone2 = list2.cloneNode(true);

ticker2.append(clone2);

// VANTA.TOPOLOGY({
//   el: "#white-bg",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: true,
//   minHeight: 200.0,
//   minWidth: 200.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
//   color: 0xeaedff,
//   backgroundColor: 0xffffff,
// });

// VANTA.TOPOLOGY({
//   el: "#white-bg",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.0,
//   minWidth: 200.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
//   color: 0x222228,
//   backgroundColor: 0x111111,
// });

document.addEventListener("DOMContentLoaded", function () {
  const carouselTrack = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const slideWidth = slides[0].offsetWidth;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    const translateXValue = -currentIndex * slideWidth;
    carouselTrack.style.transform = `translateX(${translateXValue}px)`;
  }

  setInterval(nextSlide, 8000); // Change slide every 8 seconds
});
