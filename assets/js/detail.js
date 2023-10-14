$('.Mycards').slick({
    dots:true,
    arrows:false,
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
        breakpoint:576,
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

  
  $('.cake-img',).slick({
    vertical:true,
    verticalSwiping:true,
    dots: false,
    autoplay:false,
    arrows:false,
    infinite:true,
    speed: 300,
    slidesToShow: 3,
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
          vertical:false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  let imgs=document.querySelectorAll('.cake-img img');

  let main_img=document.querySelector('.slider-img img');
  imgs.forEach(function(img, index) {
    console.log(index);
    img.addEventListener('click', function() {
      let url = img.getAttribute('src');
      main_img.setAttribute('src', url);
      
    });
  });



const hedefTarih = new Date("2023-11-31T23:59:59").getTime();
let days=document.querySelector('.days');
let hours=document.querySelector('.hours');
let minutes=document.querySelector('.minutes');
let seconds=document.querySelector('.seconds');
function guncelleGeriSayim() {
  const simdikiZaman = new Date().getTime();
    const kalanZaman = hedefTarih - simdikiZaman;

    const gunler = Math.floor(kalanZaman / (1000 * 60 * 60 * 24));
    const saatler = Math.floor((kalanZaman % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dakikalar = Math.floor((kalanZaman % (1000 * 60 * 60)) / (1000 * 60));
    const saniyeler = Math.floor((kalanZaman % (1000 * 60)) / 1000);

    days.innerHTML=`${gunler}`;
    hours.innerHTML=`${saatler}`;
    minutes.innerHTML=`${dakikalar}`;
    seconds.innerHTML=`${saniyeler}`;

    if (kalanZaman < 0) {
        console.log("Süre doldu!");
        clearInterval(geriSayimDurdur);
    }
  }


const geriSayimDurdur = setInterval(guncelleGeriSayim, 1000);
