"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<string>("");

  const generatePassword = () => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let characterPool = "";

    if (includeUppercase) characterPool += upperCaseLetters;
    if (includeLowercase) characterPool += lowerCaseLetters;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    if (!characterPool) {
      toast.error("Please select at least one character type!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }
    setPassword(generatedPassword);
    setPasswordStrength(checkPasswordStrength(generatedPassword));
  };

  const checkPasswordStrength = (password: string): string => {
    let strengthScore = 0;
    if (password.length >= 8) strengthScore++;
    if (password.length >= 12) strengthScore++;
    if (/[A-Z]/.test(password)) strengthScore++;
    if (/[a-z]/.test(password)) strengthScore++;
    if (/\d/.test(password)) strengthScore++;
    if (/[^A-Za-z0-9]/.test(password)) strengthScore++;

    if (strengthScore <= 2) return "Weak";
    if (strengthScore <= 4) return "Medium";
    return "Strong";
  };

  return (
    <div className="flex flex-col overflow-hidden items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-4 rounded-xl border px-7 mx-4">
        <h1 className="text-4xl font-bold mb-8">Password Generator</h1>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-semibold">
            Password Length:
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min="1"
              max="128"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2"
            />
            Include Uppercase Letters
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="mr-2"
            />
            Include Lowercase Letters
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            Include Numbers
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>
        <button
          onClick={generatePassword}
          className="bg-primary text-white  py-2 px-4 rounded-md"
        >
          Generate Password
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Password</h2>
          <p className="text-lg font-mono break-words bg-white p-4 border rounded-md">
            {password}
          </p>
          <p className="text-lg font-semibold mt-2">
            <span
              className={`font-bold ${
                passwordStrength === "Strong"
                  ? "text-green-500"
                  : passwordStrength === "Medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {passwordStrength}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
