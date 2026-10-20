import { Hero } from "@/widgets/hero";
import { GoalsSection } from "@/widgets/goals";
import { FormatsSection } from "@/widgets/formats";
import { CoursesSection } from "@/widgets/courses";
import { BenefitsSection } from "@/widgets/benefits";
import { CollaborationSection } from "@/widgets/collaboration";
import { CtaSection } from "@/widgets/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GoalsSection />
      <FormatsSection />
      <CoursesSection />
      <BenefitsSection />
      <CollaborationSection />
      <CtaSection />
    </>
  );
}
