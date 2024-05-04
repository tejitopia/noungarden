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

function feelingBetter() {
    var breathingExercise = document.getElementById('breathingExercise');
    var feelingBetter = document.getElementById('feelingBetter');

    if (breathingExercise && feelingBetter) {
        breathingExercise.style.display = 'none';
        feelingBetter.style.display = 'block';
    } else {
        console.error('Error: Element(s) not found for feeling better transition.');
    }
}
