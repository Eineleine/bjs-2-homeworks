function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Ivan", "male", 19);
let student2 = new Student("Mary", "female", 18);
let student3 = new Student("Ann", "female", 21);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function() {
	if (!this.marks || (this.marks === 0)) {
        return 0;
      }
		let avg = this.marks.reduce((acc, item, index, marks) => {
			acc += item;
			if (index === marks.length - 1) {
				return acc / marks.length;
			}
			return acc;
		}, 0)
		return avg;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}