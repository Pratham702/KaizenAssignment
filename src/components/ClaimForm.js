import React, { useState } from 'react';
import './ClaimForm.css';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  dob: '',
  jobTitle: '',
  diagnosisDate: '',
  diagnosisType: '',
  story: '',
  agree: false,
  verify: false,
};

const ClaimForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'Required';
    if (!form.lastName) newErrors.lastName = 'Required';
    if (!form.phone) newErrors.phone = 'Required';
    if (!form.email) newErrors.email = 'Required';
    if (!form.dob) newErrors.dob = 'Required';
    if (!form.jobTitle) newErrors.jobTitle = 'Required';
    if (!form.diagnosisDate) newErrors.diagnosisDate = 'Required';
    if (!form.diagnosisType) newErrors.diagnosisType = 'Required';
    if (!form.agree) newErrors.agree = 'Required';
    if (!form.verify) newErrors.verify = 'Required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <div className="form-success">Thank you! Your claim has been submitted.</div>;
  }

  return (
    <form className="claim-form" onSubmit={handleSubmit} noValidate>
      <h2>Claim Form</h2>
      <div className="form-row">
        <div className="form-group">
          <label>First Name *</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Phone Number *</label>
          <input name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label>Email ID *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Date of birth *</label>
          <input name="dob" type="date" value={form.dob} onChange={handleChange} />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>
        <div className="form-group">
          <label>Job Title*</label>
          <input name="jobTitle" value={form.jobTitle} onChange={handleChange} />
          {errors.jobTitle && <span className="error">{errors.jobTitle}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Date of Diagnosis*</label>
          <input name="diagnosisDate" type="date" value={form.diagnosisDate} onChange={handleChange} />
          {errors.diagnosisDate && <span className="error">{errors.diagnosisDate}</span>}
        </div>
        <div className="form-group">
          <label>Type of Diagnosis*</label>
          <select name="diagnosisType" value={form.diagnosisType} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Pleural">Pleural</option>
            <option value="Peritoneal">Peritoneal</option>
            <option value="Pericardial">Pericardial</option>
            <option value="Other">Other</option>
          </select>
          {errors.diagnosisType && <span className="error">{errors.diagnosisType}</span>}
        </div>
      </div>
      <div className="form-group full-width">
        <label>Tell us your story (optional)</label>
        <textarea name="story" value={form.story} onChange={handleChange} rows={3} />
      </div>
      <div className="form-group checkbox-group">
        <label>
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
          I agree to the <a href="#">privacy policy</a> and <a href="#">disclaimer</a> and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
        </label>
        {errors.agree && <span className="error">{errors.agree}</span>}
      </div>
      <div className="form-group checkbox-group">
        <label>
          <input type="checkbox" name="verify" checked={form.verify} onChange={handleChange} />
          Please check this box to verify you’re a person.
        </label>
        {errors.verify && <span className="error">{errors.verify}</span>}
      </div>
      <button className="submit-btn" type="submit">Start your claim now</button>
    </form>
  );
};

export default ClaimForm; 