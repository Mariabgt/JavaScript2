const a=document.getElementsByTagName('img')[0];
a.style.left='0px';
const width=window.innerWidth;
let move=0;
let interval=50;
(function catWalk() {
  move >= width
  ? move = 0
  : (move === (width/2) && a.src !== 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424')
  ? (a.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424',interval=5000)
  : (move === (width/2) && a.src === 'http://www.anniemation.com/clip_art/images/cat-walk.gif')
  ? (a.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424',interval=50,move+=10)
  : move+=10
  a.style.left = `${move}px`
  setTimeout(catWalk, interval);
})()