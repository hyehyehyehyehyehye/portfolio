//top text
$(".text_rol").bxSlider({
  mode: "vertical",
  slideMargin: 5,
  auto: true,
  controls: false,
  pager: false,
  pause: 1000,
});

//loop text
$(".text_rol_loop").bxSlider({
  minSlides: 4,
  maxSlides: 4,
  slideWidth: 1440,
  ticker: true,
  speed: 9000,
});

// 하단 스크롤 게이지 바
let txt = $(".txt");
let bar = $(".progress .bar ");
//스크롤진행율 계산 함수
function getPercent(sct) {
  const scrollHeight = $(".wrap").height();
  const scrollRealHeight = scrollHeight - $(window).height();
  let scrollPercent = Math.floor((sct / scrollRealHeight) * 100);
  console.log(scrollPercent);
  render(scrollPercent);
}

//스크롤바 애니메이트 함수
function render(scrollPercent) {
  if (scrollPercent >= 100) {
    scrollPercent = 100;
  }
  txt.text(scrollPercent + "%");
  bar.css("width", scrollPercent + "%");
}

//윈도우 스크롤 양을 얻어오는 함수
$(window).on("scroll", function () {
  let sct = $(this).scrollTop();
  getPercent(sct);
});

//btn
$(".btn").mouseenter(function (e) {
  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ left: relX, top: relY });
  $(this).prev(".su_button_circle").removeClass("desplode-circle");
  $(this).prev(".su_button_circle").addClass("explode-circle");
});

$(".btn").mouseleave(function (e) {
  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ left: relX, top: relY });
  $(this).prev(".su_button_circle").removeClass("explode-circle");
  $(this).prev(".su_button_circle").addClass("desplode-circle");
});

//스크롤 애니
let isVisibleWork = false;
let isVisibleEdu = false;
let isVisibleAbout = false;

let b_left = $(".b_left");
let b_right = $(".b_right");
let work_ex = $(".work_ex");
let work_ex2 = $(".work_ex2");
let main_aboutIMG = $(".main_about>img");
let text_wrap = $(".main_about>.text_wrap");

$(window).on("scroll", function () {
  // work
  if (checkVisible($(".work")) && !isVisibleWork) {
    work_ex.delay(500).queue(function (next) {
      $(this).css({
        transform: "translateX(0)",
        transition: "0.5s",
      });
      next();
    });
    work_ex2.delay(500).queue(function (next) {
      $(this).css({
        transform: "translateX(0)",
        transition: "0.5s",
      });
      next();
    });
    isVisibleWork = true;
  } else if (!checkVisible($(".work")) && isVisibleWork) {
    work_ex.css({
      transform: "translateX(-120%)",
      transition: "0.5s",
    });
    work_ex2.css({
      transform: "translateX(120%)",
      transition: "0.5s",
    });
    isVisibleWork = false;
  }

  // education
  if (checkVisible($(".edu_wrap")) && !isVisibleEdu) {
    b_left.delay(500).queue(function (next) {
      $(this).css({
        transform: "translateX(0)",
        transition: "0.5s",
      });
      next();
    });

    b_right.delay(500).queue(function (next) {
      $(this).css({
        transform: "translateX(0)",
        transition: "0.5s",
      });
      next();
    });
    isVisibleEdu = true;
  } else if (!checkVisible($(".edu_wrap")) && isVisibleEdu) {
    b_left.css({
      transform: "translateX(-130%)",
      transition: "0.5s",
    });
    b_right.css({
      transform: "translateX(130%)",
      transition: "0.5s",
    });
    isVisibleEdu = false;
  }

  // about
  if (checkVisible($(".main_about")) && !isVisibleAbout) {
    main_aboutIMG.delay(500).queue(function (next) {
      $(this).css({
        transform: "translateX(0)",
        transition: "0.5s",
      });
      next();
    });

    text_wrap.delay(500).queue(function (next) {
      $(this).css({
        transform: "translateX(0)",
        transition: "0.5s",
      });
      next();
    });
    isVisibleAbout = true;
  } else if (!checkVisible($(".main_about")) && isVisibleAbout) {
    main_aboutIMG.delay(500).queue(function (next) {
      $(this).css({
        transform: "translateX(-150%)",
        transition: "0.5s",
      });
      next();
    });

    text_wrap.delay(500).queue(function (next) {
      $(this).css({
        transform: "translateX(160%)",
        transition: "0.5s",
      });
      next();
    });
    isVisibleAbout = false;
  }

  // skill
  var toolWrap = $(".tool_wrap");
  var toolBars = toolWrap.find(".tool_bar");

  if (checkVisible(toolWrap)) {
    toolBars.each(function (index) {
      var barElement = $(this).find(".bar");
      var percentValue = $(this).attr("data-percent");

      setTimeout(function () {
        barElement.animate(
          { width: percentValue },
          { duration: 1000, easing: "swing" }
        );
      }, 800);
    });
  }
});

function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(),
    scrolltop = $(window).scrollTop(),
    y = elm.offset().top,
    elementHeight = elm.height();

  if (eval == "object visible")
    return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;

  if (eval == "above") return y < viewportHeight + scrolltop;
}

// img
function pipScroll() {
  const devices = [".mockup"];

  $.each(devices, function (i, deviceEl) {
    const device = $(deviceEl);
    const screen = device.find(".screen");
    const mask = device.find(".mask");
    let heightDifference = screen.innerHeight() - mask.innerHeight();

    screen.on({
      mouseenter: function () {
        $(this).stop().animate({ top: -heightDifference }, 5000);
      },
      mouseleave: function () {
        $(this).stop().animate({ top: "0" }, 5000);
      },
    });

    // Resize event handler
    $(window).on("resize", function () {
      const newHeightDifference = screen.innerHeight() - mask.innerHeight();
      if (newHeightDifference !== heightDifference) {
        // Check if the height difference has changed
        heightDifference = newHeightDifference;
        screen.stop().animate({ top: "0" }, 5000); // Reset the top position before animating again
      }
    });

    // Trigger initial resize event
    $(window).trigger("resize");
  });
}

$(window).on("resize", function () {
  pipScroll();
});

pipScroll();

//
$(".artworks ul").bxSlider({
  mode: "horizontal",
  auto: true,
  pause: 3000,
  speed: 500,
});
