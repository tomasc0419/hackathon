
'use client';

import {useState} from 'react';

export default function PasswordGen(){
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(false);

    const generatePassword = () => {
        let chars = "";
        let newPassword = "";

        const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+[]{}<>?/";

        if (uppercase) chars += upperChars;
        if (lowercase) chars += lowerChars;
        if (numbers) chars += numberChars;
        if (symbols) chars += symbolChars;

        if (chars === "") {
        setPassword("");
        return;
        }

        for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        newPassword += chars[randomIndex];
        }

        setPassword(newPassword);
    };

    const copyPassword = async () => {
        if (!password) return;
        await navigator.clipboard.writeText(password);
    };


    const getStrength = () => {
        let score = 0;

        if (length >= 8) score++;
        if (length >= 12) score++;
        if (uppercase) score++;
        if (lowercase) score++;
        if (numbers) score++;
        if (symbols) score++;

        if (score <= 2) return { label: "Weak", color: "text-red-500" };
        if (score <= 4) return { label: "Medium", color: "text-orange-500" };
        return { label: "Strong", color: "text-green-500" };
    };

    const strength = getStrength();

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow">
            <h1 className="text-center text-2xl font-bold text-gray-900">PASSWORD GENERATOR</h1>
            <p className="mt-1 text-center text-sm text-gray-600">
            Create strong and secure passwords to keep your account safe online.
            </p>

            <div className="mt-6 flex gap-2">
            <input
                type="text"
                value={password}
                readOnly
                className="w-full rounded border px-3 py-2 text-sm outline-none text-gray-900"
            />
            <button
                onClick={copyPassword}
                className="rounded bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500"
            >
                Copy
            </button>
            </div>

            
            <p className={`mt-3 text-sm font-medium ${strength.color}`}>
            {strength.label}
            </p>

            <div className="mt-5">
            <p className="mb-2 text-sm text-gray-900">Password Length {length}</p>
            <input
                type="range"
                min="5"
                max="20"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full"
            />
            </div>

            <div className="mt-5 space-y-3 text-sm text-gray-900">
            <div className="flex items-center justify-between">
                <label>Uppercase</label>
                <input
                type="checkbox"
                checked={uppercase}
                onChange={() => setUppercase(!uppercase)}
                />
            </div>

            <div className="flex items-center justify-between">
                <label>Lowercase</label>
                <input
                type="checkbox"
                checked={lowercase}
                onChange={() => setLowercase(!lowercase)}
                />
            </div>

            <div className="flex items-center justify-between">
                <label>Numbers</label>
                <input
                type="checkbox"
                checked={numbers}
                onChange={() => setNumbers(!numbers)}
                />
            </div>

            <div className="flex items-center justify-between">
                <label>Special Characters</label>
                <input
                type="checkbox"
                checked={symbols}
                onChange={() => setSymbols(!symbols)}
                />
            </div>
            </div>

            <button
            onClick={generatePassword}
            className="mt-6 w-full rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
            Generate Password
            </button>
        </div>
        </div>
    );
    
}
