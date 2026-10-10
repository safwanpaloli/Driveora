<template>
  <div class="page-container w-full min-h-screen">
    <!-- HERO SECTION -->
    <section class="relative w-full h-screen overflow-hidden flex items-end pb-24 px-12" ref="heroSection">
      <div class="absolute top-0 left-0 w-full h-[120%] -z-10" ref="heroImgWrap">
        <img src="/images/verano_hero.jpg" alt="Verano Motors" class="w-full h-full object-cover object-center" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-verano-bg via-verano-bg/40 to-transparent -z-10"></div>
      
      <div class="w-full flex justify-between items-end">
        <div class="max-w-4xl">
          <div class="text-mask mb-4">
            <h1 class="text-7xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] text-white" ref="heroTitle">VÉRANO</h1>
          </div>
          <div class="text-mask mb-8">
            <h2 class="text-2xl md:text-4xl text-white/90 font-light" ref="heroSubtitle">ENGINEERED FOR THE EXTRAORDINARY</h2>
          </div>
          <p class="text-verano-muted max-w-md text-sm md:text-base mb-10 opacity-0" ref="heroDesc">Precision, performance and design without compromise.</p>
          
          <div class="flex gap-6 opacity-0" ref="heroBtns">
            <NuxtLink to="/collection" class="group relative px-8 py-4 bg-white text-verano-bg font-semibold uppercase tracking-widest text-xs overflow-hidden flex items-center gap-4">
              <span>Explore the Collection</span>
              <span class="transform transition-transform group-hover:translate-x-2">→</span>
            </NuxtLink>
            <NuxtLink to="/about" class="px-8 py-4 border border-white/20 text-white font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
              Discover Verano
            </NuxtLink>
          </div>
        </div>

        <div class="hidden lg:flex flex-col items-center gap-4 opacity-0" ref="heroScroll">
          <span class="uppercase tracking-widest text-xs text-white/50 writing-vertical-rl transform rotate-180">Scroll to Explore</span>
          <div class="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: THE COLLECTION -->
    <section class="py-40 px-12 bg-verano-bg" ref="collectionSection">
      <div class="max-w-screen-2xl mx-auto">
        <div class="mb-24">
          <h2 class="text-6xl md:text-8xl font-light tracking-tight text-white leading-tight">
            <div class="text-mask"><span ref="collTitle1">"Designed to</span></div>
            <div class="text-mask"><span class="text-verano-muted" ref="collTitle2">be remembered."</span></div>
          </h2>
        </div>

        <div class="flex flex-col gap-12">
          <!-- Card 1 -->
          <div class="group relative w-full h-[600px] rounded-2xl overflow-hidden collection-card" ref="card1">
            <img src="/images/verano_hero.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
            <div class="absolute bottom-0 left-0 w-full p-12 flex justify-between items-end">
              <div>
                <p class="text-verano-accent text-xs font-bold tracking-widest uppercase mb-4">Grand Touring</p>
                <h3 class="text-5xl font-bold text-white mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">VÉRANO X9</h3>
                <div class="flex gap-8 text-verano-text text-sm">
                  <div><span class="text-verano-muted block text-xs uppercase mb-1">Power</span> 630 HP</div>
                  <div><span class="text-verano-muted block text-xs uppercase mb-1">0-100 km/h</span> 3.1 SEC</div>
                  <div><span class="text-verano-muted block text-xs uppercase mb-1">Starting</span> $240,000</div>
                </div>
              </div>
              <NuxtLink to="/details" class="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-all">
                <span class="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: PERFORMANCE -->
    <section class="relative h-[80vh] w-full flex items-center justify-center overflow-hidden" ref="perfSection">
      <div class="absolute inset-0 -z-10" ref="perfBg">
        <img src="/images/side.jpg" class="w-full h-[120%] object-cover object-center grayscale opacity-50" />
      </div>
      <div class="absolute inset-0 bg-verano-bg/60 -z-10"></div>

      <div class="text-center">
        <div class="text-mask mb-16">
          <h2 class="text-8xl md:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10" ref="perfTitle">PURE<br/>PERFORMANCE.</h2>
        </div>
        
        <div class="flex justify-center gap-24">
          <div class="text-center stat-item opacity-0 transform translate-y-10">
            <div class="text-6xl font-light text-white mb-2"><span class="counter" data-target="630">0</span> HP</div>
            <div class="w-full h-[1px] bg-white/20 mb-4 relative overflow-hidden"><div class="absolute left-0 top-0 h-full bg-verano-accent w-0 stat-bar"></div></div>
          </div>
          <div class="text-center stat-item opacity-0 transform translate-y-10 delay-100">
            <div class="text-6xl font-light text-white mb-2"><span class="counter" data-target="3.1">0</span> SEC</div>
            <div class="w-full h-[1px] bg-white/20 mb-4 relative overflow-hidden"><div class="absolute left-0 top-0 h-full bg-verano-accent w-0 stat-bar"></div></div>
          </div>
          <div class="text-center stat-item opacity-0 transform translate-y-10 delay-200">
            <div class="text-6xl font-light text-white mb-2"><span class="counter" data-target="320">0</span> KM/H</div>
            <div class="w-full h-[1px] bg-white/20 mb-4 relative overflow-hidden"><div class="absolute left-0 top-0 h-full bg-verano-accent w-0 stat-bar"></div></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const heroSection = ref(null)
