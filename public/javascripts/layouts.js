

//we need to find a way to select a radio
//render the cards that associated to the
//value of the selected radio
$(document).ready(()=> {




var $radios = $('input[type="radio"]');
$radios.change(function() {
  var $checked = $radios.filter(()=> {
    return this.checked;
  })
  console.log(">>>>>>",$checked.val());
  // Check for the selected radio on change
});

// $("#filter").on('click', ()=> {
  
// })

});


