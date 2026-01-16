"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
    targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            let newTimeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };

            if (difference > 0) {
                newTimeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }

            setTimeLeft(newTimeLeft);
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-2 md:mx-4">
            <div className="relative">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-black/50 rounded-xl border border-emerald-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <span className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-emerald-400 bg-clip-text text-transparent font-mono">
                        {value.toString().padStart(2, "0")}
                    </span>
                </div>
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-500"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-emerald-500"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-emerald-500"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-500"></div>
            </div>
            <span className="mt-2 text-xs md:text-sm text-emerald-400/80 uppercase tracking-widest font-medium">
                {label}
            </span>
        </div>
    );

    return (
        <div className="w-full max-w-4xl mx-auto py-8">
            <div className="text-center mb-6">
                <h3 className="text-lg md:text-xl text-white font-bold tracking-widest uppercase">
                    <span className="bg-emerald-500/20 px-4 py-1 rounded-full border border-emerald-500/30 text-emerald-300">
                        Application Deadline
                    </span>
                </h3>
                <p className="mt-4 text-zinc-400">
                    2025.12.05 23:59 まで
                </p>
            </div>
            <div className="flex justify-center items-center flex-wrap">
                <TimeUnit value={timeLeft.days} label="Days" />
                <div className="text-2xl md:text-4xl font-bold text-zinc-600 mb-6">:</div>
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <div className="text-2xl md:text-4xl font-bold text-zinc-600 mb-6">:</div>
                <TimeUnit value={timeLeft.minutes} label="Mins" />
                <div className="text-2xl md:text-4xl font-bold text-zinc-600 mb-6">:</div>
                <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>
        </div>
    );
}
