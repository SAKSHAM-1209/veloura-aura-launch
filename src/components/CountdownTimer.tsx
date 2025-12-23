import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-card border border-primary/20 rounded-lg shadow-elegant">
          <span className="font-display text-3xl sm:text-4xl md:text-5xl text-primary font-bold">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
      </div>
      <span className="mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-body">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="flex items-center text-primary text-2xl font-light self-start mt-8">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="flex items-center text-primary text-2xl font-light self-start mt-8">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="flex items-center text-primary text-2xl font-light self-start mt-8 hidden sm:flex">:</div>
      <div className="hidden sm:block">
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};
