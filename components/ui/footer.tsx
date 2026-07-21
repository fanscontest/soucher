import Link from 'next/link'
import Logo from './logo'
import ContactEmail from './contact-email'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-6 order-1 lg:order-none">
            <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="mb-4">
                  <Logo />
                </div>
                <div className="text-sm text-slate-400 max-w-sm">The contest platform brands integrate to run social contests for their fans.</div>
                <div className="mt-3 text-sm text-slate-400">
                  Contact us:{' '}
                  <ContactEmail className="text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" />
                </div>
              </div>
              <ul className="flex mt-4 sm:mt-0">
                <li>
                  <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" href="#" aria-label="Twitter">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li className="ml-2">
                  <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" href="#" aria-label="Github">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Product */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Product</h6>
            <ul className="text-sm space-y-2">
              <li>
                <Link className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#">Docs</Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#">Pricing</Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#">Changelog</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Resources</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="/#contact">Apply for keys</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#">Status</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#">Security</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Legal</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#">Terms</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#">Privacy</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Qaragon. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
