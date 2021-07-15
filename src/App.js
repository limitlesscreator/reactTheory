import React, { useState } from "react";
import friendlyWords from "friendly-words";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import "./styles.css";

let backgrounds = [
    "Noble",
    "Urchin",
    "Folk Hero",
    "Acolyte",
    "Criminal",
    "Hermit",
    "Guild Artisan",
    "Sage"
];

function randomBackground() {
    return backgrounds[
        Math.floor(Math.random() * backgrounds.length)
        ];
}

function randomName() {
    let array = friendlyWords.predicates;
    let string =
        array[Math.floor(Math.random() * array.length)];
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function App() {
    let [darkMode, setDarkMode] = useState(false);
    let [name, setName] = useState("");
    let [background, setBackground] = useState("");
    let [error, setError] = useState(null);

    function handleBackgroundSelect(value) {
        setBackground(value);
        if (!backgrounds.includes(value)) {
            setError("This background does NOT exist.");
        } else {
            setError(null);
        }
    }

    return (
        <div className={`App ${darkMode ? "darkmode" : ""}`}>
            <button
                onClick={() => {
                    setDarkMode(!darkMode);
                }}
            >
                Dark Mode {darkMode ? "ON" : "OFF"}
            </button>{" "}
            <br />
            <input
                type="text"
                placeholder="Type your name"
                value={name}
                onChange={event => {
                    setName(event.target.value);
                    if (event.target.value.length > 15) {
                        setError("Name is WAY too long, bucko.");
                    }
                }}
            />
            <Combobox onSelect={handleBackgroundSelect}>
                <ComboboxInput
                    aria-labelledby="back"
                    placeholder="Choose your background"
                    autocomplete
                    onChange={event => {
                        handleBackgroundSelect(event.target.value);
                    }}
                />
                <ComboboxPopover
                    className={`${darkMode ? "darkmode" : ""}`}
                >
                    <ComboboxList aria-labelledby="back">
                        {backgrounds.map(b => {
                            return <ComboboxOption value={b} />;
                        })}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
            {error && (
                <div className="error">
                    {error}
                    <button
                        onClick={() => {
                            setError(null);
                        }}
                    >
                        Dismiss
                    </button>
                </div>
            )}
            <div className="sheet">
                <h2>Name: {name}</h2>
                <h2>Background: {background}</h2>
            </div>
            <button
                onClick={() => {
                    setName(randomName());
                    setBackground(randomBackground());
                }}
            >
                Do it all for me instead
            </button>
        </div>
    );
}
