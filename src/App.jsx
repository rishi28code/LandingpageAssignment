import "./App.css";

function App() {
  return (
    <div>
      {/* NavBar */}
      <nav className=" max-h-80 w-full sm:w-[100vw] md:w-[90vw] lg:w-[80vw] xl:w-[60vw] mx-auto px-4 flex justify-between items-center">
        <div className="flex justify-normal space-x-4">
          <img src="src/images/Logo.jpg" alt="Logo" />
          <button className="hover:text-blue-500">Home</button>
          <button className="hover:text-blue-500">About Us</button>
          <button className="hover:text-blue-500">Pricing</button>
          <button className="hover:text-blue-500">Features</button>
        </div>
        <div className="ml-auto bg-black text-white h-10 w-28 flex justify-center items-center rounded">
          <button className="hover:text-blue-500">Download</button>
        </div>
      </nav>
      {/* NavBar ends */}
      <img src="src\images\blackstar.jpg" className="mt-[25px]" />
      {/* part 1 starts here */}
      <div className="flex justify-center items-center mt-4">
        <div className="h-80vh w-50vw  relative">
          <img
            src="src/images/bgRedLight.jpg"
            alt=""
            className="absolute top-0 right-12 w-[320px] h-[320px] z-0"
          />
          <div className="mt-20 ">
            <div className="text-5xl font-black relative ml-[150px]">
              Make the Best
            </div>
            <div className="text-5xl font-black relative ml-[150px]">
              Financial Decisions{" "}
            </div>
            <div className="text-sm relative mt-3 ml-[150px] text-slate-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
            <div className="ml-[150px] mt-5 flex relative">
              <button className="bg-black text-white w-40 h-10 rounded-lg hover:text-blue-500">
                Get Started
              </button>
              <img src="src\images\play.jpg" className="mt-2 ml-8 h-7" />
              <span className="ml-2 mt-2 text-">Watch video</span>
            </div>
            <img
              src="src\images\Z.jpg"
              className="h-[350px] w-[400px] relative mt-6 ml-32"
            />
          </div>
        </div>
        <div className="h-80vh w-50vw">
          <img src="src\images\phones.png" alt="" />
        </div>
      </div>
      {/* part 1 ends here */}

      {/* part 2 starts here */}
      <div className="flex justify-center items-center mt-4">
        <div className="h-80vh w-50vw">
          <img
            src="src\images\phone3.png"
            className="w-[750px] h-[550px] ml-16"
          />
        </div>
        <div className="h-80vh w-50vw">
          <div className="text-red-400 font-bold ml-[200px]">
            F E A T U R E S
          </div>
          <div className="text-5xl font-black ml-[200px]">Uifry Premium</div>
          <div className="font-bold flex ml-[200px] mt-10">
            <img src="src\images\star-05.jpg" className="h-5 w-5 mr-2 mt-1" />
            Budget Intervals
          </div>
          <div className="ml-[200px] text-slate-400 ">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </div>
          <div className="font-bold flex ml-[200px] mt-10">
            <img src="src\images\star-05.jpg" className="h-5 w-5 mr-2 mt-1" />
            Budget Intervals
          </div>
          <div className="ml-[200px] text-slate-400 ">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </div>
          <div className="font-bold flex ml-[200px] mt-10">
            <img src="src\images\star-05.jpg" className="h-5 w-5 mr-2 mt-1" />
            Budget Intervals
          </div>
          <div className="ml-[200px] text-slate-400 ">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </div>
        </div>
      </div>
      {/* part 2 ends here */}

      {/* part3 starts here */}
      <div className="flex justify-center items-center mt-4">
        <div className="h-80vh w-50vw">
          <div className="text-red-400 font-bold ml-[100px]">ADVANTAGES</div>
          <div className="text-5xl font-black ml-[100px]">
            Why Choose Uifry?
          </div>
          <div className="text-3xl font-bold flex ml-[100px] mt-10">
            <img src="src\images\Bell.jpg" className="h-10 w-10 mr-2" />
            Notifications
          </div>
          <div className="ml-[100px] text-slate-400 mr-[200px] ">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
        </div>
        <div className="h-80vh w-50vw">
          <img src="src\images\phone3.png" className="w-[1500px] h-[550px] " />
        </div>
      </div>
      {/* part 3 ends here */}

      {/* part 4 starts here */}
      <div className="flex justify-center items-center mt-4">
        <div className="h-80vh w-50vw">
          <img
            src="src\images\phone3.png"
            className="w-[1250px] h-[550px] ml-16"
          />
        </div>
        <div className="h-80vh w-50vw">
          <div className="text-3xl font-bold flex ml-[200px] mt-10">
            <img src="src\images\star2.jpg" className="h-10 w-10 mr-2" />
            Fully Customizable
          </div>
          <div className="ml-[200px] text-slate-400  ">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
        </div>
      </div>
      {/* part 4 ends here */}

      {/* part 5 starts here */}
      <div className="float text-center">
        <div className="font-semibold text-slate-700">TESTIMONIALS</div>
        <div className="text-5xl font-black">What Our Users </div>
        <div className="text-5xl font-black">Say About Us? </div>
      </div>
      {/* part 5 ends here */}

      {/* part 6 starts here */}
      <div className="flex justify-center items-center mt-4">
        <div className="h-80vh w-50vw">
          <img
            src="src\images\man.png"
            className="w-[1350px] h-[550px] ml-16"
          />
        </div>
        <div className="h-80vh w-50vw">
          <div className="text-3xl font-bold flex ml-[200px] mt-10">
            The Best Financial Accounting
          </div>
          <div className="text-3xl font-bold flex ml-[200px]">App Ever!</div>
          <div className="ml-[200px] text-slate-400  ">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
        </div>
      </div>
      {/* part 6 ends here */}

      {/* part 7 starts here */}
      <div>
        <div className="text-red-400 font-bold ml-[100px]">F A Q</div>
        <div className="text-5xl font-black ml-[100px]">Frequently Asked</div>
        <div className="text-5xl font-black ml-[100px]">Questions</div>

        <div className="flex justify-center items-center mx-[110px] mt-[40px]">
          <div className="bg-red-500 text-white mr-[10px] text-center rounded-lg">
            <div className="text-3xl font-black">
              The Best Financial Accounting
            </div>
            <div className="text-3xl font-black">App Ever!</div>
            <div className="">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black">
              The Best Financial Accounting
            </div>
            <div className="text-3xl font-black">App Ever!</div>
            <div className="">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[110px]">
          <div className="mt-[10px] text-center">
            <div className="text-3xl font-black">
              The Best Financial Accounting
            </div>
            <div className="text-3xl font-black">App Ever!</div>
            <div className="">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </div>
          </div>
          <div className="bg-red-500 text-white mr-[10px] mt-[10px] text-center rounded-lg">
            <div className="text-3xl font-black">
              The Best Financial Accounting
            </div>
            <div className="text-3xl font-black">App Ever!</div>
            <div className="">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[110px]">
          <div className="bg-red-500 text-white mr-[10px] mt-[10px] rounded-lg text-center">
            <div className="text-3xl font-black">
              The Best Financial Accounting
            </div>
            <div className="text-3xl font-black">App Ever!</div>
            <div className="">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </div>
          </div>
          <div className="mt-[10px] text-center">
            <div className="text-3xl font-black">
              The Best Financial Accounting
            </div>
            <div className="text-3xl font-black">App Ever!</div>
            <div className="">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </div>
          </div>
        </div>
      </div>
      {/* part 7 ends here */}

      {/* part 8 starts here */}
      <div className="flex justify-center items-center h-80vh mt-[100px]">
        <img src="src/images/FooterImg.jpg" alt="" />
      </div>
      {/* part 8 ends here */}

      {/* part 9 starts */}
      <div className="flex justify-between mx-[90px] mt-[100px]">
        <div>
          <img src="src/images/Logo.jpg" alt="Logo" />
          <div className="font-semibold">✉ Help@Frybix.com</div>
          <div className="font-semibold">📞 +12456897878</div>
        </div>
        <div>
          <div className="text-3xl">Links</div>
          <div className="font-semibold">Home</div>
          <div className="font-semibold">About Us</div>
          <div className="font-semibold">Bookings</div>
          <div className="font-semibold">Blog</div>
        </div>
        <div>
          <div className="text-3xl">Legal</div>
          <div className="font-semibold">Terms of use</div>
          <div className="font-semibold">Privacy Policy</div>
          <div className="font-semibold">Cookie Policy</div>
        </div>
        <div>
          <div className="text-3xl">Products</div>
          <div className="font-semibold">Take Tour</div>
          <div className="font-semibold">Live Chat</div>
          <div className="font-semibold">Reviews</div>
        </div>
        <div>
          <div className="text-3xl">News Letter</div>
          <div className="font-semibold">Stay Upto Date</div>
          <div className="flex">
            <input
              type="Email"
              placeholder="Mail"
              className="border-black mr-5 hover:bg-blue-200"
            />
            <button className="bg-black text-white w-[150px] h-[40px] rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* part 9 ends here */}
      <div className="font-semibold text-black text-center mt-[200px] mb-[100px]">
        Copyright 2022 uifry.com all rights reserved
      </div>
    </div>
  );
}

export default App;
