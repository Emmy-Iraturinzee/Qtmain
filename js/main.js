(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 500);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('blur shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('blur shadow-sm').css('top', '-150px');
        }
    });

// video speed decrease
document.querySelector('#bg-video').defaultPlaybackRate = 0.1;
document.querySelector('#bg-video').play();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);


// scroll progress

const scrollProgress = document.getElementById('scroll-progress');
const height =
document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
const scrollTop =
document.body.scrollTop || document.documentElement.scrollTop;
scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});


// cursor

// // typing eff
// const t_Options = [["QT Global Software LTD ,", "Is a Tech Company ", "Committed to enhancing the competence and competitiveness ", "O  f its clients by enabling them to succeed through the power of information technology security "],
// ["We have six years of experience in building ",
// "We build web and mobile applications",
// " We serve government institutions and private businesses",
// "Requiring robust applications",
// "For use by thousands of users"

// ]]; // first sub-array contains the first part of the sentence; and the second sub-array contains second part

// const textElement1 = document.getElementById("t1");
// const textElement2 = document.getElementById("t2");
// let i = 0;
// let j = 0;
// let k = 0;
// let l = 0;
// let m = 0;

// function updateText(t_mode, text) { // writes/erases one character
//   if (t_mode == 0) { // first part of sentence
//     textElement1.textContent = `${text}`;
//   }
//   else if (t_mode == 1) { // second part of sentence
//     textElement2.textContent = `${text}`;
//   }
//   }

// function eraseEffect(t_mode, string) {
//   let index = string.length
//   const delay = 40; // delay between each character in milliseconds

//   function erase() {
//     if (index > 0) {
//       updateText(t_mode, string.substring(0, index - 1));
//       index--;
//       setTimeout(erase, delay);
//     } else {
//       typeWriterEffect();
//       return;
//     }
//   }
//   erase();
// }

// function typeEffect(t_mode, string) {
//   let index = 0;
//   const delay = 90; // delay between each character in milliseconds

//   function type() {
//     if (index < string.length) {
//       updateText(t_mode, string.substring(0, index + 1));
//       index++;
//       setTimeout(type, delay);
//     } else {
//       typeWriterEffect();
//       return;
//     }
//   }
//   type();
// }

// function typeWriterEffect() {
//   const short_delay = 750;
//   const long_delay = 1250;
//   if (i == 0 && j == 0) { // start of arrays
//     typeEffect(0, t_Options[i][j]);
//     i++;
//   } else if (i == 1 && j == 9) { // end of arrays
//     if (m == 0) {
//       m++;
//       typeEffect(1, t_Options[i][j]);
//     } else if (m == 1) {
//       m++;
//       setTimeout(() => eraseEffect(1, t_Options[i][j]), long_delay);
//     } else if (m == 2) {
//       i = 0;
//       j = 0;
//       k = 0;
//       l = 0;
//       m = 0;
//       setTimeout(() => eraseEffect(0, t_Options[0][3]), long_delay);
//     }
//   } else if (i == 0) { // during [0][x]
//     if (m == 0) {
//       m++;
//       eraseEffect(0, t_Options[i][k-1]);
//     } else if (m == 1) {
//       m = 0;
//       j = l + 1;
//       i++;
//       setTimeout(() => typeEffect(0, t_Options[0][k]), short_delay);
//     }
//   } else if ( //before switch to [0][x]
//     (i == 1 && j == 2) ||
//     (i == 1 && j == 4) ||
//     (i == 1 && j == 6)
//   ) {
//     if (m == 0) {
//       m++;
//       setTimeout(() => typeEffect(1, t_Options[i][j]), short_delay);
//     } else if (m == 1) {
//       m = 0;
//       i = 0;
//       l = j;  // 3-10
//       k++;  // 0-4
//       j = k;
//       setTimeout(() => eraseEffect(1, t_Options[1][l]), long_delay);
//     }
//   } else { //  during [1][x]
//     if (m == 0) {
//       m++;
//       if (j == 0 || j == 3 || j == 5 || j == 7) { // if [0][x] was just written
//         typeEffect(1, t_Options[i][j]);
//       } else {
//         setTimeout(() => typeEffect(1, t_Options[i][j]), short_delay);
//       }
//     } else if (m == 1) {
//       m = 0;
//       j++;
//       setTimeout(() => eraseEffect(1, t_Options[i][j - 1]), long_delay);
//     }
//   }
// }

