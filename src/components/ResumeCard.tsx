
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ResumeItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string[];
}

interface ResumeCardProps {
  title: string;
  items: ResumeItem[];
}

const ResumeCard = ({ title, items }: ResumeCardProps) => {
  return (
    <Card className="w-full animate-slide-up shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-border">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col items-start text-left w-full">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  <p className="text-xs text-primary font-medium">{item.duration}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-2">
                  {item.description.map((desc, index) => (
                    <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                      • {desc}
                    </p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ResumeCard;
