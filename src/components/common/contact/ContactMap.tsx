import React from "react";

export default function ContactMap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.525547956533!2d106.69207957489512!3d10.771001689377435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e7dee6a81%3A0x7b33c4fd1365dc2f!2zNzYgxJAuIEzDqiBMYWksIFBoxrDhu51uZyBC4bq_biBUaMOgbmgsIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1686818487130!5m2!1sen!2s"
        width={600}
        height={550}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full border-0"
      />
    </div>
  );
}
