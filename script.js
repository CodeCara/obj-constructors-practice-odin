let textVariable;
function makeBook (title, author, pages, read)
{this.title = title;
    this.author = author;
this.pages = pages;
this.read = true;
function displayInfo() {
    if (this.read = true) {textVariable = 'read'}
    else {textVariable = 'not read yet'};
    // console.log(`${this.title} by ${this.author}, ${this.pages}) ${textVariable}`);
    console.log(`${title} by ${author}, ${pages} pages ${textVariable}`);
  
   
}
displayInfo();

}

const bookA = new makeBook('GreatTitle', 'GreatAuthor', '70', 'true');


// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
