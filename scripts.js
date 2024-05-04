var breathingExerciseLoaded = false;

var plantCanvas = document.getElementById('defaultCanvas0')
var exerciseDiv = document.getElementById('Exercise')

console.log('We are here')
hideElement('defaultCanvas0')

exerciseDiv.appendChild(plantCanvas);

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

    // Load breathingExercise.js if #Exercise is shown and it hasn't been loaded yet
    // if (elementId === 'Exercise' && !breathingExerciseLoaded) {
    //     loadBreathingExerciseScript();
    //     breathingExerciseLoaded = true;
    // }
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

function hideElement(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = 'none';
    element.style.appendChild('hidden')
}

function showExercise() {
    showElement('Exercise');
    // loadBreathingExerciseScript();
    // startBreathingExercise(); // Call the startBreathingExercise function defined in breathingExercise.js
}

// // Function to load breathingExercise.js
// function loadBreathingExerciseScript() {
//     var script = document.createElement('script');
//     script.src = 'breathingExercise.js'; // Adjust the path if necessary
//     document.body.appendChild(script);
// }
