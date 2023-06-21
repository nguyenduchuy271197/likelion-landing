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
      "Tôi không có kinh nghiệm lập trình, liệu tôi có thể học lập trình không?",
    answer:
      "Tất nhiên bạn có thể học lập trình dù không có kinh nghiệm trước đó. Điều quan trọng là bạn phải có đam mê và sẵn sàng tìm hiểu. Bạn có thể bắt đầu với các khóa học lập trình cơ bản hoặc tài liệu miễn phí trên internet.",
  },
  {
    question:
      "Tôi đã học một số ngôn ngữ lập trình, nhưng tôi không thể giải quyết các vấn đề lập trình phức tạp. Làm thế nào để cải thiện kỹ năng lập trình của tôi?",
    answer:
      "Cách tốt nhất để cải thiện kỹ năng lập trình là thực hành nhiều. Hãy tìm các dự án lập trình có tính thực tế để thực hiện và tham gia các cuộc thi lập trình. Đồng thời, bạn có thể học hỏi kinh nghiệm từ những người giỏi hơn bạn trong cộng đồng lập trình.",
  },
  {
    question:
      "Tôi thấy khó hiểu khi đọc các tài liệu lập trình và hướng dẫn trên mạng. Làm thế nào để tôi có thể hiểu được các khái niệm và thuật ngữ lập trình?",
    answer:
      " Có thể bạn cần tìm hiểu từng khái niệm và thuật ngữ lập trình một cách chi tiết hơn. Bạn có thể đọc các tài liệu cơ bản hơn hoặc tìm kiếm các video hướng dẫn trên mạng. Ngoài ra, bạn có thể tìm một người giỏi trong lập trình để hỏi thêm và giải đáp các thắc mắc của mình.",
  },
  {
    question:
      "Làm thế nào để tôi có thể tránh bị mắc kẹt khi giải quyết các vấn đề lập trình?",
    answer:
      "Khi gặp phải vấn đề khó giải quyết, đừng nản lòng và đừng bỏ cuộc. Thay vào đó, hãy thử tìm kiếm các giải pháp khác nhau và nghĩ đến các phương pháp giải quyết vấn đề khác nhau. Bạn có thể hỏi đồng nghiệp hoặc cộng đồng lập trình để được giúp đỡ.",
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
          <SectionHeading
            title="Các câu hỏi thường gặp"
            subtitle="Các thông tin cơ bản về việc học lập trình để trở thành một học viên thành công."
          />

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
