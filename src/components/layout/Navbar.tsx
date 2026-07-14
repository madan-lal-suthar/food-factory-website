import { Link } from 'react-router-dom'
  const Navbar = () => {
    return (
      <nav>
        <div className="bg-zinc-900 text-white h-[4rem] w-full flex items-center justify-between fixed top-0 left-0 z-50 shadow-[0_3px_10px_rgba(0,0,0,.5)]">
          <div className="flex items-center justify-center w-[20%]">
            <img src="./src/assets/images/food_fac_logo2.png" alt="Logo" className="h-[4rem] w-[180px] text-white" />
          </div>
          <div className="flex items-center justify-center w-[65%] h-[4rem]">
            <div className="flex items-center justify-between w-[80%] h-[4rem]">
              <Link to="/" className="border-b-2 border-transparent pb-1 text-white text-base font-medium transition duration-300 focus:border-gray-300 focus:text-[#e75b1e] focus:outline-none">
                Home
              </Link>
              <Link to="/food-categories" className="border-b-2 border-transparent pb-1 text-white text-base font-medium transition duration-300 focus:border-gray-300 focus:text-[#e75b1e] focus:outline-none">
                Food Categories
              </Link>
              <Link to="/contact" className="border-b-2 border-transparent pb-1 text-white text-base font-medium transition duration-300 focus:border-gray-300 focus:text-[#e75b1e] focus:outline-none">
                Order Book
              </Link>
              <Link to="/contact" className="border-b-2 border-transparent pb-1 text-white text-base font-medium transition duration-300 focus:border-gray-300 focus:text-[#e75b1e] focus:outline-none">
                Gallery
              </Link>
              <Link to="/contact" className="border-b-2 border-transparent pb-1 text-white text-base font-medium transition duration-300 focus:border-gray-300 focus:text-[#e75b1e] focus:outline-none">
                Chefs
              </Link>
              <Link to="/contact" className="border-b-2 border-transparent pb-1 text-white text-base font-medium transition duration-300 focus:border-gray-300 focus:text-[#e75b1e] focus:outline-none">
                Contact Us
              </Link>
              <Link to="/contact" className="border-b-2 border-transparent pb-1 text-white text-base font-medium transition duration-300 focus:border-gray-300 focus:text-[#e75b1e] focus:outline-none">
                Reviews
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-evenly w-[18%] h-[4rem]">
            <button className="bg-[#e75b1e] text-white px-4 py-2 rounded-md hover:bg-[#d14c1a] transition duration-300">
              Login
            </button>
            <button className="bg-[#e75b1e] text-white px-4 py-2 rounded-md hover:bg-[#d14c1a] transition duration-300 ml-2">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    )
  }


  export default Navbar
