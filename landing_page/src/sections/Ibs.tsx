"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
    Eye,
    // BookOpen,
    Zap,
    HelpCircle,
    Search,
    // MessageSquare,
    Repeat,
    ArrowRightLeft,
    Target,
    Lightbulb,
    CheckCircle2,
    Compass,
    Layers,
    ScrollText,
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
                duration: 0.7,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function SectionNumber({ number }: { number: string }) {
    return (
        <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 font-sans text-sm font-semibold text-blue-400">
            {number}
        </span>
    );
}

function Divider() {
    return (
        <div className="mx-auto my-16 flex items-center gap-4 md:my-20">
            <div className="h-px flex-1 bg-slate-700/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500/40" />
            <div className="h-px flex-1 bg-slate-700/50" />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Data structures for tabs and cards                                */
/* ------------------------------------------------------------------ */

const relationshipTypes = [
    {
        title: "ደግግሞሽ (Repetition)",
        desc: "ተመሳሳይ ቃላት ወይም ሀሳቦች ሲደጋገሙ ማየት (ለምሳሌ፡ ዮሐ 1፡1-14)።",
        icon: Repeat,
    },
    {
        title: "ተቃርኖ (Contrast)",
        desc: "“ነገር ግን”፣ “እንጂ”፣ “ሆኖም” የሚሉ ቃላትን በመፈለግ ልዩነቶችን ማስተዋል (ለምሳሌ፡ መዝ 1)።",
        icon: ArrowRightLeft,
    },
    {
        title: "ምክንያትና ውጤት (Cause & Effect)",
        desc: "ድርጊቶችና ያስከተሏቸውን ውጤቶች መለየት (ለምሳሌ፡ ኤፌ 2፡4-10)።",
        icon: Zap,
    },
    {
        title: "ዐውደ ምንባብ (Context)",
        desc: "ቃላቱ የተጻፉበትን ሰፊና ጠባብ ሁኔታ ማጤን (ምዕራፉንና መላውን መጽሐፍ)።",
        icon: Layers,
    },
];

const observationQuestions = [
    {
        q: "ማን?",
        a: "በጥቅሱ ውስጥ የተጠቀሱ ሰዎች እነማን ናቸው?",
        color: "bg-emerald-500/10 text-emerald-400",
    },
    {
        q: "ምን?",
        a: "ምን እየተከናወነ ነው? ዋናው ድርጊት ምንድነው?",
        color: "bg-blue-500/10 text-blue-400",
    },
    {
        q: "የት?",
        a: "ድርጊቱ የተፈጸመበት ስፍራ ወዴት ነው?",
        color: "bg-amber-500/10 text-amber-400",
    },
    {
        q: "መቼ?",
        a: "ጊዜው መቼ ነው? (ከመጽሐፉ ታሪክ አንጻር)",
        color: "bg-purple-500/10 text-purple-400",
    },
    {
        q: "እንዴት?",
        a: "ድርጊቱ የተፈጸመበት መንገድ ምንድነው?",
        color: "bg-rose-500/10 text-rose-400",
    },
    {
        q: "ለምን?",
        a: "የድርጊቱ ዓላማ ወይም ምክንያት ምንድነው?",
        color: "bg-cyan-500/10 text-cyan-400",
    },
];

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */

export default function IBSGuide() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
            {/* ── Hero Section ── */}
            <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-slate-800/50">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <ScrollReveal>
                        <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-widest text-blue-400">
                            Methodical Bible Study
                        </span>
                        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                            ስልታዊ የመጽሐፍ ቅዱስ <br />
                            <span className="text-blue-500">አጠናን ዘዴ</span>
                        </h1>
                        <p className="mx-auto max-w-2xl font-serif text-xl text-slate-400 md:text-2xl">
                            (Inductive Bible Study)
                        </p>
                        <div className="mt-12 flex justify-center gap-4">
                            <div className="h-1 w-12 rounded-full bg-blue-500" />
                            <div className="h-1 w-4 rounded-full bg-blue-500/30" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Introduction ── */}
            <article className="mx-auto max-w-3xl px-6 pb-24 pt-20 md:px-8">
                <section>
                    <ScrollReveal>
                        <h2 className="mb-6 font-serif text-3xl font-bold">
                            ኢንዳክሽን (Induction) ምንድነው?
                        </h2>
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 shadow-2xl">
                            <p className="font-serif text-lg leading-relaxed text-slate-300">
                                ኢንዳክሽን ማለት ከዝርዝር ሐቆች ወይም ምሳሌዎች በመነሳት አጠቃላይ ሕጎችን
                                (ዋናውን መልእክት) የመድረስ አመክንዮአዊ መንገድ ነው። መጽሐፍ ቅዱስን
                                ስናጠና፣ የራሳችንን ሃሳብ ወደ ቃሉ ከመውሰድ ይልቅ፣ ቃሉ ራሱ እንዲናገረን
                                የምናደርግበት ጥበብ ነው።
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                            {[
                                {
                                    step: "1",
                                    title: "መመልከት",
                                    eng: "Observation",
                                    sub: "ጌታ ሆይ፤ እንዳየው እርዳኝ",
                                },
                                {
                                    step: "2",
                                    title: "መተርጎም",
                                    eng: "Interpretation",
                                    sub: "ጌታ ሆይ፤ እንድረዳው እርዳኝ",
                                },
                                {
                                    step: "3",
                                    title: "ማዛመድ",
                                    eng: "Application",
                                    sub: "ጌታ ሆይ፤ እንድኖረው እርዳኝ",
                                },
                            ].map((item) => (
                                <div
                                    key={item.step}
                                    className="flex flex-col items-center rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center"
                                >
                                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-bold">
                                        {item.step}
                                    </span>
                                    <h3 className="font-serif text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-blue-400 uppercase tracking-tighter mb-2">
                                        {item.eng}
                                    </p>
                                    <p className="font-serif text-xs italic text-slate-500">
                                        {item.sub}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </section>

                <Divider />

                {/* ── Section 1: Observation ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-4 flex items-center gap-2">
                            <Eye className="h-5 w-5 text-blue-400" />
                            <span className="font-sans text-xs uppercase tracking-widest text-blue-400">
                                Step One
                            </span>
                        </div>
                        <h2 className="mb-6 font-serif text-3xl font-bold">
                            <SectionNumber number="፩" /> መመልከት (Observation)
                        </h2>
                        <p className="font-serif text-lg leading-relaxed text-slate-300">
                            በመመልከት ደረጃ በምንባቡ የተቀመጠውን ሁሉ ለማግኘት በጥንቃቄ እና በመደጋገም
                            ለማጤን እንሞክራለን። ለዚህም የተከፈተ አእምሮና የሚጠባበቅ መንፈስ ያስፈልገናል።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h4 className="mt-10 mb-6 font-serif text-xl font-semibold text-blue-400">
                            ሐቅ ፈላጊ ጥያቄዎች
                        </h4>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                            {observationQuestions.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`rounded-lg p-4 transition-transform hover:scale-105 ${item.color}`}
                                >
                                    <div className="mb-1 flex items-center gap-2 font-bold">
                                        <HelpCircle className="h-4 w-4" />
                                        {item.q}
                                    </div>
                                    <p className="text-sm leading-tight opacity-80">
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h4 className="mt-12 mb-6 font-serif text-xl font-semibold text-blue-400">
                            የዝምድና አይነቶች (Relationships)
                        </h4>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {relationshipTypes.map((type, idx) => {
                                const Icon = type.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="group flex gap-4 rounded-xl border border-slate-800 bg-slate-900/30 p-5 hover:border-blue-500/50 transition-colors"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h5 className="font-serif font-bold text-slate-100">
                                                {type.title}
                                            </h5>
                                            <p className="mt-1 font-serif text-sm text-slate-400">
                                                {type.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                </section>

                <Divider />

                {/* ── Section 2: Interpretation ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-4 flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-amber-400" />
                            <span className="font-sans text-xs uppercase tracking-widest text-amber-400">
                                Step Two
                            </span>
                        </div>
                        <h2 className="mb-6 font-serif text-3xl font-bold">
                            <SectionNumber number="፪" /> መተርጎም (Interpretation)
                        </h2>
                        <p className="font-serif text-lg leading-relaxed text-slate-300">
                            ጸሐፊው ሊያስተላልፍ የፈለገውን ዋና ሐሳብ ከምንባቡ ውስጥ ጠቅለል ባለ መንገድ
                            ማግኘት ማለት ነው። ይህንን ስናደርግ ቃላትን በሥነ-ጽሑፋዊ ዐውዳቸው (Literal
                            Context) ማየት ይኖርብናል።
                        </p>
                    </ScrollReveal>

                    <div className="mt-8 space-y-4">
                        <ScrollReveal delay={0.1}>
                            <div className="flex items-start gap-4 rounded-xl bg-amber-500/5 p-6 border border-amber-500/20">
                                <Search className="h-6 w-6 text-amber-400 shrink-0" />
                                <div>
                                    <h4 className="font-serif font-bold text-amber-400 mb-2">
                                        ዋና ሐሳብን ለማግኘት
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2 font-serif text-slate-300">
                                        <li>
                                            ጸሐፊው ስለምን ርዕሰ-ጉዳይ ይጽፋል?
                                            (ባለቤት/Subject)
                                        </li>
                                        <li>
                                            ስለሚጽፍበት ርዕሰ-ጉዳይ ምን ይላል?
                                            (ተሳቢ/Complement)
                                        </li>
                                        <li>ለምን ይሄን መጻፍ አስፈለገው?</li>
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <Divider />

                {/* ── Section 3: Application ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-4 flex items-center gap-2">
                            <Target className="h-5 w-5 text-emerald-400" />
                            <span className="font-sans text-xs uppercase tracking-widest text-emerald-400">
                                Step Three
                            </span>
                        </div>
                        <h2 className="mb-6 font-serif text-3xl font-bold">
                            <SectionNumber number="፫" /> ማዛመድ (Application)
                        </h2>
                        <p className="font-serif text-lg leading-relaxed text-slate-300">
                            ትርጉሙን ከመረዳት አልፈን ለዛሬው ሕይወታችን ያለውን መልእክት ወደ መቀበል
                            መሸጋገር አለብን። የእግዚአብሔር ቃል ዛሬም በሰዎች ሕይወት ውስጥ የሚሠራ ሕያው
                            ኃይል ነው።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="mt-10 grid gap-4">
                            {[
                                {
                                    title: "እንደ መዶሻ",
                                    desc: "ልብን የሚያደቅ",
                                    ref: "ኤር 23፡29",
                                },
                                {
                                    title: "እንደ መብራት",
                                    desc: "መንገድን የሚመራ",
                                    ref: "መዝ 119፡105",
                                },
                                {
                                    title: "እንደ ሰይፍ",
                                    desc: "ለጥፋት ሃይል የሚዋጋ",
                                    ref: "ኤፌ 6፡17",
                                },
                                {
                                    title: "እንደ መስታወት",
                                    desc: "ማንነትን ገልጦ የሚያሳይ",
                                    ref: "ያዕ 1፡23-25",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between rounded-lg border border-slate-800 p-4 bg-slate-900/20"
                                >
                                    <div>
                                        <span className="font-serif font-bold text-emerald-400">
                                            {item.title}
                                        </span>
                                        <span className="mx-2 text-slate-600">
                                            |
                                        </span>
                                        <span className="font-serif text-slate-400">
                                            {item.desc}
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-slate-500">
                                        {item.ref}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="mt-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
                            <h4 className="font-serif text-xl font-bold text-emerald-400 mb-4">
                                ተግባራዊ ጥያቄዎች
                            </h4>
                            <div className="grid gap-3 font-serif text-slate-300">
                                {[
                                    "ልታዘዘው የሚገባኝ ምን ትዕዛዝ አለ?",
                                    "ልቀበለው የሚገባኝ ምን የተስፋ ቃል አለ?",
                                    "ልከተለው የሚገባኝ ምን ምሳሌ አለ?",
                                    "ልጠነቀቅበት የሚገባኝ ምን ስህተት አለ?",
                                    "ልናዘዘው የሚገባኝ ምን ኃጢአት አለ?",
                                ].map((q, i) => (
                                    <div key={i} className="flex gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                                        <p>{q}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* ── Practical Example Summary ── */}
                <section className="mt-24">
                    <ScrollReveal>
                        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-transparent p-10 text-center">
                            <ScrollText className="mx-auto mb-6 h-12 w-12 text-blue-400" />
                            <h2 className="mb-4 font-serif text-3xl font-bold">
                                ለጥናት የሚረዱ ባህርያት
                            </h2>
                            <p className="mb-8 font-serif text-lg text-slate-400">
                                ከጥናታችን ትልቅ ትርፍ ለማግኘት እነዚህ ባህርያት ወሳኝ ናቸው
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <span className="rounded-full bg-slate-800 px-6 py-2 font-serif text-sm">
                                    ለመታዘዝ ፈቃደኝነት
                                </span>
                                <span className="rounded-full bg-slate-800 px-6 py-2 font-serif text-sm">
                                    ትጋትና ትዕግስት
                                </span>
                                <span className="rounded-full bg-slate-800 px-6 py-2 font-serif text-sm">
                                    ለመንፈስ ቅዱስ መገዛት
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* ── Footer ── */}
                <footer className="mt-32 border-t border-slate-800 pt-12 text-center">
                    <ScrollReveal>
                        <Compass className="mx-auto mb-4 h-8 w-8 text-slate-700" />
                        <p className="font-serif text-sm text-slate-500">
                            ስልታዊ የመጽሐፍ ቅዱስ አጠናን ዘዴ - Inductive Bible Study Guide
                        </p>
                        <p className="mt-2 font-serif text-xs text-slate-600">
                            ለእግዚአብሔር ክብር ይሁን
                        </p>
                    </ScrollReveal>
                </footer>
            </article>
        </div>
    );
}
