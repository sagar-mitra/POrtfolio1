//! smooth scrolling
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//   });

//! mouse follower
let mouseFollower = document.querySelector("#mini-circle");

function windowMouseFollower() {
  window.addEventListener("mousemove", (e) => {
    gsap.to(mouseFollower, {
      x: e.x,
      y: e.y,
      duration: 1,
    });
  });
}

windowMouseFollower();

//! loading page animation

let tl = gsap.timeline();
function landingPageAnimation() {
  tl.from(
    "#navelem1 h4",
    {
      y: "100%",
      opacity: 0,
      duration: 1.3,
    },
    "same"
  );
  tl.from(
    "#navelem2 h4",
    {
      y: "100%",
      duration: 1.3,
    },
    "same"
  );
  tl.from(
    "#heroh1f h1",
    {
      y: "120%",
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
    },
    "same"
  );
  tl.from(
    "#heroh2f h1",
    {
      y: "120%",
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
    },
    "same"
  );
  tl.from(
    "#lp-three h4",
    {
      opacity: 0,
      duration: 1.3,
      ease: "slow(0.7,0.7,false)",
    },
    "same1"
  );
  tl.from(
    "#circles .circle",
    {
      opacity: 0,
      duration: 1.3,
      ease: "slow(0.7,0.7,false)",
    },
    "same1"
  );
  tl.from(
    "#resume h4",
    {
      opacity: 0,
      duration: 1.3,
      ease: "slow(0.7,0.7,false)",
    },
    "same1"
  );
  tl.from(
    "#resume i",
    {
      y: "-140%",
      duration: 1.4,
      ease: "slow(0.7,0.7,false)",
    },
    "same1"
  );
}
landingPageAnimation();

//menu click display animation
function menuClickDisplayAnimation() {
  document.querySelector("#navelem2 h4").addEventListener("click", (e) => {
    gsap.to("#navelem2-click", {
      opacity: 1,
      duration: 1.4,
    });
  });
}
menuClickDisplayAnimation();

//project animation
document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
    gsap.to(elem.querySelector(".elem-circle"), {
      opacity: 0,
    });
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.7,
      x: 0,
    });
    gsap.to(elem.querySelector("h5"), {
      opacity: 0.7,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX - 30,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
    });

    gsap.to(elem.querySelector(".elem-circle"), {
      opacity: 1,
      top: diff,
      left: dets.clientX - 30,
      ease: Power3,
    });

    gsap.to(elem.querySelector("h1"), {
      opacity: 0.2,
      x: 20,
    });
    gsap.to(elem.querySelector("h5"), {
      opacity: 0.2,
    });
  });
});

//TODO gsap.utils.clamp(-20, 20, rotateDiff) ... rotateDiff er value k -20 theke 20 er modhye rakhbe

//hero page arrow animation
function resumeAnimation() {
  let resume = document.querySelector("#resume");

  resume.addEventListener("mouseenter", (e) => {
    gsap.to("#resume i", {
      rotate: 45,
    });
  });

  resume.addEventListener("mouseleave", (e) => {
    gsap.to("#resume i", {
      rotate: 0,
    });
  });
}
resumeAnimation();

//about page animation
function aboutPageAnimation() {
  let tl1 = gsap.timeline();
  tl.from("#text-about p", {
    y: 80,
    opacity: 0,
    duration: 1.4,
    ease: "slow(0.7,0.7,false)",
    scrollTrigger: {
      trigger: "#about-page",
      scroller: "body",
      start: "-8% 30%",
      end: "20% 22%",
      scrub: 2,
    },
  });

  tl.from("#text-about h5", {
    y: 100,
    opacity: 0,
    duration: 1.4,
    ease: "slow(0.7,0.7,false)",
    scrollTrigger: {
      trigger: "#about-page",
      scroller: "body",
      start: "0% 30%",
      end: "20% 22%",
      scrub: 2,
    },
  });

  tl.from("#image-about img", {
    x: "-80%",
    opacity: 0,
    duration: 2,
    ease: "slow(0.7,0.7,false)",
    scrollTrigger: {
      trigger: "#about-page",
      scroller: "body",
      start: "-8% 30%",
      end: "20% 22%",
      scrub: 2,
    },
  });

  tl.from("#text-about button", {
    y: 100,
    opacity: 0,
    duration: 1.4,
    ease: "slow(0.7,0.7,false)",
    scrollTrigger: {
      trigger: "#about-page",
      scroller: "body",
      start: "0% 30%",
      end: "20% 22%",
      scrub: 2,
    },
  });
}
aboutPageAnimation();

