import { useEffect, useMemo, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import type { RootState } from '../../.../../redux/store'
import { fetchRestaurants } from '../../redux/thunks/restaurantThunk'
import type { RestaurantState } from '../../redux/types/restaurantTypes'
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

const restaurantsPerPage = 16

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { items: restaurants, loading, error } = useAppSelector((state: RootState) => state as RestaurantState)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fetchRestaurants() as never)
  }, [dispatch])

  const filteredRestaurants = useMemo(() => {
    const searchValue = searchTerm.trim().toLowerCase()

    if (!searchValue) {
      return restaurants
    }

    return restaurants.filter((restaurant: { name: string; cuisine: string; location: string; type: string }) =>
      `${restaurant.name} ${restaurant.cuisine} ${restaurant.location} ${restaurant.type}`.toLowerCase().includes(searchValue),
    )
  }, [restaurants, searchTerm])

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
        className="h-[calc(100vh-4rem)] min-h-130 w-full"
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

        {loading && (
          <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 px-5 py-8 text-center text-zinc-600">
            Loading restaurants...
          </div>
        )}

        {!loading && error && (
          <div className="mt-10 rounded-lg border border-red-200 bg-red-50 px-5 py-8 text-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleRestaurants.map((restaurant: { name: string; image: string; isShopOn: number; cuisine: string; location: string; type: string }) => (
              <div key={restaurant.name} className="group overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-60 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${restaurant.image})` }} />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-zinc-900">{restaurant.name}</h3>
                    <span className={`rounded-full px-2 py-1 text-xs font-semibold ${restaurant.isShopOn ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {restaurant.isShopOn ? 'Open' : 'Closed'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-600">{restaurant.cuisine}</p>
                  <p className="mt-1 text-sm text-zinc-500">{restaurant.location}</p>
                  <p className="mt-1 text-sm text-zinc-500">{restaurant.type}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && visibleRestaurants.length === 0 && (
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
