import React, { useState } from 'react';
import trails from './trails'; // Import your trails data

const DogForm = () => {
  const [formData, setFormData] = useState({
    size: '',
    likesWater: '',
    childFriendly: '',
    city: ''
  });
  const [matchedTrail, setMatchedTrail] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matched = trails.find((trail) => {
      return (
        trail.size === formData.size &&
        trail.likesWater === formData.likesWater &&
        trail.childFriendly === formData.childFriendly && 
        trail.city === formData.city
      );
    });

    setMatchedTrail(matched);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Size of Dog:
          <select name="size" value={formData.size} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="big">Big</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
        </label>
        <br />

        <label>
          Likes Water:
          <input
            type="radio"
            name="likesWater"
            value="yes"
            checked={formData.likesWater === 'yes'}
            onChange={handleChange}
            required
          /> Yes
          <input
            type="radio"
            name="likesWater"
            value="no"
            checked={formData.likesWater === 'no'}
            onChange={handleChange}
            required
          /> No
        </label>
        <br />

        <label>
          Child Friendly:
          <input
            type="radio"
            name="childFriendly"
            value="yes"
            checked={formData.childFriendly === 'yes'}
            onChange={handleChange}
            required
          /> Yes
          <input
            type="radio"
            name="childFriendly"
            value="no"
            checked={formData.childFriendly === 'no'}
            onChange={handleChange}
            required
          /> No
        </label>
        <br />

        <label>
          City:
          <select name="city" value={formData.city} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="manchester">Manchester</option>
            <option value="liverpool">Liverpool</option>
            <option value="london">London</option>
          </select>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
      
      {matchedTrail ? (
        <div>
          <h3>Matched Trail:</h3>
          {matchedTrail.city ? (
            <div>
              <p>Recommended routes in {matchedTrail.city}</p>
              {matchedTrail.route1 && <p>Routes: {matchedTrail.route1}</p>}
              {matchedTrail.route2 && <p>Routes: {matchedTrail.route2}</p>}
              {matchedTrail.route3 && <p>Routes: {matchedTrail.route3}</p>}
            </div>
          ) : (
            <div>
              <h3>No matching trail found</h3>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default DogForm;
