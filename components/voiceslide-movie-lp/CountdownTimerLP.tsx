"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
    targetDate: string;
}

export default function CountdownTimerLP({ targetDate }: CountdownTimerProps) {
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
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl border border-red-500/30 flex items-center justify-center shadow-lg">
                    <span className="text-3xl md:text-4xl font-bold text-red-600 font-mono">
                        {value.toString().padStart(2, "0")}
                    </span>
                </div>
            </div>
            <span className="mt-2 text-xs md:text-sm text-red-500 font-bold uppercase tracking-widest">
                {label}
            </span>
        </div>
    );

    return (
        <div className="w-full max-w-4xl mx-auto py-4">
            <div className="flex justify-center items-center flex-wrap">
                <TimeUnit value={timeLeft.days} label="Days" />
                <div className="text-2xl md:text-4xl font-bold text-red-300 mb-6">:</div>
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <div className="text-2xl md:text-4xl font-bold text-red-300 mb-6">:</div>
                <TimeUnit value={timeLeft.minutes} label="Mins" />
                <div className="text-2xl md:text-4xl font-bold text-red-300 mb-6">:</div>
                <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>
        </div>
    );
}
