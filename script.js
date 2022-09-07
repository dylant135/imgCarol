const theimg = document.getElementById('theimg');
const dot = document.getElementsByClassName('dot');

let index = 0;
dot[0].classList.add('active');

function showimg(i) {
    dot[index].className = dot[index].className.replace("active", "");
    index += i;
    if(index > 4) {
        index = 0;
    }
    if(index < 0) {
        index = 4;
    }
    console.log(index);
    theimg.src = 'img/pic' + index + '.jpeg';
    dot[index].classList.add('active');
}