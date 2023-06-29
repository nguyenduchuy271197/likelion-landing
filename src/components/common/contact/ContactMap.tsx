import React from "react";

export default function ContactMap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.384990898187!2d106.70361307489534!3d10.781796989367301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4ec96fae79%3A0xda53c6fa6c52539a!2sLim%20Tower!5e0!3m2!1sen!2s!4v1688024071298!5m2!1sen!2s"
        width={600}
        height={550}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
