// Array of image growth stages and corresponding ages
const growthStages = [
    { src: 'image1.jpeg', age: 'Baby (0-1 year)' },
    { src: 'image2.jpeg', age: 'Toddler (3 years)' },
    { src: 'image3.jpeg', age: 'Kiddo (7 years)' },
    { src: 'image4.jpeg', age: 'Pre-teen (12 years)' },
    { src: 'image5.jpeg', age: 'High School (17 years)' }
];

let currentStageIndex = 0;

// Constants for elements
const clickBtn = document.getElementById('clickBtn');
const mouseoverDiv = document.getElementById('mouseoverImage');
const displayImg = document.getElementById('displayImg');

/**
 * customFunction - Logs a message to the console
 */
function customFunction() {
    console.log("Changed the picture");
}

// 1. Click Event Handler
clickBtn.addEventListener('click', function () {
    // Cycle to the next image index
    currentStageIndex = (currentStageIndex + 1) % growthStages.length;

    // Update the image source
    displayImg.src = growthStages[currentStageIndex].src;

    // Call the custom function
    customFunction();
});

// 2. Mouseenter Event Handler (Fixed: Fired only once per hover session)
mouseoverDiv.addEventListener('mouseenter', function () {
    // Display an alert message with the age at the time of the current picture
    const currentAge = growthStages[currentStageIndex].age;
    alert("I was at this age in this picture: " + currentAge);
});
