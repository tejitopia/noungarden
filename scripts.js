function showElement(elementId) {
    var sections = document.querySelectorAll('.dialogue-box');
    sections.forEach(section => {
        section.style.display = 'none'; // Ensure all sections are hidden
    });

    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'block'; // Only display the needed section
    } else {
        console.error('Error: No element found with ID:', elementId);
    }
}

function linkTo(url) {
    window.location.href = url;
}

function finishExercise() {
    var exercise = document.getElementById('Exercise');
    if (exercise) {
        exercise.style.display = 'none';
        showElement('feelingBetter'); // Display the "feeling better" dialogue
    } else {
        console.error('Error: Element not found for finishing the exercise.');
    }
}

function insertSketch() {
    // Define your p5.js sketch
    let sketch = function(p) {
        // Your p5.js sketch code here
        p.setup = function() {
            p.createCanvas(400, 400);
            p.background(220);
        }

        p.draw = function() {
            p.fill(255, 0, 0);
            p.ellipse(p.width/2, p.height/2, 100, 100);
        }
    };

    // Insert the p5.js script into the document
    let scriptElement = document.createElement('script');
    scriptElement.innerHTML = `new p5(${sketch});`;
    document.getElementById('sketch-container').appendChild(scriptElement);
}

// Function to handle the "Okay" button click
function showExercise() {
    // Show the Exercise dialogue box
    showElement('Exercise');
    // Insert the p5.js sketch
    insertSketch();
}
