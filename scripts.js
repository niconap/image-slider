const Slider = function (next, prev, firstnav, secondnav, thirdnav) {
  let nextButton = next;
  let prevButton = prev;
  let position = 0;
  let first = firstnav;
  let second = secondnav;
  let third = thirdnav;

  this.start = function () {
    document.documentElement.style.setProperty("--img-pos", position + "px");
    let next = document.getElementById(nextButton);
    next.addEventListener("click", function () {
      if (position != 200) {
        position += 100;
      } else {
        position = 0;
      }
      document.documentElement.style.setProperty("--img-pos", position + "px");
      updateNav();
    });

    let prev = document.getElementById(prevButton);
    prev.addEventListener("click", function () {
      if (position != 0) {
        position -= 100;
      } else {
        position = 200;
      }
      document.documentElement.style.setProperty("--img-pos", position + "px");
      updateNav();
    });

    let firstDot = document.getElementById(first);
    firstDot.addEventListener("click", function () {
      position = 0;
      document.documentElement.style.setProperty("--img-pos", position + "px");
      updateNav();
    });

    let secondDot = document.getElementById(second);
    secondDot.addEventListener("click", function () {
      position = 100;
      document.documentElement.style.setProperty("--img-pos", position + "px");
      updateNav();
    });

    let thirdDot = document.getElementById(third);
    thirdDot.addEventListener("click", function () {
      position = 200;
      document.documentElement.style.setProperty("--img-pos", position + "px");
      updateNav();
    });
  };

  let updateNav = function () {
    if (position == 0) {
      document.documentElement.style.setProperty("--first-background", "black");
      document.documentElement.style.setProperty(
        "--second-background",
        "white"
      );
      document.documentElement.style.setProperty("--third-background", "white");
    } else if (position == 100) {
      document.documentElement.style.setProperty("--first-background", "white");
      document.documentElement.style.setProperty(
        "--second-background",
        "black"
      );
      document.documentElement.style.setProperty("--third-background", "white");
    } else {
      document.documentElement.style.setProperty("--first-background", "white");
      document.documentElement.style.setProperty(
        "--second-background",
        "white"
      );
      document.documentElement.style.setProperty("--third-background", "black");
    }
  };

  const interval = setInterval(function () {
    if (position != 200) {
      position += 100;
    } else {
      position = 0;
    }
    document.documentElement.style.setProperty("--img-pos", position + "px");
    updateNav();
  }, 5000);
};

let s = new Slider("next", "prev", "first", "second", "third");
s.start();
