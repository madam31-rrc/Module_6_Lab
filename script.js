/**
 * Displays the top banner by removing the 'hide' class from it.
 * Uses a short delay to ensure the transition is triggered.
 */
function showTopBanner() {
	var banner = document.getElementById("top-banner");
	banner.classList.remove("hide");
	setTimeout(function () {
		banner.classList.add("show");
	}, 50); // Delay to ensure the transition is triggered
}

/**
 * Displays the footer banner by removing the 'hide' class from it.
 */
function showFooterBanner() {
	if (getCookie("footerBannerClosed")) return;

	document.getElementById("footer-banner").classList.remove("hide");
}


/**
 * Displays the modal by removing the 'hide' class from it.
 */
function showModal() {
	if (localStorage.getItem("modalClosed")) return;
	document.getElementById("modal").classList.remove("hide");
}

/**
 * Hides the modal by adding the 'hide' class to it.
 */
function closeModal() {
	document.getElementById("modal").classList.add("hide");

    // Store a flag in localStorage so the modal doesn't appear again
	localStorage.setItem("modalClosed", "true");
}

/**
 * Hides the top banner by adding the 'hide' class to it.
 */
function showTopBanner() {
	if (sessionStorage.getItem("topBannerClosed")) return;

	const banner = document.getElementById("top-banner");
	banner.classList.remove("hide");
	setTimeout(function () {
		banner.classList.add("show");
	}, 50);
}


function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}


/**
 * Hides the footer banner by adding the 'hide' class to it.
 */
function closeFooterBanner() {
	document.getElementById("footer-banner").classList.add("hide");

// Store a cookie so we remember the user closed the footer banner
document.cookie = "footerBannerClosed=true; path=/; max-age=" + 60 * 60 * 24; // 1 day
}

// Event listeners to close the modal, top banner, and footer banner when 'x' is clicked
document.getElementById("modal").addEventListener("click", closeModal);
document.getElementById("top-banner").addEventListener("click", closeTopBanner);
document
	.getElementById("footer-banner")
	.addEventListener("click", closeFooterBanner);

// Show the footer banner after a delay of 1 second
setTimeout(showFooterBanner, 1000);

// Show the top banner after a delay of 2 seconds
if (!sessionStorage.getItem("topBannerClosed")) {
    setTimeout(showTopBanner, 2000);
}

// Show the modal after a delay of 4 seconds
if (!localStorage.getItem("modalClosed")) {
setTimeout(showModal, 4000);
}