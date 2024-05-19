class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
	}
	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
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
	fix() {
		return super.state;
	}
	set state(newState) {
		super.state = newState;
	}
	get state() {
		return super.state;
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
	fix() {
		return super.state;
	}
	set state(newState) {
		super.state = newState;
	}
	get state() {
		return super.state;
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
	fix() {
		return super.state;
	}
	set state(newState) {
		super.state = newState;
	}
	get state() {
		return super.state;
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
	fix() {
		return super.state;
	}
	set state(newState) {
		super.state = newState;
	}
	get state() {
		return super.state;
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
	fix() {
		return super.state;
	}
	set state(newState) {
		super.state = newState;
	}
	get state() {
		return super.state;
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
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let findBook = this.books[i];
				this.books.splice(i, 1);
				return findBook;
			}
		}
		return null;
	}
}