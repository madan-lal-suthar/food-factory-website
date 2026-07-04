const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#121212] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(231,91,30,0.2),_transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#e75b1e]">Food Funday</p>
          <h2 className="mt-3 text-4xl font-bold uppercase tracking-tight">Restaurant</h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold text-white">About Us</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-300">
              Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="text-gray-300 transition hover:text-white">
                <span className="sr-only">Facebook</span>
                f
              </a>
              <a href="#" className="text-gray-300 transition hover:text-white">
                <span className="sr-only">Twitter</span>
                t
              </a>
              <a href="#" className="text-gray-300 transition hover:text-white">
                <span className="sr-only">Google+</span>
                g+
              </a>
              <a href="#" className="text-gray-300 transition hover:text-white">
                <span className="sr-only">Pinterest</span>
                p
              </a>
              <a href="#" className="text-gray-300 transition hover:text-white">
                <span className="sr-only">LinkedIn</span>
                in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">New Menu</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>Italian Bomba Sandwich</li>
              <li>Double Dose of Pork Belly</li>
              <li>Spicy Thai Noodles</li>
              <li>Triple Truffle Trotters</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="mt-4 space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e75b1e]/20 text-[#e75b1e]">📍</span>
                <p>6 E Esplanade, St Albans VIC 3021, Australia</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e75b1e]/20 text-[#e75b1e]">📞</span>
                <p>+91 80005 89080</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e75b1e]/20 text-[#e75b1e]">✉️</span>
                <p>support@foodfunday.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Opening Hours</h3>
            <div className="mt-4 space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white">Monday - Thursday</p>
                <p className="mt-1">11:00 AM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Friday - Saturday</p>
                <p className="mt-1">11:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
