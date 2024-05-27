const navBar = document.querySelector('.nav-bar');
function wrapDiv() {
	// Check if the screen width is less than 600px
	if (window.innerWidth < 600) {
		// Check if the menuDiv already exists
		if (!document.querySelector('.menu')) {
			const menuDiv = document.createElement('div');
			menuDiv.className = 'menu';

			const dropbtn = document.createElement('button');
			dropbtn.className = 'dropbtn';
			dropbtn.textContent = 'Menu';

			// Insert the new button into the new div
			menuDiv.appendChild(dropbtn);

			// Move the nav-bar inside the new div
			navBar.parentNode.insertBefore(menuDiv, navBar);
			menuDiv.appendChild(navBar);
			navBar.classList.add('hide-element');
		}
	} else {
		// If the screen is resized to more than 600px, remove the menuDiv if it exists
		const existingMenuDiv = document.querySelector('.menu');
		if (existingMenuDiv) {
			const navBar = existingMenuDiv.querySelector('.nav-bar');
			existingMenuDiv.parentNode.insertBefore(navBar, existingMenuDiv);
			existingMenuDiv.remove();
			navBar.classList.remove('hide-element');
		}
	}
}

// Call wrapDiv when the page loads
window.addEventListener('load', wrapDiv);

// Call wrapDiv when the window is resized
window.addEventListener('resize', wrapDiv);
