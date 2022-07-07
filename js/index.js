const menuButton = document.querySelector(".menu_responsive");
const menuButtonArrow = document.querySelector(".arrow");
const navbar = document.querySelector('.header_2-navbar');
const page4ButtonArrow = document.querySelector('.page4_achive-bottom-image');

menuButton.addEventListener("click", function () {
    navbar.classList.toggle('showMenu');
    menuButtonArrow.classList.toggle('rotate')
});

page4ButtonArrow.addEventListener("click", function () {
    document.getElementsByClassName('page4-column')[0].classList.toggle('hide');
    document.getElementsByClassName('page4-column')[1].classList.toggle('hide');
    document.getElementsByClassName('page4-column')[2].classList.toggle('hide');
    document.getElementsByClassName('page4-column')[3].classList.toggle('hide');

    document.querySelector('.page4-howiwork').classList.toggle('hide');
    page4ButtonArrow.classList.toggle('routed2');
});

const page6SlideText = Array.from(document.querySelectorAll('.page6_slide-text_item'));
const page6_select = Array.from(document.querySelectorAll('.page6_select'));

function page6Render(id) {

    let image;
    let page6ContentMain;

    page6SlideText.forEach(elements => {
        elements.style.marginBottom = '3rem';
    });
    page6_select.forEach(elements => {
        elements.classList.add('hide');
    });

    if (id === "id") {
        image = 'images/trang_tri/trang_8.png';
        page6ContentMain = 'page6_content-main';
    }
    if (id === "ai") {
        image = 'images/trang_tri/trang_10_Copy-removebg-preview.png';
        page6ContentMain = 'page6_content-main-2';
    }
    if (id === "lr") {
        image = 'images/trang_tri/trang_10.png';
        page6ContentMain = 'page6_content-main-3';
    }
    if (id === "ms") {
        image = 'images/trang_tri/trang_11_h1.png';
        page6ContentMain = 'page6_content-main-4';
    }
    document.querySelector('.page6_slide-img').setAttribute("src", image);
    document.querySelector('#' + id).style.marginBottom = '5rem';

    document.querySelector('.' + page6ContentMain).classList.remove('hide');
}

let RightArrow = document.querySelector('.page8_books-arrow_right');
let LeftArrow = document.querySelector('.page8_books-arrow_left');
let page8_bools_slide_all_1 = document.querySelector('.page8_books-slide_all-1');
let chuyen = 0;
page8_bools_slide_all_1.style.marginLeft = `0rem`;

RightArrow.addEventListener('click', () => {
    if (page8_bools_slide_all_1.style.marginLeft == `${-38.5 * 3}rem`) {
        document.querySelector('.Books').style.opacity = 0;
        setTimeout(function () {
            document.querySelector('.Books').innerHTML = 'News & Articles';
            document.querySelector('.Books').style.opacity = 1;
        }, 1000);

        document.querySelector('.page8_content-main_in').style.opacity = 0;
        document.querySelector('.page8_content_tree').classList.remove('hide');
        setTimeout(function () {
            document.querySelector('.page8_content-main_in').classList.add('hide');
            document.querySelector('.page8_content_tree').style.opacity = 1;
        }, 500);

    } else {
        chuyen += -38.5;
        page8_bools_slide_all_1.style.marginLeft = chuyen + 'rem';
    }

    if (page8_bools_slide_all_1.style.marginLeft == `${-38.5}rem`) {
        document.querySelector('.page8_content-main-header_title').innerHTML = "The Secret";
        document.querySelector('.page8_author-author span').innerHTML = "Rhonda Byme";
        document.querySelector('.page8_author-type span').innerHTML = "Spiritual";
        document.querySelector('.page8_desc-img').src = 'images/trang_13_sach/8_.png'
    }
    if (page8_bools_slide_all_1.style.marginLeft == `${-38.5 * 2}rem`) {
        document.querySelector('.page8_content-main-header_title').innerHTML = "Middlesex";
        document.querySelector('.page8_author-author span').innerHTML = "Jeffrey Eugenides";
        document.querySelector('.page8_author-type span').innerHTML = "Novel";
        document.querySelector('.page8_desc-img').src = 'images/trang_13_sach/15_.png'
    }
    if (page8_bools_slide_all_1.style.marginLeft == `${-38.5 * 3}rem`) {
        document.querySelector('.page8_content-main-header_title').innerHTML = "The Psychology Book";
        document.querySelector('.page8_author-author span').innerHTML = "DK";
        document.querySelector('.page8_author-type span').innerHTML = "Science";
        document.querySelector('.page8_desc-img').src = 'images/trang_13_sach/22_.png'
    }
});

