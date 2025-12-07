function UserProfile() {
  return (
    // Enhanced Shadows on Card Hover:
    // Added: hover:shadow-xl transition-shadow duration-300
    <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      
      {/* Hover Effects (Image): */}
      // Added: transform transition-transform duration-300 ease-in-out hover:scale-110
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
      />
      
      {/* Text Emphasis on Hover (Heading): */}
      // Added: transition-colors duration-300 hover:text-blue-500
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 font-semibold transition-colors duration-300 hover:text-blue-500">John Doe</h1>
      
      {/* Paragraph (p) Styling - Final responsive classes */}
      <p className="text-gray-600 text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
