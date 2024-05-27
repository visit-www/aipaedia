const navBar = document.querySelector('.nav-bar');
const modules = document.querySelector('.modules-dropdown-contents');
const modulesButton = document.querySelector('.modules');

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
			// Reuse the original navBar variable instead of redefining it
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

// Ensure dropBtn is only added if it exists
window.addEventListener('load', () => {
	const dropBtn = document.querySelector('.dropbtn');
	if (dropBtn) {
		dropBtn.addEventListener('click', () => {
			navBar.classList.toggle('hide-element');
			navBar.classList.toggle('shrink-navbar');
			navBar.classList.toggle('nav-bar');
			dropBtn.classList.toggle('inactive-menu-button');
			modules.classList.add('hide-element');
		});
	}
});

modulesButton.addEventListener('click', () => {
	modules.classList.toggle('hide-element');
});
