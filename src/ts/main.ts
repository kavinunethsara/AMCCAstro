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
