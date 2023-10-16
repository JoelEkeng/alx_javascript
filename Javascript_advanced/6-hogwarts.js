/**
 * Represents a Hogwarts student with a private score and name.
 * @constructor
 */
function studentHogwarts(){
    let privateScore = 0;
    let name = null;

    /**
     * Changes the private score by the given points.
     * @param {number} points - The points to change the score by.
     */
    function changeScoreBy(points){
        privateScore += points;
    }

    /**
     * Sets the name of the student.
     * @param {string} newName - The new name of the student.
     */
    this.setName = function(newName){
        name = newName;
    }

    /**
     * Rewards the student by increasing their score by 1.
     */
    this.rewardStudent = function(){
        changeScoreBy(1);
    }

    /**
     * Penalizes the student by decreasing their score by 1.
     */
    this.penalizeStudent = function(){
        changeScoreBy(-1);
    }

    /**
     * Gets the name and private score of the student.
     * @returns {string} - The name and private score of the student.
     */
    this.getScore = function(){
        return `${name}: ${privateScore}`;
    }
}

let harry = new studentHogwarts();
harry.setName('Harry');
for(i=0; i<4; i++){
    harry.rewardStudent();
}
harry.getScore();

let draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
for(i=0; i<3; i++){
    draco.penalizeStudent();
}
draco.getScore();