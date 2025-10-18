import React, { useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./DoctorSelection.module.css";


// Updated categories to be an array of objects with names and images
const categories = [
  { name: "Cardiologist", image: "https://www.creativehatti.com/wp-content/uploads/edd/2021/08/Heart-is-with-the-stethoscope-illustration-15-large.jpg" },
  { name: "Gynecologist", image: "https://cdn.vectorstock.com/i/750p/34/11/cute-funny-smiling-woman-doctor-gynecologist-vector-31693411.avif" },
  { name: "Gastrologist", image: "https://thumbs.dreamstime.com/b/cute-funny-smiling-doctor-healthy-happy-stomach-healthcare-medical-friends-concept-vector-flat-cartoon-character-icon-design-107253484.jpg" },
  { name: "Dermatologist", image: "https://img.freepik.com/free-vector/hand-drawn-dermatologist-cartoon-illustration_23-2151046521.jpg" },
  { name: "Neurologist", image: "https://png.pngtree.com/png-clipart/20250501/original/pngtree-neurologist-cartoon-illustration-png-image_20919084.png" },
  { name: "Pediatrician", image: "https://img.freepik.com/premium-vector/cute-cartoon-doctor-caring-baby-vector-illustration_1176913-52046.jpg" },
  { name: "Orthopedic", image: "https://media.istockphoto.com/id/1423372814/vector/traumatology-examines-and-bandages-childs-broken-leg-treatment-in-hospital.jpg?s=612x612&w=0&k=20&c=FZUUcVrwk5uWxqP0XmE0XsGrrfihhrjAC2-vaA9Y7F4=" },
  { name: "Psychiatrist", image: "https://t3.ftcdn.net/jpg/03/18/69/08/360_F_318690807_1ZPs49OLKMoCOfKVwX7bQxuqvemqp1Og.jpg" },
  { name: "Dentist", image: "https://www.shutterstock.com/image-vector/dentist-woman-holding-instruments-examining-600nw-1125740054.jpg" },
  { name: "Ophthalmologist", image: "https://www.shutterstock.com/image-vector/oculist-checks-vision-woman-doctor-600nw-2180041341.jpg" },
];


const doctors = [

  {
    name: "Sarah Anderson",
    designation: "Dentist",
    exp: "7y",
    years: 7,
    rating: "18.3k",
    available: true,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    place: "City A",
  },
  {
    name: "Michael Brown",
    designation: "Cardiologist",
    exp: "6.5y",
    years: 6.5,
    rating: "17.8k",
    available: false,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    place: "City B",
  },
  {
    name: "Emily Carter",
    designation: "Cardiologist",
    exp: "7y",
    years: 7,
    rating: "19.2k",
    available: true,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    place: "City A",
  },
  {
    name: "David Wilson",
    designation: "Cardiologist",
    exp: "6y",
    years: 6,
    rating: "18.3k",
    available: false,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    place: "City C",
  },
  {
    name: "Olivia Martinez",
    designation: "Cardiologist",
    exp: "8y",
    years: 8,
    rating: "20.1k",
    available: true,
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    place: "City B",
  },
  {
    name: "James Thompson",
    designation: "Cardiologist",
    exp: "5y",
    years: 5,
    rating: "15.4k",
    available: true,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    place: "City A",
  },
  {
    name: "Sophia Lee",
    designation: "Cardiologist",
    exp: "9y",
    years: 9,
    rating: "21.7k",
    available: false,
    img: "https://randomuser.me/api/portraits/women/25.jpg",
    place: "City D",
  },
  {
    name: "William Garcia",
    designation: "Cardiologist",
    exp: "4y",
    years: 4,
    rating: "13.9k",
    available: true,
    img: "https://randomuser.me/api/portraits/men/84.jpg",
    place: "City C",
  },
  {
    name: "Isabella Rodriguez",
    designation: "Cardiologist",
    exp: "6y",
    years: 6,
    rating: "17.1k",
    available: true,
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    place: "City B",
  },
  {
    name: "Alexander Kim",
    designation: "Cardiologist",
    exp: "10y",
    years: 10,
    rating: "22.5k",
    available: false,
    img: "https://randomuser.me/api/portraits/men/18.jpg",
    place: "City D",
  },
];

export default function DoctorSelection() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [placeFilter, setPlaceFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleScroll = (direction) => {
    if (direction === "left" && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    } else if (direction === "right" && scrollIndex < categories.length - 5) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const places = useMemo(() => {
    return Array.from(new Set(doctors.map((d) => d.place))).filter(Boolean);
  }, []);

  const filteredDoctors = useMemo(() => {
    const txt = searchText.trim().toLowerCase();

    let list = doctors.filter((d) => {
      if (!txt) return true;
      return (
        d.name.toLowerCase().includes(txt) ||
        d.designation.toLowerCase().includes(txt) ||
        (d.place && d.place.toLowerCase().includes(txt))
      );
    });

    if (selectedCategory) {
      list = list.filter((d) => d.designation === selectedCategory);
    }

    if (selectedFilter === "availability") {
      list = list.filter((d) => d.available);
    } else if (selectedFilter === "place") {
      if (placeFilter) list = list.filter((d) => d.place === placeFilter);
    } else if (selectedFilter === "experience") {
      list = [...list].sort((a, b) => (b.years || 0) - (a.years || 0));
    }

    return list;
  }, [searchText, selectedFilter, placeFilter, selectedCategory]);

  return (
    <div className={styles.container}>
      {/* Category Buttons with Scroll */}
      <div className={styles.categoryContainer}>
        <button onClick={() => handleScroll("left")} className={styles.arrowBtn}>
          <FaArrowLeft />
        </button>

        <div className={styles.categoryList}>

          {/* Updated mapping logic for the new categories structure */}
          {categories.slice(scrollIndex, scrollIndex + 5).map((category) => (
            <button
              key={category.name}
              className={`${styles.categoryItem} ${
                selectedCategory === category.name ? styles.activeCategory : ""
              }`}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.name ? "" : category.name
                )
              }
            >
              <img src={category.image} alt={category.name} className={styles.categoryImage} />
              <span className={styles.categoryName}>{category.name}</span>
            </button>
          ))}
          {/* --- MODIFICATION END --- */}
        </div>

        <button onClick={() => handleScroll("right")} className={styles.arrowBtn}>
          <FaArrowRight />
        </button>
      </div>

      {/* ... (Search, Filters, and Doctor Cards remain unchanged) ... */}
       {/* Search + Filters */}
      <div className={styles.searchFilterRow}>
        <input
          className={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div className={styles.filterContainer}>
          <select
            className={styles.filterSelect}
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="availability">By Availability</option>
            <option value="place">By Place</option>
            <option value="experience">By Experience</option>
          </select>

          {selectedFilter === "place" && (
            <select
              className={styles.placeSelect}
              value={placeFilter}
              onChange={(e) => setPlaceFilter(e.target.value)}
            >
              <option value="">-- Select place --</option>
              {places.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Doctors Card Grid */}
      <div className={styles.cardGrid}>
        {filteredDoctors.map((doc, i) => (
          <div key={i} className={styles.card}>
            <img src={doc.img} alt={doc.name} className={styles.profileImg} />
            <h3 className={styles.name}>{doc.name}</h3>
            <p className={styles.designation}>{doc.designation}</p>

            <div className={styles.infoRow}>
              <span>Exp: {doc.exp}</span>
              <span>⭐ {doc.rating}</span>
            </div>

            <div className={styles.availabilityRow}>
              <div
                className={`${styles.dot} ${
                  doc.available ? styles.available : styles.notAvailable
                }`}
              ></div>
              <p>{doc.available ? "Available" : "Not Available"}</p>
            </div>

            <div className={styles.buttonRow}>
              <button className={styles.bookBtn}>Book</button>
              <button className={styles.messageBtn}>Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}