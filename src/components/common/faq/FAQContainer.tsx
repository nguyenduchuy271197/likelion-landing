import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const faq = [
  {
    id: "tong-quan",
    label: "Tổng quan",
    href: "#tong-quan",
    items: [
      {
        question: "LIKELION là ai?",
        answer:
          "Được thành lập từ 2013, LIKELION hiện là công ty đào tạo lập trình hàng đầu Hàn Quốc. Với mong muốn đem lập trình đến với mọi đối tượng, chúng tôi đã mở rộng quy mô ra 6 quốc gia, bao gồm Việt Nam. <br/> <br/>Sự ưu tiên hàng đầu của chúng tôi luôn là chất lượng giảng dạy. LIKELION Việt Nam mang đến lộ trình đào tạo được biên soạn khoa học và đầu ra hấp dẫn cho các bạn học viên.",
      },
      {
        question: "LIKELION dạy những gì?",
        answer:
          "LIKELION là công ty đào tạo lập trình. Chúng tôi mang đến các khoá học chất lượng giúp bạn trang bị hành trang cần thiết để theo đuổi lập trình. Dù bạn đã có kinh nghiệm hay chưa từng tiếp xúc với code, bạn đều có thể tìm khoá học phù hợp cho mình. <br/><br/>Bạn có thể đăng ký tư vấn <a href='/contact' target='_blank'>tại đây</a>",
      },
      {
        question: "Ai có thể tham gia khoá học tại LIKELION?",
        answer:
          "Lập trình không phân biệt đối tượng. Chúng tôi cung cấp các khoá học lập trình cho cả người đã có kiến thức cơ bản và người chưa có kiến thức lập trình. <br/><br/>Chỉ cần bạn có quyết tâm, không bao giờ là quá muộn để bắt đầu học lập trình. Bắt đầu ngay từ hôm nay bằng việc <a href='/contact' target='_blank'>liên hệ tư vấn</a> để tìm khoá học cho mình.",
      },
    ],
  },
  {
    id: "khoa-hoc",
    label: "Khoá học",
    href: "#khoa-hoc",
    items: [
      {
        question: "Các khoá học có yêu cầu đầu vào không?",
        answer:
          "Yêu cầu về kiến thức đầu vào của các khoá học sẽ thay đổi tuỳ theo lớp. Các bạn có thể xem yêu cầu đầu vào ở phần miêu tả chi tiết về khoá học.",
      },
      {
        question: "Mỗi lớp có bao nhiêu học viên?",
        answer:
          "Nhằm đảm bảo chất lượng giảng dạy và sự hỗ trợ 1-1 kịp thời, số lượng học viên của mỗi lớp thường được giới hạn 25 học viên/lớp.",
      },
      {
        question: "Thời gian khai giảng của các khoá học như thế nào?",
        answer:
          "Xem thêm các khoá học sắp được khai giảng <a href='/#courses' target='_blank'>tại đây</a>.",
      },
      {
        question: "Thời gian và lộ trình khoá học như thế nào?",
        answer:
          "Thời gian và lộ trình sẽ thay đổi tuỳ theo lớp. Các bạn có thể xem yêu cầu đầu vào ở phần miêu tả chi tiết về khoá học.",
      },
      {
        question: "Tôi cần chuẩn bị gì khi tham gia khoá học?",
        answer:
          "Bạn chỉ cần chuẩn bị máy tính và một tinh thần sẵn sàng đương đầu với khó khăn. Chúng tôi sẽ gửi email chi tiết thông tin về khoá học trước khi khai giảng.",
      },
      {
        question: "LIKELION có hỗ trợ việc làm sau khoá học không?",
        answer:
          "Chúng tôi hỗ trợ bạn ngay từ bước chuẩn bị CV và portfolio để thành công ứng tuyển trong môi trường việc làm cạnh tranh ngày nay. Ngoài ra, chúng tôi còn liên kết giới thiệu bạn ứng tuyển tại các công ty lập trình hàng đầu trong mạng lưới đối tác của LIKELION.",
      },
    ],
  },
  {
    id: "hoc-phi",
    label: "Học phí",
    href: "#hoc-phi",
    items: [
      {
        question: "Học phí của các khoá học là bao nhiêu?",
        answer:
          "Do sự đa dạng trong hình thức, thời gian, và lộ trình đào tạo, học phí của mỗi khoá sẽ khác nhau. Bạn có thể xem học phí tại phần nội dung chi tiết về khoá học.",
      },
      {
        question: "Hình thức thanh toán học phí như thế nào?",
        answer:
          "Chúng tôi hiện chỉ nhận thanh toán học phí qua hình thức chuyển khoản. Nếu bạn có vấn đề với việc thanh toán, <a href='/contact' target='_blank'>liên hệ</a> LIKELION để được hỗ trợ hình thức thanh toán phù hợp.",
      },
      {
        question: "Thanh toán cho LIKELION qua số tài khoản nào?",
        answer:
          "Bạn vui lòng thanh toán học phí qua tài khoản sau:<br /><br />Tên tài khoản: CÔNG TY TNHH LIKE LION<br />Ngân hàng Shinhan - Chi nhánh Sài Gòn<br />STK: 700-016-242465<br />Nội dung chuyển khoản: Họ tên + Tên khóa học<br /><br />Sau khi thanh toán, bạn vui lòng gửi chứng từ thanh toán (ảnh chụp màn hình) và gửi lại cho LIKELION để LIKELION xác nhận và hướng dẫn bạn tham gia khóa học.",
      },
    ],
  },
  {
    id: "lap-trinh",
    label: "Lập trình",
    href: "#lap-trinh",
    items: [
      {
        question: "Front-end, Back-end, hay Fullstack là gì?",
        answer:
          "Tất cả phần giao diện mà người dùng sẽ thấy từ kích cỡ và màu sắc cho đến các thanh trượt và menu thả xuống đều là Front-end. Lập trình viên Front-end phải đảm bảo giao diện của trang web hiển thị tốt trên mọi thiết bị (điện thoại, máy tính bảng, và máy tính). Trong khi đó, Back-end chịu trách nhiệm về phần dữ liệu mà người dùng không nhìn thấy. Lập trình viên Back-end tập trung vào logic của trang web, tạo máy chủ cũng như làm việc với cơ sở dữ liệu và API. Còn một lập trình viên Fullstack đơn giản là người có thể làm được cả Front-end và Back-end.",
      },
      {
        question: "Học lập trình ra làm gì?",
        answer:
          "Bạn yên tâm. Lập trình viên luôn nằm trong tầm ngắm của các nhà tuyển dụng. Với kiến thức lập trình vững chắc, bạn không phải lo sẽ không tìm được việc làm với mức lương hấp dẫn như: Lập trình viên (Front-end, Back-end, Fullstack), Chuyên viên phát triển ứng dụng (website, di động,…), Chuyên viên kiểm thử phần mềm, Chuyên viên phân tích quy trình dịch vụ",
      },
    ],
  },
  {
    id: "ho-tro-viec-lam",
    label: "Hỗ trợ việc làm",
    href: "#ho-tro-viec-lam",
    items: [
      {
        question: "LIKELION cung cấp những hỗ trợ việc làm nào?",
        answer:
          "Hoàn thiện CV, GitHub và portfolio của bạn; Phát triển network cá nhân<br/> Workshop trong Tuần lễ việc làm<br/> Phỏng vấn giả định<br/> Định hướng nghề nghiệp<br/> Kết nối bạn đến công ty IT trong mạng lưới đối tác của LIKELION<br/> Và nhiều thứ hơn thế nữa!",
      },
      {
        question:
          "Tôi có được đảm bảo 100% có việc sau khi tốt nghiệp Bootcamp không?",
        answer:
          "Không, LIKELION không đảm bảo việc làm cho bất kỳ khoá học nào. Tuy nhiên, các hỗ trợ việc làm kết hợp với chương trình đào tạo phù hợp xu thế sẽ chuẩn bị cho bạn đầy đủ kiến thức và kỹ năng cần thiết để bắt đầu sự nghiệp lập trình viên của mình.",
      },
    ],
  },
];

export default function FAQContainer() {
  return (
    <div className="bg-slate-50">
      <div className="container">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 py-20">
          <div className="hidden lg:block">
            <div className="sticky top-[var(--navbar-height)]">
              <ul className="flex flex-col gap-2 pt-8 text-lg text-muted-foreground">
                {faq.map((f) => (
                  <li key={f.label}>
                    <a href={f.href}>{f.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-12 pt-8">
            {faq.map((f) => (
              <div key={f.label}>
                <h2
                  className="mb-4 text-2xl font-medium lg:text-3xl scroll-mt-24"
                  id={f.id}
                >
                  {f.label}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full bg-white shadow"
                >
                  {f.items.map((faq, index) => (
                    <div key={index}>
                      <AccordionItem
                        value={`item-${index}`}
                        key={index}
                        className="px-6 py-3 [&[data-state='open']]:bg-[#fafafa]"
                      >
                        <AccordionTrigger className="gap-4 [&>svg]:shrink-0 text-left text-lg">
                          {index + 1}. {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: faq.answer,
                            }}
                            className="[&_a]:inline [&_a]:text-blue-500 [&_a]:hover:underline text-base leading-relaxed"
                          />
                        </AccordionContent>
                      </AccordionItem>
                    </div>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
