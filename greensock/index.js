import { TweenMax } from "gsap";

const bones = Array.from({ length: 10 }, () => {
  let bone = document.createElement("i");
  bone.setAttribute("class", "fas fa-bone");
  bone.addEventListener("click", (event) => {
    console.log("event", event);
    event.target.setAttribute("style", "display:none");
  });
  return bone;
});

bones.forEach((bone) => {
  TweenMax.set(bone, {
    position: "absolute",
    x: `${Math.random() * window.innerWidth}`,
    y: `${Math.random() * window.innerHeight}`,
  });
  document.body.appendChild(bone);
});

TweenMax.set("#dog", { xPercent: -50, yPercent: -50 });
document.addEventListener("click", (event) => {
  const { clientX, clientY } = event;
  TweenMax.to("#dog", 1, { x: clientX, y: clientY });
});
