import Image from "next/image";
import SectionHeading from "../home/SectionHeading";

interface Member {
  src: string;
  name: string;
  profession: string;
}

const members: Member[] = [
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548311/about/members/sean_odd85e.png",
    name: "Sean Kim",
    profession: "Director",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548312/about/members/tien_zckard.png",
    name: "Trần Thủy Tiên",
    profession: "Office Manager",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548310/about/members/huy_tzkbcl.png",
    name: "Nguyễn Đức Huy",
    profession: "Full-stack Dev/Lecturer",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548311/about/members/minh_lkf4wf.png",
    name: "Nguyễn Văn Minh",
    profession: "Java Dev/Lecturer",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548311/about/members/phuc_eucbts.png",
    name: "Nguyễn Tuấn Phúc",
    profession: "Developer/Mentor",
  },

  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548311/about/members/nhu_okfmwy.png",
    name: "Võ T. Quỳnh Như",
    profession: "Marketer",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548312/about/members/trang1_pyrm6a.png",
    name: "Lê Quỳnh Trang",
    profession: "Korean Interpreter",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548311/about/members/loc_v3amar.png",
    name: "Nguyễn Phước Lộc",
    profession: "Editor",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548310/about/members/nhi_gtciq0.png",
    name: "Đặng Vân Nhi ",
    profession: "Designer",
  },
];

function MemberCard({ src, name, profession }: Member) {
  return (
    <div className="flex flex-col w-full h-full xs:max-w-sm overflow-hidden rounded shadow max-w-[280px]">
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
          <div className="grid gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            {members.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