LeftArrow.addEventListener('click', () => {
    if (page8_bools_slide_all_1.style.marginLeft == `0rem`) {
        console.log("Max Left");
    } else {
        chuyen -= -38.5;
        page8_bools_slide_all_1.style.marginLeft = chuyen + 'rem';
    }

    if (page8_bools_slide_all_1.style.marginLeft == `${-38.5 * 2}rem`) {
        document.querySelector('.page8_content-main-header_title').innerHTML = "Middlesex";
        document.querySelector('.page8_author-author span').innerHTML = "Jeffrey Eugenides";
        document.querySelector('.page8_author-type span').innerHTML = "Novel";
        document.querySelector('.page8_desc-img').src = 'images/trang_13_sach/15_.png'
    }
    if (page8_bools_slide_all_1.style.marginLeft == `${-38.5}rem`) {
        document.querySelector('.page8_content-main-header_title').innerHTML = "The Secret";
        document.querySelector('.page8_author-author span').innerHTML = "Rhonda Byme";
        document.querySelector('.page8_author-type span').innerHTML = "Spiritual";
        document.querySelector('.page8_desc-img').src = 'images/trang_13_sach/8_.png'
    }
    if (page8_bools_slide_all_1.style.marginLeft == `0rem`) {
        document.querySelector('.page8_content-main-header_title').innerHTML = "Titan: The Life of John D. Rockefeller, Sr.";
        document.querySelector('.page8_author-author span').innerHTML = "Ron Chernow";
        document.querySelector('.page8_author-type span').innerHTML = "Biography";
        document.querySelector('.page8_desc-img').src = 'images/trang_13_sach/1_.png'
    }
});

document.querySelector('.page8_content_tree-arrow_back').addEventListener('click', () => {
    document.querySelector('.Books').style.opacity = 0;
    setTimeout(function () {
        document.querySelector('.Books').innerHTML = 'Books';
        document.querySelector('.Books').style.opacity = 1;
    }, 1000);

    document.querySelector('.page8_content_tree').style.opacity = 0;
    document.querySelector('.page8_content-main_in').classList.remove('hide');
    setTimeout(function () {
        document.querySelector('.page8_content_tree').classList.add('hide');
        document.querySelector('.page8_content-main_in').style.opacity = 1;
    }, 500);
});

let page9_dem = 1;
document.querySelector('.page9_main-left_bar-arrow_left').addEventListener('click', () => {
    if (page9_dem == 1) { console.log('stop'); }
    else { page9_dem--; }
    page9_Click();
});
document.querySelector('.page9_main-left_bar-arrow-right').addEventListener('click', () => {
    if (page9_dem == 4) { console.log('stop'); }
    else { page9_dem++; }
    page9_Click();
});

