import { animate } from "animejs";

document.querySelectorAll('.cardCnt').forEach((el, i) => {
  animate(el, {
    opacity:1,
    top: 0,
    duration: 900,
    delay: i * 500
  });
});