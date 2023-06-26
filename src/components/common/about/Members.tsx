import Image from "next/image";
import SectionHeading from "../home/SectionHeading";

interface Member {
  src: string;
  name: string;
  profession: string;
}

const members: Member[] = [
  {
    src: "/img/about/members/sean.png",
    name: "Sean Kim",
    profession: "Director",
  },
  {
    src: "/img/about/members/tien.png",
    name: "Trần Thủy Tiên",
    profession: "Office Manager",
  },
  {
    src: "/img/about/members/huy.png",
    name: "Nguyễn Đức Huy",
    profession: "Full-stack Dev/Lecturer",
  },
  {
    src: "/img/about/members/minh.png",
    name: "Nguyễn Văn Minh",
    profession: "Java Dev/Lecturer",
  },
  {
    src: "/img/about/members/phuc.png",
    name: "Nguyễn Tuấn Phúc",
    profession: "Developer/Mentor",
  },

  {
    src: "/img/about/members/nhu.png",
    name: "Võ T. Quỳnh Như",
    profession: "Marketer",
  },
  {
    src: "/img/about/members/trang2.png",
    name: "Ng. T. Minh Trang",
    profession: "Content Marketer",
  },
  {
    src: "/img/about/members/trang1.png",
    name: "Lê Quỳnh Trang",
    profession: "Korean Interpreter",
  },
  {
    src: "/img/about/members/loc.png",
    name: "Nguyễn Phước Lộc",
    profession: "Editor",
  },
  {
    src: "/img/about/members/nhi.png",
    name: "Đặng Vân Nhi ",
    profession: "Designer",
  },
];

function MemberCard({ src, name, profession }: Member) {
  return (
    <div className="flex flex-col w-full h-full max-w-sm overflow-hidden rounded shadow">
      <div className="aspect-[1/1] relative bg-[#ff8d3f]">
        <Image src={src} alt={name} fill />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-muted-foreground">{profession}</p>
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <section>
      <div className="container">
        <div className="py-20">
          <SectionHeading
            title="Đội ngũ của chúng tôi"
            subtitle="Mỗi mảnh ghép của LIKELION đều làm việc chăm chỉ, đam mê và nhiệt huyết cống hiến cho giáo dục. Chúng tôi đều nỗ lực để phục vụ cho sứ mệnh “Mang lập trình tiếp cận mọi đối tượng”. "
          />
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            {members.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
