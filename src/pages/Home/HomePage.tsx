import { useMemo, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import carouselOne from '../../assets/images/carousel-1.jpg'
import carouselTwo from '../../assets/images/carousel-2.jpg'
import carouselThree from '../../assets/images/carousel-3.jpg'

const carouselImages = [
  {
    image: carouselOne,
    title: 'Fresh Taste, Every Time',
    subtitle: 'Made for moments that deserve something delicious.',
  },
  {
    image: carouselTwo,
    title: 'Food Factory Favorites',
    subtitle: 'Comfort classics with a bold, flavorful finish.',
  },
  {
    image: carouselThree,
    title: 'Served Hot, Served Happy',
    subtitle: 'A better bite is always just around the corner.',
  },
]

const restaurantImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1497644083578-611b798c60f3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=900&q=80',
]

const restaurants = [
  {
    name: 'The Spice Table',
    cuisine: 'North Indian, Tandoor',
  },
  {
    name: 'Urban Bites',
    cuisine: 'Burgers, Fast Food',
  },
  {
    name: 'Casa Grill',
    cuisine: 'Continental, Pizza',
  },
  {
    name: 'Green Bowl',
    cuisine: 'Healthy Food, Salads',
  },
  {
    name: 'Sky Terrace',
    cuisine: 'Outdoor Dining',
  },
  {
    name: 'Golden Lounge',
    cuisine: 'Fine Dining, Bar',
  },
  {
    name: 'Garden House',
    cuisine: 'Cafe, Desserts',
  },
  {
    name: 'Royal Dine',
    cuisine: 'Luxury Dining',
  },
  {
    name: 'Olive Courtyard',
    cuisine: 'Mediterranean, Salads',
  },
  {
    name: 'Firewood Kitchen',
    cuisine: 'Italian, Wood Fired Pizza',
  },
  {
    name: 'Noodle Street',
    cuisine: 'Chinese, Asian',
  },
  {
    name: 'Bombay Bistro',
    cuisine: 'Indian, Street Food',
  },
  {
    name: 'Blue Orchid',
    cuisine: 'Thai, Seafood',
  },
  {
    name: 'The Breakfast Club',
    cuisine: 'Cafe, Breakfast',
  },
  {
    name: 'Charcoal House',
    cuisine: 'Barbecue, Grill',
  },
  {
    name: 'Sweet Crumbs',
    cuisine: 'Bakery, Desserts',
  },
  {
    name: 'Coastal Curry',
    cuisine: 'South Indian, Seafood',
  },
  {
    name: 'Harvest Table',
    cuisine: 'Farm Fresh, Healthy',
  },
  {
    name: 'Saffron Room',
    cuisine: 'Mughlai, North Indian',
  },
  {
    name: 'Pasta Palace',
    cuisine: 'Italian, Continental',
  },
  {
    name: 'Taco Town',
    cuisine: 'Mexican, Fast Food',
  },
  {
    name: 'Zen Sushi',
    cuisine: 'Japanese, Sushi',
  },
  {
    name: 'Punjabi Rasoi',
    cuisine: 'Punjabi, Tandoor',
  },
  {
    name: 'The Burger Lab',
    cuisine: 'Burgers, Shakes',
  },
  {
    name: 'Curry Leaf',
    cuisine: 'Kerala, South Indian',
  },
  {
    name: 'Moonlight Cafe',
    cuisine: 'Cafe, Beverages',
  },
  {
    name: 'Ember & Oak',
    cuisine: 'Steakhouse, Grill',
  },
  {
    name: 'Lotus Garden',
    cuisine: 'Vegetarian, Indian',
  },
  {
    name: 'Biryani Junction',
    cuisine: 'Biryani, Hyderabadi',
  },
  {
    name: 'The Dessert Bar',
    cuisine: 'Desserts, Ice Cream',
  },
  {
    name: 'Citrus Social',
    cuisine: 'Global, Lounge',
  },
  {
    name: 'Rooftop Republic',
    cuisine: 'Outdoor Dining, Continental',
  },
  {
    name: 'Mango Grove',
    cuisine: 'Indian, Vegetarian',
  },
  {
    name: 'The Pasta Room',
    cuisine: 'Italian, Pasta',
  },
  {
    name: 'Seoul Station',
    cuisine: 'Korean, Asian',
  },
  {
    name: 'Grain & Greens',
    cuisine: 'Healthy Food, Bowls',
  },
  {
    name: 'The Curry Pot',
    cuisine: 'Indian, Curry',
  },
  {
    name: 'Bake Street',
    cuisine: 'Bakery, Cafe',
  },
  {
    name: 'Smoke Yard',
    cuisine: 'Barbecue, American',
  },
  {
    name: 'Ocean Pearl',
    cuisine: 'Seafood, Coastal',
  },
  {
    name: 'Velvet Table',
    cuisine: 'Fine Dining, Continental',
  },
  {
    name: 'The Wrap House',
    cuisine: 'Wraps, Fast Food',
  },
  {
    name: 'Masala Market',
    cuisine: 'Indian, Street Food',
  },
  {
    name: 'Cafe Bloom',
    cuisine: 'Cafe, Desserts',
  },
  // {
  //   name: 'Rustic Oven',
  //   cuisine: 'Pizza, Italian',
  // },
  // {
  //   name: 'Spice Route',
  //   cuisine: 'Asian, Fusion',
  // },
  // {
  //   name: 'The Vegan Plate',
  //   cuisine: 'Vegan, Healthy',
  // }, 
  // {
  //   name: 'Midnight Meals',
  //   cuisine: 'Late Night, Fast Food',
  // },
].map((restaurant) => ({
  ...restaurant,
  image: restaurantImages[Math.floor(Math.random() * restaurantImages.length)],
}))

