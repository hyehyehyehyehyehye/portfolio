$(() => {
  // // // btn
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

  // // // top text
  $(".title_rol").bxSlider({
    mode: "vertical",
    auto: true,
    controls: false,
    pager: false,
    pause: 1000,
  });

  // // // loop text
  $(".text_loop").bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 1440,
    ticker: true,
    speed: 9000,
  });

  // // // 하단 스크롤 게이지 바
  let txt = $(".txt");
  let bar = $(".progress .bar ");

  function getPercent(sct) {
    //스크롤진행율 계산 함수
    const scrollHeight = $(".wrap").height();
    const scrollRealHeight = scrollHeight - $(window).height();
    let scrollPercent = Math.floor((sct / scrollRealHeight) * 100);
    console.log(scrollPercent);
    render(scrollPercent);
  }

  function render(scrollPercent) {
    //스크롤바 애니메이트 함수
    if (scrollPercent >= 100) {
      scrollPercent = 100;
    }
    txt.text(scrollPercent + "%");
    bar.css("width", scrollPercent + "%");
  }

  $(window).on("scroll", function () {
    //윈도우 스크롤 양을 얻어오는 함수
    let sct = $(this).scrollTop();
    getPercent(sct);
  });

  // // // 스크롤 애니메이트
  let isVisibleEdu = false;
  let isVisibleWor = false;
  let isVisibleAbout = false;

  $(window).scroll(function () {
    let box_L = $(".about .photo");
    let box_R = $(".about .text");

    // about
    if (checkVisible($(".about")) && !isVisibleAbout) {
      box_L.delay(500).queue(function (next) {
        $(this).css({
          transform: "translateX(0)",
          transition: "0.5s",
        });
        next();
      });

      box_R.delay(500).queue(function (next) {
        $(this).css({
          transform: "translateX(0)",
          transition: "0.5s",
        });
        next();
      });
      isVisibleAbout = true;
    } else if (!checkVisible($(".about")) && isVisibleAbout) {
      box_L.css({
        transform: "translateX(-150%)",
        transition: "0.5s",
      });
      box_R.css({
        transform: "translateX(150%)",
        transition: "0.5s",
      });
      isVisibleAbout = false;
    }
  });

  function checkVisible(element) {
    let windowHeight = $(window).height();
    let scrollTop = $(window).scrollTop();
    let offsetTop = element.offset().top;

    return scrollTop + windowHeight > offsetTop;
  }
  $(window).scroll(function () {
    let box_L = $(".section.work .box:nth-child(1)");
    let box_R = $(".section.work .box:nth-child(2)");

    // work
    if (checkVisible($(".work")) && !isVisibleWor) {
      box_L.delay(500).queue(function (next) {
        $(this).css({
          transform: "translateX(0)",
          transition: "0.5s",
        });
        next();
      });

      box_R.delay(500).queue(function (next) {
        $(this).css({
          transform: "translateX(0)",
          transition: "0.5s",
        });
        next();
      });
      isVisibleWor = true;
    } else if (!checkVisible($(".work")) && isVisibleWor) {
      box_L.css({
        transform: "translateX(-150%)",
        transition: "0.5s",
      });
      box_R.css({
        transform: "translateX(150%)",
        transition: "0.5s",
      });
      isVisibleWor = false;
    }
  });

  function checkVisible(element) {
    let windowHeight = $(window).height();
    let scrollTop = $(window).scrollTop();
    let offsetTop = element.offset().top;

    return scrollTop + windowHeight > offsetTop;
  }

  $(window).scroll(function () {
    let box_L = $(".edu_box .box:nth-child(1)");
    let box_R = $(".edu_box .box:nth-child(2)");

    // education
    if (checkVisible($(".education")) && !isVisibleEdu) {
      box_L.delay(500).queue(function (next) {
        $(this).css({
          transform: "translateX(0)",
          transition: "0.5s",
        });
        next();
      });

      box_R.delay(500).queue(function (next) {
        $(this).css({
          transform: "translateX(0)",
          transition: "0.5s",
        });
        next();
      });
      isVisibleEdu = true;
    } else if (!checkVisible($(".education")) && isVisibleEdu) {
      box_L.css({
        transform: "translateX(-150%)",
        transition: "0.5s",
      });
      box_R.css({
        transform: "translateX(150%)",
        transition: "0.5s",
      });
      isVisibleEdu = false;
    }
  });

  function checkVisible(element) {
    let windowHeight = $(window).height();
    let scrollTop = $(window).scrollTop();
    let offsetTop = element.offset().top;

    return scrollTop + windowHeight > offsetTop;
  }

  // skill
  var isVisibleTool = false;

  $(window).scroll(function () {
    var toolWrap = $(".section.tool");
    var toolBars = toolWrap.find(".tool_bar");

    if (checkVisible(toolWrap) && !isVisibleTool) {
      toolBars.each(function (index) {
        var barElement = $(this).find(".bar");
        var percentValue = $(this).attr("data-percent");

        setTimeout(function () {
          barElement.animate(
            { width: percentValue },
            { duration: 500, easing: "swing" }
          );
        }, 800);
      });
      isVisibleTool = true;
    } else if (!checkVisible(toolWrap) && isVisibleTool) {
      toolBars.each(function (index) {
        $(this).find(".bar").css({ width: "0" });
      });
      isVisibleTool = false;
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

  // // // artwork
  $(".sliders.graphic").bxSlider({
    controls: true,
    stopAutoOnClick: true,
    pager: false,
    pause: 3000,
  });

  // // // top photo
  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    var photo = $(".mainpage .photo");

    photo.css(
      "background-position-y",
      ((scrollTop / 4) % photo.height()) + "px"
    );
  });

  // // //
  const content = "JO SO HYE";
  const text = document.querySelector(".section.home .h1");
  let i = 0;

  function typing() {
    if (i < content.length) {
      let txt = content.charAt(i);
      text.innerHTML += txt;
      i++;
    }
  }
  setInterval(typing, 200);
});
