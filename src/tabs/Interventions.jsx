export default function Interventions() {
  return (
    <>
      <h1 className="p-6 text-lg w-full border-b">Interventions</h1>

      <div className="shadow overflow-hidden mt-4">
        <ul role="list" className="divide-y divide-gray-200">
            <li>
              <a href="#" className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">Rixe</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Traité {/*a virer vu que la page interventions montre uniquement les inter déjà traitées*/}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {/*<UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                        Departement
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        {/*<LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                        Location
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      {/*<CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                      <p>
                        Closing on
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
        </ul>
      </div>
    </>
  )
}