'use client'

import React, { useState } from 'react';

const BinaryConverter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [conversionType, setConversionType] = useState<'textToBinary' | 'binaryToText'>('textToBinary');

  const textToBinary = (text: string) => {
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
  };

  const binaryToText = (binary: string) => {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    if (conversionType === 'textToBinary') {
      setOutput(textToBinary(newInput));
    } else {
      setOutput(binaryToText(newInput));
    }
  };

  const handleConversionTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as 'textToBinary' | 'binaryToText';
    setConversionType(newType);
    setInput('');
    setOutput('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Binary Converter</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Conversion Type</label>
        <select
          value={conversionType}
          onChange={handleConversionTypeChange}
          className="p-2 border rounded w-full"
        >
          <option value="textToBinary">Text to Binary</option>
          <option value="binaryToText">Binary to Text</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Input</label>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Output</label>
        <input
          type="text"
          value={output}
          readOnly
          className="mt-1 p-2 border rounded w-full bg-gray-100"
        />
      </div>
    </div>
  );
};

export default BinaryConverter;
