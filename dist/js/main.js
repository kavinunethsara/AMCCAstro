import anime from './anime.es.js';
import { ScrollAnimator } from './animations.js';
import { Cursor } from './cursor.js';
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
var cursorHandler = new Cursor(cursorCanvas);
//# sourceMappingURL=main.js.map