const heroImgWrap = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroDesc = ref(null)
const heroBtns = ref(null)
const heroScroll = ref(null)

const collectionSection = ref(null)
const collTitle1 = ref(null)
const collTitle2 = ref(null)
const card1 = ref(null)

const perfSection = ref(null)
const perfBg = ref(null)
const perfTitle = ref(null)

onMounted(() => {
  // Hero Load Animations
  const tl = gsap.timeline()
  
  tl.fromTo(heroImgWrap.value,
    { scale: 1.1 },
    { scale: 1, duration: 2.5, ease: 'power3.out' }
  )
  .fromTo(heroTitle.value,
    { y: '100%' },
    { y: '0%', duration: 1.2, ease: 'power4.out' },
    '-=2'
  )
  .fromTo(heroSubtitle.value,
    { y: '100%' },
    { y: '0%', duration: 1, ease: 'power3.out' },
    '-=1.5'
  )
  .fromTo([heroDesc.value, heroBtns.value, heroScroll.value],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power2.out' },
    '-=1'
  )

  // Hero Parallax Scroll
  gsap.to(heroImgWrap.value, {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: heroSection.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })

  // Collection Title Reveal
  gsap.fromTo([collTitle1.value, collTitle2.value],
    { y: '100%' },
    {
      y: '0%',
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: collectionSection.value,
        start: 'top 70%'
      }
    }
  )

  // Collection Card Reveal
  gsap.fromTo(card1.value,
    { y: 100, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
      scrollTrigger: {
        trigger: card1.value,
        start: 'top 85%'
      }
    }
  )

  // Performance Section Parallax & Counters
  gsap.to(perfBg.value, {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: perfSection.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })

  gsap.fromTo(perfTitle.value,
    { y: '100%' },
    {
      y: '0%', duration: 1.5, ease: 'power4.out',
      scrollTrigger: {
        trigger: perfSection.value,
        start: 'top 60%'
      }
    }
  )

  gsap.to('.stat-item', {
    y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
    scrollTrigger: {
      trigger: perfSection.value,
      start: 'top 50%'
    }
  })

  gsap.to('.stat-bar', {
    width: '100%', duration: 1.5, stagger: 0.2, ease: 'power3.inOut',
    scrollTrigger: {
      trigger: perfSection.value,
      start: 'top 50%'
    }
  })

  // Simple number counter animation (could be extended)
  const counters = document.querySelectorAll('.counter')
  ScrollTrigger.create({
    trigger: perfSection.value,
    start: 'top 50%',
    onEnter: () => {
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'))
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: target % 1 === 0 ? 1 : 0.1 },
          ease: 'power2.out'
        })
      })
    }
  })
})
</script>

<style scoped>
@keyframes scroll-down {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
.animate-scroll-down {
  animation: scroll-down 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}
</style>
