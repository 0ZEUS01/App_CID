import React, { useState, useEffect } from 'react';

const ProfileForm = ({ user, onUpdate, onDelete }) => {
    const [formData, setFormData] = useState(user);

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="prenom" className="form-label">First Name</label>
                <input type="text" className="form-control" id="prenom" name="prenom" value={formData.prenom || ''} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="nom" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="nom" name="nom" value={formData.nom || ''} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email || ''} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="num_telephone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="num_telephone" name="num_telephone" value={formData.num_telephone || ''} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" value={formData.username || ''} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="date_naissance" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="date_naissance" name="date_naissance" value={formData.date_naissance || ''} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="sexe" className="form-label">Gender</label>
                <select className="form-control" id="sexe" name="sexe" value={formData.sexe || ''} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="adresse" className="form-label">Address</label>
                <input type="text" className="form-control" id="adresse" name="adresse" value={formData.adresse || ''} onChange={handleChange} required />
            </div>
            {/* Add more fields for pole, division, roles, and pays if needed */}
            <button type="submit" className="btn btn-primary me-2">Update Profile</button>
            <button type="button" className="btn btn-danger" onClick={onDelete}>Delete Account</button>
        </form>
    );
};

export default ProfileForm;
