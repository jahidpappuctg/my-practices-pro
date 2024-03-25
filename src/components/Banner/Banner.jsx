import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Banner = () => {
  return (
    <div className="banner bg-gray-200 py-[250px] px-[120px] rounded-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-left">
          <h1 className="text-[56px] font-bold text-gray-800 pb-[48px]">Books to freshen up  <br/> your bookshelf</h1>
          <Link to="/listed-books">
            <button className="mt-4 px-6 py-3 bg-[#23BE0A] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">View The List</button>
          </Link>
        </div>
        <div className="hidden md:block">
          <img src="/src/assets/pngwing 1.png" alt="Related to website" className="w-64 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
