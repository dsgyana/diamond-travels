const images = {
  airport: '/images/airport-transfer-sedan-01.webp',
  innova: '/images/innova-family-travel-01.webp',
  outstation: '/images/outstation-journey-innova-01.webp',
  audi: '/images/premium-gallery-audi-arrival-01.webp',
  wedding: 'https://images.pexels.com/photos/14745476/pexels-photo-14745476.jpeg?auto=compress&cs=tinysrgb&w=1400',
  highway: 'https://images.pexels.com/photos/37955325/pexels-photo-37955325.jpeg?auto=compress&cs=tinysrgb&w=1200',
  weddingSquare: 'https://images.pexels.com/photos/2566639/pexels-photo-2566639.jpeg?auto=compress&cs=tinysrgb&w=800',
  airportSquare: 'https://images.pexels.com/photos/11839157/pexels-photo-11839157.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const galleryItems = [
  { src: images.wedding, alt: 'Decorated wedding car at a warm Indian wedding venue', label: 'Weddings', category: 'Weddings', size: 'tall' },
  { src: images.audi, alt: 'Premium Audi arrival', label: 'Premium', category: 'Premium', size: 'wide' },
  { src: images.weddingSquare, alt: 'Indian wedding ceremony flowers and decoration', label: 'Occasions', category: 'Weddings', size: 'square' },
  { src: images.innova, alt: 'Family travel vehicle on an outstation journey', label: 'Family travel', category: 'Family', size: 'square' },
  { src: images.highway, alt: 'Highway road trip at sunset in India', label: 'Journeys', category: 'Journeys', size: 'wide' },
  { src: images.airportSquare, alt: 'Airport terminal with travel context', label: 'Airport', category: 'Airport', size: 'tall' },
];