//skill page animation
function skillPageAnimation() {
  document.querySelectorAll(".skill-page-card-up").forEach((skill) => {
    skill.addEventListener("mouseenter", (e) => {
      gsap.to(skill.querySelector("img"), {
        scale: 1.1,
      });
    });

    skill.addEventListener("mouseleave", (e) => {
      gsap.to(skill.querySelector("img"), {
        scale: 1,
      });
    });
  });
}
skillPageAnimation();

// mini circle hover animation
function miniCircleHoverEffect() {
  //sm title
  document.querySelector("#navelem1").addEventListener("mousemove", (e) => {
    gsap.to("#mini-circle", {
      scale: 1.6,
      mixBlendMode: "difference",
    });
  });

  document.querySelector("#navelem1").addEventListener("mouseleave", (e) => {
    gsap.to("#mini-circle", {
      scale: 1,
      mixBlendMode: "normal",
    });
  });

  // menu click
  document.querySelector("#navelem2-click").addEventListener("mousemove", () => {
    console.log("clicked");
    // gsap.to(a.querySelector("a"), {
    //   zIndex: 10,
    //   mixBlendMode: "difference",
    // });
    gsap.to("#mini-circle", {
      scale: 1.6,
      mixBlendMode: "difference",
      // zIndex:-1
    });
  })

  // menu
  document.querySelector("#navelem2").addEventListener("mousemove", (e) => {
    gsap.to("#mini-circle", {
      scale: 1.6,
      mixBlendMode: "difference",
      // zIndex: -1
    });
    gsap.to("#navelem2 h4", {
      zIndex: 10,
      mixBlendMode: "difference",
    });
  });

  document.querySelector("#navelem2").addEventListener("mouseleave", (e) => {
    gsap.to("#mini-circle", {
      scale: 1,
      mixBlendMode: "normal",
      zIndex: 1,
    });
  });

  //hero section
  document.querySelector("#heroh1f h1").addEventListener("mousemove", (e) => {
    gsap.to("#mini-circle", {
      mixBlendMode: "difference",
    });
  });

  document.querySelector("#heroh1f h1").addEventListener("mouseleave", (e) => {
    gsap.to("#mini-circle", {
      mixBlendMode: "normal",
    });
  });

  document.querySelector("#heroh2f h1").addEventListener("mousemove", (e) => {
    gsap.to("#mini-circle", {
      mixBlendMode: "difference",
    });
  });

  document.querySelector("#heroh2f h1").addEventListener("mouseleave", (e) => {
    gsap.to("#mini-circle", {
      mixBlendMode: "normal",
    });
  });

  //hero footer
  document.querySelector("#resume").addEventListener("mousemove", (e) => {
    gsap.to("#mini-circle", {
      scale: 1.6,
      mixBlendMode: "difference",
      zIndex: -1,
    });

    gsap.to("#resume h4", {
      zIndex: 10,
      mixBlendMode: "difference",
    });
    gsap.to("#resume i", {
      zIndex: 10,
      mixBlendMode: "difference",
    });
  });

  document.querySelector("#resume").addEventListener("mouseleave", (e) => {
    gsap.to("#mini-circle", {
      scale: 1,
      mixBlendMode: "normal",
      zIndex: 1,
    });
  });

  document.querySelector("#lp-three").addEventListener("mousemove", (e) => {
    gsap.to("#mini-circle", {
      scale: 1.6,
      mixBlendMode: "difference",
      zIndex: -1,
    });
    gsap.to("#lp-three h4", {
      zIndex: 10,
      mixBlendMode: "difference",
    });
  });

  document.querySelector("#lp-three").addEventListener("mouseleave", (e) => {
    gsap.to("#mini-circle", {
      scale: 1,
      mixBlendMode: "normal",
      zIndex: 1,
    });
  });

  //about page
  document.querySelector("#text-about").addEventListener("mousemove", (e) => {
    gsap.to("#mini-circle", {
      scale: 1.6,
      mixBlendMode: "difference",
    });
  });

  document.querySelector("#text-about").addEventListener("mouseleave", (e) => {
    gsap.to("#mini-circle", {
      scale: 1,
      mixBlendMode: "normal",
    });
  });

  // document
  //   .querySelector("#text-about button")
  //   .addEventListener("mousemove", (e) => {
  //     // gsap.to("#mini-circle", {
  //     //   mixBlendMode: "difference",
  //     // });

  //     gsap.to("button", {
  //       color: "black",
  //     });
  //   });

  // document
  //   .querySelector("#text-about button")
  //   .addEventListener("mouseleave", (e) => {
  //     // gsap.to("#mini-circle", {
  //     //   mixBlendMode: "normal",
  //     // });
  //     gsap.to("button", {
  //       color: "#ffff",
  //     });
  //   });
}
miniCircleHoverEffect();

// footer Animation
// document.querySelectorAll
