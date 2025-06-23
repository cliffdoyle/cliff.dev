// src/components/BackButton.jsx

import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'; // A nice back arrow icon from react-icons

const BackButton = () => {
  return (
    <Link to="/" className="back-button">
      <IoArrowBack />
      <span>Home</span>
    </Link>
  );
};

export default BackButton;