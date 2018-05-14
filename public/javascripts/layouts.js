// Iphone 6^ toggle button
// toggle between hiding and showing the dropdown content */

const openBtn = document.getElementsByClassName("dropbtn");
const closeBtn = document.getElementsByClassName("drp-dwn-closer");
const dropDwnContent = document.getElementsByClassName("dropdown-content");
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
const modal = document.getElementById("myModal");
$(modal).hide();
// Get the button that opens the modal
const btn = document.getElementById("contact");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$(btn).on("click", ()=>{
  $(modal).show();
})
// ======= modal for iphone6^ screens=======
// Get the button that opens the modal
const drpDown = document.getElementById("drop-contact");

// When the user clicks on the button, open the modal
$(drpDown).on("click", () => {
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

const fname = document.getElementsByClassName("fname");
const lname = document.getElementsByClassName("lname");
const selection = document.getElementsByClassName("selection");
const textarea = document.getElementsByClassName("textarea");
const submitBtn = document.getElementsByClassName("submit");



$(submitBtn).on("click", (event)=>{
  event.preventDefault();
  console.log(fname.val());
})