let page9_Click = () => {
    if (page9_dem == 1) {
        document.querySelector('.page9_main-left-mirrow-img').src = 'images/trang_tri/trang_18_h2.gif';
        document.querySelector('.page9_main-right_title-small').innerHTML = 'Finding a';
        document.querySelector('.page9_main-left_bar-number').innerHTML = '1';
        document.querySelector('.page9_main-right_title-big').innerHTML = 'Meaningful life';
        document.querySelector('.page9_main-right-content').innerHTML = "For most of history, the meaning of life was not a topic of sustained reflection because it seemed uncertain and quite unpleasant to define. The new age begins with millennials. Have you ever stepped back to ask yourself questions on what we live for and what might be our future. Inevitably, self-consciousness is a generational challenge as well as a prerequisite to create true happiness and fulfillment within any cells of mankind.";
    }
    if (page9_dem == 2) {
        document.querySelector('.page9_main-left-mirrow-img').src = 'images/trang_tri/trang_23.gif';
        document.querySelector('.page9_main-right_title-small').innerHTML = 'Spending';
        document.querySelector('.page9_main-left_bar-number').innerHTML = '2';
        document.querySelector('.page9_main-right_title-big').innerHTML = '24 hours per day';
        document.querySelector('.page9_main-right-content').innerHTML = "If you believe that every life has equal value, it might let you down someday. The reality isn’t as romantic as the fairy tale you were told, in fact, some lives are considered to be valuable while others are not – it’s inequity. But optimistically saying, all of us can decide whether we are worthy or not base on an amazing privilege is time. Everyone has the same amount of time but the way we use it will reflect our value precisely in the future.";
    }
    if (page9_dem == 3) {
        document.querySelector('.page9_main-left-mirrow-img').src = 'images/trang_tri/trang_28.gif';
        document.querySelector('.page9_main-right_title-small').innerHTML = 'Nourishing a';
        document.querySelector('.page9_main-left_bar-number').innerHTML = '3';
        document.querySelector('.page9_main-right_title-big').innerHTML = 'Righteous mindset';
        document.querySelector('.page9_main-right-content').innerHTML = "In the middle of adulthood upheaval, humankind has tinged with intense hierarchy by the authenticity in mindset. And despite the widespread scale of information, rather oddly, filling the large part of the world, those are apprentices of life yet always be self-righteous according to a pitiful shortsighted perspective. In fact, beyond anyone's total control, the world's operation has its own rules that shape the righteous mindset of humans.";
    }
    if (page9_dem == 4) {
        document.querySelector('.page9_content-main').classList.add('hide');
        document.querySelector('.page9_content-main3').classList.remove('hide');

        document.querySelector('.Blogs').style.opacity = 0;
        setTimeout(function () {
            document.querySelector('.Blogs').innerHTML = 'Paragraphs';
            document.querySelector('.Blogs').style.opacity = 1;
        }, 1000);
    }
}

let page9_main2_content_big_in = Array.from(document.querySelectorAll('.page9_main2-content-big_in'));
document.querySelector('.page9_main-right-button').addEventListener('click', () => {
    page9_main2_content_big_in.forEach(elements => {
        elements.classList.add('hide');
    });

    if (document.querySelector('.page9_main-left_bar-number').innerHTML == '1') {
        document.querySelector('#page9_main-right_title-small').innerHTML = 'Finding a';
        document.querySelector('#page9_main-right_title-big').innerHTML = 'Meaningful life';
        document.querySelector('#page9-1').classList.remove('hide');
    }
    if (document.querySelector('.page9_main-left_bar-number').innerHTML == '2') {
        document.querySelector('#page9_main-right_title-small').innerHTML = 'Spending';
        document.querySelector('#page9_main-right_title-big').innerHTML = '24 hours per day';
        document.querySelector('#page9-2').classList.remove('hide');
    }
    if (document.querySelector('.page9_main-left_bar-number').innerHTML == '3') {
        document.querySelector('#page9_main-right_title-small').innerHTML = 'Nourishing a';
        document.querySelector('#page9_main-right_title-big').innerHTML = 'Righteous mindset';
        document.querySelector('#page9-3').classList.remove('hide');
    }

    document.querySelector('.page9_content-main').classList.add('hide');
    document.querySelector('.page9_content-main2').classList.remove('hide');
});

