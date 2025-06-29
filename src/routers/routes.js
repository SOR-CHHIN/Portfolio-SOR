import About from '@/views/AboutMe.vue';
import Skills from '@/views/Skills.vue';
import Experience from '@/views/Experience.vue';
import Education from '@/views/Education.vue';
import Contact from '@/views/Contact.vue';
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/education', name: 'Education', component: Education },
  { path: '/contact', name: 'Contact', component: Contact },
];
export default routes;