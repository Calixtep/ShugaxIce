import CaterForm from "./components/CaterForm"
  
  export default function Events() {
    return (
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 pb-96 pt-64 shadow-2xl [height:44rem] lg:max-w-[27rem] px-52">
                <img
                  alt=""
                  src="./src/assets/Indidi.jpeg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-xl text-left leading-7 text-gray-700 lg:max-w-full">
                
                <div className="max-w-full">
                  <p className="mt-6">
                    Our Sundae Sundays tasting experiences are the crown jewels of our events lineup.
                    But we offer a lot more! From DIY sundae stations and customized PR packages to
                    take-home ice cream kits and interactive dessert classes, we have something for
                    every occasion. Be it corporate events or weddings, we ensure to provide a unique
                    and unforgettable dessert experience. When you entrust us with your event, we take
                    care of all the dessert catering, offering a selection of pre-made, extraordinary,
                    African-inspired ice creams and frozen desserts. Say goodbye to standard dessert
                    offerings! Each event we facilitate leaves guests with indelible memories and a
                    yearning for more.
                  </p><br/>
                  <p className="font-bold">
                    Ready to book for your corporate event or wedding? Fill out the form below
                    and we'll get back to you promptly for a FREE consultation call to discuss
                    pricing and setup options. We're excited about the opportunity to
                    collaborate with you!
                  </p>
                </div>
              </div>
              <CaterForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
  