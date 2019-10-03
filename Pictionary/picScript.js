var drawingSpace = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
};

function pen() {
    this.draw = function() {
        mouseDragged = function() {
            fill(0, 0, 0);
            strokeWeight(4);
            point(mouseX, mouseY);
        };
    };
}

function createDrawing() {
    pen().draw();
}
