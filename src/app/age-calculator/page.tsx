"use client";
// Import necessary modules
import React, { useState } from "react";

// Define the AgeDetails type
type AgeDetails = {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  totalDays: number;
  totalWeeks: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
} | null;

// Define the AgeCalculator component
const AgeCalculator: React.FC = () => {
  // Define state variables
  const [birthdate, setBirthdate] = useState<string>("");
  const [ageDetails, setAgeDetails] = useState<AgeDetails>(null);

  // Function to calculate age
  const calculateAge = (birthdate: string): AgeDetails => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    const diff = today.getTime() - birthDate.getTime();

    // Calculate age in various formats
    const years = Math.round(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.round((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.round((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const totalMonths = years * 12 + months;
    const totalDays = Math.round(diff / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.round(totalDays / 7);
    const totalHours = Math.round(diff / (1000 * 60 * 60));
    const totalMinutes = Math.round(diff / (1000 * 60));
    const totalSeconds = Math.round(diff / 1000);

    return { years, months, days, totalMonths, totalDays, totalWeeks, totalHours, totalMinutes, totalSeconds };
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAgeDetails(calculateAge(birthdate));
  };

  // JSX for the AgeCalculator component
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Enter your birthdate:</span>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Calculate Age
        </button>
      </form>
      {ageDetails && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Your age is:</h2>
          <div className="mt-2">
            <div className="flex justify-between mb-4">
              <p>{ageDetails.years} years {ageDetails.months} months {ageDetails.days} days</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>{ageDetails.totalMonths} months {ageDetails.days} days</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>{ageDetails.totalWeeks} weeks {ageDetails.days} days</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>{ageDetails.totalDays} days</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>{ageDetails.totalHours} hours</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>{ageDetails.totalMinutes} minutes</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>{ageDetails.totalSeconds} seconds</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
