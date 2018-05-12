// Iphone 6^ toggle button
// toggle between hiding and showing the dropdown content */

var openBtn = document.getElementsByClassName("dropbtn");
var closeBtn = document.getElementsByClassName("drp-dwn-closer");
var dropDwnContent = document.getElementsByClassName("dropdown-content");
$(openBtn).on("click", function() {
  console.log("opened");
  $(dropDwnContent).show();
});
$(closeBtn).on("click", function() {
  console.log("closed");
  $(dropDwnContent).hide();
});

// ======= modal for laptop screens=======
// Get the modal
var modal = document.getElementById("myModal");
$(modal).hide();
// Get the button that opens the modal
var btn = document.getElementById("contact");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$(btn).on("click", ()=>{
  console.log('you clicked contact');
  $(modal).show();
})
// ======= modal for iphone6^ screens=======
// Get the button that opens the modal
var drpDown = document.getElementById("drop-contact");

// When the user clicks on the button, open the modal
$(drpDown).on("click", () => {
  console.log("you clicked contact");
  $(modal).show();
});

// When the user clicks on <span> (x), close the modal
span.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function() {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

