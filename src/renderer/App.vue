<template>
  <title-bar />
  <div class="main">
    <!-- <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view> -->
    <Navbar />
    <Hero />
    <Sponsors />
    <Benefits />
    <Features />
    <Services />
    <HowItWorks />
    <Testimonials />
    <Team />
    <Community />
    <Pricing />
    <Contact />
    <FAQ />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import TitleBar from '@/components/title-bar/title-bar.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Benefits from './components/Benefits.vue'
import Features from './components/Features.vue'
import Services from './components/Services.vue'
import HowItWorks from './components/HowItWorks.vue'
import Sponsors from './components/Sponsors.vue'
import Testimonials from './components/Testimonials.vue'
import Team from './components/Team.vue'
import Pricing from './components/Pricing.vue'
import Community from './components/Community.vue'
import Contact from './components/Contact.vue'
import FAQ from './components/FAQ.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.main {
  padding-top: 30px;
  box-sizing: border-box;
}
</style>
