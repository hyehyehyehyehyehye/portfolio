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
