/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import Head from 'next/head';
import DestinationCard from '../../components/tailwind-course/DestinationCard';

export async function getStaticProps(context) {
  const popularDestinations = [
    {
      city: 'Toronto',
      averagePrice: 120,
      propertyCount: 76,
      imageUrl: '/tailwind-course/toronto.jpg',
      imageAlt: 'Toronto skyline',
    },
    {
      city: 'Malibu',
      averagePrice: 215,
      propertyCount: 43,
      imageUrl: '/tailwind-course/malibu.jpg',
      imageAlt: 'Cliff in Malibu',
    },
    {
      city: 'Chicago',
      averagePrice: 130,
      propertyCount: 115,
      imageUrl: '/tailwind-course/chicago.jpg',
      imageAlt: 'Chicago skyline',
    },
    {
      city: 'Seattle',
      averagePrice: 135,
      propertyCount: 63,
      imageUrl: '/tailwind-course/seattle.jpg',
      imageAlt: 'Seattle skyline',
    },
    {
      city: 'Colorado',
      averagePrice: 85,
      propertyCount: 47,
      imageUrl: '/tailwind-course/colorado.jpg',
      imageAlt: 'Lake in Colorado',
    },
    {
      city: 'Miami',
      averagePrice: 115,
      propertyCount: 86,
      imageUrl: '/tailwind-course/miami.jpg',
      imageAlt: 'Beach in Miami',
    },
  ];
  return {
    props: { popularDestinations },
  };
}

export default function index({ popularDestinations }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gray-100 w-full min-h-screen">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
          <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
            <div className="xl:max-w-xl">
              <img
                className="h-10"
                // src="/tailwind-course/workation-logo.svg"
                src="/tailwind-course/logo-brand.svg"
                alt="Workation logo"
              />

              <img
                className="mt-6 rounded-xl shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
                src="/tailwind-course/beach-work.jpg"
                alt="Woman workationing on the beach"
              />

              <h1 className="mt-6 text-2xl font-headline -tracking-tight font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                You can work from anywhere. <br className="hidden lg:inline" />
                <span className="text-brand">Take the advantage of it.</span>
              </h1>

              <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                Workcation helps you find work-friendly rentals in beautiful
                locations so you can enjoy some nice weather even when you're
                not on vacation.
              </p>

              <div className="mt-4 sm:mt-6 space-x-1">
                <a
                  className="btn btn-primary shadow-lg transition transform hover:-translate-y-0.5"
                  href="#"
                >
                  Book your escape
                </a>
                <a className="btn btn-secondary" href="#">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="hidden relative lg:block 2xl:col-span-3">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/tailwind-course/beach-work.jpg"
              alt="Woman workationing on the beach"
            />
          </div>
        </div>

        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h2 className="text-xl text-gray-900">Popular destinations</h2>
          <p className="mt-2 text-gray-600">
            A selection of great work-friendly cities with lots to see and
            explore
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {popularDestinations &&
              popularDestinations.map((popularDestination, key) => (
                <DestinationCard destination={popularDestination} key={key} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
