import React from 'react';
import './EventCard.css';

const EventCard = ({ event, isRegistered, onRegister }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="event-card card">
      <div className="event-image">
        <span className="event-emoji">{event.imageEmoji}</span>
        <span className="event-category-badge">{event.category}</span>
      </div>
      
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
        
        <div className="event-details">
          <div className="event-detail-item">
            <span className="detail-icon">📅</span>
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="event-detail-item">
            <span className="detail-icon">🕐</span>
            <span>{event.time}</span>
          </div>
          <div className="event-detail-item">
            <span className="detail-icon">📍</span>
            <span>{event.location}</span>
          </div>
          <div className="event-detail-item">
            <span className="detail-icon">👥</span>
            <span>{event.attendees} attendees</span>
          </div>
        </div>

        <div className="event-footer">
          <div className="event-price">
            <span className="price-label">Price:</span>
            <span className="price-value">${event.price}</span>
          </div>
          <button
            className={`btn ${isRegistered ? 'btn-danger' : 'btn-primary'}`}
            onClick={() => onRegister(event.id)}
          >
            {isRegistered ? 'Cancel' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
