/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: '',
    description: '',
    icon: GlobeAltIcon,
  },
  {
    name: '',
    description: '',
    icon: ScaleIcon,
  },
  {
    name: '',
    description: '',
    icon: LightningBoltIcon,
  },
  {
    name: '',
    description: '',
    icon: AnnotationIcon,
  },
];

export const FeaturedSection = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-300 font-semibold tracking-wide uppercase">
          </h2>

          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-indigo-300 sm:text-4xl">
          </p>

          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  {/* remove 'hidden' to show icon */}
                  <div className="hidden absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-indigo-200">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
