import React, { useState } from 'react';
import './CreateEvent.css';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    category: 'Conference',
    price: '',
    attendees: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const categories = ['Conference', 'Workshop', 'Festival', 'Networking', 'Webinar', 'Social'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Event title is required';
    }

    if (!formData.date) {
      newErrors.date = 'Event date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Event time is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.price || formData.price < 0) {
      newErrors.price = 'Valid price is required';
    }

    if (!formData.attendees || formData.attendees < 1) {
      newErrors.attendees = 'Expected attendees must be at least 1';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Event description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Event created:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          title: '',
          date: '',
          time: '',
          location: '',
          category: 'Conference',
          price: '',
          attendees: '',
          description: ''
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleReset = () => {
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      category: 'Conference',
      price: '',
      attendees: '',
      description: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="create-event">
      <section className="create-event-hero">
        <div className="container">
          <h1>Create New Event</h1>
          <p>Fill in the details to create your event</p>
        </div>
      </section>

      <section className="create-event-content">
        <div className="container">
          {submitted && (
            <div className="success-message">
              <h3>🎉 Event Created Successfully!</h3>
              <p>Your event has been created and is now live.</p>
            </div>
          )}

          <form className="event-form card" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title">Event Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className={`form-control ${errors.title ? 'error' : ''}`}
                  placeholder="Enter event title"
                  value={formData.title}
                  onChange={handleChange}
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Event Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className={`form-control ${errors.date ? 'error' : ''}`}
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <span className="error-message">{errors.date}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="time">Event Time *</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className={`form-control ${errors.time ? 'error' : ''}`}
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && <span className="error-message">{errors.time}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                className={`form-control ${errors.location ? 'error' : ''}`}
                placeholder="Enter event location"
                value={formData.location}
                onChange={handleChange}
              />
              {errors.location && <span className="error-message">{errors.location}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Ticket Price ($) *</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className={`form-control ${errors.price ? 'error' : ''}`}
                  placeholder="0"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                />
                {errors.price && <span className="error-message">{errors.price}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="attendees">Expected Attendees *</label>
                <input
                  type="number"
                  id="attendees"
                  name="attendees"
                  className={`form-control ${errors.attendees ? 'error' : ''}`}
                  placeholder="0"
                  min="1"
                  value={formData.attendees}
                  onChange={handleChange}
                />
                {errors.attendees && <span className="error-message">{errors.attendees}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Event Description *</label>
              <textarea
                id="description"
                name="description"
                className={`form-control ${errors.description ? 'error' : ''}`}
                placeholder="Describe your event in detail..."
                rows="5"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Create Event</button>
              <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset Form</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateEvent;
