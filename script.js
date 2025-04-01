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

// Respect "Do Not Track" setting
if (navigator.doNotTrack === "1" || window.doNotTrack === "1") {
	console.log("Do Not Track is enabled. Disabling all tracking scripts.");
} else {
	// Show banners and modal only if DNT is off
	setTimeout(showFooterBanner, 1000);
	setTimeout(showTopBanner, 2000);
	setTimeout(showModal, 4000);
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

function closeModal() {
	let modal = document.getElementById("modal");

	// Prevent instant close - delay it
	modal.innerHTML = "<div class='modal-content'><p>Closing in 3... 2... 1...</p></div>";
	setTimeout(() => {
		modal.classList.add("hide");
		localStorage.setItem("modalClosed", "true");
	}, 3000);
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

document.getElementById("clear-data").addEventListener("click", function () {
	localStorage.clear();
	sessionStorage.clear();

	// Clear all cookies
	document.cookie.split(";").forEach(function (c) {
		document.cookie = c
			.replace(/^ +/, "")
			.replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
	});

	alert("All stored data cleared! Refresh the page to see banners again.");
});

const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(button => {
	button.addEventListener("mouseover", () => {
		button.style.position = "absolute";
		button.style.top = Math.random() * 80 + "%";
		button.style.left = Math.random() * 80 + "%";
	});
});
