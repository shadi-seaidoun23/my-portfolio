
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Lightbulb } from 'lucide-react';

const WorkStatusToggle = () => {
  const [isOpenToWork, setIsOpenToWork] = useState(true);

  return (
    <Card className={`animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
      isOpenToWork 
        ? 'border-primary/30 shadow-primary/10' 
        : 'border-border'
    }`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`transition-all duration-500 ${
              isOpenToWork 
                ? 'text-primary drop-shadow-lg animate-pulse' 
                : 'text-muted-foreground'
            }`}>
              <Lightbulb 
                size={32} 
                className={`transition-all duration-500 ${
                  isOpenToWork 
                    ? 'fill-primary drop-shadow-sm' 
                    : 'fill-none'
                }`} 
              />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">Work Status</h3>
              <p className={`text-sm transition-colors duration-300 ${
                isOpenToWork 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground'
              }`}>
                {isOpenToWork ? '🟢 Open for new opportunities' : '🔴 Currently not seeking new roles'}
              </p>
              {isOpenToWork && (
                <p className="text-xs text-muted-foreground mt-1">
                  Available for full-time opportunities
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Switch
              checked={isOpenToWork}
              onCheckedChange={setIsOpenToWork}
              className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted"
            />
            <span className={`text-xs font-medium transition-colors ${
              isOpenToWork ? 'text-primary' : 'text-muted-foreground'
            }`}>
              {isOpenToWork ? 'AVAILABLE' : 'UNAVAILABLE'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkStatusToggle;
