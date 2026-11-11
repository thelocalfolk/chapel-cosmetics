// All editable business details live here. Change a value, push, and Vercel redeploys.

export const site = {
  name: 'Chapel Cosmetics',
  tagline: "We're here to help you feel confident in your own skin.",
  description:
    'Cosmetic nurse clinic on Chapel St, Prahran. Laser and IPL skin treatments with a personal, consistent experience every visit.',
  phone: '+61 430 037 293',
  phoneDisplay: '0430 037 293',
  email: '', // TODO: add clinic email
  address: { street: '217 Chapel St', suburb: 'Prahran', state: 'VIC', postcode: '3181' },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=217+Chapel+St+Prahran+VIC+3181',
  mapsEmbed: 'https://www.google.com/maps?q=217+Chapel+St+Prahran+VIC+3181&output=embed',
  // TODO: replace with the real booking and gift card links (Timely / Fresha / etc.)
  bookingUrl: '/book',
  bookingEmbedUrl: '',
  giftCardUrl: '',
  instagram: '', // TODO
};

export const hours: { day: string; time: string }[] = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '11am – 6pm' },
  { day: 'Wednesday', time: '11am – 7pm' },
  { day: 'Thursday', time: '11am – 9pm' },
  { day: 'Friday', time: '10am – 6pm' },
  { day: 'Saturday', time: '9am – 3pm' },
  { day: 'Sunday', time: 'Closed' },
];

export type Treatment = { name: string; concerns: string; single: string; course?: string };
export type TreatmentGroup = {
  slug: string;
  title: string;
  device: string;
  intro: string;
  courseLabel: string;
  items: Treatment[];
};

export const treatmentGroups: TreatmentGroup[] = [
  {
    slug: 'laser',
    title: 'Harmony XL Pro Laser',
    device: 'ClearSkin Pro',
    intro: 'Non-invasive laser treatment for active acne, texture and scarring, and to stimulate new collagen.',
    courseLabel: 'Course of 4–6',
    items: [
      { name: 'Active Acne', concerns: 'Acne vulgaris', single: '$300', course: '$1,100 – $1,700' },
      { name: 'Skin Rejuvenation', concerns: 'Wrinkles, fine lines, skin laxity, neocollagenesis', single: '$499', course: '$1,900 – $2,900' },
      { name: 'Scarring', concerns: 'Acne and surgical scars', single: '$400', course: '$1,500 – $2,300' },
    ],
  },
  {
    slug: 'ipl',
    title: 'IPL Treatments',
    device: 'DYE-VL',
    intro: 'Intense pulsed light for redness, capillaries and pigmentation.',
    courseLabel: 'Course of 3–6',
    items: [
      { name: 'Superficial Vascular & Pigment', concerns: 'Rosacea, capillaries and vessels, pigment, sun damage, certain birthmarks', single: '$359', course: '$1,000 – $2,100' },
      { name: 'Singular Spot Treatment', concerns: 'Burst capillary, localised pigment', single: '$200' },
    ],
  },
];

export const testimonials = [
  'I cannot recommend Claudia highly enough and will be returning (and referring family and friends) to Chapel Cosmetics as I know that I will receive an extremely high quality service with absolutely incredible results. Thank you Claudia for making what could have been a stressful experience a fantastically enjoyable one.',
  'I recently attended a return appointment with Claudia and was extremely impressed with her ability to maintain her usual practice whilst adhering to strict protocols.',
];
