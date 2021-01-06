//Show prices
//changing symbols
function changeSymbol(selector, affected) {
    if (selector.find('span').text() === '—') {
        selector.find('span').text("\u002B");
    } else {
        selector.find('span').text('—');
    }
    $(affected).slideToggle("fast", function () {
        console.log('Illustration prices');
    });
}
//Illustration
$('#illustrationbtn').on('click', function () {
    changeSymbol($(this), '.illustration');
})
//Graphic Design
$('#graphicbtn').on('click', function () {
    changeSymbol($(this), '.graphic');
})
//web
$('#webbtn').on('click', function () {
    changeSymbol($(this), '.web');
})
