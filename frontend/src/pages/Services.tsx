import React, { useState } from "react";
import {
  Wind,
  Hammer,
  Sparkles,
  Wrench,
  Snowflake,
  Paintbrush,
} from "lucide-react";

const Services = () => {
  const [sortKey, setSortKey] = useState("brand");
  const [sortDirection, setSortDirection] = useState("asc");
  const acPrices = [
    { brand: "Chiq", hp: "1.0 HP", price: "RM 1,199" },
    { brand: "Chiq", hp: "1.5 HP", price: "RM 1,399" },
    { brand: "Chiq", hp: "2.0 HP", price: "RM 1,599" },
    { brand: "Acson", hp: "1.0 HP", price: "RM 1,599" },
    { brand: "Acson", hp: "1.5 HP", price: "RM 1,799" },
    { brand: "Acson", hp: "2.0 HP", price: "RM 2,299" },
    { brand: "Mitsubishi", hp: "1.0 HP", price: "RM 1,899" },
    { brand: "Mitsubishi", hp: "1.5 HP", price: "RM 2,199" },
    { brand: "Mitsubishi", hp: "2.0 HP", price: "RM 2,699" },
    { brand: "Aux", hp: "1.0 HP", price: "RM 1,299" },
    { brand: "Aux", hp: "1.5 HP", price: "RM 1,499" },
    { brand: "Haier", hp: "1.0 HP", price: "RM 1,399" },
    { brand: "Haier", hp: "1.5 HP", price: "RM 1,699" },
    { brand: "Hisense", hp: "1.0 HP", price: "RM 1,299" },
    { brand: "Hisense", hp: "1.5 HP", price: "RM 1,599" },
    { brand: "Panasonic", hp: "1.0 HP", price: "RM 1,799" },
    { brand: "Panasonic", hp: "1.5 HP", price: "RM 2,099" },
  ];

  const sortedPrices = [...acPrices].sort((a, b) => {
    let valA = a[sortKey];
    let valB = b[sortKey];

    if (sortKey === "price") {
      valA = parseFloat(valA.replace(/[^\d.]/g, ""));
      valB = parseFloat(valB.replace(/[^\d.]/g, ""));
    } else if (sortKey === "hp") {
      valA = parseFloat(valA);
      valB = parseFloat(valB);
    } else {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }

    if (valA < valB) return sortDirection === "asc" ? -1 : 1;
    if (valA > valB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const toggleDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* AC Sales & Installation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    Air Conditioner Sales & Installation
                  </h3>
                  <p className="text-blue-100">
                    Choose from top brands with professional installation
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0">
                  <select
                    value={sortKey}
                    onChange={(e) => setSortKey(e.target.value)}
                    className="bg-white text-gray-900 rounded-lg px-3 py-2 border border-gray-300"
                  >
                    <option value="brand">Brand</option>
                    <option value="hp">Horsepower</option>
                    <option value="price">Price</option>
                  </select>
                  <button
                    onClick={toggleDirection}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    {sortDirection === "asc" ? "Ascending ↑" : "Descending ↓"}
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">
                        Brand/Model
                      </th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">
                        Horsepower (HP)
                      </th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sortedPrices.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {item.brand}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{item.hp}</td>
                        <td className="px-6 py-4 font-semibold text-blue-600">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AC Repair & Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Repair Services</h4>
              <p className="text-gray-600">
                Professional AC repair to restore cooling efficiency and
                performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Snowflake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Gas Refill</h4>
              <p className="text-gray-600">
                High-quality refrigerant refill to keep your AC running cold and
                efficiently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Wind className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">General Service</h4>
              <p className="text-gray-600">
                Comprehensive maintenance to extend lifespan and reduce energy
                consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-6">
              <h3 className="text-2xl font-bold">Cleaning Services</h3>
              <p className="text-green-100">
                Keep your home fresh and healthy with our professional cleaning
                services
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Home Cleaning</h4>
                <p className="text-gray-600">
                   cleaning for a fresh, spotless home environment.
                </p>
              </div>
              <div className="text-center">
                <Hammer className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Post-Renovation Cleaning</h4>
                <p className="text-gray-600">
                  Thorough cleaning after renovation to remove dust and debris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-yellow-600 text-white p-6">
              <h3 className="text-2xl font-bold">Renovation Services</h3>
              <p className="text-yellow-100">
                Transform your space with our expert renovation solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 p-6">
              <div className="text-center">
                <Hammer className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Carpentry</h4>
                <p className="text-gray-600">
                  Custom woodwork and furniture tailored to your needs.
                </p>
              </div>
              <div className="text-center">
                <Paintbrush className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Painting</h4>
                <p className="text-gray-600">
                  Interior and exterior painting with premium finishes.
                </p>
              </div>
              <div className="text-center">
                <Wrench className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">General Renovation</h4>
                <p className="text-gray-600">
                  Complete home and office renovation projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Service?
          </h2>
          <p className="text-blue-100 mb-6">
            Contact us today for a free consultation and quote.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
