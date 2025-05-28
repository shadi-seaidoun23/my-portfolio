
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Lightbulb } from 'lucide-react';

const WorkStatusToggle = () => {
  const [isOpenToWork, setIsOpenToWork] = useState(true);

  return (
    <Card className="animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`transition-all duration-300 ${isOpenToWork ? 'text-yellow-400 drop-shadow-lg' : 'text-gray-400'}`}>
              <Lightbulb 
                size={32} 
                className={`transition-all duration-300 ${isOpenToWork ? 'fill-yellow-400' : 'fill-none'}`} 
              />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">Work Status</h3>
              <p className={`text-sm transition-colors duration-300 ${
                isOpenToWork 
                  ? 'text-green-600 dark:text-green-400 font-medium' 
                  : 'text-muted-foreground'
              }`}>
                {isOpenToWork ? 'Open for new opportunities' : 'Currently not seeking new roles'}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Switch
              checked={isOpenToWork}
              onCheckedChange={setIsOpenToWork}
              className="data-[state=checked]:bg-green-500"
            />
            <span className="text-xs text-muted-foreground">
              {isOpenToWork ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkStatusToggle;
