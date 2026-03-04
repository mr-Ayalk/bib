"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
    Wheat,
    Heart,
    // Home,
    Scale,
    Scroll,
    MapPin,
    Users,
    Sun,
    Moon,
    ArrowRight,
    Anchor,
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
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500/40" />
            <div className="h-px w-12 bg-slate-800" />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */

export default function RuthStory() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
            {/* ── Hero Section ── */}
            <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-slate-950 to-slate-950" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <ScrollReveal>
                        <span className="mb-4 inline-block rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1 font-sans text-xs uppercase tracking-[0.3em] text-amber-500/80">
                            The Scroll of Redemption
                        </span>
                        <h1 className="mb-6 font-serif text-6xl font-bold leading-tight tracking-tight text-slate-50 md:text-8xl">
                            RUTH
                        </h1>
                        <p className="mx-auto max-w-2xl font-serif text-xl leading-relaxed text-slate-400 md:text-2xl italic">
                            ` Where you go, I will go; where you lodge, I will
                            lodge.`
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Section 1: The Loss ── */}
            <article className="mx-auto max-w-3xl px-6 pb-24 md:px-8">
                <section>
                    <ScrollReveal>
                        <div className="mb-8 flex items-center gap-3 text-slate-500">
                            <MapPin className="h-5 w-5" />
                            <span className="font-sans text-xs uppercase tracking-widest">
                                Moab to Bethlehem
                            </span>
                        </div>
                        <h2 className="mb-8 font-serif text-3xl font-bold text-slate-100 italic">
                            ` Call me Mara, for the Almighty has dealt bitterly
                            with me. `
                        </h2>
                        <p className="font-serif text-lg leading-[1.8] text-slate-400">
                            In the days of the judges, famine struck Bethlehem.
                            Elimelech and Naomi fled to Moab with their sons,
                            Mahlon and Chilion. But death followed them. Naomi
                            was left without her husband and her children, a
                            widow in a foreign land.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="mt-12">
                        <div className="rounded-2xl border border-slate-900 bg-slate-900/40 p-8 shadow-xl">
                            <Heart className="mb-4 h-6 w-6 text-amber-500/60" />
                            <p className="font-serif text-xl leading-relaxed text-slate-200">
                                ` Do not press me to leave you... Your people
                                shall be my people, and your God my God. Where
                                you die, I will die—there will I be buried.`
                            </p>
                            <p className="mt-4 font-sans text-xs text-amber-500/50">
                                RUTH 1:16-17
                            </p>
                        </div>
                    </ScrollReveal>
                </section>

                <SectionDivider />

                {/* ── Section 2: The Harvest ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-8 flex items-center gap-3 text-amber-500/60">
                            <Wheat className="h-6 w-6" />
                            <span className="font-sans text-xs uppercase tracking-widest tracking-tighter">
                                The Barley Harvest
                            </span>
                        </div>
                        <h3 className="mb-6 font-serif text-4xl font-bold text-slate-50">
                            Under His Wings
                        </h3>
                        <p className="font-serif text-lg leading-[1.8] text-slate-400">
                            Naomi and Ruth returned at the beginning of the
                            barley harvest. Ruth went to glean in the fields,
                            happening upon the part belonging to{" "}
                            <span className="text-amber-200/80">Boaz</span>, a
                            prominent rich man of the family of Elimelech.
                        </p>
                    </ScrollReveal>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        <ScrollReveal
                            delay={0.1}
                            className="rounded-xl border border-slate-800 p-6"
                        >
                            <Sun className="mb-4 h-5 w-5 text-amber-400/40" />
                            <h4 className="font-serif text-lg font-bold text-slate-100">
                                Kindness in the Field
                            </h4>
                            <p className="mt-2 font-serif text-sm text-slate-400">
                                Boaz ordered his men not to bother Ruth and
                                allowed her to drink from the vessels. He
                                recognized her loyalty to Naomi.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal
                            delay={0.2}
                            className="rounded-xl border border-slate-800 p-6"
                        >
                            <Anchor className="mb-4 h-5 w-5 text-amber-400/40" />
                            <h4 className="font-serif text-lg font-bold text-slate-100">
                                Wings of Refuge
                            </h4>
                            <p className="mt-2 font-serif text-sm text-slate-400">
                                ` May you have a full reward from the Lord,
                                under whose wings you have come for refuge! `
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                <SectionDivider />

                {/* ── Section 3: The Threshing Floor ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-8 flex items-center gap-3 text-slate-500">
                            <Moon className="h-5 w-5" />
                            <span className="font-sans text-xs uppercase tracking-widest">
                                Midnight at the Threshing Floor
                            </span>
                        </div>
                        <h3 className="mb-6 font-serif text-4xl font-bold text-slate-50">
                            Spread Your Cloak
                        </h3>
                        <p className="font-serif text-lg leading-[1.8] text-slate-400">
                            Naomi sought security for Ruth. At the threshing
                            floor, Ruth approached Boaz in the night, asking him
                            to act as the{" "}
                            <span className="italic text-amber-200/70">
                                next-of-kin
                            </span>
                            ` . I am Ruth, your servant; spread your cloak over
                            your servant.`
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="mt-10">
                        <div className="flex flex-col gap-4 rounded-xl border border-amber-500/10 bg-amber-500/5 p-6 md:p-8">
                            <div className="flex items-center gap-4">
                                <Scale className="h-6 w-6 text-amber-500/70" />
                                <h4 className="font-serif text-xl font-bold text-amber-500/90">
                                    The Legal Transaction
                                </h4>
                            </div>
                            <p className="font-serif text-slate-300">
                                Boaz went to the city gate. Through the custom
                                of the sandal, he acquired the land of Elimelech
                                and Ruth the Moabite as his wife, maintaining
                                the name of the dead on his inheritance.
                            </p>
                        </div>
                    </ScrollReveal>
                </section>

                <SectionDivider />

                {/* ── Section 4: Legacy ── */}
                <section className="mb-20">
                    <ScrollReveal>
                        <div className="text-center">
                            <Scroll className="mx-auto mb-6 h-10 w-10 text-amber-500/40" />
                            <h3 className="mb-8 font-serif text-4xl font-bold text-slate-50 uppercase tracking-widest">
                                The Restoration
                            </h3>
                            <p className="mx-auto max-w-xl font-serif text-lg text-slate-400">
                                ` A son has been born to Naomi. `` They named
                                him <span className="text-slate-100">Obed</span>
                                . He became the father of Jesse, the father of{" "}
                                <span className="text-amber-400">David</span>.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="mt-16 flex flex-col items-center gap-4">
                        <div className="h-px w-24 bg-slate-800" />
                        <div className="flex gap-8">
                            {["Obed", "Jesse", "David"].map((name, i) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-2"
                                >
                                    <span className="font-serif text-sm font-bold text-slate-200">
                                        {name}
                                    </span>
                                    {i < 2 && (
                                        <ArrowRight className="h-3 w-3 text-slate-600" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Footer Quote ── */}
                <ScrollReveal>
                    <div className="text-center border-t border-slate-900 pt-16">
                        <Users className="mx-auto mb-4 h-6 w-6 text-slate-700" />
                        <p className="font-serif text-sm text-slate-500 italic">
                            ` The Lord made her conceive, and she bore a son...
                            He shall be to you a restorer of life. `
                        </p>
                        <p className="mt-8 font-sans text-[10px] uppercase tracking-[0.4em] text-slate-700">
                            Bethlehem • Moab • Redemption
                        </p>
                    </div>
                </ScrollReveal>
            </article>
        </div>
    );
}
