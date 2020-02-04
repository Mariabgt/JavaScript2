const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
      
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
     
    },
  ];
  var ListOfBooks = books.map(BookIndex);
  function BookIndex(books){
    var sentences = document.createElement("P");
    sentences.innerText= books.title + " written by " + books.author + "."; 
    document.body.appendChild(sentences);  
  }

  var UlBooks = books.map(BookUl);

  function BookUl(books){
      var list = document.createElement("LI");
      list.innerText = books.title + " by " +books.author;
      document.body.appendChild(list);
  };


  var coverImages = books.map(covers);

  function covers(img) {    
   var imageCover = document.createElement('img'); 
  
    imageCover.src = "https://assets.wired.com/photos/w_1001/wp-content/uploads/2015/09/design-of-everyday-things.jpg";   
    imageCover.width = "100"; 
    imageCover.height = "100";
    imageCover.style = "margin: 10px "    ;                 
  document.body.appendChild(imageCover); };
  
  
  var imageCovers = document.getElementsByTagName("img");
  console.log(imageCovers);
     var i ;
   for (i = 0; i < books.length; i++) {
  if (books.alreadyRead === true) {
    imageCovers.style.border = "border: 10px solid green";
  }
  else { imageCovers.style = "border: 5px solid red";
  }
   };