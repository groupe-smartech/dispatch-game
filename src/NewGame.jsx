import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

const header = {
  solutions: [
    {
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '#',
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
    },
    {
      name: 'Security',
      description: "Your customers' data will be safe and secure.",
      href: '#',
    },
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will drive your customers to convert',
      href: '#',
    },
  ],
  callsToAction: [
    { name: 'Watch Demo', href: '#' },
    { name: 'Contact Sales', href: '#' },
  ],
  resources: [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
    {
      name: 'Guides',
      description: 'Learn how to maximize our platform to get the most out of it.',
      href: '#',
    },
    {
      name: 'Events',
      description: 'See what meet-ups and other events we might be planning near you.',
      href: '#',
    },
    {
      name: 'Security',
      description: 'Understand how we take your privacy seriously.',
      href: '#',
    },
  ],
  recentPosts: [
    { name: 'Boost your conversion rate', href: '#' },
    { name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { name: 'Improve your customer experience', href: '#' },
  ],
}
const pricing = {
  tiers: [
    {
      title: "Facile",
      description: "Gérez un service d'urgence dans la ville de votre choix !",
      features: [
        "1 service d'urgence",
        "Faibles contraintes budgétaires",
      ],
      mostPopular: false,
    },
    {
      title: "Normal",
      description: "Gérez tous les services d'urgence à vous seul !",
      features: [
        "3 services d'urgence",
        "Fortes contraintes budgétaires",
      ],
      mostPopular: true,
    },
    {
      title: "Mode libre",
      description: "Faites ce que vous voulez sans aucune contrainte budgétaire !",
      features: [
        "Services d'urgence de votre choix",
        "Aucune contrainte budgétaire",
        "Interventions de votre choix",
        "Effectifs de votre choix",
      ],
      mostPopular: false,
    },
  ],
}
const faqs = [
  {
    id: 1,
    question: "Quels sont les services disponibles ?",
    answer:
      "Pour l'instant, les services français suivants sont disponibles : pompiers, police, gendarmerie, SAMU. D'autres seront ajoutés à l'avenir mais vous pouvez y contribuer sur GitHub.",
  },
  {
    id: 2,
    question: "Dans quels pays puis-je jouer ?",
    answer:
      "Pour l'instant, seulement en France mais d'autres pays seront ajoutés à l'avenir. Vous pouvez y contribuer sur GitHub.",
  },
  {
    id: 3,
    question: "Le jeu est-il gratuit ?",
    answer:
      "Le jeu est 100% gratuit car il ne nécessite pas de serveur pour fonctionner.",
  },
  {
    id: 4,
    question: "Comment aider au développement ?",
    answer:
      "Vous pouvez tout faire : aider à ajouter les services de secours d'autres pays, traduire le jeu, m'aider à développer, créer de nouvelles interventions...",
  },
  {
    id: 5,
    question: "Puis-je partager ma partie sur plusieurs appareils ?",
    answer:
      "Vous pouvez transférer vos parties en partageant le fichier de sauvegarde, ou bien plus simplement en scannant un QR code.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      {/* Header and Page Header */}
      <div className="relative">
        {/* Header */}
        <Popover as="header" className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center border-b border-gray-200 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="fa-stack fa-2x">
                    <i className="fa-duotone fa-map fa-stack-1x text-[50px] text-[#3363b8]"></i>
                    <i className="fa-solid fa-light-emergency-on fa-stack-1x text-[25px] text-pompier"></i>
                  </span>
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span className="sr-only">Open menu</span>
                  {/*<MenuIcon className="h-6 w-6" aria-hidden="true" />*/}
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500'
                        )}
                      >
                        <span>Solutions</span>
                        {/*<ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />*/}
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {header.solutions.map((solution) => (
                                <a
                                  key={solution.name}
                                  href={solution.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  {/*<solution.icon className="flex-shrink-0 h-6 w-6 text-rose-400" aria-hidden="true" />*/}
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{solution.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {header.callsToAction.map((cta) => (
                                <div key={cta.name} className="flow-root">
                                  <a
                                    href={cta.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                  >
                                    {/*<cta.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />*/}
                                    <span className="ml-3">{cta.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Pricing
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Docs
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500'
                        )}
                      >
                        <span>More</span>
                        {/*<ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />*/}
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {header.resources.map((resource) => (
                                <a
                                  key={resource.name}
                                  href={resource.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  {/*<resource.icon className="flex-shrink-0 h-6 w-6 text-rose-400" aria-hidden="true" />*/}
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{resource.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                  Recent Posts
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                  {header.recentPosts.map((post) => (
                                    <li key={post.name} className="text-base truncate">
                                      <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                        {post.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <a href="#" className="font-medium text-rose-600 hover:text-rose-500">
                                  {' '}
                                  View all posts <span aria-hidden="true">&rarr;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </a>
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-500 hover:bg-rose-600"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                        <span className="sr-only">Close menu</span>
                        {/*<XIcon className="h-6 w-6" aria-hidden="true" />*/}
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {header.solutions.map((solution) => (
                        <a
                          key={solution.name}
                          href={solution.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          {/*<solution.icon className="flex-shrink-0 h-6 w-6 text-rose-400" aria-hidden="true" />*/}
                          <span className="ml-3 text-base font-medium text-gray-900">{solution.name}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </a>

                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Docs
                    </a>
                    {header.resources.map((resource) => (
                      <a
                        key={resource.name}
                        href={resource.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {resource.name}
                      </a>
                    ))}
                  </div>
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-500 hover:bg-rose-600"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{' '}
                      <a href="#" className="text-rose-600 hover:text-rose-500">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>


        {/* Testimonial */}
        <div className="relative py-14">
          {/* Decorative background */}
          <div aria-hidden="true" className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50" />

          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative py-24 px-8 bg-rose-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
              <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
                <img
                  src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative lg:col-span-1">
                {/*<img className="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />*/}
                <h1 className="text-white font-bold text-5xl">112 Dispatch</h1>
                <blockquote className="mt-6 text-white">
                  <p className="text-xl font-medium sm:text-2xl">
                    Des interventions réalistes qui s'adaptent à la ville de ton choix !
                  </p>
                  <footer className="mt-6">
                    <p className="flex flex-col font-medium">
                      <span><i className="fa-regular fa-fw fa-laptop-mobile"></i> Jouable partout sur n'importe quel appareil</span>
                      <span><i className="fa-brands fa-fw fa-github"></i> Code source entièrement sur GitHub</span>
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>


        {/* Page Header */}
        <div className="relative max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
          <div className="relative">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              Pricing plans for teams of all sizes
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">
              Choose an affordable plan that's packed with the best features for engaging your audience, creating
              customer loyalty, and driving sales.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Pricing Section */}
        <section className="relative">
          {/* Tiers */}
          <div className="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 py-1.5 px-4 bg-rose-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                      Recommandé
                    </p>
                  ) : null}
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        {/*<CheckIcon className="flex-shrink-0 w-6 h-6 text-rose-500" aria-hidden="true" />*/}
                        <i className="fa-regular fa-check fa-lg flex-shrink-0 text-rose-400 pt-3"></i>
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-rose-500 text-white hover:bg-rose-600'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100',
                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                  )}
                >
                  Jouer
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          className="max-w-2xl mx-auto pt-24 px-4 divide-y divide-gray-200 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8"
        >
          <h2 id="faq-heading" className="text-3xl font-extrabold text-gray-900">
            Quelques questions et réponses
          </h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; {(new Date().getFullYear())} Edgar Caudron - Tous droits réservés.</p>
            <p className="text-base text-gray-400 xl:text-center">Accessibilité non conforme | Distribué sous licence <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">CC BY-NC-SA 4.0</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}