// Get modal elements
var modal = document.getElementById("videoModal");
var playButton = document.getElementById("play-video");
var closeBtn = document.querySelector(".close");
var videoFrame = document.getElementById("youtube-video");

// YouTube video link
var videoURL = "https://www.youtube.com/embed/Cn4G2lZ_g2I"; // Change the URL as needed

// Add event listener to play button
if (playButton && modal && videoFrame) {
    playButton.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex"; // Show the modal
        videoFrame.src = videoURL + "?autoplay=1"; // Add autoplay to the video
    });
}

// Close modal when the user clicks the close button
if (closeBtn && modal && videoFrame) {
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Hide the modal
        videoFrame.src = ""; // Clear the src to stop the video
    });
}

// Close modal when clicking outside the modal content
if (modal && videoFrame) {
    window.addEventListener("click", function (e) {
        if (e.target === modal) { // Check if click is outside the modal content
            modal.style.display = "none";
            videoFrame.src = ""; // Clear the src to stop the video
        }
    });
}





// humberger start
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    document.querySelector('.menu-icon').classList.toggle('active');

    // Hide the menu when a nav link is clicked
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.querySelector('.menu-icon').classList.remove('active');
    });
    
}

/*   Active Menu */
document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".nav_active");

    function changeActiveLink() {
        let scrollPosition = window.scrollY + 150; // Adjust for navbar height

        sections.forEach((section) => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
	
	
});

// start preloader
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1500); // Simulated loading time
});
// end preloader

$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });
});




$(document).ready(function () {

    // Ensure the select elements exist before applying niceSelect
    $('#myselect, #myselect2, #myselect3').each(function () {
        if ($(this).length) {
            $(this).niceSelect();
        }
    });
});




 $(document).ready(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    // Custom button functionality
    $("#prevButton").click(function() {
      owl.trigger('prev.owl.carousel');
    });

    $("#nextButton").click(function() {
      owl.trigger('next.owl.carousel');
    });
  });


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("searchForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            // Get selected values
            const location = document.getElementById("myselect").value;
            const propertyType = document.getElementById("myselect2").value;
            const priceRange = document.getElementById("myselect3").value;
            const date = document.getElementById("datepicker").value;

            console.log("Location:", location);
            console.log("Property Type:", propertyType);
            console.log("Price Range:", priceRange);
            console.log("Date:", date);

            // Redirect to search results page (if needed)
            // window.location.href = `search-results.html?location=${encodeURIComponent(location)}&propertyType=${encodeURIComponent(propertyType)}&priceRange=${encodeURIComponent(priceRange)}&date=${encodeURIComponent(date)}`;
        });
    }
});