const restaurantsPerPage = 16

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredRestaurants = useMemo(() => {
    const searchValue = searchTerm.trim().toLowerCase()

    if (!searchValue) {
      return restaurants
    }

    return restaurants.filter((restaurant) =>
      `${restaurant.name} ${restaurant.cuisine}`.toLowerCase().includes(searchValue),
    )
  }, [searchTerm])

  const totalPages = Math.max(1, Math.ceil(filteredRestaurants.length / restaurantsPerPage))
  const startIndex = (currentPage - 1) * restaurantsPerPage
  const visibleRestaurants = filteredRestaurants.slice(startIndex, startIndex + restaurantsPerPage)

  return (
    <>
    <section className="pt-16">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="h-[calc(100vh-4rem)] min-h-[520px] w-full"
      >
        {carouselImages.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div
              className="flex h-full w-full items-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .35)), url(${slide.image})` }}
            >
              <div className="mx-auto w-full max-w-6xl px-6 text-white">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold leading-tight md:text-6xl">{slide.title}</h1>
                  <p className="mt-4 max-w-xl text-base font-medium text-gray-100 md:text-xl">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <section className="bg-white px-4 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">Restaurants</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#e75b1e]" />
        </div>

        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="h-10 rounded-lg border border-gray-300 px-4 text-sm font-semibold text-zinc-700 transition duration-300 hover:border-[#e75b1e] hover:text-[#e75b1e] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-zinc-700"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-10 min-w-10 rounded-lg border px-3 text-sm font-semibold transition duration-300 ${
                    currentPage === page
                      ? 'border-[#e75b1e] bg-[#e75b1e] text-white'
                      : 'border-gray-300 text-zinc-700 hover:border-[#e75b1e] hover:text-[#e75b1e]'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="h-10 rounded-lg border border-gray-300 px-4 text-sm font-semibold text-zinc-700 transition duration-300 hover:border-[#e75b1e] hover:text-[#e75b1e] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-zinc-700"
              >
                Next
              </button>
            </div>

            <p className="mt-2 text-sm font-medium text-zinc-600">
              Showing {visibleRestaurants.length ? startIndex + 1 : 0}-
              {Math.min(startIndex + restaurantsPerPage, filteredRestaurants.length)} of {filteredRestaurants.length}
            </p>
          </div>

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value)
              setCurrentPage(1)
            }}
            placeholder="Search restaurants or cuisine"
            className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-zinc-900 outline-none transition duration-300 placeholder:text-zinc-400 focus:border-[#e75b1e] focus:ring-2 focus:ring-[#e75b1e]/20 md:max-w-xs"
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleRestaurants.map((restaurant) => (
                    <div className="h-90 group relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat shadow-md transition duration-300            hover:-translate-y-1 hover:shadow-xl">
                        <div className="group relative h-60 overflow-hidden rounded-t-lg bg-cover bg-center bg-no-repeat shadow-md"
                        style={{ backgroundImage: `url(${restaurant.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition duration-300 group-hover:from-black/85" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                                <p className="mt-1 text-sm font-medium text-gray-200">{restaurant.cuisine}</p>
                            </div>
                        </div>
                    </div>                
                
            // <div
            //   key={restaurant.name}
            //   className="group relative h-80 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            //   style={{ backgroundImage: `url(${restaurant.image})` }}
            // >
            //   <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition duration-300 group-hover:from-black/85" />
            //   <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            //     <h3 className="text-xl font-semibold">{restaurant.name}</h3>
            //     <p className="mt-1 text-sm font-medium text-gray-200">{restaurant.cuisine}</p>
            //   </div>
            // </div>
          ))}
        </div>

        {visibleRestaurants.length === 0 && (
          <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 px-5 py-8 text-center text-zinc-600">
            No restaurants found.
          </div>
        )}

      </div>
    </section>
    </>
  )
}

export default HomePage
