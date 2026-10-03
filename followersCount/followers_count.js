let count = 0; // Initialize count to 0
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display message
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratualations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followes! Keep it up!");
    } else if (count === 0) {
        alert("Followers count has been reset!")
    }
}
function resetCount() {
    count = 0; // Set count back to 0
    displayCount(); // Display count
    checkCountValue(); // Check count value and display message
}