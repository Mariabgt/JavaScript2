var x = document.body.style.fontFamily = 'Arial,sans-serif';

var Nickname = document.getElementById("nickname");
Nickname.innerText= "Maria Bouguettaya";

var FavFood = document.getElementById('fav-food');
FavFood.innerText = "Couscous";

var Home = document.getElementById("hometown");
Home.innerText = "Casablanca";

   var liItems= document.querySelectorAll('li');
   console.log(liItems);
   for (var i = 0; i < liItems.length; i ++) {
     liItems[i].className= "list-item";
   }

   var newImg = document.createElement('img');
   newImg.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIhyAVK8Uv4V9kZiYoTrXiIgGAtCNYcNRCjcFKtBu4_AX1nIz&s";
   document.body.appendChild(newImg); 