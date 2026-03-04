"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
    Waves,
    CloudFog,
    DoorOpen,
    HelpCircle,
    ShieldAlert,
    Sparkles,
    Anchor,
    Compass,
    Sunrise,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Internal helper components                                        */
/* ------------------------------------------------------------------ */

function ScrollReveal({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function SectionDivider() {
    return (
        <div className="mx-auto my-16 flex items-center justify-center gap-4 md:my-24">
            <div className="h-px w-12 bg-slate-800" />
            <div className="h-1 w-1 rounded-full bg-slate-700" />
            <div className="h-px w-12 bg-slate-800" />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */

export default function AsaphPsalms() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
            {/* ── Hero Section ── */}
            <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
                {/* Atmospheric Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
                    <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <ScrollReveal>
                        <h1 className="mb-4 font-serif text-2xl tracking-[0.2em] text-cyan-500/80 uppercase">
                            መዝሙረ አሳፍ
                        </h1>
                        <h2 className="mb-8 font-serif text-5xl font-bold leading-tight tracking-tight text-slate-50 md:text-7xl">
                            ጥያቄዎች{" "}
                            <span className="text-cyan-400/80">ሲደበዝዙ</span>
                        </h2>
                        <p className="mx-auto max-w-xl font-serif text-lg leading-relaxed text-slate-400 md:text-xl italic">
                            “አንተ ልዩነት በሆንክባት አንዲት ቅጽበት... ምርኩዝ አጣሁ”
                        </p>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 80 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="mx-auto mt-12 h-px bg-cyan-500/50"
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* ── The Hunger (Section 1) ── */}
            <article className="mx-auto max-w-3xl px-6 pb-24 md:px-8">
                <section>
                    <ScrollReveal>
                        <div className="mb-6 flex items-center gap-3">
                            <CloudFog className="h-5 w-5 text-slate-500" />
                            <span className="font-sans text-xs uppercase tracking-widest text-slate-500">
                                The Hunger
                            </span>
                        </div>
                        <h3 className="mb-8 font-serif text-4xl font-bold text-slate-100 uppercase tracking-tighter">
                            ርኅራኄን ፍለጋ (Hunger)
                        </h3>
                        <p className="font-serif text-lg leading-[1.8] text-slate-400">
                            ነፍሴ በፍርስራሾች መካከል ተንበርክካ ትጠብቅሃለች። ልቤ ወደ ትላንት በሀሳብ
                            መንገድ ይጓጓዛል። ግድግዳዎች ፈራርሰዋል፣ መቅደስህ ጨላልሟል። መሰዊያው ተራቁቷል።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="mt-12">
                        <div className="rounded-2xl border border-slate-900 bg-slate-900/20 p-8">
                            <p className="font-serif text-xl italic text-slate-300">
                                “እቀኝልህ የነበረበት በእምባ ተተክቷል። እንጨትና ውሃ በሌለበት ልቤ
                                ተጠማችህ።”
                            </p>
                        </div>
                    </ScrollReveal>
                </section>

                <SectionDivider />

                {/* ── The Crisis of Iniquity (Section 2) ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-6 flex items-center gap-3 text-rose-500/70">
                            <ShieldAlert className="h-5 w-5" />
                            <span className="font-sans text-xs uppercase tracking-widest">
                                The Slippery Path
                            </span>
                        </div>
                        <h3 className="mb-6 font-serif text-3xl font-bold text-slate-100">
                            የክፉዎች ድሎትና ጥያቄዎቼ
                        </h3>
                        <p className="font-serif text-lg leading-[1.8] text-slate-400">
                            በክፋት ወዳጌጡ፣ በመንጠቅ ወደከበሩ፣ ደም ድሎት ወዳመጣላቸው... በትዕቢት ወዳያሉ
                            ቀና ብዬ ተመለከትኩ። ልቤን አዳለጣት፣ እግሬ ተሰናከለች። ጽድቄን ከጽድቃቸው
                            መዘንኩ።
                        </p>
                    </ScrollReveal>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {[
                            { q: "ያያል ወይ?", a: "ቁስሌን ያያል?" },
                            { q: "እግዚአብሔር ያውቃል?", a: "በልዑልስ ዘንድ እውቀት አለ?" },
                        ].map((item, i) => (
                            <ScrollReveal
                                key={i}
                                delay={i * 0.1}
                                className="rounded-xl border border-slate-800 p-6 hover:bg-slate-900/40 transition-colors"
                            >
                                <HelpCircle className="mb-3 h-6 w-6 text-slate-600" />
                                <h4 className="font-serif text-lg font-bold text-cyan-500/80">
                                    {item.q}
                                </h4>
                                <p className="font-serif text-slate-400">
                                    {item.a}
                                </p>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                <SectionDivider />

                {/* ── The Turning Point: The Sanctuary (Section 3) ── */}
                <section className="relative">
                    <div className="absolute -left-12 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />

                    <ScrollReveal>
                        <div className="mb-6 flex items-center gap-3 text-cyan-400">
                            <DoorOpen className="h-6 w-6" />
                            <span className="font-sans text-xs uppercase tracking-widest">
                                Psalm 73:17
                            </span>
                        </div>
                        <h3 className="mb-8 font-serif text-4xl font-bold text-slate-50 uppercase">
                            ወደ መቅደስህ እስክገባ...
                        </h3>
                        <p className="font-serif text-xl leading-relaxed text-slate-300">
                            ይኸውም ወደ አምላክ መቅደስ እስክገባ ድረስ ነው፤ ሳይህ የመዘንኳት ጽድቅ ቀለለች፣
                            ሳይህ የካብኩት እኔ ኦና ሆነች። ስትገኝልኝ ቅጽበት መልስ ሆነኝ።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3} className="mt-12 space-y-8">
                        <div className="group border-l-2 border-cyan-500/30 pl-8 transition-colors hover:border-cyan-500">
                            <h4 className="font-serif text-2xl font-bold text-slate-100">
                                አይን ለወጥክልኝ
                            </h4>
                            <p className="mt-2 font-serif text-slate-400">
                                ችግሮቼን አይቼ ሳይህ መነጽሬ ተቀየረ። ህልውናህ ጥያቄዎቼን አስረሳኝ።
                            </p>
                        </div>
                        <div className="group border-l-2 border-cyan-500/30 pl-8 transition-colors hover:border-cyan-500">
                            <h4 className="font-serif text-2xl font-bold text-slate-100">
                                ባልተመለሱ ጥያቄዎቼ
                            </h4>
                            <p className="mt-2 font-serif text-slate-400">
                                ባልተመለሱ ጥያቄዎቼ፣ በፈራረሰ መቅደስ ላይ ልቤ ተማመነችብህ።
                            </p>
                        </div>
                    </ScrollReveal>
                </section>

                <SectionDivider />

                {/* ── The Prayer of Asaph (Section 4) ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-10 text-center">
                            <Sparkles className="mx-auto mb-4 h-8 w-8 text-cyan-400/50" />
                            <h3 className="font-serif text-3xl font-bold text-slate-50">
                                ልቤን አጫውታት
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="grid gap-4">
                        {[
                            "አባ ለጥያቄዎቼ አንተን መልስልኝ",
                            "ስጦታውን ሳይሆን ሰጪውን ስጠኝ",
                            "በሌለህበት ለእኔ ፀሐይ... ድቅድቅ ጨለማ ናት",
                            "ላትስቅልኝ ደስታ ትርጉም የላትም",
                        ].map((line, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="rounded-lg bg-slate-900/40 px-6 py-4 text-center font-serif text-lg text-slate-300">
                                    {line}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                <SectionDivider />

                {/* ── The Resolution (Section 5) ── */}
                <section className="mb-20">
                    <ScrollReveal>
                        <div className="text-center">
                            <h3 className="mb-12 font-serif text-4xl font-bold text-slate-100">
                                ቆይልኝ...
                            </h3>
                            <div className="mx-auto max-w-2xl space-y-6 font-serif text-xl leading-relaxed text-slate-400">
                                <p>ስትቆይ ፍርስራሹ ትንሳኤ ይሆናል፣</p>
                                <p>ስትከርም ጥያቄዬ አምልኮ ይሆናል፣</p>
                                <p className="text-cyan-400">
                                    ስትቆይ ሰቆቃዬ መስዋዕት ይሆናል...
                                </p>
                            </div>

                            <div className="mt-16 flex flex-col items-center gap-6">
                                <Anchor className="h-8 w-8 text-slate-800" />
                                <p className="font-sans text-xs uppercase tracking-[0.3em] text-slate-600">
                                    In the presence, the arguments fade.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* ── Final Quote Card ── */}
                <ScrollReveal>
                    <div className="overflow-hidden rounded-3xl bg-cyan-500/5 p-12 text-center shadow-2xl shadow-cyan-500/5">
                        <h4 className="mb-6 font-serif text-2xl font-bold text-slate-100">
                            ማጠቃለያ
                        </h4>
                        <p className="font-serif text-xl leading-relaxed text-cyan-100/80 italic">
                            “አባ በጥያቄዎቼ ልጠጋገህ እንጂ መልስ ፍለጋ አልመጣሁም... ልቤን እያት፤ በአንተ
                            ብቻ የምትሞላ ጎዶሎ አላት።”
                        </p>
                    </div>
                </ScrollReveal>
            </article>

            {/* ── Footer ── */}
            <footer className="mt-20 border-t border-slate-900 px-6 py-12">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="font-serif text-sm text-slate-600">
                        ጥያቄዎች ሲደበዝዙ — በመቅደስህ ውስጥ መልስ አገኘሁ
                    </p>
                    <div className="mt-4 flex justify-center gap-4 text-slate-700">
                        <Sunrise className="h-4 w-4" />
                        <Compass className="h-4 w-4" />
                        <Waves className="h-4 w-4" />
                    </div>
                </div>
            </footer>
        </div>
    );
}
