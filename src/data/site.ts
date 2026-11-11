// All editable business details live here. Change a value, push, and Vercel redeploys.

export const site = {
  name: 'Chapel Cosmetics',
  tagline: "We're here to help you feel confident in your own skin.",
  description:
    'Nurse-led cosmetic medicine on Chapel St, Prahran, focused on healthy, natural-looking skin quality and a personal, consistent experience every visit.',
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
  { day: 'Monday', time: '11am – 6pm' },
  { day: 'Tuesday', time: '11am – 6pm' },
  { day: 'Wednesday', time: '11am – 7pm' },
  { day: 'Thursday', time: '11am – 9pm' },
  { day: 'Friday', time: '10am – 6pm' },
  { day: 'Saturday', time: '9am – 3pm' },
  { day: 'Sunday', time: 'Closed' },
];

// Keep this list concern-led. The TGA doesn't allow advertising prescription cosmetic
// medicines, so never name products, brands or injectables, and don't list prices here.
export type FocusArea = { slug: string; title: string; label: string; summary: string; text: string };

export const focusAreas: FocusArea[] = [
  {
    slug: 'fine-lines-wrinkles',
    title: 'Fine lines & wrinkles',
    label: 'Fine lines',
    summary: 'Soft, natural-looking results',
    text: 'Softening the look of fine lines and wrinkles for a refreshed, rested appearance that still looks like you. Treatment options are discussed in consultation.',
  },
  {
    slug: 'skin-needling',
    title: 'Skin needling',
    label: 'Skin needling',
    summary: 'Texture, tone and renewal',
    text: "Also known as collagen induction therapy. Fine micro-needles stimulate the skin's natural renewal to improve texture, scarring, fine lines and overall skin quality.",
  },
  {
    slug: 'prp-prf',
    title: 'PRP / PRF',
    label: 'PRP / PRF',
    summary: 'Your own regenerative boost',
    text: "Uses platelet-rich plasma or fibrin taken from your own blood to support the skin's natural regeneration. Often paired with skin needling for a skin quality boost.",
  },
  {
    slug: 'skin-boosters',
    title: 'Skin boosters',
    label: 'Skin boosters',
    summary: 'Hydration and glow',
    text: 'Treatments focused on deep hydration and overall skin quality, for skin that looks plumper, smoother and more radiant. Options are discussed in consultation.',
  },
  {
    slug: 'volume-loss',
    title: 'Volume loss',
    label: 'Volume loss',
    summary: 'Balanced, natural restoration',
    text: 'Addressing the natural changes in facial volume that come with time, with a focus on balance, harmony and subtle, natural-looking results. Options are discussed in consultation.',
  },
];

export type TeamMember = { name: string; role: string; bio: string[]; photo?: string };

export const team: TeamMember[] = [
  {
    name: 'Claudia',
    role: 'Cosmetic nurse & founder',
    bio: [
      'Claudia is an incredibly professional cosmetic nurse with an innate ability to make her clients feel safe and relaxed throughout their treatment.',
      "Her knowledge of the science behind her products, and her ability to explain it in plain language, means every client is well informed about their treatment. Alongside her professionalism and extensive product knowledge, Claudia makes each client's experience unique and enjoyable, while achieving their desired result.",
    ],
  },
  {
    name: 'Ellie',
    role: 'Cosmetic injector',
    // TODO: replace with Ellie's real bio and qualifications
    bio: [
      "Ellie is a cosmetic injector who shares Chapel Cosmetics' focus on natural, balanced results and genuine, personal care.",
      'She takes the time to understand each client and their goals, so every treatment plan feels considered, comfortable and tailored to you.',
    ],
  },
];

export const testimonials = [
  'I cannot recommend Claudia highly enough and will be returning (and referring family and friends) to Chapel Cosmetics as I know that I will receive an extremely high quality service with absolutely incredible results. Thank you Claudia for making what could have been a stressful experience a fantastically enjoyable one.',
  'I recently attended a return appointment with Claudia and was extremely impressed with her ability to maintain her usual practice whilst adhering to strict protocols.',
];
