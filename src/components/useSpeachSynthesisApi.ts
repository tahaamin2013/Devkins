// useSpeachSynthesisApi.js
import { useCallback, useState } from "react";

export const useSpeachSynthesisApi = () => {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isResumed, setIsResumed] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [language, setLanguage] = useState("en-US"); // Default language is English

  const speak = useCallback(() => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = language; // Set the language
    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
    setIsSpeaking(true);
    setIsEnded(false);
  }, [text, language]);

  const pause = useCallback(() => {
    function pause() {
      window.speechSynthesis.pause();
    }
    pause();
    setIsPaused(true);
    setIsSpeaking(false);
    setIsEnded(false);
    setIsResumed(false);
  }, []);

  const resume = useCallback(() => {
    function resume() {
      window.speechSynthesis.resume();
    }
    resume();
    setIsPaused(false);
    setIsSpeaking(false);
    setIsEnded(false);
    setIsResumed(true);
  }, []);

  const cancel = useCallback(() => {
    function cancel() {
      window.speechSynthesis.cancel();
    }
    cancel();
    setIsPaused(false);
    setIsResumed(false);

    setIsSpeaking(false);
    setIsEnded(true);
  }, []);

  return {
    text,
    setText,
    isSpeaking,
    isPaused,
    isResumed,
    isEnded,
    speak,
    pause,
    resume,
    cancel,
    setLanguage,
  };
};
