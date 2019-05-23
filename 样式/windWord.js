function windWord(event) {
    var list = ["点击一", "点击二", "点击三"],
        index = Math.floor(Math.random() * list.length),
        node = document.createElement('span'),
        theX = event.pageX,
        theY = event.pageY;

    node.innerText = list[index];
    css = {
        'zIndex': 999,
        'position': 'absolute',
        'top': (theY - 20) + 'px',
        'left': theX + 'px',
        'fontWeight': "bold",
        'color': "#ff6651"
    };
    Object.assign(node.style, css);

    body.append(node);

    let i = 0
    node.timer = setInterval(() => {
        console.log(node)
        i = i + 1;
        node.style.opacity = 1 - i / 100
        node.style.top = (theY - 20 - i) + 'px'
        if (i == 100) {
            clearInterval(node.timer)
            body.removeChild(node)
        }
    }, 10)
}

var body = document.querySelector('body');
body.addEventListener("click", () => windWord(event));