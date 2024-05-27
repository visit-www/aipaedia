<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table of contents</title>
    <link rel="stylesheet" href="./assets/css/pagestyles.css">
</head>
<body>
    <div class="nav-bar">
        <a class="navitems" href="#">Home</a>
        <a href="#" class="navitems">Glossary</a>
        <div class="modules-dropdown">
            <button class="modules">Modules</button>
            <div class="modules-dropdown-contents">
                <a href="#" class="navitems">Module 1</a>
                <a href="#" class="navitems">Module 2</a>
                <a href="#" class="navitems">Module 3</a>
                <a href="#" class="navitems">Module 4</a>
                <a href="#" class="navitems">Module 5</a>
                <a href="#" class="navitems">Module 6</a>
                <a href="#" class="navitems">Module 7</a>
            </div>
        </div>
    </div>

    <script>
        function wrapDiv() {
            // Check if the screen width is less than 600px
            if (window.innerWidth < 600) {
                const navBar = document.querySelector('.nav-bar');
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
            }
        }

        // Call wrapDiv when the page loads
        window.addEventListener('load', wrapDiv);
        
        // Call wrapDiv when the window is resized
        window.addEventListener('resize', wrapDiv);
    </script>
</body>
</html>
