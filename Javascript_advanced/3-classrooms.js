// This function creates a classroom with a specified number of students.
function createClassRoom(numbersOfStudents){
    // This function returns a function that returns the seat number of a student.
    function studentSeat(seat){
        return function(){
            return seat;
        }
    }
    // An array to hold the students is created.
    var students = [];
    // A loop is used to create a function for each student and push it to the students array.
    for(var i = 0; i < numbersOfStudents; i++){
        students.push(studentSeat(i+1));
    }
    // The array of student functions is returned.
    return students;
}

// A classroom with 10 students is created.
var classRoom = createClassRoom(10);