// ------------------------------------------------------------
// All the editable content for the site lives in this file.
// Change text, services or photos here, save, and the page
// updates. You should not need to touch index.astro for
// everyday content edits.
// ------------------------------------------------------------

// Photos live in public/images/. To swap one, drop a new file in
// that folder and change the file name below.
const I = '/images/';

// Photo sizes (width x height) help the page avoid jumping while
// photos load. Update them if you replace a photo with a different shape.
const photos = {
  walkway: { src: I + 'walkway.jpg', w: 1200, h: 1600 },
  lawnWall: { src: I + 'lawn-wall.jpg', w: 1600, h: 1200 },
  blockSteps: { src: I + 'block-steps.jpg', w: 1200, h: 1600 },
  cedarFence: { src: I + 'cedar-fence-pavers.jpg', w: 1200, h: 1600 },
  compositeFence: { src: I + 'composite-fence.jpg', w: 1200, h: 1600 },
  concreteForms: { src: I + 'concrete-forms.jpg', w: 1200, h: 1600 },
};

export const site = {
  name: 'Stonearm Landscaping',
  title: 'Stonearm Landscaping | Hardscaping, fencing & property care, Langley BC',
  description:
    'Pavers, Allan Block retaining walls, fencing, concrete, turf and planting for homes and businesses in Langley, BC. Plus mowing, power washing, junk removal and snow clearing year-round.',
  logo: I + 'logo.png',
  city: 'Langley',
  region: 'BC',
  areaServed: ['Langley, BC'],

  // Phone and email are not known yet. When you have them, fill these in
  // and they will appear in the quote section automatically.
  phone: '',      // e.g. '604-555-1234'
  email: '',      // e.g. 'info@stonearmlandscaping.ca'

  // Paste your Formspree URL here to make the form send (see README).
  formEndpoint: '',

  nav: [
    { label: 'Build', href: '#build' },
    { label: 'Property care', href: '#care' },
    { label: 'Our work', href: '#work' },
    { label: 'Contact', href: '#quote' },
  ],

  hero: {
    place: 'Langley, BC',
    badge: 'Verified by HomeStars · Offers warranty',
    title: 'Strength and precision,',
    titleAccent: 'built into every yard.',
    text: 'Pavers, Allan Block retaining walls, fencing, concrete, turf and planting for homes and businesses. Plus mowing, power washing, junk removal and snow clearing to keep it looking right all year.',
    img: photos.walkway,
    imgAlt: 'Paver walkway, new planting beds and lawn in front of a white home',
    // Colours of the six "paver stones" along the bottom of the hero photo
    stones: ['#8A6A4A', '#C9A97A', '#6B4426', '#A88760', '#5A3A22', '#C9A97A'],
  },

  strip: ['Residential & commercial', 'Design & installation', 'Honest pricing', 'Attention to detail', 'Year-round service'],

  build: {
    title: 'What we build.',
    text: 'From a small upgrade to a full outdoor transformation, residential or commercial, we design it and install it.',
    items: [
      { t: 'Pavers', img: photos.walkway, d: 'Walkways, patios and driveways laid on a properly prepared base, in the pattern and colour that suits your home.' },
      { t: 'Allan Block & retaining walls', img: photos.lawnWall, d: 'Engineered Allan Block systems and retaining walls that hold grade, define lawns and beds, and last.' },
      { t: 'Steps', img: photos.blockSteps, d: 'Block and concrete steps that tie patios, porches and yards together safely.' },
      { t: 'Fencing', img: photos.cedarFence, d: 'Cedar and composite privacy fencing, built straight and solid.' },
      { t: 'Concrete framing', img: photos.concreteForms, d: 'Formwork for stairs, walkways and slabs, set accurately before the pour.' },
      { t: 'Turf installation', img: photos.lawnWall, d: 'New lawns installed level and ready to enjoy.' },
      { t: 'Planting & full landscapes', img: photos.walkway, d: 'Complete landscape design and installation, from bed prep and planting to the finishing touches.' },
    ],
  },

  care: {
    title: 'Kept looking its best,',
    titleAccent: 'every season.',
    text: 'Ongoing care and cleanup services so your property stays safe, clean and well maintained year-round.',
    // tone: 'green' or 'brown' sets the colour of the small label
    items: [
      { g: 'Maintenance', tone: 'green', t: 'Lawn mowing' },
      { g: 'Maintenance', tone: 'green', t: 'Power raking' },
      { g: 'Maintenance', tone: 'green', t: 'Power washing' },
      { g: 'Cleanup', tone: 'brown', t: 'Junk removal' },
      { g: 'Cleanup', tone: 'brown', t: 'Property cleanups' },
      { g: 'Seasonal', tone: 'brown', t: 'Snow removal' },
    ],
  },

  // On desktop, photo 1 is big (2 x 2) and photo 3 is tall (2 rows).
  gallery: [
    { ...photos.walkway, t: 'Paver walkway, planting & lawn' },
    { ...photos.lawnWall, t: 'Block wall, pavers & new turf' },
    { ...photos.blockSteps, t: 'Block steps & patio' },
    { ...photos.cedarFence, t: 'Cedar fence & herringbone pavers' },
    { ...photos.compositeFence, t: 'Composite privacy fence' },
    { ...photos.concreteForms, t: 'Concrete framing for stairs & walkway' },
  ],

  promises: [
    { t: 'Attention to detail', d: 'Straight lines, tight joints and clean edges on every job.' },
    { t: 'Honest pricing', d: 'A clear quote before we start, with no surprises.' },
    { t: 'Warranty offered', d: 'We stand behind the work, verified by HomeStars.' },
  ],

  quote: {
    title: 'Tell us about your yard.',
    text: 'Send a few details and photos if you have them. We’ll come back with honest pricing and a plan.',
    base: 'Based in Langley, BC',
    baseNote: 'Residential & commercial · Verified by HomeStars · Offers warranty',
    chips: ['Pavers', 'Retaining wall', 'Fencing', 'Concrete', 'Turf', 'Planting', 'Maintenance', 'Junk / snow removal'],
    submitLabel: 'Request my free quote',
    thanks: 'Thanks. We’ll be in touch with your quote shortly.',
    error: 'Sorry, something went wrong sending your request. Please try again.',
  },

  footerLine: 'Langley, BC · Landscaping, hardscaping & property care',
  credit: { label: 'Website by Backpack Digital Media', href: 'https://backpackdigitalmedia.com' },
};
