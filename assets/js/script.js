/* --------------------------------
*  Vue Application
* -------------------------------- */
import { createApp, defineComponent } from 'https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js';

const Lineup = defineComponent({
  template: `
        <ul class="lineup__list">
					<li class="lineup__list__item js-modalOpen" v-for="(item, index) in items" :key="index" :data-target="item.dataTarget">
						<img width="332" height="314" class="lineup__list__item__image js-hover" :src="item.imageSrc" alt="">
						<h3 class="lineup__list__item__title" v-html="item.title">
            </h3>
					</li>
        </ul>
      `,
  data() {
    return {
      items: [
        {
          dataTarget: "modal01",
          imageSrc: "assets/images/lineup_01.webp",
          title: "ORANGE",
        },
        {
          dataTarget: "modal02",
          imageSrc: "assets/images/lineup_01.webp",
          title: "GREEN&thinsp;METALLIC",
        },
        {
          dataTarget: "modal03",
          imageSrc: "assets/images/lineup_01.webp",
          title: "SKY&thinsp;BLUE",
        },
        {
          dataTarget: "modal04",
          imageSrc: "assets/images/lineup_01.webp",
          title: "ORANGE",
        },
        {
          dataTarget: "modal05",
          imageSrc: "assets/images/lineup_01.webp",
          title: "GREEN&thinsp;METALLIC",
        },
        {
          dataTarget: "modal06",
          imageSrc: "assets/images/lineup_01.webp",
          title: "SKY&thinsp;BLUE",
        },
      ],
    }
  },
});

const ModalSlider = defineComponent({
  template: `
        <div class="modal__content__slider__image" v-for="(item, index) in items" :key="index">
          <img width="520" height="520" :src="item.imageSrc" alt="" loading="lazy">
        </div>
      `,
  data() {
    return {
      items: [
        {
          imageSrc: "assets/images/modal01_01.webp",
        },
        {
          imageSrc: "assets/images/modal01_01.webp",
        },
        {
          imageSrc: "assets/images/modal01_01.webp",
        },
      ],
    }
  },
});

const ModalThumbnail = defineComponent({
  template: `
        <div class="modal__content__inner__thumbnail__image" v-for="(item, index) in items" :key="index">
          <img width="136" height="120" :src="item.imageSrc" alt="" loading="lazy">
        </div>
      `,
  data() {
    return {
      items: [
        {
          imageSrc: "assets/images/lineup_01.webp",
        },
        {
          imageSrc: "assets/images/lineup_01.webp",
        },
        {
          imageSrc: "assets/images/lineup_01.webp",
        },
      ],
    }
  },
});

const Modal = defineComponent({
  template: `
      <div class="modal" id="js-modal">
        <div class="modal__content js-modalContent" v-for="(item, index) in items" :key="index" :id="item.id">

          <button class="modal__content__close js-modalClose">
            <img width="24" height="24" src="assets/images/icon_cross.svg" alt="">
          </button>

          <div class="modal__content__slider slider">
            <app-modalSlider></app-modalSlider>

            <div class="modal__content__slider__image lozad">
              <video width="1280" height="720" src="" :data-src="item.videoSrc" :poster="item.poster" controls playsinline></video>
            </div>
          </div>

          <div class="modal__content__inner">
            <h3 class="modal__content__inner__title">
              <span class="modal__content__inner__title__english">EV-TRIKE</span>
              <span class="modal__content__inner__title__japanese">
                {{ item.title }}
              </span>
            </h3>

            <div class="modal__content__inner__price">
              <p>本体価格</p>
              <p>
              <span class="modal__content__inner__price__big" v-html="item.price"></span></p>
              <p class="modal__content__inner__price__small">※本体価格以外に別途料金が発生します。</p>
            </div>

            <div class="modal__content__inner__thumbnail thumbnail">
              <app-modalThumbnail></app-modalThumbnail>

              <div class="modal__content__inner__thumbnail__image">
                <img width="136" height="120" :src="item.poster" alt="" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </div>
      `,
  data() {
    return {
      items: [
        {
          id: "modal01",
          videoSrc: "assets/images/modal01.mp4",
          poster: "assets/images/modal01_poster.webp",
          title: "オレンジ",
          price: "770,000</span>円(税込)"
        },
        {
          id: "modal02",
          videoSrc: "assets/images/modal01.mp4",
          poster: "assets/images/modal01_poster.webp",
          title: "メタリックグリーン",
          price: "770,000</span>円(税込)"
        },
        {
          id: "modal03",
          videoSrc: "assets/images/modal01.mp4",
          poster: "assets/images/modal01_poster.webp",
          title: "スカイブルー",
          price: "770,000</span>円(税込)"
        },
        {
          id: "modal04",
          videoSrc: "assets/images/modal01.mp4",
          poster: "assets/images/modal01_poster.webp",
          title: "オレンジ",
          price: "770,000</span>円(税込)"
        },
        {
          id: "modal05",
          videoSrc: "assets/images/modal01.mp4",
          poster: "assets/images/modal01_poster.webp",
          title: "メタリックグリーン",
          price: "770,000</span>円(税込)"
        },
        {
          id: "modal06",
          videoSrc: "assets/images/modal01.mp4",
          poster: "assets/images/modal01_poster.webp",
          title: "スカイブルー",
          price: "770,000</span>円(税込)"
        },
      ],
    }
  },
});

