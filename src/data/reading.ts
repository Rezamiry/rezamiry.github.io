export type BookStatus = 'reading' | 'read' | 'wishlist';

export interface Book {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
  genre?: string;
  yearRead?: string; // e.g. "2024" or "Oct 2026"
  rating?: number; // 1 to 5
  notes?: string; // Brief takeaway, summary, or why it's on the wishlist
  url?: string; // Goodreads, Amazon, or official publisher page
  cover?: string; // Path to cover image in /public or URL
}

export const books: Book[] = [
  // Currently Reading
  {
    id: 'staff-engineers-path',
    title: "The Staff Engineer's Path",
    author: 'Tanya Reilly',
    status: 'reading',
    genre: 'Engineering & Leadership',
    cover: '/books/staff-engineers-path.jpg',
    notes: 'A guide for senior individual contributors navigating growth, technical leadership, influence, and strategic project ownership.',
    url: 'https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/',
  },
  {
    id: 'never-split-the-difference',
    title: "Never Split the Difference",
    author: 'Chris Voss',
    status: 'reading',
    genre: 'Negotiation & Communication',
    cover: '/books/never-split-the-difference.jpg',
    notes: 'Field-tested negotiation principles from a former FBI hostage negotiator, emphasizing tactical empathy, calibrated questions, and active listening.',
    url: 'https://www.harpercollins.com/products/never-split-the-difference-chris-vosstahl-raz',
  },

  // Read
  {
    id: 'sapiens',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    status: 'read',
    genre: 'History & Anthropology',
    rating: 5,
    yearRead: '2024',
    cover: '/books/sapiens.jpg',
    notes: 'An insightful exploration of how biology and shared cultural fictions shaped human societies and our present world.',
    url: 'https://www.ynharari.com/book/sapiens/',
  },
  {
    id: 'lord-of-the-rings',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    status: 'read',
    genre: 'Classic Fiction',
    rating: 5,
    yearRead: '2023',
    cover: '/books/lord-of-the-rings.jpg',
    notes: 'The landmark fantasy epic exploring resilience, fellowship, sacrifice, and the enduring struggle against corruption.',
    url: 'https://en.wikipedia.org/wiki/The_Lord_of_the_Rings',
  },

  // Next / Wishlist
  {
    id: 'chip-war',
    title: "Chip War: The Fight for the World's Most Critical Technology",
    author: 'Chris Miller',
    status: 'wishlist',
    genre: 'Technology & Geopolitics',
    cover: '/books/chip-war.jpg',
    notes: 'The intricate geopolitics, economics, and history behind semiconductor design and fabrication.',
    url: 'https://www.simonandschuster.com/books/Chip-War/Chris-Miller/9781982172008',
  },
  {
    id: 'designing-data-intensive-applications',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'wishlist',
    genre: 'Distributed Systems',
    cover: '/books/designing-data-intensive-applications.jpg',
    notes: 'Deep principles of data storage, replication, partitioning, and distributed consensus.',
    url: 'https://dataintensive.net/',
  },
];

export const currentlyReading = books.filter((b) => b.status === 'reading');
export const readBooks = books.filter((b) => b.status === 'read');
export const wishlistBooks = books.filter((b) => b.status === 'wishlist');