document.querySelector('.page9_main2-top_right-img').addEventListener('click', () => {
    document.querySelector('.page9_content-main').classList.remove('hide');
    document.querySelector('.page9_content-main2').classList.add('hide');
});

let page9_slide_dem = 0;
let page9_slide_chuyen = 0;
document.querySelector('.page9_content-main3_slide-arrow-left').addEventListener('click', () => {
    if (page9_slide_dem == 0) {
        document.querySelector('.page9_content-main3').classList.add('hide');
        document.querySelector('.page9_content-main').classList.remove('hide');

        document.querySelector('.Blogs').style.opacity = 0;
        setTimeout(function () {
            document.querySelector('.Blogs').innerHTML = 'Blogs';
            document.querySelector('.Blogs').style.opacity = 1;
        }, 1000);
        page9_dem--;
    } else {
        page9_slide_chuyen += 50;
        document.querySelector('.page9_content-main3_slide-slide_in-items-root').style.marginLeft = page9_slide_chuyen + 'rem';
        page9_slide_dem--;
    }
});

document.querySelector('.page9_content-main3_slide-arrow-right').addEventListener('click', () => {
    if (page9_slide_dem == 1) {
        console.log("Max right");
    } else {
        page9_slide_chuyen += -50;
        document.querySelector('.page9_content-main3_slide-slide_in-items-root').style.marginLeft = page9_slide_chuyen + 'rem';
        page9_slide_dem++;
    }
});

//page 11
let page11_slide_dem = 0;
let page11_slide_chuyen = 0;
document.querySelector('.page11_content-main-body_left-arrow_left').addEventListener('click', () => {
    if (page11_slide_dem == 0) {
        console.log("Max Left");
    } else {
        page11_slide_chuyen += 13;
        document.querySelector('.page11_content-main-body_left-list-img_item_root').style.marginLeft = page11_slide_chuyen + 'rem';
        page11_slide_dem--;
    }
});

document.querySelector('.page11_content-main-body_left-arrow_right').addEventListener('click', () => {
    if (page11_slide_dem == 4) {
        page11_slide_chuyen += 13*4;
        document.querySelector('.page11_content-main-body_left-list-img_item_root').style.marginLeft = page11_slide_chuyen + 'rem';
        page11_slide_dem-=4;
    } else {
        page11_slide_chuyen += -13;
        document.querySelector('.page11_content-main-body_left-list-img_item_root').style.marginLeft = page11_slide_chuyen + 'rem';
        page11_slide_dem++;
    }
});

//page 10
let page10_slide_dem = 0;
let page10_slide_chuyen = 0;

document.querySelector('.page10_content-main-right_arrow-left').addEventListener('click', () => {
    if (page10_slide_dem == 0) {
        console.log("Max Left");
    } else {
        page10_slide_chuyen += 26;
        document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Scrapbooks';
        document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Paper';
        document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 15 x 15 cm';
        document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 2 albums';
        document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'time to make: 3 - 6 weeks';
        document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Storing photo & notes';

        document.querySelector('.page10_content-main-right-slide_item4').style.height = '10rem';
        document.querySelector('.page10_content-main-right-slide_item4').style.width = '12rem';

        document.querySelector('.page10_content-main-right-slide_item_last').style.height = '6rem';
        document.querySelector('.page10_content-main-right-slide_item_last').style.width = '6rem';
        document.querySelector('.page10_content-main-right-slide_item-1').style.marginLeft = page10_slide_chuyen + 'rem';
        page10_slide_dem--;
    }
});

