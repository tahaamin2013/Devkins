'use client'

import { useState } from 'react';
import { differenceInYears, differenceInMonths, differenceInDays, addYears, addMonths, addDays } from 'date-fns';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [ageDetails, setAgeDetails] = useState<{
    years: number;
    months: number;
    days: number;
    totalMonths: number;
    totalWeeks: number;
    remainingDaysAfterWeeks: number;
    totalDays: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
  } | null>(null);

  const calculateAgeDetails = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();

    let years = differenceInYears(today, birthDate);
    let months = differenceInMonths(today, addYears(birthDate, years));
    let days = differenceInDays(today, addMonths(addYears(birthDate, years), months));

    // Adjust if days < 0
    if (days < 0) {
      months -= 1;
      days = differenceInDays(today, addMonths(addYears(birthDate, years), months));
    }

    // Adjust if months < 0
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalMonths = years * 12 + months;
    const totalDays = differenceInDays(today, birthDate);
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDaysAfterWeeks = totalDays % 7;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    setAgeDetails({
      years,
      months,
      days,
      totalMonths,
      totalWeeks,
      remainingDaysAfterWeeks,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    calculateAgeDetails(birthdate);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Age Calculator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Calculate Age
        </button>
      </form>
      {ageDetails && (
        <div className="mt-4 text-2xl">
          <p>{ageDetails.years} years {ageDetails.months} months {ageDetails.days} days</p>
          <p>or {ageDetails.totalMonths} months {ageDetails.days} days</p>
          <p>or {ageDetails.totalWeeks} weeks {ageDetails.remainingDaysAfterWeeks} days</p>
          <p>or {ageDetails.totalDays} days</p>
          <p>or {ageDetails.totalHours.toLocaleString()} hours</p>
          <p>or {ageDetails.totalMinutes.toLocaleString()} minutes</p>
          <p>or {ageDetails.totalSeconds.toLocaleString()} seconds</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
