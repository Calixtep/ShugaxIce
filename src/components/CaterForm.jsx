/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const eventTypes = [
    {
        id: 'birthday',
        name: 'birthday',
        text: 'Birthday',
    },
    {
        id: 'baby-shower',
        name: 'baby-shower',
        text: 'Baby Shower',
    },
    {
        id: 'bridal-shower',
        name: 'bridal-shower',
        text: 'Bridal Shower',
    },
    {
        id: 'wedding',
        name: 'wedding',
        text: 'Wedding',
    },
    {
        id: 'engagement-party',
        name: 'engagement-party',
        text: 'Engagement Party',
    },
    {
        id: 'corporate',
        name: 'corporate',
        text: 'Corporate',
    },
    {
        id: 'church',
        name: 'church',
        text: 'Church',
    },
    {
        id: 'other',
        name: 'other',
        text: 'Other',
    },
]

export default function CaterForm() {
  return (
    <form>
      <div className="space-y-12">

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 text-left text-lg">
            <div className='sm:col-span-6 '>
              <label htmlFor="Name" className="block font-medium leading-6 text-gray-900">
                Name (required)
              </label>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="email" className="block font-medium leading-6 text-gray-900">
                Email (required)
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="phone" className="block font-medium leading-6 text-gray-900">
                Phone Number (required)
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="phone"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="phone" className="block font-medium leading-6 text-gray-900">
                Event Date (required)
              </label>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="date"
                  autoComplete="date"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                />
              </div>
            </div>

            <fieldset className='sm:col-span-6'>
                <legend className="sr-only">Event Types</legend>
                <div className="space-y-5">
                    {eventTypes.map((eventType) => (
                        <div>
                            <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                                <input
                                id={eventType.id}
                                name={eventType.name}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="ml-3 leading-6">
                                <label htmlFor={eventType.id} className="font-medium text-gray-900">
                                {eventType.text}
                                </label>{' '}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>

        <div className="sm:col-span-6 text-left">
              <label htmlFor="budget" className="block font-medium leading-6 text-gray-900">
                Budget
              </label>
              <p className="mt-3 leading-6 text-gray-600">Do you have a budget for this part of your event?</p>
              <div className="mt-2">
                <input
                  id="budget"
                  name="budget"
                  type="number"
                  autoComplete="budget"
                  className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                />
              </div>
        </div>

        <div>
            <label htmlFor="reference" className="block text-left font-medium leading-6 text-gray-900">
                How did you hear about us?
            </label>
            <select
                id="reference"
                name="reference"
                placeholder="Select an option"
                className="mt-2 block w-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                <option className="text-gray-500">Select an option</option>
                <option>Family/Friends</option>
                <option>Social Media</option>
                <option>Google</option>
                <option>Events</option>
                <option>Solaire Social (Walk By)</option>
            </select>
        </div>

        <div className="col-span-full text-left">
            <label htmlFor="about" className="block font-medium leading-6 text-gray-900">
            Details
            </label>
            <p className="mt-3 leading-6 text-gray-600">Any important details you want us to know about your event?</p>
            <div className="mt-2">
                <textarea
                    id="details"
                    name="details"
                    rows={3}
                    className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    defaultValue={''}
                />
            </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-auburn px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-auburn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
