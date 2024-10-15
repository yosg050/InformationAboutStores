import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "./categories.json";
import listOfStores from "./listOfStores.json";

const categories = data.categories;
const cities = data.city;

const SearchPage = ({ setSearchResults }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const navigate = useNavigate();


  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleCityChange = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const handleSearch = () => {
    const results = listOfStores.filter(
      (item) =>
        (selectedCities.length === 0 || selectedCities.includes(item.city)) &&
        (selectedCategories.length === 0 ||
          selectedCategories.some((cat) => item.category.includes(cat)))
    );
    setSearchResults(results);
    navigate("/results");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div>
        <h2
          style={{
            marginBottom: "10px",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          חיפוש
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          flex: 1,
          overflowY: "auto",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
            קטגוריות
          </div>
          <Form
            style={{
              maxHeight: "30vh",
              overflowY: "auto",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
              backgroundColor: "white",
            }}
          >
            {categories.map((category) => (
              <div key={`category-${category}`} className="mb-1">
                <Form.Check
                  type="checkbox"
                  id={`category-${category}`}
                  label={category}
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategories.includes(category)}
                />
              </div>
            ))}
          </Form>
        </div>

        <div>
          <div style={{ fontWeight: "bold", marginBottom: "5px" }}>עיר</div>
          <Form
            style={{
              maxHeight: "30vh",
              overflowY: "auto",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
              backgroundColor: "white",
            }}
          >
            {cities.map((city) => (
              <div key={`city-${city}`} className="mb-1">
                <Form.Check
                  type="checkbox"
                  id={`city-${city}`}
                  label={city}
                  onChange={() => handleCityChange(city)}
                  checked={selectedCities.includes(city)}
                />
              </div>
            ))}
          </Form>
        </div>
        <Button
          variant="secondary"
          onClick={handleSearch}
          style={{
            position: "fixed",
            bottom: "20px",
            width: "80%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          הצג
        </Button>
      </div>
    </div>
  );
};

export default SearchPage;
