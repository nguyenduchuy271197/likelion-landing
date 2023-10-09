import CourseCTAForm from "@/components/courses/CourseCTAForm";

interface CTAProps {
  title: string;
  description: string;
  id?: string;
  slug?: string;
}

export default function CTA({ title, description, id, slug }: CTAProps) {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-orange-500 text-muted">
      <div className="container">
        <div className="flex flex-col gap-8 px-8 py-14 sm:py-20 sm:px-12 md:flex-row">
          <div className="flex-1">
            <div className="space-y-2 md:max-w-sm">
              <h3 className="text-3xl font-bold sm:text-4xl">{title}</h3>
              <p className="text-lg">{description}</p>
            </div>
          </div>
          <div className="flex-1">
            <CourseCTAForm id={id} slug={slug} />
          </div>
        </div>
      </div>
    </section>
  );
}
