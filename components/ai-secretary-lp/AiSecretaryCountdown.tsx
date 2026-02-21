'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AiSecretaryCountdownProps {
    targetDate?: string;
    mode?: "hero" | "offer";
}

export default function AiSecretaryCountdown({ targetDate = "2026-02-10T23:59:59", mode = "offer" }: AiSecretaryCountdownProps) {
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
        <div className="flex flex-col items-center mx-4">
            <div className={`relative flex items-center justify-center ${mode === 'hero' ? 'w-20' : 'w-16'}`}>
                <span className={`font-serif text-slate-900 font-light ${mode === 'hero' ? 'text-5xl' : 'text-4xl'}`}>
                    {value.toString().padStart(2, "0")}
                </span>
            </div>
            <span className="mt-1 text-[10px] text-slate-400 uppercase tracking-widest font-sans">
                {label}
            </span>
        </div>
    );

    return (
        <motion.div
            className="w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center gap-3 mb-2">
                <span className="h-[1px] w-8 bg-amber-400"></span>
                <span className="text-slate-500 text-xs font-serif tracking-[0.2em] uppercase">
                    Early Bird Deadline
                </span>
                <span className="h-[1px] w-8 bg-amber-400"></span>
            </div>

            <div className="flex justify-center items-center">
                <TimeUnit value={timeLeft.days} label="Days" />
                <div className="h-8 w-[1px] bg-slate-200 rotate-12 mx-2"></div>
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <div className="h-8 w-[1px] bg-slate-200 rotate-12 mx-2"></div>
                <TimeUnit value={timeLeft.minutes} label="Mins" />
                <div className="h-8 w-[1px] bg-slate-200 rotate-12 mx-2"></div>
                <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>
            <p className="mt-4 text-slate-400 text-xs font-serif tracking-wider">
                Until Feb 10, 2026
            </p>
        </motion.div>
    );
}
