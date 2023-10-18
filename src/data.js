import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#bout', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Save money with our tour company – the ultimate value experience.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Unleash your spirit of adventure with endless hiking.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Experience unparalleled endless comfort with our tour company.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2024',
    title: 'Tibet Adventure',
    info: 'Laborum fuga asperiores illum quos animi tempora aperiam at, recusandae quam ipsa sunt? Mollitia voluptatibus quaerat voluptasaperiam voluptates, earum corrupti!',
    locatioon: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2024',
    title: 'best of java',
    info: ' Quasi in quae eaque officiis dolores cum aliquam doloremque laudantium? Ex, minima consectetur. Magnam voluptatem mollitia incidunt est facere qui corporis.',
    locatioon: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2024',
    title: 'explore hong kong',
    info: 'In odit tenetur veniam molestiae cumque exercitationem voluptatum, dolor aepe impedit aliquam? Ducimus, minima pariatur repellat facere quos harum error.',
    locatioon: 'ihong kong',
    duration: 8,
    cost: 5500,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2024',
    title: 'kenya highlights',
    info: 'Tempore tenetur nam dicta quibusdam iure, commodi laboriosam, doloremque, vel nobis aliquid illo repudiandae sequi ducimus! Neque mollitia libero minus hic.',
    locatioon: 'kenya',
    duration: 20,
    cost: 3300,
  },
];
