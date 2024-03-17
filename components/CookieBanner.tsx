import Link from "next/link";
import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);
  return (
    <div className={`CookieBanner ${cookieConsent != null ? "none" : ""} `}>
      <div className="">
        <Link href="/mentions-legales">
          <p>
            Nous utilisons des <span className="">cookies</span> sur notre site.
          </p>
        </Link>
      </div>

      <div className="">
        <button className="" onClick={() => setCookieConsent(false)}>
          Refuser
        </button>
        <button className="" onClick={() => setCookieConsent(true)}>
          Accepter
        </button>
      </div>
    </div>
  );
}
