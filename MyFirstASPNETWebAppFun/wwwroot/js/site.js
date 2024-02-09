// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

/* window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('.section');

    sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        // Check if the middle of the section is within the viewport
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
meant to only display elements in certain div tags but wasn't working. figure out why!
*/

$(function () {
    $(".button").on('click', function () { // Changed selector to match the button class
        var hours = parseFloat($("#hours").val());
        var hourlyRate = parseFloat($("#hourlyRate").val().replace('$', '')); // Remove the '$' sign before parsing
        var total = hours * hourlyRate;
        if (!isNaN(total) && total >= 0) {
            $("#total").val(total.toFixed(2));
        } else {
            alert('Please enter a valid number of hours.');
        }
    });

    $('.nextSectionBtn').on('click', function () {
        nextSectionBtn();
    });
});

function nextSectionBtn() {
    var currentSection = $('.section:visible');
    var nextSection = currentSection.next('.section');
    if (nextSection.length > 0) { // Check if there's a next section
        currentSection.hide(); // Hide the current section
        nextSection.show(); // Show the next section
        // Scroll to the top of the next section
        $('html, body').animate({
            scrollTop: nextSection.offset().top
        }, 1000);
    } else {
        alert('You have reached the end of the page.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var scrollToSectionBtns = document.querySelectorAll('.scrollToSectionBtn');
    scrollToSectionBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var sectionId = this.dataset.sectionId;
            scrollToSection(sectionId);
        });
    });
});

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


