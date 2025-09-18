import React from "react";

export default function ReachUs({isAdmin }) {
  // Google Maps Embed URL with red marker at CSIR-AMPRI location in Bhopal
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyC6fUPGsiJLAgEfwP22WhnoRRS63BzGFVE&q=CSIR-AMPRI+Bhopal+Hoshangabad+Road+462026&zoom=15`;

  return (
    <section className="w-full h-full flex flex-col items-center mb-4">
      <h2 className="text-center font-semibold text-xl mb-3 py-2">
        <span className="inline-block px-4  text-[#004080] text-2xl font-bold">Reach Us</span>
      </h2>
      <div className="w-[85%] h-[74%] flex justify-center">
        <iframe
          title="CSIR‑AMPRI Location"
          src={mapSrc}
          className="w-full h-full border rounded-lg shadow-lg"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

