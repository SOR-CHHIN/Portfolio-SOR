import About from '@/views/AboutMe.vue';

import Experience from '@/views/Experience.vue';

import Contact from '@/views/Contact.vue';
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },

  { path: '/experience', name: 'Experience', component: Experience },

  { path: '/contact', name: 'Contact', component: Contact },
];
export default routes;