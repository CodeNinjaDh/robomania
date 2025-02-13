particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab', // **Cursor interaction on hover: "grab"**
        parallax: { // Optional parallax effect on hover
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      onclick: {
        enable: true,
        mode: 'push', // **Cursor interaction on click: "push"**
        // mode: 'repulse' // You could also try 'repulse' or 'bubble' mode on click
      },
      resize: true
    },
    modes: {
      grab: { // Configuration for "grab" mode
        distance: 140, // Distance within which particles are "grabbed"
        line_linked: {
          opacity: 1 // Opacity of the line drawn when particles are grabbed
        }
      },
      bubble: { // Configuration for "bubble" mode (if you want to try it)
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: { // Configuration for "repulse" mode (if you want to try it)
        distance: 200,
        duration: 0.4
      },
      push: { // Configuration for "push" mode
        particles_nb: 4 // Number of particles pushed away on click
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});