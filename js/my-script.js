// Ensure code only runs once the HTML is fully rendered:
$(document).ready(function () {
  // // The following changes affect inline styles!
  // $("h2").css("text-decoration", "underline");
  // $("ul").css("border", "solid 1px #ccc");
  // Add classes instead of editing inline styles:
  $("h2").addClass("underline");
  $("ul").addClass("border");
});
