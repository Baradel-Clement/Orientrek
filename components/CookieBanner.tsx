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
          <Link href="/mentions-legales">
            Nous utilisons des <span className="aqua">cookies</span> sur notre
            site.
          </Link>

          <div className="">
            <button className="" onClick={() => setCookieConsent(false)}>
              Refuser
            </button>
            <button className="" onClick={() => setCookieConsent(true)}>
              Accepter
            </button>
          </div>
        </div>
      </>
    );
  }
}
