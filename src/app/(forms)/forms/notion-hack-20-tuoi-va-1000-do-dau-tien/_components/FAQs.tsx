"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

import { motion } from "framer-motion";
import Heading from "./Heading";

const faqList = [
  {
    question:
      "Notion Hack có phù hợp cho người mới bắt đầu, không có kinh nghiệm trước đây với Notion không?",
    answer:
      "Có, khóa học bắt đầu với các chủ đề cơ bản, giới thiệu tổng quan về Notion. Bạn sẽ được hướng dẫn cụ thể và từ từ tiến triển đến các tính năng phức tạp và tự động hóa.",
  },
  {
    question:
      "Notion Hack có thể giúp tôi tối ưu hóa quá trình tạo nội dung không?",
    answer:
      "Chắc chắn rồi! Notion là công cụ tuyệt vời để lập kế hoạch content, lên ý tưởng và quản lý dự án. Các template và tính năng tự động hóa sẽ làm cho quy trình làm việc của bạn hiệu quả hơn.",
  },
  {
    question:
      "Tôi là đang tìm cách nâng cao năng suất công việc hàng ngày. Notion Hack có thể giúp tôi như thế nào?",
    answer:
      "Với khả năng tự động hóa của Notion, bạn có thể quản lý các nhiệm vụ hàng ngày và tùy chỉnh cơ sở dữ liệu để phù hợp với nhu cầu kinh doanh. Ngoài ra, Notion được thiết kế để giúp bạn tăng cường hiệu suất và tổ chức hiệu quả trong các hoạt động hàng ngày.",
  },
  {
    question:
      "Notion Hack có thể giúp tôi, một YouTuber, tối ưu hóa quá trình tạo nội dung không?",
    answer:
      "Chắc chắn! Notion AI là một trợ lý ảo thông minh giúp bạn sáng tạo ý tưởng cho các kịch bản video, bài viết social, quản lý lịch đăng và nhắc nhở tự động. Đây chắc chắn là công cụ giúp bạn x3 tốc độ sản xuất và hiện thực các ý tưởng.",
  },
  {
    question:
      "Notion Hack có phù hợp cho những người làm việc từ xa hoặc quản lý nhóm phân tán không?",
    answer:
      "Có, Notion bao gồm khả năng tích hợp nhiều ứng dụng, làm việc nhóm, quản lý dự án theo nhiều hình thức: sprint, board, project, task,… và tự động hóa cho các cài đặt làm việc từ xa, giúp tăng hiệu quả phối hợp nhóm.",
  },
  {
    question:
      "Học sinh, sinh viên có thể dùng Notion để cải thiện kết quả học tập?",
    answer:
      "Notion Hack cung cấp các công cụ quan trọng để giúp bạn tổ chức tài liệu học, quản lý quá trình ôn tập và theo dõi tiến độ. Đến với Notion Hack, bạn sẽ học được cách tạo một trung tâm học thuật để tối ưu cho kế hoạch cá nhân.",
  },
  {
    question:
      "Liệu tôi có thể tích hợp các kỹ thuật Notion vào luồng làm việc và công cụ hiện tại của mình không?",
    answer:
      "Có, sau mỗi buổi học, bạn sẽ học được cách ứng dụng và lồng ghép các kỹ thuật vào công việc hiện tại và tuỳ chỉnh lại theo nhu cầu sử dụng.",
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

export default function FAQs() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8 sm:space-y-16">
          <Heading>Các câu hỏi thường gặp</Heading>

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
