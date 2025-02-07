import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-cezeri-light">
                TEKNOFEST 2023
              </h2>
              <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                ITÜ Cezeri Takımı "En İyi Takım Ruhu" Ödülünü Aldı!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              TEKNOFEST 2023 Havacılık ve Uzay Festivali'nde ITÜ Makina Fakültesi Cezeri Takımı olarak büyük bir başarı elde ettik.
              Karma Sürü Robotlar Yarışması'nda, "En İyi Takım Ruhu" ödülünü kazandık. Bu ödül, takımımızın birbirine olan bağlılığı, 
              dayanışması ve yaratıcılığıyla ne kadar güçlü olduğunu gösteriyor.Cezeri Takımı olarak, sürekli gelişim ve inovasyon vizyonumuzla gurur duyuyoruz.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Tüm takım üyelerimize, danışmanlarımıza ve bağlı
                destekçilerimize bu büyük başarıya ulaşmamıza yardımcı oldukları
                için içten teşekkür ederiz.
              </p>

              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-cezeri-light"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden cezeri p-16 sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  src="/imzalı.jpeg"
                  alt="Product screenshot"
                  width={200}
                  height={200}
                  className="w-full max-w-none rounded-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
