/*
 * Manages scroll based animations.
 */
export class ScrollAnimator {
    animations: Array<any> = [];
    #slidecontainter: HTMLElement | null;

    constructor(anims: Array<any>) {
        this.animations = anims;
        this.#slidecontainter = document.querySelector(".slides");
    }

    add = (anim: any) => {
        this.animations.push(anim);
    }

    remove = (anim: any) => {
        var index: number = this.animations.indexOf(anim);
        this.animations.splice(index, 1);
    }

    callback = () => {
        this.animations.forEach((anim) => {
            var container = anim.container
            var offset = -container.getBoundingClientRect().y - container.scrollTop + container.scrollHeight;
            offset = (offset < 0) ? 0 : offset;
            var scrollPercent = offset / (container.scrollHeight) * 100;
            anim.seek((scrollPercent / 100) * anim.duration);
        });
    }

    init = () => {
        if (!this.#slidecontainter) return;
        this.#slidecontainter.onscroll = this.callback.bind(this);
        this.callback();
    }
}
