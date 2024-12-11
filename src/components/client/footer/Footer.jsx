import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      {/* Social Section */}
      <div className="border-b border-gray-300 py-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <p className="mb-4 lg:mb-0 text-center lg:text-left text-sm">
            Get connected with us on social networks:
          </p>
          <div className="flex space-x-4 justify-center">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h6 className="text-lg font-semibold uppercase mb-4 flex items-center text-gray-800">
                <i className="fas fa-gem mr-2"></i> Muscle Nutrition
              </h6>
              <p className="text-sm">
                Muscle Nutrition focuses on eating the right nutrients to
                support muscle growth and recovery. It involves consuming
                proteins for repair, carbs for energy, and healthy fats for
                overall health. Proper meal timing maximizes muscle
                development.
              </p>
            </div>

            {/* Menu Section */}
            <div>
              <h6 className="text-lg font-semibold uppercase mb-4 text-gray-800">
                Menu
              </h6>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#!"
                    className="text-sm text-gray-600 hover:text-gray-800 transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-sm text-gray-600 hover:text-gray-800 transition"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-sm text-gray-600 hover:text-gray-800 transition"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-sm text-gray-600 hover:text-gray-800 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Brands Section */}
            <div>
              <h6 className="text-lg font-semibold uppercase mb-4 text-gray-800">
                Brands
              </h6>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#!"
                    className="text-sm text-gray-600 hover:text-gray-800 transition"
                  >
                    Redcon1
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-sm text-gray-600 hover:text-gray-800 transition"
                  >
                    Optimum Nutrition
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-sm text-gray-600 hover:text-gray-800 transition"
                  >
                    Mass Gainer
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-sm text-gray-600 hover:text-gray-800 transition"
                  >
                    Nitro Tech
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h6 className="text-lg font-semibold uppercase mb-4 text-gray-800">
                Contact
              </h6>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <i className="fas fa-home mr-2"></i> Tunis, Ariena, Ennasr2
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>{" "}
                  Husseinlimem8@gmail.com
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2"></i> + 22 263 382
                </li>
                <li className="flex items-center">
                  <i className="fas fa-print mr-2"></i> + 21 556 717
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p>
            &copy; 2024 Muscle Sport. All Rights Reserved.{" "}
            <a
              href="https://yourwebsite.com"
              className="font-semibold text-gray-800 hover:underline"
            >
              YourWebsite.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
