function FoodCategories() {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full h-full">
            <h1>Food Categories</h1>
            <p>Welcome to the Food Categories page!</p>
        </div>
        <section className="bg-white px-4 py-14">
            <div className= "mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">Food Categories</h2>
                        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#e75b1e]" />
                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col items-start w-90">
                        <div className="flex flex-row items-center justify-between gap-4">
                            <button className="border-gray-300 text-zinc-700 text-center h-11 w-13 text-sm font-semibold rounded-lg border hover:border-[#e75b1e] hover:text-[#e75b1e]">
                                prev
                            </button>
                            <button className="border-gray-300 text-zinc-700 text-center h-11 w-11 rounded-lg border-[1.5px] hover:border-[#e75b1e] hover:text-[#e75b1e]">
                                1
                            </button>
                            <button className="border-gray-300 text-zinc-700 text-center h-11 w-11 rounded-lg border-[1.5px] hover:border-[#e75b1e] hover:text-[#e75b1e]">
                                2
                            </button>
                            <button className="border-gray-300 text-zinc-700 text-center h-11 w-11 rounded-lg border-[1.5px] hover:border-[#e75b1e] hover:text-[#e75b1e]">
                                3
                            </button>
                            <button className="border-gray-300 text-zinc-700 text-center h-11 w-13 rounded-lg border-[1.5px] hover:border-[#e75b1e] hover:text-[#e75b1e]">
                                Next
                            </button>
                        </div>   
                        <span className="text-sm text-zinc-500 py-1">
                            Showing 1 to 3 of 10 results
                        </span>
                    </div>
                    <input type="text" placeholder="Search food categories..." className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-zinc-900 outline-none transition duration-300 placeholder:text-zinc-400 focus:border-[#e75b1e] focus:ring-2 focus:ring-[#e75b1e]/20 md:max-w-xs" />
                </div>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                   
                
                <div
                className="group relative h-60 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80)` }}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition duration-300 group-hover:from-black/85" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                 <h3 className="text-xl font-semibold">Desserts</h3>
                 <p className="mt-1 text-sm font-medium text-gray-200">Indulge in our delicious desserts</p>
                </div>
                </div>
             </div>
            </div>
        </section>
    </>
  );
}
export default FoodCategories;