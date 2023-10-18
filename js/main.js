$(".text_rol").bxSlider({
  mode: "vertical",
  slideMargin: 5,
  auto: true,
  controls: false,
  pager: false,
  pause: 1000,
});

let txt = $(".txt");
let bar = $(".bar");
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

//흐르는 텍스트
$(".text_rol_loop").bxSlider({
  minSlides: 4,
  maxSlides: 4,
  slideWidth: 1440,
  ticker: true,
  speed: 9000,
});

//스크롤 애니
const isVisible = false;
let b_left = $(".b_left");
let b_right = $(".b_right");

$(window).on("scroll", function () {
  if (checkVisible($(".edu_wrap")) && !isVisible) {
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
    isVisible = true;
  }
});

function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(),
    scrolltop = $(window).scrollTop(),
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "object visible")
    return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
  if (eval == "above") return y < viewportHeight + scrolltop;
}
