export const Megamenu = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 px-5 pb-5 pt-20">
      <div className="py-3 px-5 bg-white rounded shadow-xl">
        <div className="-mx-1">
          <ul className="flex w-full flex-wrap items-center h-10">
            <li className="block relative">
              <a
                href="#"
                className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 bg-indigo-500 text-white"
              >
                <span className="mr-3 text-xl">
                  {" "}
                  <i className="mdi mdi-gauge"></i>{" "}
                </span>
                <span>Dashboard</span>
                <span className="ml-2">
                  {" "}
                  <i className="mdi mdi-chevron-down"></i>{" "}
                </span>
              </a>
              <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1">
                <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
                <div className="bg-white rounded w-full relative z-10 py-1">
                  <ul className="list-reset">
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">Dashboard 1</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">Dashboard 2</span>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="block relative">
              <a
                href="#"
                className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100"
              >
                <span className="mr-3 text-xl">
                  {" "}
                  <i className="mdi mdi-widgets-outline"></i>{" "}
                </span>
                <span>Widgets</span>
              </a>
            </li>
            <li className="block relative">
              <a
                href="#"
                className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100"
              >
                <span className="mr-3 text-xl">
                  {" "}
                  <i className="mdi mdi-layers-outline"></i>{" "}
                </span>
                <span>UI Elements</span>
                <span className="ml-2">
                  {" "}
                  <i className="mdi mdi-chevron-down"></i>{" "}
                </span>
              </a>
              <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1">
                <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
                <div className="bg-white rounded w-full relative z-10 py-1">
                  <ul className="list-reset">
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Basic Elements</span>
                        <span className="ml-2">
                          {" "}
                          <i className="mdi mdi-chevron-right"></i>{" "}
                        </span>
                      </a>
                      <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute inset-l-full top-0 min-w-full w-56 z-30 mt-1">
                        <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -ml-1 mt-2"></span>
                        <div className="bg-white rounded w-full relative z-10 py-1">
                          <ul className="list-reset">
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Accordion</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Buttons</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Badges</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Breadcrumbs</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Dropdown</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Modals</span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Advanced Elements</span>
                        <span className="ml-2">
                          {" "}
                          <i className="mdi mdi-chevron-right"></i>{" "}
                        </span>
                      </a>
                      <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute inset-l-full top-0 min-w-full w-56 z-30 mt-1">
                        <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -ml-1 mt-2"></span>
                        <div className="bg-white rounded w-full relative z-10 py-1">
                          <ul className="list-reset">
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Charts</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Maps</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Drag n Drop</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Slider</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Loader</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Notification</span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Forms &amp; Tables</span>
                        <span className="ml-2">
                          {" "}
                          <i className="mdi mdi-chevron-right"></i>{" "}
                        </span>
                      </a>
                      <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute inset-l-full top-0 min-w-full w-56 z-30 mt-1">
                        <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -ml-1 mt-2"></span>
                        <div className="bg-white rounded w-full relative z-10 py-1">
                          <ul className="list-reset">
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Form Elements</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Advanced Forms</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Basic Tables</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Data Tables</span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">Icons</span>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="block relative">
              <a
                href="#"
                className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100"
              >
                <span className="mr-3 text-xl">
                  {" "}
                  <i className="mdi mdi-web"></i>{" "}
                </span>
                <span>Pages</span>
                <span className="ml-2">
                  {" "}
                  <i className="mdi mdi-chevron-down"></i>{" "}
                </span>
              </a>
              <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1">
                <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
                <div className="bg-white rounded w-full relative z-10 py-1">
                  <ul className="list-reset">
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">User Profile</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">Account Settings</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">Invoice</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Authentication</span>
                        <span className="ml-2">
                          {" "}
                          <i className="mdi mdi-chevron-right"></i>{" "}
                        </span>
                      </a>
                      <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute inset-l-full top-0 min-w-full w-56 z-30 mt-1">
                        <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -ml-1 mt-2"></span>
                        <div className="bg-white rounded w-full relative z-10 py-1">
                          <ul className="list-reset">
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Login</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Register</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Reset Password</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">Lock Screen</span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        <span className="flex-1">Errors</span>
                        <span className="ml-2">
                          {" "}
                          <i className="mdi mdi-chevron-right"></i>{" "}
                        </span>
                      </a>
                      <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute inset-l-full top-0 min-w-full w-56 z-30 mt-1">
                        <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -ml-1 mt-2"></span>
                        <div className="bg-white rounded w-full relative z-10 py-1">
                          <ul className="list-reset">
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">400</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">404</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">500</span>{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                              >
                                {" "}
                                <span className="flex-1">505</span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="block relative">
              <a
                href="#"
                className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100"
              >
                <span className="mr-3 text-xl">
                  {" "}
                  <i className="mdi mdi-apple-safari"></i>{" "}
                </span>
                <span>Apps</span>
                <span className="ml-2">
                  {" "}
                  <i className="mdi mdi-chevron-down"></i>{" "}
                </span>
              </a>
              <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1">
                <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
                <div className="bg-white rounded w-full relative z-10 py-1">
                  <ul className="list-reset">
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">Calender</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">Chat</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">Email</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        {" "}
                        <span className="flex-1">Todo</span>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