document.querySelector('.page10_content-main-right_arrow-right').addEventListener('click', () => {
    if (page10_slide_dem == 1) {
        page10_slide_chuyen += 26;
        document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Scrapbooks';
        document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Paper';
        document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 15 x 15 cm';
        document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 2 albums';
        document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'time to make: 3 - 6 weeks';
        document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Storing photo & notes';

        document.querySelector('.page10_content-main-right-slide_item4').style.height = '10rem';
        document.querySelector('.page10_content-main-right-slide_item4').style.width = '12rem';

        document.querySelector('.page10_content-main-right-slide_item_last').style.height = '6rem';
        document.querySelector('.page10_content-main-right-slide_item_last').style.width = '6rem';
        document.querySelector('.page10_content-main-right-slide_item-1').style.marginLeft = page10_slide_chuyen + 'rem';
        page10_slide_dem--;
    } else {
        page10_slide_chuyen += -26;
        document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Sketch Notes';
        document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Notebook, sticker & washi tapes';
        document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 20 x 15 x 5 cm';
        document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 2 Notebooks';
        document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'time to make: 1 hours / page';
        document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Planner & Diary';

        document.querySelector('.page10_content-main-right-slide_item4').style.height = '6rem';
        document.querySelector('.page10_content-main-right-slide_item4').style.width = '6rem';

        document.querySelector('.page10_content-main-right-slide_item_last').style.height = '10rem';
        document.querySelector('.page10_content-main-right-slide_item_last').style.width = '12rem';
        document.querySelector('.page10_content-main-right-slide_item-1').style.marginLeft = page10_slide_chuyen + 'rem';
        page10_slide_dem++;
    }
});

const darkMode = () => {
    document.querySelector(".background_image-items").style.backgroundImage = "url('images/anh_nen/trang_2.png')";
    document.querySelector(".page1_content-right_2-left").style.backgroundColor = "unset";
    document.querySelector(".page1_content-right_2-right").style.backgroundColor = "unset";
}

const page8ClickBook = (img, name, author, type) => {
    document.querySelector(".page8_desc-img").src = "images/trang_13_sach/" + img;
    document.querySelector(".page8_content-main-header_title").innerHTML = name;
    document.querySelector(".page8_author-author span").innerHTML = author;
    document.querySelector(".page8_author-type span").innerHTML = type;
}

//page 10
const page10_anh = Array.from(document.querySelectorAll('.page10_content-main-right-slide_item'));
const page10_anh4 = document.querySelector('.page10_content-main-right-slide_item4');
const page10_anh8 = document.querySelector('.page10_content-main-right-slide_item_last');
let page10_tmp, page10_tmp_id;

