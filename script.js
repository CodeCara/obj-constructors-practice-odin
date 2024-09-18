let textVariable;
function makeBook (title, author, pages, read)
{this.title = title;
    this.author = author;
this.pages = pages;
this.read = true;
function displayInfo() {
    if (this.read = true) {textVariable = 'read'}
    else {textVariable = 'not read yet'};
  
    return (`${title} by ${author}, ${pages} pages ${textVariable}`);
  
   
}
displayInfo();
console.log(displayInfo());
}


const bookA = new makeBook('GreatTitle', 'GreatAuthor', '70', 'true');


// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
