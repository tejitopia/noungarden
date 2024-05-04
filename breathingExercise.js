let angle;
let maxLen = 100;
let minLen = 10;
let currentLen;
let phase = 'inhale'; // can be 'inhale', 'holdIn', 'exhale', 'holdOut'
let timer = 0;
let phaseDuration = 240; // duration of each phase in frames (4 seconds at 60 fps)

function setup() {
  let canvasSize = maxLen * 6; // Set canvas size to accommodate the full size of the tree at maximum length
  createCanvas(canvasSize, canvasSize);
  angle = PI / 4;
  currentLen = minLen;
}

function draw() {
  background(255);
  stroke('#048940');
  strokeWeight(3);
  translate(width / 2, height / 2); // Position tree in the center of the canvas
  drawBranch(currentLen);

  // Update the breathing phase based on the timer
  timer++;
  if (timer > phaseDuration) {
    switch (phase) {
      case 'inhale':
        phase = 'holdIn';
        break;
      case 'holdIn':
        phase = 'exhale';
        break;
      case 'exhale':
        phase = 'holdOut';
        break;
      case 'holdOut':
        phase = 'inhale';
        break;
    }
    timer = 0;  // reset timer for the next phase
  }

  // Update branch length based on the phase
  if (phase === 'inhale' && currentLen < maxLen) {
    currentLen += (maxLen - minLen) / phaseDuration;
  } else if (phase === 'exhale' && currentLen > minLen) {
    currentLen -= (maxLen - minLen) / phaseDuration;
  }

  // Display text prompts for breathing guidance beneath the tree
  fill(0);
  noStroke();
  textSize(32);
  textAlign(CENTER, CENTER);
  if (phase === 'inhale') {
    text('Inhale', 0, currentLen + 20); // Position text just below the tree
  } else if (phase === 'holdIn') {
    text('Hold', 0, currentLen + 20); // Position text just below the tree
  } else if (phase === 'exhale') {
    text('Exhale', 0, currentLen + 20); // Position text just below the tree
  } else if (phase === 'holdOut') {
    text('Hold', 0, currentLen + 20); // Position text just below the tree
  }
}

function drawBranch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 10) {
    push();
    rotate(angle);
    drawBranch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    drawBranch(len * 0.67);
    pop();
  }
}
