"use client";

import SectionHeading from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

import { motion } from "framer-motion";

const faqList = [
  {
    question:
      "Tôi chưa từng tiếp xúc với code, liệu tôi có thể học lập trình không?",
    answer:
      "Chắc chắn là có thể. LIKELION mở đa dạng các khoá học lập trình phù hợp với nhiều đối tượng khác nhau, kể cả người mới. Chúng tôi giúp bạn gia nhập ngành lập trình từ con số 0.",
  },
  {
    question:
      "Vì sao tôi luôn gặp khó khăn với việc tự học và nghiên cứu các tài liệu về lập trình?",
    answer:
      "Việc này có thể bởi vì bạn đang theo một lộ trình không khoa học. Với khoá học lập trình tại LIKELION, chúng tôi cam kết một chương trình học đi từ căn bản, dễ hiểu và đầy đủ kiến thức. Sau đó, bạn có thể tự học hoặc nghiên cứu thêm để hoàn thiện bản thân.",
  },
  {
    question:
      "LIKELION có hỗ trợ gì khi tôi gặp khó khăn trong việc thanh toán học phí?",
    answer:
      "Ngoài các đợt giảm giá khoá học, LIKELION có hỗ trợ chia thành nhiều đợt thanh toán. Để biết chính xác các gói thanh toán và ưu đãi hiện tại, hãy liên hệ với LIKELION (link đến trang liên hệ) để nhận tự vấn.",
  },
  {
    question: "LIKELION có hỗ trợ tìm kiếm việc làm không?",
    answer:
      "Có. Chúng tôi hỗ trợ bạn ngay từ bước chuẩn bị CV và portfolio để thành công ứng tuyển trong môi trường việc làm cạnh tranh ngày nay. Ngoài ra, chúng tôi còn liên kết giới thiệu bạn ứng tuyển tại các công ty lập trình hàng đầu trong mạng lưới đối tác của LIKELION.",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function FAQ() {
  return (
    <section>
      <div className="container">
        <div className="py-20">
          <SectionHeading title="Các câu hỏi thường gặp" />

          <motion.div
            className="max-w-3xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full bg-white shadow-lg"
            >
              {faqList.map((faq, index) => (
                <motion.div key={index} variants={item}>
                  <AccordionItem
                    value={`item-${index}`}
                    key={index}
                    className="px-10 py-5 [&[data-state='open']]:bg-[#fafafa]"
                  >
                    <AccordionTrigger className="gap-4 [&>svg]:shrink-0 text-left">
                      {index + 1}. {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
