// Form to REPORT a found item and add it to the database
import React from "react";
import { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_FOUND_ITEM } from "../utils/mutations";

const FoundItemForm = () => {
    const [category, setCategory] = useState('');
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [dateFound, setDateFound] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    const [addFoundItem, { loading, error, data }] = useMutation(ADD_FOUND_ITEM);

    const handleFoundItemSubmit = async (event) => {
        event.preventDefault();

        try {
            const result = await addFoundItem({
                variables: {
                    category,
                    itemName,
                    description,
                    location,
                    dateFound,
                    contactName,
                    contactEmail
                },
            });

            console.log("Found Item Form Submitted", result);

            // Clear form fields after submission
            setCategory('');
            setItemName('');
            setDescription('');
            setLocation('');
            setDateFound('');
            setContactName('');
            setContactEmail('');

        } catch (error) {
            console.error('There was an error submitting the found item form', error);
        }
    }

    return (
        <div>
            <h2>Report a Found Item</h2>
            <form className="report-form" onSubmit={handleFoundItemSubmit}>
                <label className="report-label">
                    Category:
                    <input
                        className="report-input"
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label className="report-label">
                    Item Name:
                    <input
                        className="report-input"
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label className="report-label">
                    Description:
                    <input
                        className="report-input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label className="report-label">
                    Location:
                    <input
                        className="report-input"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label className="report-label">
                    Date Found:
                    <input
                        className="report-input"
                        type="date"
                        value={dateFound}
                        onChange={(e) => setDateFound(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label className="report-label">
                    Contact Name:
                    <input
                        className="report-input"
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label>
                    Contact Email:
                    <input
                        className="report-input"
                        type="text"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        required
                    />
                </label>
                <br />

                <button className="report-button" type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Report'}
                </button>

                {error && <p>Error: {error.message}</p>}

                {/* Access data if needed */}
                {data && (
                    <div>
                        <h3>Submission Successful</h3>
                        {/* Display any relevant data from the mutation response */}
                    </div>
                )}
            </form>
        </div>
    );
}

export default FoundItemForm;