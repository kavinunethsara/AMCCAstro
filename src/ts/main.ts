import anime from './anime.es.js'
import { ScrollAnimator } from './animations.js';
import { Cursor } from './cursor.js';
// import {  }

var grids: NodeListOf<Element> = document.querySelectorAll(".grid");
var animator: ScrollAnimator = new ScrollAnimator([]);

for (var i = 0; i < grids.length; i++) {
    var grid: Element = grids[i];
    if (grid.classList.contains("noanimation")) continue;
    var anim: any = anime({
        targets: '#' + grid.id + ' .card',
        margin: ['5%', 0],
        easing: 'easeInOutSine',
        duration: 400,
        delay: anime.stagger(300, { grid: [2, 3] }),
        loop: false,
        autoplay: false
    });
    anim.container = grid.closest(".slide");
    animator.animations.push(anim);

    animator.init()
};

// Star background animator
var backgroundAnim: any = anime({
    targets: ['#stars', "#stars2", "#stars3"],
    translateX: [-500, -1000],
    easing: 'easeInOutSine',
    delay: anime.stagger(300),
    duration: 5000,
    autoplay: false,
    loop: false
});
backgroundAnim.container = document.querySelector(".slides");

animator.animations.push(backgroundAnim);

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
var cursorHandler: Cursor = new Cursor(cursorCanvas);
