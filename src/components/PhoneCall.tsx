import { Phone } from "lucide-react";

//  #ff7100
export default function PhoneCall() {
  return (
    <a href="tel:+84867133779" rel="nofollow" className="btn-call">
      <div className="btn-call__ico">
        <Phone className="w-6 h-6 transition group-hover:-rotate-12" />
      </div>
    </a>
  );
}