for (let i in page10_anh){
    page10_anh[i].addEventListener('click', function() {
        page10_tmp = page10_anh[i].src;
        page10_tmp_id = page10_anh[i].getAttribute("imgId");
        if(page10_anh[i].getAttribute("identy") == 'slide1') {
            page10_anh[i].src = page10_anh4.src;
            page10_anh4.src = page10_tmp;
            
            page10_anh4.style.transform = 'scale(0.9)';
            setTimeout(function() {
                page10_anh4.style.transform = 'scale(1)';
            }, 400);

            if(page10_anh[i].getAttribute('imgId') == "img1") {
                document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Wishing Jars';
                document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Glass & paper';
                document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 1 x 1 x 8 cm';
                document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 3 sets';
                document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'Time to make: 3 hours';
                document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Writing wishes';
            }
            if(page10_anh[i].getAttribute('imgId') == "img2") {
                document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Handmade Cards';
                document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Paper';
                document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 17 x 17 x 0.5 cm';
                document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 9 cards';
                document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'Time to make: 4 days';
                document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Writing wishes';
            }
            if(page10_anh[i].getAttribute('imgId') == "img3") {
                document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Scrapbooks';
                document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Paper';
                document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 15 x 15 cm';
                document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 2 albums';
                document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'Time to make: 3 - 6 weeks';
                document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Storing photo & notes';
            }
            if(page10_anh[i].getAttribute('imgId') == "img4") {
                document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Scrapbooks';
                document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Paper';
                document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 15 x 15 cm';
                document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 2 albums';
                document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'Time to make: 3 - 6 weeks';
                document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Storing photo & notes';
            }

            page10_anh[i].setAttribute("imgId", page10_anh4.getAttribute("imgId"));
            page10_anh4.setAttribute("imgId", page10_tmp_id);
        }
        if(page10_anh[i].getAttribute("identy") == 'slide2') {
            page10_anh[i].src = page10_anh8.src;
            page10_anh8.src = page10_tmp;

            page10_anh8.style.transform = 'scale(0.9)';
            setTimeout(function() {
                page10_anh8.style.transform = 'scale(1)';
            }, 400);

            if(page10_anh[i].getAttribute('imgId') == "img5") {
                document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Envelops & Invitations';
                document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Paper';
                document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 10 x 15 cm';
                document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 15 units';
                document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'Time to make: 1 hour';
                document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Information notes';
            }
            if(page10_anh[i].getAttribute('imgId') == "img6") {
                document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Dreamcatchers';
                document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Metal hoop, rope & feathers';
                document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 5 x 10 x 0.5 cm';
                document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 4 units';
                document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'Time to make: 3 hours';
                document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Decoration';
            }
            if(page10_anh[i].getAttribute('imgId') == "img7") {
                document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Scented Candles';
                document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Soy wax & Fragrance oils';
                document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 8 x 8 x 12 cm';
                document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 3 candles';
                document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'Time to make: 2 hours';
                document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Decoration & Relaxation';
            }
            if(page10_anh[i].getAttribute('imgId') == "img8") {
                document.querySelector('.page10_content-main-bigTitle').innerHTML = 'Sketch Notes';
                document.querySelector('.page10_main-bottom_left-list_item-1').innerHTML = 'Tutorial: Notebook, sticker & washi tapes';
                document.querySelector('.page10_main-bottom_left-list_item-2').innerHTML = 'Size: 20 x 15 x 5 cm';
                document.querySelector('.page10_main-bottom_left-list_item-3').innerHTML = 'Limited quantity: 2 Notebooks';
                document.querySelector('.page10_main-bottom_left-list_item-4').innerHTML = 'time to make: 1 hours / page';
                document.querySelector('.page10_main-bottom_left-list_item-5').innerHTML = 'Use for: Planner & Diary';
            }

            page10_anh[i].setAttribute("imgId", page10_anh8.getAttribute("imgId"));
            page10_anh8.setAttribute("imgId", page10_tmp_id);
        }
    });
};

/* phu_luc */
document.querySelector('.page1_content-left_button').addEventListener('click', () => {
    document.querySelector('.phu_luc-sitemap').classList.add('phu_luc-show');
});

document.querySelector('.phu_luc-sitemap_in_top-x').addEventListener('click', () => {
    document.querySelector('.phu_luc-sitemap').classList.remove('phu_luc-show');
});

document.querySelector('.page1_content-right_2-right').addEventListener('click', () => {
    document.querySelector('.phu_luc-arrow-in').style.opacity = '1';
    document.querySelector('.phu_luc-arrow').classList.add('phu_luc-show');
});

document.querySelector('.phu_luc-arrow_x').addEventListener('click', () => {
    document.querySelector('.phu_luc-arrow-in').style.opacity = '0';
    document.querySelector('.phu_luc-arrow').classList.remove('phu_luc-show');
});

document.querySelector('.page2_content-left_button').addEventListener('click', () => {
    document.querySelector('.phu_luc-download').classList.add('phu_luc-show');
    document.querySelector('.phu_luc-download_in').classList.add('phu_luc-download_in-show');
});

document.querySelector('.phu_luc-download_col3-x').addEventListener('click', () => {
    document.querySelector('.phu_luc-download').classList.remove('phu_luc-show');
    document.querySelector('.phu_luc-download_in').classList.remove('phu_luc-download_in-show');
});





