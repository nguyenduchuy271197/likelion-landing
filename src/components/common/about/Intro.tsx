import Image from "next/image";
import SectionHeading from "../home/SectionHeading";

export default function Intro() {
  return (
    <section>
      <div className="container">
        <div className="grid items-center gap-16 py-10 md:gap-8 sm:py-20 md:grid-cols-2 place-items-center">
          <div className="grid grid-cols-2 gap-6 max-w-[420px] w-full">
            <div className="relative aspect-[1/1] w-full rounded-3xl overflow-hidden">
              <Image src="/img/about/intro/pic1.png" alt="LIKELION" fill />
            </div>
            <div className="relative aspect-[1/1] w-full rounded-full overflow-hidden">
              <Image src="/img/about/intro/pic2.png" alt="LIKELION" fill />
            </div>
            <div className="relative aspect-[1/1] w-full rounded-full overflow-hidden">
              <Image src="/img/about/intro/pic3.png" alt="LIKELION" fill />
            </div>
            <div className="relative aspect-[1/1] w-full rounded-3xl overflow-hidden">
              <Image src="/img/about/intro/pic4.png" alt="LIKELION" fill />
            </div>
          </div>
          <div>
            <div className="md:max-w-[420px]">
              <SectionHeading
                title="LIKELION là ai?"
                className="mb-6 text-left max-w-none"
              />
              <p className="sm:text-lg text-muted-foreground">
                LIKELION là trung tâm đào tạo lập trình chất lượng tại Việt Nam.
                Chúng tôi không gò bó bản thân trong phương pháp giáo dục truyền
                thống. Bạn sẽ được học từ những chuyên gia trong ngành, tiếp cận
                mô hình học hiện đại và chương trình đào tạo chuyên sâu đáp ứng
                nhu cầu thực thế của thị trường công nghệ.
                <br />
                <br />
                Dù xuất phát điểm ở đâu, bạn đều có thể chinh phục lập trình
                cùng LIKELION.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
