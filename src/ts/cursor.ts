export class Cursor {
    cursorCanvas: HTMLElement | null = document.body;
    pixels: Array<HTMLElement> = [];

    constructor(canvas: HTMLElement | null) {
        this.cursorCanvas = canvas;
        for (var i = 0; i < 701; i++) {
            if (!this.cursorCanvas) break;
            var child: HTMLDivElement = document.createElement("div");
            child.classList.add("c" + i.toString());
            this.cursorCanvas.appendChild(child);
            this.pixels.push(child);
        }
        document.body.onmousemove = (event) => this.drawCursor(event.x, event.y);
    }

    drawCursor = (x: number, y: number) => {
        if (window.matchMedia("screen and (max-width: 600px)").matches || window.matchMedia("@media screen and (max-height: 575.98px) and (orientation: landscape)").matches) {
            return;
        }

        if (!this.cursorCanvas) return;
        for (var i = 0; i < this.pixels.length; i++) {
            var trailer = this.pixels[i];
            if (!trailer) continue;
            var trailRect = trailer.getBoundingClientRect();
            if (Math.abs(trailRect.x - x) < 60 && Math.abs(trailRect.y - y) < 60) {
                trailer.classList.add("show");
            } else {
                trailer.classList.remove("show");
            }
        }
    }
}
