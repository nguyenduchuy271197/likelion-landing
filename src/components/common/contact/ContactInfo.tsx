import { LucideIcon, LucideProps } from "lucide-react";

const contacts: Contact[] = [
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M112.5 12.5H37.5C30.5964 12.5 25 18.0964 25 25V125C25 131.904 30.5964 137.5 37.5 137.5H112.5C119.404 137.5 125 131.904 125 125V25C125 18.0964 119.404 12.5 112.5 12.5Z"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56.25 137.5V112.5H93.75V137.5"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 37.5H50.0625"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 37.5H100.063"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M75 37.5H75.0625"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M75 62.5H75.0625"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M75 87.5H75.0625"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 62.5H100.063"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 87.5H100.063"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 62.5H50.0625"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 87.5H50.0625"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Office",
    value:
      "Tầng 25, Tòa nhà Lim Tower, 9 - 11 Tôn Đức Thắng, Phường Bến Nghé, Quận 1, TP. HCM",
  },
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M137.5 105.75V124.5C137.507 126.241 137.151 127.964 136.453 129.558C135.756 131.153 134.733 132.585 133.45 133.762C132.168 134.938 130.654 135.834 129.005 136.392C127.356 136.95 125.609 137.157 123.875 137C104.643 134.91 86.1687 128.338 69.9375 117.812C54.8364 108.217 42.0333 95.4136 32.4375 80.3125C21.8749 64.0075 15.3015 45.4437 13.25 26.125C13.0938 24.3967 13.2992 22.6548 13.8531 21.0102C14.407 19.3656 15.2973 17.8543 16.4673 16.5726C17.6373 15.291 19.0613 14.2669 20.6487 13.5658C22.2361 12.8646 23.9521 12.5016 25.6875 12.5H44.4375C47.4707 12.4701 50.4112 13.5442 52.711 15.5221C55.0108 17.4999 56.513 20.2465 56.9375 23.25C57.7289 29.2504 59.1966 35.142 61.3125 40.8125C62.1534 43.0495 62.3354 45.4807 61.8369 47.818C61.3384 50.1553 60.1804 52.3007 58.5 54L50.5625 61.9375C59.4597 77.5847 72.4153 90.5403 88.0625 99.4375L96 91.5C97.6993 89.8196 99.8447 88.6616 102.182 88.1631C104.519 87.6646 106.95 87.8466 109.187 88.6875C114.858 90.8034 120.75 92.2711 126.75 93.0625C129.786 93.4908 132.559 95.02 134.541 97.3593C136.523 99.6986 137.576 102.685 137.5 105.75Z"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Call us",
    value: "(+84) 867 133 779",
  },
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M125 25H25C18.0964 25 12.5 30.5964 12.5 37.5V112.5C12.5 119.404 18.0964 125 25 125H125C131.904 125 137.5 119.404 137.5 112.5V37.5C137.5 30.5964 131.904 25 125 25Z"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M137.5 43.75L81.4375 79.375C79.5079 80.5839 77.277 81.2251 75 81.2251C72.723 81.2251 70.4921 80.5839 68.5625 79.375L12.5 43.75"
          stroke="black"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Mail us",
    value: "likelion.vn@likelion.net",
  },
];

interface Contact {
  icon: (props: LucideProps) => JSX.Element;
  label: string;
  value: string;
}

function ContactInfoCard({ icon: Icon, label, value }: Contact) {
  return (
    <div className="flex flex-col items-center p-8 text-center border rounded-xl">
      <Icon className="w-16 h-16 text-black" />

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
