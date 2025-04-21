class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this._state *= 1.5;
    if (this._state > 100) {
      this._state = 100;
    }
  }

  set state(value) {
    if (value <= 0) {
      this._state = 0;
    } else if (value >= 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}



class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    let foundIndex = this.books.findIndex((book) => book.name === bookName);
    if (foundIndex !== -1) {
      return this.books.splice(foundIndex, 1)[0];
    }
    return null;
  }
}



class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!(subject in this.marks)) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!(subject in this.marks)) {
      return 0;
    }
    const marksForSubject = this.marks[subject];
    const sum = marksForSubject.reduce((a, b) => a + b, 0);
    return sum / marksForSubject.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    const averages = subjects.map((subject) => this.getAverageBySubject(subject));
    const sumOfAverages = averages.reduce((a, b) => a + b, 0);
    return sumOfAverages / subjects.length;
  }
}