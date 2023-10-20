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

// work
$(window).on("scroll", function () {
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
  }
});

// education
$(window).on("scroll", function () {
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
  }
});

//about
$(window).on("scroll", function () {
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

//skill
$(window).on("scroll", function () {
  var toolWrap = $(".tool_wrap");
  var toolBars = toolWrap.find(".tool_bar");

  if (checkVisible(toolWrap)) {
    toolBars.each(function (index) {
      var barElement = $(this).find(".bar");
      var percentValue = $(this).attr("data-percent");

      setTimeout(function () {
        barElement.animate(
          {
            width: percentValue,
          },
          1000
        );
      }, 800);
    });
  }
});

function checkVisible(elm, eval) {
  eval = eval || "object visible";

  var viewportHeight = $(window).height();
  var scrolltop = $(window).scrollTop();

  var y = elm.offset().top;
  var elementHeight = elm.height();

  if (eval == "object visible")
    return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;

  if (eval == "above") return y < viewportHeight + scrolltop;
}

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
