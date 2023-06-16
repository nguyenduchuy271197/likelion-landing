import Image from "next/image";

const contacts: Contact[] = [
  {
    icon: "/img/contact/icons/office-building.png",
    label: "Office",
    value: "76 Lê Lai, phường Bến Thành, Quận 1, TP.HCM",
  },
  {
    icon: "/img/contact/icons/call.png",
    label: "Call us",
    value: "(+84) 867 133 779",
  },
  {
    icon: "/img/contact/icons/mail.png",
    label: "Mail us",
    value: "likelion.vn@likelion.net",
  },
];

interface Contact {
  icon: string;
  label: string;
  value: string;
}

function ContactInfoCard({ icon, label, value }: Contact) {
  return (
    <div className="flex flex-col items-center p-8 text-center border rounded-xl">
      <div className="w-[60px] aspect-[1/1] relative">
        <Image
          src={icon}
          alt={label}
          fill
          className="object-contain w-full h-full"
        />
      </div>
      <div className="mt-6">
        <h3 className="mb-1 text-xl font-medium tracking-wide scroll-m-20">
          {label}
        </h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div>
      <div className="container">
        <div className="py-10 sm:py-20">
          {/* Heading */}
          {/* <div className="max-w-xl py-10 mx-auto mb-10 text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
              Liên hệ
            </h2>
            <p className="text-xl text-muted-foreground">
              Chúng tôi muốn lắng nghe từ bạn để hiểu nhau hơn
            </p>
          </div> */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact) => (
              <ContactInfoCard {...contact} key={contact.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
