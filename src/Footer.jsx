  
  export default function Footer() {
    return (
      <footer aria-labelledby="footer-heading" className="bg-auburn text-left">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-9 max-w-7xl px-6 pb-8 pt-14 sm:pt-24 lg:px-6 lg:pt-14">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-32">
              <p className="text-sm leading-6 text-white">
                <span className="text-2xl">Shuga x Ice</span> <br/><br/><br/>
                info@shugaxice.com <br/><br/>
                Located inside of Solaire Social: <br/><br/>
                8200 Dixon Ave <br/>
                Silver Spring, MD<br/><br/>
                <span className="ml-10">Sun-Thurs (11a-9p)</span><br/>
                <span className="ml-10">Fri-Sat (11a-10p)</span>
              </p>
              
              <div className="flex content-end">
              <p className="flex text-sm leading-6 text-white">
                Psalm 34:8
              </p>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-4 lg:mt-8">
            <p className="text-xs leading-5 text-gray-500">&copy; 2020 ShugaxIce, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  