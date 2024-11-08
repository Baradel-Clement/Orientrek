import Link from "next/link";
import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";
import { useRouter } from "next/router";

export default function CookieBanner() {
  const router = useRouter();

  const [cookieConsent, setCookieConsent] = useState(false);
  const [bannerDisplay, setBannerDisplay] = useState(true);

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
  }, [cookieConsent]);

  if (router.pathname !== "/mentions-legales") {
    return (
      <>
        <div
          onClick={() => setBannerDisplay(false)}
          className={`CookieBanner-shadow ${
            cookieConsent != null || bannerDisplay === false ? "none" : ""
          } `}
        />
        <div
          className={`CookieBanner ${
            cookieConsent != null || bannerDisplay === false ? "none" : ""
          } `}
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
}
