// JS code snippet for adding button functionality
// Select the relevant DOM elements
const menuButton = document.querySelector('.normaldropbtn');
const moduleSelector = document.querySelector('.modules');
const navDropDownContent = document.querySelector('.dropdown-contents');
const moduleDropdown = document.querySelector('.modules-dropdown-contents');
const clickArea = document.querySelector('.click-area');
const navBar = document.querySelector('.navbar'); // Corrected selector typo

// Define functions that specify what happens when the event is triggered.
function showMainContents() {
	navDropDownContent.classList.toggle('show'); // Add show to the next sibling
	moduleDropdown.classList.remove('show'); // Remove
}

function showModuleContents() {
	moduleDropdown.classList.toggle('show'); // Add show to the next sibling
}

function hideContents() {
	moduleDropdown.classList.remove('show'); // Remove
	navDropDownContent.classList.remove('show'); // Remove
}

// Add event listeners
menuButton.addEventListener('click', showMainContents);
moduleSelector.addEventListener('click', showModuleContents);

document.addEventListener('click', function (event) {
	if (!navBar.contains(event.target)) {
		hideContents();
	}
});
