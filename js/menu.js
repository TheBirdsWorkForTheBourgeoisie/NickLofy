
/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();



// Dynamically load the footer
document.addEventListener("DOMContentLoaded", function () {
  // Determine the relative path to footer.html
  const currentPath = window.location.pathname;
  let footerPath = "";

  if (currentPath.includes("/projects/capstone/")) {
    footerPath = "/footer.html"; // From capstone.html
  } else {
    footerPath = "../footer.html"; // Default path (e.g., from index.html)
  }

  fetch(footerPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data); // Append footer
    })
    .catch(error => console.error("Error loading footer:", error));
});