let home = document.querySelector(".home");

home.onmouseover = function () {
  document.querySelector(".dropdownmenu").classList.remove("close");
  document.querySelector(".dropdownmenu").style.transition = "0.4s";
};
home.onmouseleave = function () {
  document.querySelector(".dropdownmenu").classList.add("close");
  document.querySelector(".dropdownmenu").style.transition = "0.4s";
};

let shop = document.querySelector(".shop");

shop.onmouseover = function () {
  document.querySelector(".shop-drop").classList.remove("close");
  document.querySelector(".shop-drop").style.transition = "0.4s";
  document.querySelector(".shop-drop").style.transform = "translate(0,15px)";
};
shop.onmouseleave = function () {
  document.querySelector(".shop-drop").classList.add("close");
  document.querySelector(".shop-drop").style.transition = "0.4s";
  document.querySelector(".shop-drop").style.transform = "translate(0,-15px)";
};

let product = document.querySelector(".product");
product.onmouseover = function () {
  document.querySelector(".product-drop").classList.remove("close");
  document.querySelector(".product-drop").style.transition = "0.4s";
  document.querySelector(".product-drop").style.transform = "translate(0,15px)";
};
product.onmouseleave = function () {
  document.querySelector(".product-drop").classList.add("close");
  document.querySelector(".product-drop").style.transition = "0.4s";
  document.querySelector(".product-drop").style.transform =
    "translate(0,-15px)";
};

let thumbnail = document.querySelector(".thumbnail");
thumbnail.onmouseover = function () {
  document.querySelector(".nested-drop").classList.remove("close");
  document.querySelector(".nested-drop").style.transition = "0.4s";
  document.querySelector(".nested-drop").style.transform = "translate(-1px,0)";
};
thumbnail.onmouseleave = function () {
  document.querySelector(".nested-drop").classList.add("close");
  document.querySelector(".nested-drop").style.transition = "0.4s";
  document.querySelector(".nested-drop").style.transform = "translate(1px,0)";
};

let nested_drop = document.querySelector(".nested-drop");

nested_drop.onmouseover = function () {
  document.querySelector(".nested-drop").classList.remove("close");
  document.querySelector(".nested-drop").style.transition = "0.4s";
};
nested_drop.onmouseleave = function () {
  document.querySelector(".nested-drop").classList.add("close");
  document.querySelector(".nested-drop").style.transition = "0.4s";
};

let mega = document.querySelector(".mega");
mega.onmouseover = function () {
  document.querySelector(".megamenu-drop").classList.remove("close");
  document.querySelector(".megamenu-drop").style.transition = "0.4s";
};
mega.onmouseleave = function () {
  document.querySelector(".megamenu-drop").classList.add("close");
  document.querySelector(".megamenu-drop").style.transition = "0.4s";
};

let blog = document.querySelector(".blog");
blog.onmouseover = function () {
  document.querySelector(".blog-drop").classList.remove("close");
  document.querySelector(".blog-drop").style.transition = "0.4s";
  document.querySelector(".blog-drop").style.transform = "translate(0,15px)";
};
blog.onmouseleave = function () {
  document.querySelector(".blog-drop").classList.add("close");
  document.querySelector(".blog-drop").style.transition = "0.4s";
  document.querySelector(".blog-drop").style.transform = "translate(0,-15px)";
};

let pages = document.querySelector(".pages");
pages.onmouseover = function () {
  document.querySelector(".page-drop").classList.remove("close");
  document.querySelector(".page-drop").style.transition = "0.4s";
  document.querySelector(".page-drop").style.transform = "translate(0,15px)";
};
pages.onmouseleave = function () {
  document.querySelector(".page-drop").classList.add("close");
  document.querySelector(".page-drop").style.transition = "0.4s";
  document.querySelector(".page-drop").style.transform = "translate(0,-15px)";
};

let email = document.querySelector(".email");
email.onmouseover = function () {
  document.querySelector(".nested-drop-page").classList.remove("close");
  document.querySelector(".nested-drop-page").style.transition = "0.4s";
};
email.onmouseleave = function () {
  document.querySelector(".nested-drop-page").classList.add("close");
  document.querySelector(".nested-drop-page").style.transition = "0.4s";
};

let p = document.querySelector(".pfirst");
let invoice = document.querySelector(".invoice");
let nested1 = document.querySelector(".nested-drop-page");
let nested2 = document.querySelector(".nested-drop-page1");
p.onmouseover = function () {
  nested1.classList.remove("close");
  mested1.style.transition = "0.4s";
};
p.onmouseleave = function () {
  nested1.classList.add("close");
  nested1.style.transition = "0.4s";
};

nested1.onmouseover = function () {
  nested1.classList.remove("close");
  nested1.style.transition = "0.4s";
};
nested1.onmouseleave = function () {
  nested1.classList.add("close");
  nested1.style.transition = "0.4s";
};

invoice.onmouseover = function () {
  nested2.classList.remove("close");
  nested2.style.transition = "0.4s";
};
invoice.onmouseleave = function () {
  nested2.classList.add("close");
  nested2.style.transition = "0.4s";
};

nested2.onmouseover = function () {
  nested2.classList.remove("close");
  nested2.style.transition = "0.4s";
};
nested2.onmouseleave = function () {
  nested2.classList.add("close");
  nested2.style.transition = "0.4s";
};

let seller = document.querySelector(".seller");
seller.onmouseover = function () {
  document.querySelector(".nested-drop-seller").classList.remove("close");
  document.querySelector(".nested-drop-seller").style.transition = "0.4s";
  document.querySelector(".nested-drop-seller").style.transform =
    "translate(0,15px)";
};
seller.onmouseleave = function () {
  document.querySelector(".nested-drop-seller").classList.add("close");
  document.querySelector(".nested-drop-seller").style.transition = "0.4s";
  document.querySelector(".nested-drop-seller").style.transform =
    "translate(0,-15px)";
};

let heart = document.querySelector("#heart");
let bagla = document.querySelector(".close-button");
let drop_heart=document.querySelector('.drop-heart');
heart.onmouseover = function () {
 drop_heart.style.transition = "0.5s";
 drop_heart.classList.remove("close");
 drop_heart.style.transform = "translate(0,15px)";
};

heart.onmouseleave = function () {
 drop_heart.classList.add("close");
 drop_heart.style.transition = "0.4s";
 drop_heart.style.transform = "translate(0,-15px)";
};


AOS.init();

$('.all-product').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.elements').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.top-elements').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.elements-1').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.elements-chemistry').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.elements-drinks').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.elements-grocery').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.elements-personal').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.elements-kitchen').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.sellings').slick({
  dots:false,
  autoplay:true,
  infinite:true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.corusel-track').slick({
  dots:false,
  autoplay:true,
  arrows:false,
  infinite:true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});