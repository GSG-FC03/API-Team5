const prime = document.getElementById("prime-page");
// fetching data from the website
fetch("https://anapioficeandfire.com/api/characters")
  .then((res) => {
    if (res.status !== 200) {
      console.log(`There is a problem ! status number: ${res.status}`);
    } else {
      return res.json();
    }
  })
  .then((array) => {
    array.forEach((table) => {
      // Create a box which will contain all cards
      const Box = document.createElement("section");
      Box.setAttribute("class", "box");

      //create an element for the aliases of the character, and give it a class
      const Aliases = document.createElement("h1");
      Aliases.setAttribute("class", "aliases");
      Aliases.textContent = table.aliases;

      //create an element for the gender of the character, and give it a class
      const Gender = document.createElement("h2");
      Gender.setAttribute("class", "gender");
      Gender.textContent = ("Gender: " + table.gender);

      //create an element for the book that the character is on, and give it a class
      const book = document.createElement("h2");
      book.setAttribute("class", "book");
      book.textContent = ("The link of the books that he is in: "+table.books);

      //create an element for the url of the character, and give it a class
      const url = document.createElement("h3");
      url.setAttribute("class", "url");
      url.textContent = ("The link of this character: " + table.url);

      //Create card which will contain the elements
      const Card = document.createElement("div");
      Card.setAttribute("class", "Card");

      // appending childs to card
      Card.appendChild(Aliases);
      Card.appendChild(Gender);
      Card.appendChild(book);
      Card.appendChild(url);

      // appending childs to Box
      Box.appendChild(Card);
      // appending Box to prime
      prime.appendChild(Box)
    });
  });
