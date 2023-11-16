// Form to SEARCH for a lost item
import React from "react";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_LOST_ITEMS } from "../utils/queries";

const LostItemSearch = () => {
    // This will hold the search parameters that will be used in the GET_LOST_ITEMS query.
    const [category, setCategory] = useState('');
    const [itemName, setItemName] = useState('');
    const [location, setLocation] = useState('');
    const [dateLost, setDateLost] = useState('');

    const [searchLostItems, { loading, error, data }] = useLazyQuery(GET_LOST_ITEMS);

    const handleSearch = () => {
        searchLostItems({
            variables: {
                category,
                itemName,
                location,
                dateLost,
            },
        });
    };

    return (
        <div className="search-form">
            <h2>Search for a Lost Item</h2>
            <label className="search-label">
                Category:
                <input
                    className="search-input"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </label>
            <br />
            <label className="search-label">
                Item Name:
                <input
                    className="search-input"
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
            </label>
            <br />
            <label className="search-label">
                Location:
                <input
                    className="search-input"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </label>
            <br />
            <label className="search-label">
                Date Lost:
                <input
                    className="search-input"
                    type="date"
                    value={dateLost}
                    onChange={(e) => setDateLost(e.target.value)}
                />
            </label>
            <br />
            <button className="search-button" onClick={handleSearch}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {data && (
                <div>
                    <h3>Search Results:</h3>
                    <ul>
                        {data.lostItems.map(item => (
                            <li key={item.id}>
                                {item.name} - {item.description} - {item.location} - {item.dateLost}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default LostItemSearch;