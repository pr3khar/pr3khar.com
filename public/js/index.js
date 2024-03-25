document.addEventListener("DOMContentLoaded", function () {
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
      } else {
        requestAnimationFrame(updateOpacity);
      }
    }

    // Start the animation
    requestAnimationFrame(updateOpacity);
  }, 500); // Adjust the delay as needed
});

var ticker = document.querySelector(".ticker"),
  list = document.querySelector(".ticker-list"),
  clone = list.cloneNode(true);

ticker.append(clone);
