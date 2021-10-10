let size1 = document.getElementsByClassName("size")[1];
size1.addEventListener("click", () => {
  location.href = "https://inr.deals/tSviTD";
});

let size2 = document.getElementsByClassName("size")[2];
size2.addEventListener("click", () => {
  location.href =
    "https://60df10a4c5f3c1dcbcb16a8a--covicure-chat-application.netlify.app/";
});

let size3 = document.getElementsByClassName("size")[3];
size3.addEventListener("click", () => {
  location.href = "https://www.meddcoambulance.com/";
});

let linkedin = document.getElementsByClassName("linkedin")[0];
linkedin.addEventListener("click", () => {
  location.href = "https://www.linkedin.com/in/trijal-bhardwaj";
});

$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".nav").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".nav").removeClass("nav-toggle");

    if ($(window).scrollTop() > 10) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });

  $(".facility").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
