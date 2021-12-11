function cngColor() {
  document.getElementById("btn_1").style.color = "red";
}
function imgOne() {
  document.getElementById("cng_img").src = "images/w2.jpg";
}
function imgTwo() {
  document.getElementById("cng_img").src = "images/w3.jpg";
}

//Jquery part start

$(document).ready(function () {
  //hide
  $("#hide").click(function () {
    $(".img").hide(1000);
  });

  //show
  $("#show").click(function () {
    $(".img").show(1000);
  });

  //toggle
  $("#toggle").click(function () {
    $(".img").toggle(1000);
  });
});
