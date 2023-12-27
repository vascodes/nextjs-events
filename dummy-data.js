const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2024-05-12',
    image: 'images/coding-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Music Production Workshop',
    description:
      "Wanna learn how to produce cool beats and become the next big star? Join us!",
    location: 'New Wall Street 5, 98765 New York',
    date: '2024-05-30',
    image: 'images/music-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Dance Party',
    description:
      'Get up on the floor, Dancing all night long, Get up on the floor, Dance till the break of dawn!',
    location: 'My Street 12, 10115 Broke City',
    date: '2024-04-10',
    image: 'images/dance-event.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
