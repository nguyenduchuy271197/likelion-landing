import React from "react";

export default function ContactMap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.6077868661287!2d106.7245549!3d10.7308338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525f46b232607%3A0x784e860aec9c7081!2sCOBI%20TOWER%202!5e1!3m2!1sen!2s!4v1740371027528!5m2!1sen!2s"
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
