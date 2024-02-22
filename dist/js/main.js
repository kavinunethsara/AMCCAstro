import anime from './anime.es.js';
import { ScrollAnimator } from './animations.js';
var grids = document.querySelectorAll(".grid");
var animator = new ScrollAnimator([]);
for (var i = 0; i < grids.length; i++) {
    var grid = grids[i];
    var anim = anime({
        targets: '#' + grid.id + ' .card',
        margin: ['10ch', 0],
        easing: 'easeInOutSine',
        duration: 400,
        delay: anime.stagger(300, { grid: [2, 3] }),
        loop: false,
        autoplay: false
    });
    anim.grid = grid;
    animator.animations.push(anim);
    animator.init();
}
;
var menuButton = document.querySelector("mobilenav");
var menu = document.querySelector("nav");
if (menuButton) {
    menuButton.onclick = () => {
        if (!menu)
            return;
        menu.classList.toggle("active");
    };
}
var cursorCanvas = document.querySelector(".pixels");
var pixels = [];
for (var i = 0; i < 701; i++) {
    if (!cursorCanvas)
        break;
    var child = document.createElement("div");
    child.classList.add("c" + i.toString());
    cursorCanvas.appendChild(child);
    pixels.push(child);
}
if (cursorCanvas) {
    document.body.onmousemove = (event) => {
        if (!cursorCanvas)
            return;
        for (var i = 0; i < pixels.length; i++) {
            var trailer = pixels[i];
            if (!trailer)
                continue;
            var trailRect = trailer.getBoundingClientRect();
            if (Math.abs(trailRect.x - event.x) < 60 && Math.abs(trailRect.y - event.y) < 60) {
                trailer.classList.add("show");
            }
            else {
                trailer.classList.remove("show");
            }
        }
    };
}
//# sourceMappingURL=main.js.map