const galleryDetail = [
  { src: images.wedding, alt: 'Decorated wedding car at a warm Indian wedding venue', label: 'Wedding arrival', category: 'Weddings', caption: 'A decorated groom car, ready for the big moment.' },
  { src: images.audi, alt: 'Premium Audi arrival at a venue', label: 'Premium Audi', category: 'Premium', caption: 'When the arrival matters as much as the occasion.' },
  { src: 'https://images.pexels.com/photos/38381766/pexels-photo-38381766.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Groom posing with decorated car at a colorful wedding', label: 'Groom car', category: 'Weddings', caption: 'The groom arrives in style — every detail looked after.' },
  { src: 'https://images.pexels.com/photos/32878565/pexels-photo-32878565.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'White Audi with floral decoration parked before a wedding', label: 'Wedding Audi', category: 'Weddings', caption: 'Floral decoration on a premium wedding car.' },
  { src: images.innova, alt: 'Innova on a family outstation journey', label: 'Family journey', category: 'Family', caption: 'Room for everyone and everything — the family favourite.' },
  { src: images.highway, alt: 'Highway road trip at sunset in Odisha', label: 'Highway sunset', category: 'Journeys', caption: 'The open road across Odisha at golden hour.' },
  { src: 'https://images.pexels.com/photos/37955325/pexels-photo-37955325.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Car driving on a highway at sunset near Sambalpur India', label: 'Road trip', category: 'Journeys', caption: 'Long drives, comfortable rides and patient drivers.' },
  { src: 'https://images.pexels.com/photos/13777170/pexels-photo-13777170.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Bride and groom smiling from a car during their wedding', label: 'Just married', category: 'Weddings', caption: 'A happy send-off, arranged with care.' },
  { src: images.airport, alt: 'Clean sedan ready for an airport transfer', label: 'Airport transfer', category: 'Airport', caption: 'On time, every time — even at 4am.' },
  { src: 'https://images.pexels.com/photos/11945283/pexels-photo-11945283.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Modern silver sedan parked in sunlight', label: 'Sedan', category: 'Premium', caption: 'A polished sedan for everyday and special occasions.' },
  { src: 'https://images.pexels.com/photos/6040053/pexels-photo-6040053.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'View through windshield of a scenic road through forest', label: 'Scenic drive', category: 'Journeys', caption: 'The view from the passenger seat on a quiet highway.' },
  { src: 'https://images.pexels.com/photos/8425052/pexels-photo-8425052.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Business professional arriving in a luxury car', label: 'Premium arrival', category: 'Premium', caption: 'Business travel with a touch more comfort.' },
  { src: images.outstation, alt: 'Innova on an outstation journey across Odisha', label: 'Outstation trip', category: 'Family', caption: 'Built for longer roads and bigger groups.' },
  { src: 'https://images.pexels.com/photos/3223423/pexels-photo-3223423.png?auto=compress&cs=tinysrgb&w=800', alt: 'Traveller with luggage in a modern airport terminal', label: 'Airport pickup', category: 'Airport', caption: 'Luggage-friendly vehicles for stress-free airport runs.' },
  { src: 'https://images.pexels.com/photos/34007461/pexels-photo-34007461.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Car mirror reflecting a scenic sunset drive', label: 'Golden hour', category: 'Journeys', caption: 'Evening drives across Odisha, made comfortable.' },
  { src: 'https://images.pexels.com/photos/24334592/pexels-photo-24334592.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Vibrant Indian wedding procession with groom under colorful parasols', label: 'Wedding procession', category: 'Weddings', caption: 'Part of the day that matters — we handle the transport.' },
];

const testimonials = [
  { name: 'Sourav Mohanty', trip: 'Cuttack → Bhubaneswar Airport', quote: 'The driver was on time at 4am. Clean car, polite and knew the route well. Will use again.' },
  { name: 'Priya Pattnaik', trip: 'Wedding transport', quote: 'They arranged a decorated Verna for the groom and an Innova for the family. Everything felt looked after.' },
  { name: 'Rohit Das', trip: 'Cuttack → Puri (round trip)', quote: 'Comfortable ride, fair price and the driver waited patiently. Good experience overall.' },
];

const serviceCards = [
  { label: 'Local travel', title: 'Your day, made easier.', text: 'City rides, errands, appointments and full-day needs around Cuttack and Bhubaneswar.', image: images.airport, accent: 'sage' },
  { label: 'Airport transfers', title: 'On time for the important parts.', text: 'Planned pickups and drops to Bhubaneswar Airport, including early starts and late arrivals.', image: images.airport, accent: 'cream' },
  { label: 'Outstation journeys', title: 'Go further, comfortably.', text: 'One-way and round trips across Odisha with a car that fits your people and luggage.', image: images.outstation, accent: 'stone' },
  { label: 'Wedding travel', title: 'Arrive beautifully.', text: 'Groom cars, decorated sedans and thoughtful family transport for the day that matters.', image: images.wedding, accent: 'blush' },
];

const fleet = [
  { name: 'Small Car', model: 'WagonR or similar', note: 'Easy everyday travel', seats: '4 seats', image: images.airport, tone: 'Practical, clean and easy to arrange for city movement.' },
  { name: 'Sedan', model: 'Hyundai Verna / Honda City', note: 'Comfort for every occasion', seats: '4 seats · 2 bags', image: images.airport, tone: 'A polished choice for airport rides, families and special days.' },
  { name: 'Innova / SUV', model: 'Innova or similar', note: 'Space for family journeys', seats: '6–7 seats · luggage', image: images.innova, tone: 'More room for people, bags and longer roads across Odisha.' },
  { name: 'Premium Car', model: 'Audi', note: 'Make an entrance', seats: '4 seats', image: images.audi, tone: 'A considered choice for weddings, arrivals and premium occasions.' },
  { name: 'Tempo Traveller', model: 'Group travel', note: 'Bring everyone along', seats: '9–17 seats', image: images.outstation, tone: 'Comfortable group movement for picnics, family trips and events.' },
];

const fleetDetail = [
  {
    name: 'Small Car',
    model: 'WagonR or similar',
    note: 'Easy everyday travel',
    seats: '4 seats',
    bags: '2 bags',
    image: images.airport,
    accent: 'sage',
    tagline: 'Practical and easy',
    description: 'Clean, air-conditioned and easy to arrange. The everyday choice for city movement — errands, appointments and short rides around Cuttack and Bhubaneswar.',
    specs: [
      { label: 'Seats', value: '4 passengers' },
      { label: 'Luggage', value: '2 bags' },
      { label: 'AC', value: 'Yes' },
      { label: 'Best for', value: 'City rides' },
    ],
    idealFor: ['City errands', 'Doctor visits', 'Short pickups and drops', 'Solo or small family travel'],
    priceFrom: '₹300',
    priceUnit: 'for local packages',
  },
  {
    name: 'Sedan',
    model: 'Hyundai Verna / Honda City',
    note: 'Comfort for every occasion',
    seats: '4 seats · 2 bags',
    bags: '2 bags',
    image: images.airport,
    accent: 'cream',
    tagline: 'Polished and versatile',
    description: 'A comfortable sedan for airport transfers, family travel and everyday occasions where you want a bit more comfort. Clean interiors and a smooth ride.',
    specs: [
      { label: 'Seats', value: '4 passengers' },
      { label: 'Luggage', value: '2 bags' },
      { label: 'AC', value: 'Yes' },
      { label: 'Best for', value: 'Airport & family' },
    ],
    idealFor: ['Airport transfers', 'Family travel', 'Business trips', 'City and outstation'],
    priceFrom: '₹1,200',
    priceUnit: 'Cuttack to Airport',
  },
  {
    name: 'Innova / SUV',
    model: 'Innova or similar',
    note: 'Space for family journeys',
    seats: '6–7 seats · luggage',
    bags: '4+ bags',
    image: images.innova,
    accent: 'stone',
    tagline: 'Room for everyone',
    description: 'More space for people, bags and longer roads. The Innova is the most popular choice for family trips across Odisha — comfortable, reliable and built for highway travel.',
    specs: [
      { label: 'Seats', value: '6–7 passengers' },
      { label: 'Luggage', value: '4+ bags' },
      { label: 'AC', value: 'Yes' },
      { label: 'Best for', value: 'Outstation & family' },
    ],
    idealFor: ['Family trips to Puri, Konark', 'Outstation journeys', 'Airport with luggage', 'Pilgrimage visits'],
    priceFrom: '₹1,800',
    priceUnit: 'outstation trips',
  },
  {
    name: 'Premium Car',
    model: 'Audi',
    note: 'Make an entrance',
    seats: '4 seats',
    bags: '2 bags',
    image: images.audi,
    accent: 'blush',
    tagline: 'Considered and refined',
    description: 'A premium vehicle for weddings, special arrivals and occasions where the car matters as much as the journey. Audi and similar luxury options available.',
    specs: [
      { label: 'Seats', value: '4 passengers' },
      { label: 'Luggage', value: '2 bags' },
      { label: 'AC', value: 'Yes' },
      { label: 'Best for', value: 'Weddings & premium' },
    ],
    idealFor: ['Wedding groom cars', 'Premium arrivals', 'VIP pickups', 'Special occasions'],
    priceFrom: 'Custom',
    priceUnit: 'ask for a quote',
  },
  {
    name: 'Tempo Traveller',
    model: 'Group travel',
    note: 'Bring everyone along',
    seats: '9–17 seats',
    bags: 'Roof carrier',
    image: images.outstation,
    accent: 'sage',
    tagline: 'Group comfort',
    description: 'Spacious Tempo Travellers for families, friends and groups. Comfortable seating, room for everyone and luggage — built for group picnics, tours and events.',
    specs: [
      { label: 'Seats', value: '9–17 passengers' },
      { label: 'Luggage', value: 'Roof carrier' },
      { label: 'AC', value: 'Yes' },
      { label: 'Best for', value: 'Groups & events' },
    ],
    idealFor: ['Family picnics', 'Group tours', 'Corporate outings', 'Wedding guest transport'],
    priceFrom: 'Custom',
    priceUnit: 'depends on group size',
  },
];

const routes = [
  ['Cuttack', 'Bhubaneswar Airport', 'From ₹1,200'],
  ['Cuttack', 'Bhubaneswar', 'From ₹900'],
  ['Cuttack', 'Puri', 'From ₹1,800'],
  ['Cuttack', 'Konark', 'From ₹2,200'],
];

const routeDetail = [
  { from: 'Cuttack', to: 'Bhubaneswar Airport', category: 'Airport', distance: '30 km', time: '~45 min', price: '₹1,200', note: 'Fixed price including tolls. Early morning and late night available.', cars: ['Sedan', 'Innova'] },
  { from: 'Cuttack', to: 'Bhubaneswar', category: 'City', distance: '25 km', time: '~40 min', price: '₹900', note: 'City to city travel. Hourly and full-day options also available.', cars: ['Small Car', 'Sedan'] },
  { from: 'Cuttack', to: 'Puri', category: 'Outstation', distance: '85 km', time: '~2 hr', price: '₹1,800', note: 'Popular pilgrimage route. Round trips available with driver waiting time.', cars: ['Sedan', 'Innova'] },
  { from: 'Cuttack', to: 'Konark', category: 'Outstation', distance: '65 km', time: '~1.5 hr', price: '₹2,200', note: 'Visit the Sun Temple. Combine with Puri for a full-day trip.', cars: ['Sedan', 'Innova'] },
  { from: 'Cuttack', to: 'Paradeep', category: 'Outstation', distance: '85 km', time: '~2 hr', price: '₹2,500', note: 'Port city route. Good for business and family visits.', cars: ['Sedan', 'Innova'] },
  { from: 'Cuttack', to: 'Dhenkanal', category: 'Outstation', distance: '60 km', time: '~1.5 hr', price: '₹1,800', note: 'Quick highway run. One-way or round trip.', cars: ['Small Car', 'Sedan'] },
  { from: 'Cuttack', to: 'Bhubaneswar Airport', category: 'Airport', distance: '30 km', time: '~45 min', price: '₹1,500', note: 'Innova for families with luggage. Fixed price including tolls.', cars: ['Innova'] },
  { from: 'Cuttack', to: 'Jajpur', category: 'Outstation', distance: '70 km', time: '~1.5 hr', price: '₹2,000', note: 'Industrial and pilgrimage route. Sedan or SUV available.', cars: ['Sedan', 'Innova'] },
  { from: 'Bhubaneswar', to: 'Puri', category: 'Outstation', distance: '60 km', time: '~1.5 hr', price: '₹1,800', note: 'Direct from Bhubaneswar. Pickups from airport or city available.', cars: ['Sedan', 'Innova'] },
  { from: 'Cuttack', to: 'Nandankanan', category: 'Local', distance: '20 km', time: '~35 min', price: '₹700', note: 'Zoo and botanical garden visits. Half-day packages available.', cars: ['Small Car', 'Sedan'] },
  { from: 'Cuttack', to: 'Chilika Lake', category: 'Outstation', distance: '100 km', time: '~2.5 hr', price: '₹3,000', note: 'Day trip to Chilika. Combine with Satapada for dolphin spotting.', cars: ['Sedan', 'Innova'] },
  { from: 'Cuttack', to: 'Lalitgiri', category: 'Outstation', distance: '55 km', time: '~1.5 hr', price: '₹1,800', note: 'Buddhist heritage site. Peaceful day trip from Cuttack.', cars: ['Sedan', 'Innova'] },
];

const servicesDetail = [
  {
    label: 'Local travel',
    title: 'Your day, made easier.',
    image: images.airport,
    accent: 'sage',
    intro: 'City rides, errands, appointments and full-day needs around Cuttack and Bhubaneswar.',
    points: ['Hourly or full-day booking', 'City rides and errands', 'Doctor visits and appointments', 'Pickup and drop within Cuttack or Bhubaneswar', 'Clean, air-conditioned cars'],
    ideal: 'Everyday travel where you need a dependable car and a driver who knows the city.',
    priceNote: 'Starting from ₹300 for local packages',
  },
  {
    label: 'Airport transfers',
    title: 'On time for the important parts.',
    image: images.airport,
    accent: 'cream',
    intro: 'Planned pickups and drops to Bhubaneswar Airport, including early starts and late arrivals.',
    points: ['Early morning and late night pickups', 'Flight delay awareness', 'Luggage-friendly vehicles', 'Comfortable sedan or SUV options', 'Fixed route pricing'],
    ideal: 'Business travellers, families and anyone who needs to reach the airport without stress.',
    priceNote: 'Cuttack to Bhubaneswar Airport from ₹1,200',
  },
  {
    label: 'Outstation journeys',
    title: 'Go further, comfortably.',
    image: images.outstation,
    accent: 'stone',
    intro: 'One-way and round trips across Odisha with a car that fits your people and luggage.',
    points: ['One-way or round trip options', 'Popular routes: Puri, Konark, Paradeep', 'Innova and SUV for family comfort', 'Experienced highway drivers', 'Flexible stops along the way'],
    ideal: 'Family trips, pilgrimage visits, weekend getaways and intercity travel across Odisha.',
    priceNote: 'Outstation trips starting from ₹1,800 depending on distance and vehicle',
  },
  {
    label: 'Wedding travel',
    title: 'Arrive beautifully.',
    image: images.wedding,
    accent: 'blush',
    intro: 'Groom cars, decorated sedans and thoughtful family transport for the day that matters.',
    points: ['Decorated groom cars', 'Premium Verna and Audi options', 'Family vehicles for guests', 'Multi-car wedding arrangements', 'Coordinated timing and routes'],
    ideal: 'Weddings, receptions and family occasions where arrival matters.',
    priceNote: 'Wedding packages tailored to your day — ask for a custom quote',
  },
  {
    label: 'Group travel',
    title: 'Bring everyone along.',
    image: images.outstation,
    accent: 'sage',
    intro: 'Spacious Tempo Travellers and larger vehicles for families, friends and groups.',
    points: ['Tempo Traveller for 9–17 seats', 'Family picnics and group outings', 'Corporate and event transport', 'Luggage space for everyone', 'Comfortable seating for long journeys'],
    ideal: 'Family picnics, group tours, corporate outings and any trip with more than 7 people.',
    priceNote: 'Group travel pricing depends on distance, duration and vehicle size',
  },
];

const contactInfo = {
  phone: '+91 79786 76742',
  phoneDisplay: '+91 79786 76742',
  phoneTel: '+917978676742',
  whatsapp: '+91 79786 76742',
  whatsappNumber: '917978676742',
  whatsappDefaultMsg: 'Hello Diamond Travels, I would like to enquire about booking a cab.',
  email: 'contact@diamondtravels.in',
  address: 'Cuttack & Bhubaneswar, Odisha',
  timing: '24/7 Available',
};

export { images, galleryItems, galleryDetail, testimonials, serviceCards, fleet, fleetDetail, routes, routeDetail, servicesDetail, contactInfo };

