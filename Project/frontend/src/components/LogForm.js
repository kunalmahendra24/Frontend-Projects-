import React, { useState } from 'react';
import axios from 'axios';

const LogForm = ({ userId }) => {
  const [form, setForm] = useState({ mood: '', stress: 5, activities: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/logs/add', {
      ...form,
      userId
    });
    alert('Log submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="mood" placeholder="How do you feel?" onChange={handleChange} />
      <input type="number" name="stress" min="1" max="10" onChange={handleChange} />
      <textarea name="activities" placeholder="What did you do today?" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LogForm;
