import React, { useState } from 'react';
import axios from 'axios';

const Translate = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default target language is Spanish

  const handleTranslate = async () => {
    const apiKey = 'YOUR_API_KEY';
    const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';
    const url = `${endpoint}&to=${targetLanguage}`;

    try {
      const response = await axios.post(url, [{ text }], {
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
          'Content-Type': 'application/json'
        }
      });
      setTranslatedText(response.data[0].translations[0].text);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div>
      <h2>Text Translator</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh-Hans">Chinese (Simplified)</option>
        <option value="hi">Hindi</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={handleTranslate}>Translate</button>
      <p>Translated Text: {translatedText}</p>
    </div>
  );
};

export default Translate;
