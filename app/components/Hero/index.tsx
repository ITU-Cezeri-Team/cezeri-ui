import Image from 'next/image'

export default function Hero() {
  return (
    <main>
      <div className="relative isolate">
     
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          {/* from-[#CB530D] to-[#F5B428]  */}
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Geleceğin Teknolojilerine Yolculuk
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  Üniversitemizin proje geliştirme ekibi olarak, insansız hava
                  araçlarından son teknoloji elektronik cihazlara kadar
                  sınırları zorlayan yenilikler üretiyoruz. Geleceği
                  şekillendiren teknolojileri keşfetmek için bizimle birlikte
                  yolculuğa çıkın!
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                <a href="/projects" className="rounded-md cezeri px-3.5 py-2.5 text-white shadow-sm sm:w-48">Projelerimiz</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPV2SaDHaX2kWFSEQmhjUFOzBHyLCQBTKh4eQZexvImYryaA/viewform?pli=1" className="rounded-md cezeri px-3.5 py-2.5 text-white shadow-sm sm:w-48">Başvuru formu </a>
                </div>
              </div>
              <div className="mt-14 sm:flex hidden justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src="/iha.jpeg"
                      alt="İha"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src="/chip2.jpg"
                      alt="Sticker"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/güzel-iha.jpg"
                      alt="Computers on desk"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src="/electronics.jpeg"
                      alt="Electronics"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/iha-papatya.jpeg"
                      alt="Bolts"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
              <div className="mt-14 grid grid-cols-2 sm:hidden gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="relative">
                    <Image
                      src="/iha.jpeg"
                      alt="İha"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/chip2.jpg"
                      alt="Sticker"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/güzel-iha.jpg"
                      alt="Computers on desk"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/electronics.jpeg"
                      alt="Electronics"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative col-span-2">
                    <Image
                      src="/iha-papatya.jpeg"
                      alt="Bolts"
                      width={176}
                      height={264}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
