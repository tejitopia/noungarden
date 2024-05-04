function showElement(elementId) {
    // Hide all sections
    var elements = document.querySelectorAll('.content-section');
    elements.forEach(element => element.classList.add('hidden'));

    // Hide only the introduction paragraph and button
    document.getElementById('introduction').style.display = 'none';

    // Show only the relevant section
    document.getElementById(elementId).classList.remove('hidden');
}

function linkTo(url) {
    window.location.href = url;
}

function feelingBetter() {
    // Hide the current section and show the next
    document.getElementById('breathingExercise').classList.add('hidden');
    document.getElementById('feelingBetter').classList.remove('hidden');
}
