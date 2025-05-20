import React, { useContext, useState } from 'react';
import { AuthContext } from "../ContextProvider/AuthProvider"; 
import { useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';

const CreateGroup = () => {
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate(); 

 
    const [groupName, setGroupName] = useState('');
    const [hobbyCategory, setHobbyCategory] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [maxMembers, setMaxMembers] = useState('');
    const [startDate, setStartDate] = useState('');
    const [imageURL, setImageURL] = useState('');

    // Form submission handler
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

        console.log(groupData); 
        fetch('http://localhost:3000/groups',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(groupData),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId)
            {
                // console.log("after adding coffee to db", data);
                Swal.fire({
            title: "Group Created Successfully!",
            icon: "success",
            draggable: true,
          });
          
            }
        })



        navigate('/my-groups');
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Create a New Hobby Group</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Group Name */}
                <div>
                    <label className="block text-lg font-medium" htmlFor="groupName">
                        Group Name
                    </label>
                    <input
                        type="text"
                        id="groupName"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        className="input input-bordered w-full"
                        required
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
                        value={maxMembers}
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
                        Create Group
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateGroup;
