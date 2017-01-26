function getXY( e ) {
    var element = e.target;  //replace elementId with your element's Id.
    var rect = element.getBoundingClientRect();
    var scrollTop = document.documentElement.scrollTop?
                    document.documentElement.scrollTop:document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft?
                    document.documentElement.scrollLeft:document.body.scrollLeft;
    var elementLeft = rect.left+scrollLeft;
    var elementTop = rect.top+scrollTop, x, y;

    x = e.pageX-elementLeft;
    y = e.pageY-elementTop;

    return {x, y}
}

export { getXY }
