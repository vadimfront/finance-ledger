const $ = require("jquery");

$(function () {
  $(".social-item > a")
    .on("focus", function (e) {
      $(this).parents(".team_image").addClass("active");
    })
    .on("focusout", function () {
      $(this).parents(".team_image").removeClass("active");
    });
});
