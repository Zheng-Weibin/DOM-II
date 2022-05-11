import "./less/index.less";

// Your code goes here!

// gray all imgs
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mouseover", (evt) => {
    evt.target.style.filter = "grayscale(50%)";
  });
});

// reset imgs to original or just add else statement to above?
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mouseleave", (evt) => {
    evt.target.style.filter = "grayscale(0%)";
  });
});

// key presses
document.addEventListener("keydown", (evt) => {
  console.log(`${evt.code} pressed!`);
});

// wheel
document.addEventListener("wheel", (evt) => {
  const direction = evt.wheelDeltaY > 0 ? "left" : "down";
  console.log(`Scrolling ${direction}`);
});

// copy
// document.addEventListener("copy", (evt) => {
//   const selection = document.getSelection();
//   console.log(`A copy event was triggered for: ${selection}`);
// });

// sign me up button
document.querySelectorAll("div.btn").forEach((img) => {
  img.addEventListener("pointerenter", (evt) => {
    console.log("A pointer is over a button!!   ");
  });
});

// resize
window.addEventListener("resize", (evt) => {
  console.log("The window has been resized!!");
  console.log(
    `Screen width: ${evt.target.screen.width}px, screen height: ${evt.target.screen.height}`
  );
});

// scroll down
document.addEventListener("scroll", (evt) => {
  console.log(`Last known scroll position: ${window.scrollY}`);
});

// enlarges on double click
document.querySelectorAll("p").forEach((text) => {
  text.addEventListener("dblclick", (evt) => {
    evt.target.style.fontSize = "x-large";
  });
});

document.querySelectorAll("p").forEach((text) => {
  text.addEventListener("mouseleave", (evt) => {
    evt.target.style.fontSize = "1.6rem";
  });
});

// sub info turns color
document.querySelectorAll("p").forEach((text) => {
  text.addEventListener("mouseover", (evt) => {
    evt.target.style.color = "gray";
  });
});

document.querySelectorAll("p").forEach((text) => {
  text.addEventListener("mouseleave", (evt) => {
    evt.target.style.color = "#000";
  });
});
