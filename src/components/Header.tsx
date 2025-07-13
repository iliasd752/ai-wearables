import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onAddWearable?: () => void;
}

const Header = ({ onAddWearable }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">AI Wearables</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors no-underline"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors no-underline"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors no-underline"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              Categories
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors no-underline"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              Reviews
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors no-underline"
              style={{ textDecoration: "none", color: "#374151" }}
            >
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors no-underline"
                style={{ textDecoration: "none", color: "#374151" }}
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors no-underline"
                style={{ textDecoration: "none", color: "#374151" }}
              >
                Products
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors no-underline"
                style={{ textDecoration: "none", color: "#374151" }}
              >
                Categories
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors no-underline"
                style={{ textDecoration: "none", color: "#374151" }}
              >
                Reviews
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors no-underline"
                style={{ textDecoration: "none", color: "#374151" }}
              >
                About
              </a>

              {/* Mobile Actions */}
              <div className="flex items-center space-x-2 px-3 py-2">
                <button className="p-2 text-gray-400 hover:text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                  <Search className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                  <User className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
