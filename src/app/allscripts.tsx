"use client";
import Script from "next/script";

export default function AllScripts() {
  return (
    <>
      <Script
        src="/js/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
        onLoad={() => console.log("jquery-3.7.1.min.js loaded successfully")}
      />
      <Script
        src="/js/jquery.counterup.min.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log("jquery.counterup.min.js loaded successfully")
        }
      />
      <Script
        src="/js/jquery.magnific-popup.min.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log("jquery.magnific-popup.min.js loaded successfully")
        }
      />
      <Script
        src="/js/jquery.mb.YTPlayer.min.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log("jquery.mb.YTPlayer.min.js loaded successfully")
        }
      />
      <Script
        src="/js/jquery.slicknav.js"
        strategy="beforeInteractive"
        onLoad={() => console.log("jquery.slicknav.js loaded successfully")}
      />
      <Script
        src="/js/jquery.waypoints.min.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log("jquery.waypoints.min.js loaded successfully")
        }
      />
      <Script
        src="/js/bootstrap.min.js"
        strategy="afterInteractive"
        onLoad={() => console.log("bootstrap.min.js loaded successfully")}
      />
      <Script
        src="/js/gsap.min.js"
        strategy="afterInteractive"
        onLoad={() => console.log("gsap.min.js loaded successfully")}
      />
      <Script
        src="/js/magiccursor.js"
        strategy="afterInteractive"
        onLoad={() => console.log("magiccursor.js loaded successfully")}
      />
      <Script
        src="/js/parallaxie.js"
        strategy="afterInteractive"
        onLoad={() => console.log("parallaxie.js loaded successfully")}
      />
      <Script
        src="/js/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onLoad={() => console.log("ScrollTrigger.min.js loaded successfully")}
      />
      <Script
        src="/js/SmoothScroll.js"
        strategy="afterInteractive"
        onLoad={() => console.log("SmoothScroll.js loaded successfully")}
      />
      <Script
        src="/js/splitType.js"
        strategy="afterInteractive"
        onLoad={() => console.log("splitType.js loaded successfully")}
      />
      <Script
        src="/js/swiper-bundle.min.js"
        strategy="afterInteractive"
        onLoad={() => console.log("swiper-bundle.min.js loaded successfully")}
      />
      <Script
        src="/js/validator.min.js"
        strategy="afterInteractive"
        onLoad={() => console.log("validator.min loaded successfully")}
      />
      <Script
        src="/js/wow.js"
        strategy="afterInteractive"
        onLoad={() => console.log("wow.js loaded successfully")}
      />
      <Script
        src="/js/function.js"
        strategy="lazyOnload"
        onLoad={() => console.log("function.js loaded successfully")}
        onError={(e) => console.error("Error loading function.js:", e)}
      />
    </>
  );
}
