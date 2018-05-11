
  
// Iphone 6^ toggle button
// toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    console.log("firing here >>>>>");
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

// modal functionality

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("contact");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function(event) {
  event.preventDefault()
  console.log(modal);
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(event) {
  event.preventDefault()
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

