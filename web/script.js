document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML = '';
});
document.querySelector('#lbrace').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML += '(';
});
document.querySelector('#rbrace').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML += ')';
});
document.querySelector('#div-sign').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML += '÷';
});
document.querySelector('#mul-sign').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML += '×';
});
document.querySelector('#sub-sign').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML += '−';
});
document.querySelector('#add-sign').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML += '+';
});
document.querySelector('#pow-sign').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML += '^';
});
document.querySelector('#dot-sign').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML += '.';
});
document.addEventListener('click', function(e) {
    if ( !e.target.matches('.digit') ) return;
    document.querySelector('#exp').innerHTML += e.target.innerHTML;
}, false);
document.querySelector('#eql-sign').addEventListener('click', function() {
    var exp = document.querySelector('#exp').innerHTML;
    eel.solve(exp)(renderResult);
});

eel.expose(renderResult);
function renderResult(result) {
    console.log('render result');
    document.querySelector('#result').innerHTML = result;
}
