'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AiSecretaryProfile = () => {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6 max-w-5xl">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Image Area */}
                    <motion.div
                        className="md:col-span-5 relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-[3/4] rounded-sm overflow-hidden bg-slate-200 relative shadow-xl">
                            {/* Placeholder for Profile Image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-500">
                                <span className="font-serif italic">Seiya Eto Portrait</span>
                            </div>
                            <img
                                src="/images/profile.jpg"
                                alt="Seiya Eto"
                                className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute top-4 left-4 w-full h-full border border-slate-300 -z-10"></div>
                    </motion.div>

                    {/* Bio Area */}
                    <motion.div
                        className="md:col-span-7"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-slate-500 text-sm font-serif tracking-widest uppercase mb-2">
                            Instructor
                        </h3>
                        <h2 className="text-3xl font-serif text-slate-900 mb-6">
                            江藤 誠哉 <span className="text-lg text-slate-400 ml-2">Seiya Eto</span>
                        </h2>

                        <div className="h-[1px] w-16 bg-amber-400 mb-8"></div>

                        <div className="space-y-4 text-slate-600 leading-loose font-light">
                            <p>
                                <strong>Integrated Artist / AI Architect</strong>
                            </p>
                            <p>
                                「テクノロジーと人間性の統合」をテーマに、AIエージェント開発、コミュニティ運営、空間演出など多岐にわたる活動を展開。
                            </p>
                            <p>
                                2024年より、AIが単なるツールではなく「パートナー」として機能する「Agentic AI」の社会実装を推進。<br />
                                自身も複数のAI秘書と共に業務を行い、創造性を最大化するワークスタイル「Vibe Working」を提唱している。
                            </p>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default AiSecretaryProfile;