// /*
// Animation structure:
//   [0][0], [1][0], [1][1], [1][2], (erase)
//   [0][1], [1][3], [1][4], (erase)
//   [0][2], [1][5], [1][6], (erase)
//   [0][3], (short break) [1][7], [1][8], [1][9] (erase)

//   [0][0], [1][0], [1][1], [1][2], [1][3], (erase)
//   [0][1], [1][4], [1][5], (erase)
//   [0][2], (short break) [1][6], [1][7], [1][8], (erase)
//   [0][3], [1][9], [1][10], (erase)
//   [0][4] (erase)
// */

// typeWriterEffect();


// typing eff 2

const animateTextTyping = (node) => {
  const text = node.textContent;
  const chars = text.split("");
  node.innerHTML = "";
  node.classList.add("typing");
  i = 0;
  const addNextChar = (i) => {
    let nextChar = chars[i] === "\n" ? "<br>" : chars[i];
    node.innerHTML += "<span>" + nextChar + "</span>";
    if (i < chars.length - 1) {
      setTimeout(function () {
        addNextChar(i + 1);
      }, 50 + Math.random() * 100); // add random delay to make it more human ;)
    } else {
      setTimeout(function () {
        node.classList.remove("typing");
      }, 50 + Math.random() * 150);
    }
  };
  addNextChar(i);
};
let text = document.getElementById("text");
animateTextTyping(text);


// cursor


$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});

// clients

filterSelection('all');

function filterSelection(c) {
  let b; 
  let i;

  b = document.getElementsByClassName('filterDiv');
  if (c == 'all') c = '';
  for (i = 0; i < b.length; i++) {
    RemoveClass(b[i], 'show');
    if (b[i].className.indexOf(c) > -1) AddClass(b[i], 'show');
  }
}

function AddClass(element, name) {
  let i; let arr1; let
    arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ` ${arr2[i]}`;
    }
  }
}

function RemoveClass(element, name) {
  let i; let arr1; let
    arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// Add active class to the current button (highlight it)
const workFilter = document.getElementById('work-filter');
const btns = workFilter.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
};

// text typing
var i = 0;
// var A = 0;
		var tag = document.getElementById("text");
		var html = document.getElementById("text").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 170;

		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		    //console.log(document.getElementById("text").innerHTML);
		}

typeWriter();

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

// canvas



// our products
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


//video ambiante

var timerID;
window.onload = function() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');

  var video = document.getElementById('video');

  video.addEventListener('play', function() {
    video.currentTime = 0;
    timerID = window.setInterval(function() {
      ctx.drawImage(video, 0, 0, 600, 460)
    }, 30);
  });

  video.addEventListener('pause', function() {
    stopTimer();
  });

  video.addEventListener('ended', function() {
    stopTimer();
  });
}

// Project image

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);



// hero try

