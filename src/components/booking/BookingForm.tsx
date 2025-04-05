"use client";

import React, { useState, FormEvent } from "react";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numPersons: string;
  numRooms: string;
  checkIn: string;
  checkOut: string;
  message: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    numPersons: "1",
    numRooms: "1",
    checkIn: "",
    checkOut: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 pt-48 max-w-6xl">
      <h1 className="font-outfit text-6xl font-bold mb-16 text-center">
        Buchungsanfrage
      </h1>

      {/* Company Information */}
      <div className="my-8 text-start font-outfit text-lg font-medium space-y-2">
        <h2>Stays Verwaltungs GmbH</h2>
        <p>Ernst-Zimmer-Straße 13</p>
        <p>88048 Friedrichshafen</p>
        <p>Tel.: +49 151 616 227 28</p>
        <p>
          Email:{" "}
          <a href="mailto:info@stays-bodensee.de">info@stays-bodensee.de</a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">
              Vorname
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 bg-white"
              placeholder="Vorname eingeben"
              required
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">
              Nachname
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 bg-white"
              placeholder="Name eingeben"
              required
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">
              E-Mail Adresse
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-white"
              placeholder="E-Mail Adresse eingeben"
              required
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">
              Telefonnummer
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-white"
              placeholder="Telefonnummer eingeben"
              required
            />
          </div>
        </div>

        {/* Booking Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">
              Anzahl der Personen
            </label>
            <input
              type="number"
              id="numPersons"
              name="numPersons"
              value={formData.numPersons}
              onChange={handleChange}
              min="1"
              className="w-full p-3 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">
              Anzahl Zimmer
            </label>
            <input
              type="number"
              id="numRooms"
              name="numRooms"
              value={formData.numRooms}
              onChange={handleChange}
              min="1"
              className="w-full p-3 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">
              Ankunft
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full p-3 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">
              Abreise
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full p-3 bg-white"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="firstName" className="block mb-2 font-medium">
            Deine Nachricht oder Fragen
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 bg-white"
            placeholder="Gib deine Nachricht ein"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#1FB3D3] text-white px-8 py-3 hover:bg-[#1ba8bd] transition-colors"
          >
            Jetzt Anfragen →
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
