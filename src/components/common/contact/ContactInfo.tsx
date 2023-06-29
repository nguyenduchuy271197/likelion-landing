import Image from "next/image";

const contacts: Contact[] = [
  {
    icon: "/img/contact/icons/office-building.png",
    label: "Office",
    value:
      "Tầng 25, Tòa nhà Lim Tower, 9 - 11 Tôn Đức Thắng, Phường Bến Nghé, Quận 1, TP. HCM",
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
        <div className="py-10 sm:pb-20">
          <h2 className="pb-2 mb-10 text-3xl font-medium text-center transition-colors scroll-m-20 first:mt-0">
            Hoặc bạn có thể tìm chúng tôi tại
          </h2>

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
