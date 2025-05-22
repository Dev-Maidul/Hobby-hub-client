import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';
import Swal from 'sweetalert2';

const Update = () => {
  const { id } = useParams(); // Get the group id from the URL
  const { user } = useContext(AuthContext); // Get the logged-in user
  const navigate = useNavigate(); // Use navigate to redirect after update

  // States to hold the form values
  const [groupName, setGroupName] = useState('');
  const [hobbyCategory, setHobbyCategory] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [maxMembers, setMaxMembers] = useState('');
  const [startDate, setStartDate] = useState('');
  const [imageURL, setImageURL] = useState('');

  // Fetch group data when component mounts
  useEffect(() => {
    fetch(`https://hobby-hub-server-tau.vercel.app/groups/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setGroupName(data.groupName);
          setHobbyCategory(data.hobbyCategory);
          setDescription(data.description);
          setLocation(data.location);
          setMaxMembers(data.maxMembers);
          setStartDate(data.startDate);
          setImageURL(data.imageURL);
        }
      })
      .catch((err) => console.error('Error fetching group data:', err));
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const groupData = {
      groupName,
      hobbyCategory,
      description,
      location,
      maxMembers,
      startDate,
      imageURL,
      userName: user?.displayName,
      userEmail: user?.email,
    };

    // Send updated data to the server using PUT method
    fetch(`https://hobby-hub-server-tau.vercel.app/groups/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(groupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Group updated successfully!',
            icon: 'success',
            draggable: true,
          });
          navigate('/my-groups'); // Redirect to My Groups page after success
        }
      })
      .catch((err) => {
        console.error('Error updating group:', err);
        Swal.fire({
          title: 'Error!',
          text: 'There was an issue updating the group.',
          icon: 'error',
        });
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Update Your Hobby Group</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Group Name */}
        <div>
          <label className="block text-lg font-medium" htmlFor="groupName">
            Group Name
          </label>
          <input
            type="text"
            id="groupName"
            defaultValue={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="input input-bordered w-full"
            required
            readOnly
          />
        </div>

        {/* Hobby Category */}
        <div>
          <label className="block text-lg font-medium" htmlFor="hobbyCategory">
            Hobby Category
          </label>
          <select
            id="hobbyCategory"
            value={hobbyCategory}
            onChange={(e) => setHobbyCategory(e.target.value)}
            className="input input-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            <option value="Drawing & Painting">Drawing & Painting</option>
            <option value="Photography">Photography</option>
            <option value="Video Gaming">Video Gaming</option>
            <option value="Fishing">Fishing</option>
            <option value="Running">Running</option>
            <option value="Cooking">Cooking</option>
            <option value="Reading">Reading</option>
            <option value="Writing">Writing</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          />
        </div>

        {/* Meeting Location */}
        <div>
          <label className="block text-lg font-medium" htmlFor="location">
            Meeting Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Max Members */}
        <div>
          <label className="block text-lg font-medium" htmlFor="maxMembers">
            Max Members
          </label>
          <input
            type="number"
            id="maxMembers"
            defaultValue={maxMembers}
            onChange={(e) => setMaxMembers(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-lg font-medium" htmlFor="startDate">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-lg font-medium" htmlFor="imageURL">
            Image URL
          </label>
          <input
            type="url"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* User Name (Read-only) */}
        <div>
          <label className="block text-lg font-medium" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            value={user?.displayName || ''}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* User Email (Read-only) */}
        <div>
          <label className="block text-lg font-medium" htmlFor="userEmail">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            value={user?.email || ''}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="btn btn-primary w-full">
            Update Group
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
