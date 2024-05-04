"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";
import { usePathname } from "next/navigation";

export default function CookieBanner() {
  if (typeof window === "undefined") return null;
  const pathname = usePathname()

  const [cookieConsent, setCookieConsent] = useState(false);
  const [bannerDisplay, setBannerDisplay] = useState(true);

  useEffect(() => {
    console.log('in useeffect');
    
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    console.log('in useeffect');
    
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  if (pathname !== "/mentions-legales") {
    return (
      <>
        <div
          onClick={() => setBannerDisplay(false)}
          className={`CookieBanner-shadow ${cookieConsent !== null || bannerDisplay === false ? "none" : ""} `}
        ></div>
        <div
          className={`CookieBanner ${cookieConsent !== null || bannerDisplay === false ? "none" : ""} `}
        >
          <p>
            L'éditeur du site souhaite utiliser des cookies de mesure de trafic
            afin d'améliorer et faciliter votre navigation future. <br />
            Autorisez-vous l'utilisation de ces indicateurs ?
          </p>

          <div>
            <button onClick={() => setCookieConsent(false)}>Refuser</button>
            <button onClick={() => setCookieConsent(true)}>Accepter</button>
          </div>
          <p>Orientrek respecte votre vie privée et vous informe.</p>
          <Link href="/mentions-legales" className="aqua">
            En savoir plus sur les cookies de mesure.
          </Link>
        </div>
      </>
    );
  }
  return null;
}