class Slider {
  constructor() {
    this.bindAll();

    this.vert = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `;

    this.frag = `
    varying vec2 vUv;

    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform sampler2D disp;

    uniform float dispPower;
    uniform float intensity;

    uniform vec2 size;
    uniform vec2 res;

    vec2 backgroundCoverUv( vec2 screenSize, vec2 imageSize, vec2 uv ) {
      float screenRatio = screenSize.x / screenSize.y;
      float imageRatio = imageSize.x / imageSize.y;
      vec2 newSize = screenRatio < imageRatio 
          ? vec2(imageSize.x * (screenSize.y / imageSize.y), screenSize.y)
          : vec2(screenSize.x, imageSize.y * (screenSize.x / imageSize.x));
      vec2 newOffset = (screenRatio < imageRatio 
          ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
          : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;
      return uv * screenSize / newSize + newOffset;
    }

    void main() {
      vec2 uv = vUv;
      
      vec4 disp = texture2D(disp, uv);
      vec2 dispVec = vec2(disp.x, disp.y);
      
      vec2 distPos1 = uv + (dispVec * intensity * dispPower);
      vec2 distPos2 = uv + (dispVec * -(intensity * (1.0 - dispPower)));
      
      vec4 _texture1 = texture2D(texture1, distPos1);
      vec4 _texture2 = texture2D(texture2, distPos2);
      
      gl_FragColor = mix(_texture1, _texture2, dispPower);
    }
    `;

    this.el = document.querySelector('.js-slider');
    this.inner = this.el.querySelector('.js-slider__inner');
    this.slides = [...this.el.querySelectorAll('.js-slide')];
    this.bullets = [...this.el.querySelectorAll('.js-slider-bullet')];

    this.renderer = null;
    this.scene = null;
    this.clock = null;
    this.camera = null;

    this.images = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/bg1.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/bg2.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/bg3.jpg'];


    this.data = {
      current: 0,
      next: 1,
      total: this.images.length - 1,
      delta: 0 };


    this.state = {
      animating: false,
      text: false,
      initial: true };


    this.textures = null;

    this.init();
  }

  bindAll() {
    ['render', 'nextSlide'].
    forEach(fn => this[fn] = this[fn].bind(this));
  }

  setStyles() {
    this.slides.forEach((slide, index) => {
      if (index === 0) return;

      TweenMax.set(slide, { autoAlpha: 0 });
    });

    this.bullets.forEach((bullet, index) => {
      if (index === 0) return;

      const txt = bullet.querySelector('.js-slider-bullet__text');
      const line = bullet.querySelector('.js-slider-bullet__line');

      TweenMax.set(txt, {
        alpha: 0.25 });

      TweenMax.set(line, {
        scaleX: 0,
        transformOrigin: 'left' });

    });
  }

  cameraSetup() {
    this.camera = new THREE.OrthographicCamera(
    this.el.offsetWidth / -2,
    this.el.offsetWidth / 2,
    this.el.offsetHeight / 2,
    this.el.offsetHeight / -2,
    1,
    1000);


    this.camera.lookAt(this.scene.position);
    this.camera.position.z = 1;
  }

  setup() {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock(true);

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight);

    this.inner.appendChild(this.renderer.domElement);
  }

  loadTextures() {
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = '';

    this.textures = [];
    this.images.forEach((image, index) => {
      const texture = loader.load(image + '?v=' + Date.now(), this.render);

      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      if (index === 0 && this.mat) {
        this.mat.uniforms.size.value = [
        texture.image.naturalWidth,
        texture.image.naturalHeight];

      }

      this.textures.push(texture);
    });

    this.disp = loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/rock-_disp.png', this.render);
    this.disp.magFilter = this.disp.minFilter = THREE.LinearFilter;
    this.disp.wrapS = this.disp.wrapT = THREE.RepeatWrapping;
  }

  createMesh() {
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        dispPower: { type: 'f', value: 0.0 },
        intensity: { type: 'f', value: 0.5 },
        res: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        size: { value: new THREE.Vector2(1, 1) },
        texture1: { type: 't', value: this.textures[0] },
        texture2: { type: 't', value: this.textures[1] },
        disp: { type: 't', value: this.disp } },

      transparent: true,
      vertexShader: this.vert,
      fragmentShader: this.frag });


    const geometry = new THREE.PlaneBufferGeometry(
    this.el.offsetWidth,
    this.el.offsetHeight,
    1);


    const mesh = new THREE.Mesh(geometry, this.mat);

    this.scene.add(mesh);
  }

  transitionNext() {
    TweenMax.to(this.mat.uniforms.dispPower, 2.5, {
      value: 1,
      ease: Expo.easeInOut,
      onUpdate: this.render,
      onComplete: () => {
        this.mat.uniforms.dispPower.value = 0.0;
        this.changeTexture();
        this.render.bind(this);
        this.state.animating = false;
      } });


    const current = this.slides[this.data.current];
    const next = this.slides[this.data.next];

    const currentImages = current.querySelectorAll('.js-slide__img');
    const nextImages = next.querySelectorAll('.js-slide__img');

    const currentText = current.querySelectorAll('.js-slider__text-line div');
    const nextText = next.querySelectorAll('.js-slider__text-line div');

    const currentBullet = this.bullets[this.data.current];
    const nextBullet = this.bullets[this.data.next];

    const currentBulletTxt = currentBullet.querySelectorAll('.js-slider-bullet__text');
    const nextBulletTxt = nextBullet.querySelectorAll('.js-slider-bullet__text');

    const currentBulletLine = currentBullet.querySelectorAll('.js-slider-bullet__line');
    const nextBulletLine = nextBullet.querySelectorAll('.js-slider-bullet__line');

    const tl = new TimelineMax({ paused: true });

    if (this.state.initial) {
      TweenMax.to('.js-scroll', 1.5, {
        yPercent: 100,
        alpha: 0,
        ease: Power4.easeInOut });


      this.state.initial = false;
    }

    tl.
    staggerFromTo(currentImages, 1.5, {
      yPercent: 0,
      scale: 1 },
    {
      yPercent: -185,
      scaleY: 1.5,
      ease: Expo.easeInOut },
    0.075).
    to(currentBulletTxt, 1.5, {
      alpha: 0.25,
      ease: Linear.easeNone },
    0).
    set(currentBulletLine, {
      transformOrigin: 'right' },
    0).
    to(currentBulletLine, 1.5, {
      scaleX: 0,
      ease: Expo.easeInOut },
    0);

    if (currentText) {
      tl.
      fromTo(currentText, 2, {
        yPercent: 0 },
      {
        yPercent: -100,
        ease: Power4.easeInOut },
      0);
    }

    tl.
    set(current, {
      autoAlpha: 0 }).

    set(next, {
      autoAlpha: 1 },
    1);

    if (nextText) {
      tl.
      fromTo(nextText, 2, {
        yPercent: 100 },
      {
        yPercent: 0,
        ease: Power4.easeOut },
      1.5);
    }

    tl.
    staggerFromTo(nextImages, 1.5, {
      yPercent: 150,
      scaleY: 1.5 },
    {
      yPercent: 0,
      scaleY: 1,
      ease: Expo.easeInOut },
    0.075, 1).
    to(nextBulletTxt, 1.5, {
      alpha: 1,
      ease: Linear.easeNone },
    1).
    set(nextBulletLine, {
      transformOrigin: 'left' },
    1).
    to(nextBulletLine, 1.5, {
      scaleX: 1,
      ease: Expo.easeInOut },
    1);

    tl.play();
  }

  prevSlide() {

  }

  nextSlide() {
    if (this.state.animating) return;

    this.state.animating = true;

    this.transitionNext();

    this.data.current = this.data.current === this.data.total ? 0 : this.data.current + 1;
    this.data.next = this.data.current === this.data.total ? 0 : this.data.current + 1;
  }

  changeTexture() {
    this.mat.uniforms.texture1.value = this.textures[this.data.current];
    this.mat.uniforms.texture2.value = this.textures[this.data.next];
  }

  listeners() {
    window.addEventListener('wheel', this.nextSlide, { passive: true });
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  init() {
    this.setup();
    this.cameraSetup();
    this.loadTextures();
    this.createMesh();
    this.setStyles();
    this.render();
    this.listeners();
  }}


// Toggle active link
const links = document.querySelectorAll('.js-nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(other => other.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});

// Init classes
const slider = new Slider();


// nav effects
