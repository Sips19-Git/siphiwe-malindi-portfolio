import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { deliveryStages } from "@/lib/portfolio";

const Delivery = () => <section id="delivery" className="bg-card py-20 md:py-24">
  <div className="container">
    <SectionHeading eyebrow="Analysis & delivery" title="From business needs" accent="to validated solutions." description="My project and freelance experience connects client communication, requirements documentation, system design and functional testing." />
    <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-4">{deliveryStages.map((stage, index) => <div key={stage.title} className="reveal border-t border-border py-7"><p className="mb-7 text-sm font-medium text-pink">0{index + 1}</p><h3 className="display text-2xl font-bold">{stage.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stage.description}</p></div>)}</div>
    <Button asChild variant="link" className="mt-5 px-0"><a href="#portfolio">Explore analysis in practice <ArrowUpRight /></a></Button>
  </div>
</section>;
export default Delivery;