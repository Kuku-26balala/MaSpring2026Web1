function dragElement(tetrisElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    tetrisElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();

        const rect = tetrisElement.getBoundingClientRect();
        
        if (tetrisElement.parentElement !== document.body) {
            tetrisElement.style.left = rect.left + window.scrollX + "px";
            tetrisElement.style.top = rect.top + window.scrollY + "px";
            tetrisElement.style.position = "absolute";
            document.body.appendChild(tetrisElement);
        }

        pos3 = e.clientX;
        pos4 = e.clientY;
        tetrisElement.style.zIndex = 1000;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        tetrisElement.style.top = (tetrisElement.offsetTop - pos2) + "px";
        tetrisElement.style.left = (tetrisElement.offsetLeft - pos1) + "px";
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

document.querySelectorAll('.block').forEach(block => {
    dragElement(block);
});