const app = createApp({});
app.component('app-lineup', Lineup);
app.component('app-modalSlider', ModalSlider);
app.component('app-modalThumbnail', ModalThumbnail);
app.component('app-modal', Modal);
app.mount('#app');

/* --------------------------------
*  Lozad.js
* -------------------------------- */
const observer = lozad();
observer.observe();

/* --------------------------------
*  Cursor
* -------------------------------- */
$(document).on('mousemove', function (e) {
  const body = $('body');
  const cursor = $('#cursor');
  const hoverElements = $('.js-hover');

  const x = e.clientX;
  const y = e.clientY;
  cursor.css({
    'top': y + 'px',
    'left': x + 'px'
  });

  hoverElements.on({
    'mouseenter': function () {
      body.addClass('is-hover');
      cursor.addClass('is-hover');
    },
    'mouseleave': function () {
      body.removeClass('is-hover');
      cursor.removeClass('is-hover');
    }
  });
});

/* --------------------------------
*  Scrolls View
* -------------------------------- */
$(window).on('scroll', function () {
  const header = $('#js-header');
  const firstBottom = $('.js-feature').offset().top;

  header.toggleClass('active', $(this).scrollTop() > firstBottom - 1);
});

$(function () {
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });

  gsap.fromTo(".js-modalOpen", {
    y: 50,
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: ".lineup__list",
      start: "top center+=200",
    },
    y: 0,
    opacity: 1,
    stagger: {
      each: 0.3,
    }
  });
});

/* --------------------------------
*  Modal Window
* -------------------------------- */
$(function () {
  const body = $('body');
  const modal = $('#js-modal');
  const modalContent = $('.js-modalContent');
  const backgroundElements = $(".js-backgroundElement");

  function openModalWindow() {
    backgroundElements.each(function () {
      $(this).prop('inert', true);
    });
  };

  function closeModalWindow() {
    backgroundElements.each(function () {
      $(this).prop('inert', false);
    });
  };

  function toggleModal() {
    body.toggleClass('view');
    modal.toggleClass('view');
    const target = $(this).data('target');
    $('#' + target).addClass('view');
    console.log(target)

    if (modalContent.hasClass('view')) {
      openModalWindow();
    } else {
      closeModalWindow();
    }
  };

  $('.js-modalOpen').on('click', toggleModal);

  $('.js-modalClose').on('click', function () {
    body.removeClass('view');
    modal.removeClass('view');
    modalContent.removeClass('view');
    closeModalWindow();
  });

  $(document).on('click', function (e) {
    if ($(e.target).is('#js-modal')) {
      body.removeClass('view');
      modal.removeClass('view');
      modalContent.removeClass('view');
      closeModalWindow();
    }
  });
});

/* --------------------------------
*  Slider
* -------------------------------- */
$(function () {
  const slider = $('.slider');
  const thumbnail = $('.thumbnail');

  slider.slick({
    fade: true,
    arrows: false,
    asNavFor: '.thumbnail',
  });
  thumbnail.slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: '.slider',
    focusOnSelect: true,
  });

  $('.js-modalOpen').on('click', function () {
    slider.add(thumbnail).slick('setPosition').slick('refresh');
  });
});
