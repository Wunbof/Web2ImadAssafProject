import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import './Events.css';

const Events = () => {
  const [events] = useState([
    {
      id: 1,
      title: 'Tech Conference 2025',
      date: '2025-12-15',
      time: '09:00 AM',
      location: 'San Francisco, CA',
      category: 'Conference',
      attendees: 250,
      price: 199,
      description: 'Join industry leaders for the biggest tech conference of the year.',
      imageEmoji: '💻'
    },
    {
      id: 2,
      title: 'Digital Marketing Workshop',
      date: '2025-12-20',
      time: '02:00 PM',
      location: 'New York, NY',
      category: 'Workshop',
      attendees: 50,
      price: 79,
      description: 'Learn the latest digital marketing strategies from experts.',
      imageEmoji: '📱'
    },
    {
      id: 3,
      title: 'Music Festival 2025',
      date: '2025-12-28',
      time: '06:00 PM',
      location: 'Los Angeles, CA',
      category: 'Festival',
      attendees: 5000,
      price: 150,
      description: 'Experience live performances from top artists.',
      imageEmoji: '🎵'
    },
    {
      id: 4,
      title: 'Startup Pitch Night',
      date: '2025-12-10',
      time: '07:00 PM',
      location: 'Austin, TX',
      category: 'Networking',
      attendees: 100,
      price: 25,
      description: 'Watch innovative startups pitch their ideas to investors.',
      imageEmoji: '🚀'
    },
    {
      id: 5,
      title: 'Photography Masterclass',
      date: '2025-12-18',
      time: '10:00 AM',
      location: 'Seattle, WA',
      category: 'Workshop',
      attendees: 30,
      price: 120,
      description: 'Master photography techniques with professional photographers.',
      imageEmoji: '📷'
    },
    {
      id: 6,
      title: 'Food & Wine Expo',
      date: '2025-12-22',
      time: '12:00 PM',
      location: 'Chicago, IL',
      category: 'Festival',
      attendees: 800,
      price: 45,
      description: 'Taste exquisite foods and wines from around the world.',
      imageEmoji: '🍷'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const categories = ['All', 'Conference', 'Workshop', 'Festival', 'Networking'];

  const handleRegister = (eventId) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(registeredEvents.filter(id => id !== eventId));
      alert('Registration cancelled successfully!');
    } else {
      setRegisteredEvents([...registeredEvents, eventId]);
      alert('Registration successful!');
    }
  };

  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="events">
      <section className="events-hero">
        <div className="container">
          <h1>Discover Events</h1>
          <p>Find and register for amazing events near you</p>
        </div>
      </section>

      <section className="events-content">
        <div className="container">
          <div className="events-filters">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search events by name or location..."
                className="form-control search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="events-stats">
            <p>Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}</p>
          </div>

          <div className="events-grid">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isRegistered={registeredEvents.includes(event.id)}
                  onRegister={handleRegister}
                />
              ))
            ) : (
              <div className="no-events">
                <p>No events found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
