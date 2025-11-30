function UserProfile() {
  return (
    // Responsive Container Adjustments:
    // Base: bg-gray-100, mx-auto, my-20, rounded-lg, shadow-lg, text-center
    // sm: p-4, max-w-xs
    // md: p-8, max-w-sm
    <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      
      {/* Responsive Image Sizing: */}
      // Base: rounded-full, mx-auto, object-cover
      // sm: w-24 h-24
      // md: w-36 h-36
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto object-cover"
      />
      
      {/* Responsive Typography (Heading): */}
      // Base: text-blue-800, my-4, font-semibold
      // sm: text-lg
      // md: text-xl
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 font-semibold">John Doe</h1>
      
      {/* Responsive Typography (Paragraph): */}
      // Base: text-gray-600
      // sm: text-sm
      // md: text-base
      <p className="text-gray-600 text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
