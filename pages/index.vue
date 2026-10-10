<template>
  <div class="page-container home-page">
    <section class="hero" ref="heroSection">
      <div class="hero-bg">
        <img src="/images/hero.jpg" alt="Luxury Car" ref="heroImg" />
      </div>
      <div class="hero-content">
        <h1 class="display-text" ref="title1">Unleash</h1>
        <h1 class="display-text" ref="title2">The Beast</h1>
        <p class="subtitle" ref="subtitle">Experience performance without compromise.</p>
        <NuxtLink to="/collection" class="btn primary" ref="ctaBtn">Explore Collection</NuxtLink>
      </div>
    </section>
    <section class="about" ref="aboutSection">
      <div class="about-text">
        <h2 class="display-text" ref="aboutTitle">Craftsmanship Meets Engineering</h2>
        <p ref="aboutText">Every line, every curve is meticulously designed for aerodynamic perfection and aesthetic brilliance. Step into the future of driving.</p>
      </div>
      <div class="about-img-container">
        <img src="/images/side.jpg" alt="Side View" ref="aboutImg" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const heroSection = ref(null)
const heroImg = ref(null)
const title1 = ref(null)
const title2 = ref(null)
const subtitle = ref(null)
const ctaBtn = ref(null)

const aboutSection = ref(null)
const aboutTitle = ref(null)
const aboutText = ref(null)
const aboutImg = ref(null)

onMounted(() => {
  // Hero Animations
  const tl = gsap.timeline()
  
  tl.fromTo(heroImg.value, 
    { scale: 1.2, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
  )
  .fromTo([title1.value, title2.value], 
    { y: 100, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }, 
    "-=1.5"
  )
  .fromTo(subtitle.value,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    "-=0.8"
  )
  .fromTo(ctaBtn.value,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    "-=0.6"
  )

  // Scroll Parallax for Hero
  gsap.to(heroImg.value, {
    y: 200,
    ease: "none",
    scrollTrigger: {
      trigger: heroSection.value,
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })

  // About Section Animations
  gsap.fromTo(aboutTitle.value,
    { y: 50, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1, ease: "power3.out",
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 80%",
      }
    }
  )

  gsap.fromTo(aboutText.value,
    { y: 30, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out",
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 80%",
      }
    }
  )

  gsap.fromTo(aboutImg.value,
    { scale: 1.1, opacity: 0, y: 50 },
    {
      scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "power3.out",
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 70%",
      }
    }
  )
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  overflow: hidden;
  margin-top: calc(var(--nav-height) * -1); /* Full bleed */
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%; /* For parallax */
  z-index: -1;
  overflow: hidden;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.hero-content {
  z-index: 1;
  max-width: 800px;
}

.hero-content h1 {
  font-size: 6rem;
  line-height: 1;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #fff, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #ccc;
}

.btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  font-family: 'Syncopate', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn.primary {
  background-color: var(--accent-color);
  color: #000;
}

.btn.primary:hover {
  background-color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
}

.about {
  padding: 8rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
}

.about-text p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #aaa;
}

.about-img-container {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.about-img-container img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
