import axios from "axios";

export const translateText = async (text, targetLang = "es", sourceLang = "en") => {
  const encodedText = encodeURIComponent(text);
  const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${sourceLang}|${targetLang}`;

  try {
    const response = await axios.get(url);
    return response.data.responseData.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // fallback to original
  }
};
