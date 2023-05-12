// ==UserScript==
// @name            Save Scroll Position in Moodle Boost Design
// @namespace       Moodle
// @author          ScN
// @version         2.4
// @description     Saves the scroll position in Moodle courses with Moodle using the new Boost design. This simplifies navigating into Moodle items and returning to the same scroll location upon back navigation.
// @match           https://moodle.bbbaden.ch/course/view.php*
// @hompageURL      https://github.com/BBBelektronik/moodle-scrollpos
// @grant           none
// ==/UserScript==

// Get stuff
var page = document.getElementById("page"); // Get scrollable element in Moodle
var courseId = getCourseIdFromURL();
var scrollPosition = getSessionScrollPosition(courseId) || 0; // Restore stored scroll position, or set to 0 if nothing stored

// Extract Moodle Course ID from the URL
function getCourseIdFromURL() {
    var url = window.location.href;
    var regex = /id=(\d+)/;
    var matches = url.match(regex);
    if (matches && matches.length > 1) {
        return matches[1];
    } else {
        return null;
    }
}

// Get the current scroll position from a Moodle Course-Page
function getSessionScrollPosition(courseId) {
    console.log("Lade ScrollPosition aus sessionStorage mit key", key)
    var key = "scrollPosition_" + courseId;
    return sessionStorage.getItem(key);
}

// Save the  scroll position in session storage with a unique key for each Moodle Course
function saveSessionScrollPosition(courseId) {
    var key = "scrollPosition_" + courseId;
    sessionStorage.setItem(key, page.scrollTop);
    // console.debug("Scrollposition für Kurs", courseId, "gespeichert:", page.scrollTop);
}

// Restore scroll position in Moodle course if a stored position is available
function restoreSessionScrollPosition(courseId) {
    var storedPosition = getSessionScrollPosition(courseId);
    if (storedPosition !== null) {
        page.scrollTo(0, storedPosition);
        console.log("Scrollposition für Kurs", courseId, "wiederhergestellt:", storedPosition);
    }
}

// Save scroll position on scroll event.
page.addEventListener('scroll', function () {
    saveSessionScrollPosition(courseId);
});

// Restore scroll position on page load event.
window.addEventListener('load', function () {
    restoreSessionScrollPosition(courseId);
});
