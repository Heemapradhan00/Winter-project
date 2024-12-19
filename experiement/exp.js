

  function toggleSearch() {
    var popup = document.getElementById("searchPopup");
    popup.style.display = (popup.style.display === "none") ? "block" : "none";
}



document.addEventListener("DOMContentLoaded", function () {
  var layers = document.querySelectorAll(".parallax-layer");
  var midHeaderText = document.querySelector(".mid-header-text");
  var navBar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
      var scrollPosition = window.scrollY;
      var opacity = 1 - (scrollPosition / 500); // Adjust the value as needed
      var navOpacity = 1 - (scrollPosition / 200); // Adjust the value as needed
      var hiddenOpacity = 0.1; // Adjust the value as needed for navigation hiding

      // Adjust the opacity of midHeaderText
      midHeaderText.style.opacity = opacity;

      // Adjust the opacity and visibility of navBar
      navBar.style.opacity = navOpacity;
      if (scrollPosition > 200) {
          navBar.style.visibility = "hidden";
      } else {
          navBar.style.visibility = "visible";
      }

      layers.forEach(function (layer, index) {
          var speed = (index + 1) * 0.5; // Adjust the speed as needed
          var yPos = -scrollPosition * speed + "px";

          layer.style.transform = "translateY(" + yPos + ")";
      });
  });
});

function showPage(pageId) {
    // Get the content element
    var contentElement = document.getElementById('content');

    // Clear existing content
    contentElement.innerHTML = '';

    // Update content based on the selected page
    switch (pageId) {
        case 'home':
            contentElement.innerHTML = '<h1>Welcome to the Home Page</h1>';
            break;
        case 'page1':
            contentElement.innerHTML = '<h1>Content for Page 1</h1>';
            // Add more content for Page 1 as needed
            break;
        case 'page2':
            contentElement.innerHTML = '<h1>Content for Page 2</h1>';
            // Add more content for Page 2 as needed
            break;
        // Add cases for more pages as needed
    }
}

