import anime from './anime.es.js'
import { ScrollAnimator } from './animations.js';

var grids: NodeListOf<Element> = document.querySelectorAll(".grid");
var animator: ScrollAnimator = new ScrollAnimator([]);

for (var i = 0; i < grids.length; i++) {
    var grid: Element = grids[i];
    var anim: any = anime({
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

    animator.init()
};

// Menu handler
var menuButton: HTMLElement | null = document.querySelector("mobilenav");
var menu: HTMLElement | null = document.querySelector("nav");

if (menuButton) {
    menuButton.onclick = () => {
        if (!menu) return;
        menu.classList.toggle("active");
    }
}

var cursorCanvas: HTMLElement | null = document.querySelector(".pixels");
var pixels: Array<HTMLElement> = [];
for (var i = 0; i < 701; i++) {
    if (!cursorCanvas) break;
    var child: HTMLDivElement = document.createElement("div");
    child.classList.add("c" + i.toString());
    cursorCanvas.appendChild(child);
    pixels.push(child);
}

if (cursorCanvas) {
    document.body.onmousemove = (event) => {
        if (!cursorCanvas) return;
        for (var i = 0; i < pixels.length; i++) {
            var trailer = pixels[i];
            if (!trailer) continue;
            var trailRect = trailer.getBoundingClientRect();
            if (Math.abs(trailRect.x - event.x) < 60 && Math.abs(trailRect.y - event.y) < 60) {
                trailer.classList.add("show");
            } else {
                trailer.classList.remove("show");
            }
        }
    }
}
