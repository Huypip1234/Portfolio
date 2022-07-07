let arr = ['.about a', '.Portfolio a', '.Project a', '.Activity a', '.Contact a'];

$('#fullpage').fullpage({
  sectionSelector: '.page',
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12'],
  lazyLoading:true,
  scrollingSpeed: 2000,

  afterLoad: function (anchorLink) {

    if (anchorLink == 'page1') {
      $('.header_2-title').html("HOME");
      $.each(arr, function (index, elements) {
        $(elements).removeClass("line");
      });
      $('.about a').addClass("line");
    }
    if (anchorLink == 'page2') {
      $('.header_2-title').html("INTRODUCE");
    }
    if (anchorLink == 'page3') {
      $('.header_2-title').html("ACHIEVEMENT");
      $.each(arr, function (index, elements) {
        $(elements).removeClass("line");
      });
      $('.Portfolio a').addClass("line");
    }
    if (anchorLink == 'page4') {
      $('.header_2-title').html("STRENGTH");
    }
    if (anchorLink == 'page5') {
      $('.header_2-title').html("GALLERY");
      $.each(arr, function (index, elements) {
        $(elements).removeClass("line");
      });
      $('.Project a').addClass("line");
    }
    if (anchorLink == 'page6') {
      $('.header_2-title').html("EXHIBITION");
    }
    if (anchorLink == 'page7') {
      $('.header_2-title').html("PREFERENCE");
      $.each(arr, function (index, elements) {
        $(elements).removeClass("line");
      });
      $('.Activity a').addClass("line");
      $(".page7_content-main_img-0").fadeTo(5000, 1);
    } else {
      $('.page7_content-main_img-0').css('opacity', '0');
    }
    if (anchorLink == 'page8') {
      $('.header_2-title').html("READING");
    }
    if (anchorLink == 'page9') {
      $('.header_2-title').html("WRITING");
    }
    if (anchorLink == 'page10') {
      $('.header_2-title').html("CRAFTING");
    }
    if (anchorLink == 'page11') {
      $('.header_2-title').html("SOCIALIZING");
    }
    if (anchorLink == 'page12') {
      $('.header_2-title').html("CRAFTING");
      $.each(arr, function (index, elements) {
        $(elements).removeClass("line");
      });
      $('.Contact a').addClass("line");
    }
  },

  onLeave: function (index, nextIndex, direction) {
    if (nextIndex == 1) {
      $('.background_image-items-page1').css('background-image', 'url("images/anh_nen/trang_1.png")');
    }
    if (nextIndex == 2) {
      $('.background_image-items-page1').css('background-image', 'url("images/anh_nen/trang_3.png")');
    }
    if (nextIndex == 3) {
      $('.background_image-items-page1').css('background-image', 'url("images/anh_nen/trang_4.png")');
    }
    if (nextIndex == 4) {
      $('.background_image-items-page1').css('background-image', 'url("images/anh_nen/trang_5_6.png")');
    }
    if (nextIndex == 5) {
      $('.background_image-items-page1').css('background-image', 'url("images/anh_nen/trang_7.png")');
    }
    if (nextIndex == 6) {
      $('.background_image-items-page1').css('background-image', 'url("images/anh_nen/trang_8_11.png")');
    }
    if (nextIndex == 7) {
      //do sthg
    }
    if (nextIndex == 8) {
      //do sthg
    }
    if (nextIndex == 9) {
      $('.background_image-items-page1').css('background-image', 'url("images/anh_nen/trang_18_34.png")');
    }
    if (nextIndex == 10) {
      // dosthg
    }
    if (nextIndex == 11) {
      $('.background_image-items-page1').css('background-image', 'url("images/anh_nen/trang_37.png")');
    }
    if (nextIndex == 12) {
      $('.background_image-items-page1').css('background-image', 'url("images/anh_nen/trang_38.png")');
    }
  },
});

