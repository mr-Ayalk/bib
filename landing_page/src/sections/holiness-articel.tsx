"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Sparkles,
    Eye,
    Target,
    BookOpen,
    Anchor,
    Scale,
    Heart,
    Star,
    Brain,
    MessageCircle,
    Briefcase,
    Users,
    Flame,
    Shield,
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
        <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 font-sans text-sm font-semibold text-amber-400">
            {number}
        </span>
    );
}

function Divider() {
    return (
        <div className="mx-auto my-16 flex items-center gap-4 md:my-20">
            <div className="h-px flex-1 bg-slate-700/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500/40" />
            <div className="h-px flex-1 bg-slate-700/50" />
        </div>
    );
}

function BibleQuote({ text, reference }: { text: string; reference: string }) {
    return (
        <ScrollReveal>
            <blockquote className="relative my-8 rounded-lg border-l-2 border-amber-500/40 bg-slate-800/50 px-6 py-5 md:px-8 md:py-6">
                <p className="font-serif text-base leading-[1.8] text-slate-100 md:text-lg">
                    {text}
                </p>
                <footer className="mt-3 font-sans text-sm text-amber-400/80">
                    {reference}
                </footer>
            </blockquote>
        </ScrollReveal>
    );
}

/* ------------------------------------------------------------------ */
/*  Tabs data & component                                             */
/* ------------------------------------------------------------------ */

const examples = [
    {
        id: "isaiah",
        icon: BookOpen,
        title: "የነቢዩ ኢሳይያስ ምላሽ",
        reference: "ኢሳ. 6:5",
        content:
            'ኢሳይያስ በዙፋኑ ላይ ያለውን ቅዱስ አምላክ ባየ ጊዜ የተናገረው የመጀመሪያ ቃል "ከንፈሮቼ የረከሱብኝ ሰው ስለሆንሁ... ጠፍቻለሁና ወዮልኝ!" የሚል ነበር። ኢሳይያስ ታላቅ ነቢይ ቢሆንም፣ በቅድስና ብርሃን ፊት ሲቆም ግን ራሱን እንደ "ጠፋ" ሰው ቆጠረ። እግዚአብሔር መልአኩን ልኮ በሕያው መሠዊያ ፍም ከንፈሩን ሲያስነካውና ኃጢአቱን ሲያነጻለት፣ መቀደስ በእግዚአብሔር አነሳሽነት የሚደረግ ሥራ መሆኑን እናያለን።',
    },
    {
        id: "peter",
        icon: Anchor,
        title: "የቅዱስ ጴጥሮስ ምላሽ",
        reference: "ሉቃስ 5:8",
        content:
            'ጴጥሮስ የክርስቶስን መለኮታዊ ኃይል በተአምራዊው የዓሣ ማጥመድ ተግባር ውስጥ ባየ ጊዜ፣ ተንበርክኮ "ጌታ ሆይ፥ እኔ ኃጢአተኛ ሰው ነኝና ከእኔ ሂድ" አለው። ጴጥሮስ የክርስቶስን ቅድስና ሲረዳ፣ በራሱ ውስጥ ያለውን ርኩሰት መሸከም አልቻለም። ይህ ምላሽ የሰው ልጅ ያለ እግዚአብሔር ጸጋ በቅድስና ፊት መቆም እንደማይችል ያሳያል። ክርስቶስ ግን "አትፍራ" በማለት ወደ ቅድስና ጉዞ ጠራው።',
    },
    {
        id: "job",
        icon: Scale,
        title: "የኢዮብ ምላሽ",
        reference: "ኢዮብ 40:4-5",
        content:
            'ኢዮብ በፈተናው ውስጥ ራሱን ጻድቅ አድርጎ ሲከላከል ቆይቷል። እግዚአብሔር ግን በዐውሎ ነፋስ ውስጥ ሆኖ ሲናገረው፣ ኢዮብ "እነሆ፥ እኔ ግብዝ ነኝ፤ ምን ብዬ እመልስልሃለሁ? እጄን በአፌ ላይ እጭናለሁ" አለ። በቅድስና ብርሃን ፊት፣ የሰው ልጅ ራሱን የመከላከል ኃይል ያጣል። ቅድስና ማለት "እኔ" የሚለውን ማንነት ለእግዚአብሔር "እርሱ" ለሚለው ማንነት ማስገዛት ነው።',
    },
    {
        id: "ezekiel",
        icon: Heart,
        title: "የሕዝቅኤል ተስፋ",
        reference: "ሕዝ. 36:26-27",
        content:
            'እግዚአብሔር "አዲስ ልብ እሰጣችኋለሁ አዲስም መንፈስ በውስጣችሁ አኖራለሁ" ይላል። ይህ የሚያሳየው ቅድስና "በእግዚአብሔር" የሚሰጥ አዲስ ሕይወት እንጂ የውጭ ሥነ-ምግባር ብቻ አለመሆኑን ነው።',
    },
];

function ExamplesTabs() {
    const [active, setActive] = useState("isaiah");
    const activeExample = examples.find((e) => e.id === active)!;

    return (
        <ScrollReveal>
            <div className="my-10 overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/50">
                {/* Tab buttons */}
                <div className="flex overflow-x-auto border-b border-slate-700/50">
                    {examples.map((ex) => {
                        const Icon = ex.icon;
                        return (
                            <button
                                key={ex.id}
                                onClick={() => setActive(ex.id)}
                                className={`flex shrink-0 items-center gap-2 px-5 py-4 font-serif text-sm transition-colors ${
                                    active === ex.id
                                        ? "border-b-2 border-amber-500 bg-amber-500/5 text-amber-400"
                                        : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                                }`}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="hidden sm:inline">
                                    {ex.title}
                                </span>
                                <span className="sm:hidden">
                                    {ex.reference}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 md:p-8"
                    >
                        <div className="mb-3 flex items-center gap-3">
                            <h4 className="font-serif text-lg font-semibold text-slate-50">
                                {activeExample.title}
                            </h4>
                            <span className="rounded-full bg-amber-500/10 px-3 py-0.5 font-sans text-xs text-amber-400">
                                {activeExample.reference}
                            </span>
                        </div>
                        <p className="font-serif text-base leading-[1.8] text-slate-200">
                            {activeExample.content}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </ScrollReveal>
    );
}

/* ------------------------------------------------------------------ */
/*  Application cards data & component                                */
/* ------------------------------------------------------------------ */

const applications = [
    {
        icon: Star,
        title: "ሁሉን ለእግዚአብሔር ማድረግ",
        description:
            'የምንሠራው ሥራ፣ የምናጠናው ትምህርት፣ የምንመራው ቤተሰብ ሁሉ "ለእግዚአብሔር የተቀደሰ" እንዲሆን ማድረግ።',
        reference: "1 ኛ ቆሮንቶስ 10:31",
    },
    {
        icon: Brain,
        title: "የሐሳብ ንጽሕና",
        description:
            "ልባችንን የመለኮታዊ ሐሳቦች ማደሪያ ማድረግ። ክፉ ሐሳቦችን ሆን ብሎ መቃወምና በቃለ እግዚአብሔር መተካት።",
        reference: "ፊልጵስዩስ 4:8",
    },
    {
        icon: MessageCircle,
        title: "የአንደበት ንጽሕና",
        description:
            'አንደበታችን ለእግዚአብሔር ምስጋና የተለየ መቅደስ ነው። ንግግራችን "የሚያንጽና ጸጋን የሚሰጥ" ሊሆን ይገባል።',
        reference: "ኤፌሶን 4:29",
    },
    {
        icon: Briefcase,
        title: "የሥራ ባሕል",
        description: 'ሥራን በታማኝነት፣ በጥራትና በፍቅር መሥራት "ለእግዚአብሔር" የመኖር ትልቅ ማሳያ ነው።',
        reference: "ቆላስይስ 3:23",
    },
    {
        icon: Users,
        title: "ማኅበራዊ ኃላፊነት",
        description:
            "ከእግዚአብሔር የተቀበልነውን ቅድስና ለተራቡት በማካፈል፣ ለታረዙት በመድረስና ለፍትሕ በመቆም እንገልጠዋለን።",
        reference: "ማቴዎስ 5:16",
    },
    {
        icon: Flame,
        title: "እንደ ኢሳይያስ",
        description:
            'የራሳችንን ድካም አምነን በየቀኑ በንስሐ ወደ እግዚአብሔር መቅረብ። "ከንፈሮቼን ቀድስ" ብሎ መጸለይ።',
        reference: "ኢሳይያስ 6:7",
    },
    {
        icon: Anchor,
        title: "እንደ ጴጥሮስ",
        description:
            "በሥራችንና በሕይወታችን ውስጥ የእግዚአብሔርን እጅ ስናይ፣ በትሕትና ተንበርክኮ ጌታን ማስቀደም።",
        reference: "ሉቃስ 5:8",
    },
    {
        icon: Shield,
        title: "እንደ ኢዮብ",
        description: "በእግዚአብሔር ሉዓላዊነት ፊት መገዛትና ሕይወታችንን ለእርሱ ጥበብ አሳልፎ መስጠት።",
        reference: "ኢዮብ 40:4",
    },
    {
        icon: Heart,
        title: "በትሕትና መኖር",
        description:
            "የራሳችንን ድካም በማመን ሁልጊዜ ከቅድስና ምንጭ ጸጋን መለመን። ራስን ጻድቅ አድርጎ ከመቁጠር መራቅ።",
        reference: "ያዕቆብ 4:6",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    },
};

function ApplicationCards() {
    return (
        <ScrollReveal>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
                {applications.map((app) => {
                    const Icon = app.icon;
                    return (
                        <motion.div
                            key={app.title}
                            variants={cardVariants}
                            className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/60 p-5 transition-colors hover:border-amber-500/30 hover:bg-slate-900/80"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="relative">
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                                        <Icon className="h-4 w-4 text-amber-400" />
                                    </div>
                                    <h4 className="font-serif text-sm font-semibold text-slate-50">
                                        {app.title}
                                    </h4>
                                </div>
                                <p className="mb-3 font-serif text-sm leading-[1.7] text-slate-400">
                                    {app.description}
                                </p>
                                <span className="font-sans text-xs text-amber-400/70">
                                    {app.reference}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </ScrollReveal>
    );
}

/* ------------------------------------------------------------------ */
/*  Pillar 3 examples                                                 */
/* ------------------------------------------------------------------ */

const pillar3Examples = [
    {
        title: "የካህናትና የሌዋውያን ምሳሌ",
        ref: "ዘጸአት 28",
        text: 'በብሉይ ኪዳን ካህናቱ የሚለብሱት ልብስና የሚጠቀሙባቸው ንዋያተ ቅድሳት "ለእግዚአብሔር የተቀደሰ" (Holy to the Lord) የሚል ማኅተም ነበረባቸው። ይህ የሚያሳየው ቅድስና ማለት ራስን ከዓለም አሠራር አውጥቶ ለእግዚአብሔር ፈቃድ ብቻ ማስገዛት መሆኑን ነው።',
    },
    {
        title: "የናዝራውያን ምሳሌ",
        ref: "ዘኁልቁ 6:1-3",
        text: 'ናዝራውያን (እንደ ሳምሶንና መጥምቁ ዮሐንስ) ራሳቸውን "ለእግዚአብሔር" ለይተው ነበር። ይህ መለየት (Consecration) የአመጋገብ፣ የአለባበስና የኑሮ ሥርዓታቸውን ይወስን ነበር። እኛም "ለእግዚአብሔር" ስንቀደስ፣ ሕይወታችን በፈቃዳችን ሳይሆን በእርሱ ፈቃድ ይመራል።',
    },
    {
        title: "ሕያው መሥዋዕት",
        ref: "ሮሜ 12:1",
        text: '"ሰውነታችሁን ቅዱስና እግዚአብሔርን ደስ የሚያሰኝ መሥዋዕት አድርጋችሁ አቅርቡ።" ልክ በመቅደስ መሠዊያ ላይ የሚቀርብ መሥዋዕት ለሌላ ተግባር እንደማይውል ሁሉ፣ የአማኝ ሕይወትም ለእግዚአብሔር ክብር ብቻ የተለየ ነው።',
    },
    {
        title: "የመንፈስ ቅዱስ ቤተ መቅደስ",
        ref: "1ቆሮ. 6:19-20",
        text: '"ሰውነታችሁ ከእግዚአብሔር የተቀበላችሁት በእናንተ የሚኖረው የመንፈስ ቅዱስ ቤተ መቅደስ እንደ ሆነ አታውቁምን? በዋጋ ተገዝታችኋልና... በሥጋችሁ እግዚአብሔርን አክብሩ።" ቅድስናችን ለእግዚአብሔር መሆኑ የሚታወቀው እኛን በገዛን በክርስቶስ ፈቃድ ስንመላለስ ነው።',
    },
    {
        title: "የተመረጠ ትውልድ",
        ref: "1ጴጥ. 2:9",
        text: '"እናንተ ግን... የተመረጠ ትውልድ፥ የንጉሥ ካህናት፥ ቅዱስ ሕዝብ፥ ለእግዚአብሔር የተለየ ወገን ናችሁ።" ይህ መለየት ዓላማ አለው፤ እርሱም የእግዚአብሔርን ድንቅ ሥራ ለዓለም መመስከር ነው።',
    },
];

/* ------------------------------------------------------------------ */
/*  Main exported component                                           */
/* ------------------------------------------------------------------ */

export default function HolinessArticle() {
    return (
        <div className="bg-slate-950 text-slate-50">
            {/* ── Hero ── */}
            <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/Images/hero_holiness.png"
                        alt="Dramatic light rays breaking through dark clouds over the Ethiopian highlands, symbolising divine holiness"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
                </div>

                <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-24 text-center">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="h-px w-24 bg-amber-500"
                    />

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        ቅድስና
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="font-serif text-xl text-amber-400 sm:text-2xl md:text-3xl"
                    >
                        ከእግዚአብሔር ፣ በእግዚአብሔር ፣ ለእግዚአብሔር
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.2 }}
                        className="max-w-xl font-serif text-lg leading-relaxed text-slate-400 md:text-xl"
                    >
                        {'"'}እኔ ቅዱስ ነኝና እናንተም ቅዱሳን ሁኑ{'"'}
                        <span className="mt-2 block text-sm text-amber-400/70">
                            1 ኛ ጴጥ. 1:16
                        </span>
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 1.0,
                            ease: "easeOut",
                        }}
                        className="h-px w-24 bg-amber-500"
                    />
                </div>
            </section>

            {/* ── Article body ── */}
            <article className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:px-8">
                {/* Introduction */}
                <section>
                    <ScrollReveal>
                        <h2 className="mb-8 font-serif text-2xl font-bold text-slate-50 md:text-3xl">
                            መግቢያ
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ቅድስና የአንድ ባህሪ መገለጫ ይሆን ዘንድ የምድር ቋንቋዎች ተሰባጥረው የፈጠሩት
                            የፊደል ቀመር አይደለም። ቅድስና ከፍጥረታት ውጪ በሆነው አካል በትንሽ ቀዳዳ ውስጥ
                            እንደሚፈነጥቅ የፀሐይ ብርሃን ለፍጥረታቱ የተቸረ ነው። ቅድስና የክርስትና ሕይወት
                            መተንፈሻ አየር ነው።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ቅድስና (Holiness) በትርጉሙ {'"'}መለየት{'"'} (Set apart) ማለት
                            ቢሆንም፣ ይህ መለየት ከዓለም ርኩሰት መራቅን ብቻ ሳይሆን ወደ እግዚአብሔር ክብር
                            መጠጋትንና የእርሱን ባሕርይ መላበስን ያመለክታል። ቅዱስነት የመለኮት ልህቀት
                            የተንጸባረቀበት ባህሪ ነው። ቅዱስነት አይመረመሬነት ነው።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ቅድስና በሦስት መሠረታዊ አቅጣጫዎች ይቃኛል፦ እንደ መለኮታዊ ምንጭ
                            (ከእግዚአብሔር) ፣ እንደ መንፈሳዊ ተሃድሶ (በእግዚአብሔር) እና እንደ ሕይወት
                            መሥዋዕት (ለእግዚአብሔር)። በዚህ መጣጥፍ ቅድስናን ስናነሳ አላማው የእግዚአብሔርን
                            ቅድስና አውቀንና ተረድተን ጨርሰን ለመቀመጥ አይደለም። ነገር ግን ከመታወቅ
                            የሚያልፈውን ይህን የመለኮት ማንነት እርሱ ሊገልጥልን በወደደው ልክ በጥቂቱ ጨልፎ
                            ለመመልከት ነው።
                        </p>
                    </ScrollReveal>
                </section>

                <Divider />

                {/* ── Pillar 1 ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-4 flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-amber-400" />
                            <span className="font-sans text-xs uppercase tracking-widest text-amber-400">
                                The Ontological Source
                            </span>
                        </div>
                        <h2 className="mb-2 font-serif text-2xl font-bold text-slate-50 md:text-3xl">
                            <SectionNumber number="፩" />
                            ቅድስና ከእግዚአብሔር
                        </h2>
                        <p className="mb-8 font-serif text-base text-amber-400/80">
                            የባሕርይ ቅድስና እና የመለኮት ልዕልና
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            የሰው ልጅ ከመፈጠሩ በፊት፤ መላእክት ጅማሬን ከማግኘታቸው በፊት፤ እንዲሁም ዓለም
                            {'"'}ይሁን{'"'} ተብሎ ከመዘርጋቱ በፊት እግዚአብሔር በራሱ ቅዱስ ነበረ።
                            የእግዚአብሔር ቅድስና ከፍ ካለ ምንጭ ወደ እርሱ የተንቆረቆረ ሳይሆን፤ ከራሱ ውስጥ
                            ፈልቆ የወጣ ማንነቱ ነው። እግዚአብሔር የቅድስና ምንጭ ነው።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ቅድስና የእግዚአብሔር አንድ ባህርይ ብቻ አይደለም ፤ የባህርያቱ ሁሉ መሠረት ነው።
                            የእግዚአብሔር ፍቅር ቅዱስ ፍቅር ነው፤ የእግዚአብሔር ፍርድ ቅዱስ ፍርድ ነው፤
                            የእግዚአብሔርም ሃይል ቅዱስ ሃይል ነው፤ ስለዚህ ቅድስናው {'"'}የባህርያቱ ሁሉ
                            ዘውድ
                            {'"'} ነው።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ቅዱስ የሚለው ቃል በእብራይስጥ {'"'}Qadosh{'"'} በግሪክ ደግሞ {'"'}
                            Hagios
                            {'"'} ከሚሉት ቃላት ጋር አቻ ፍቺ ሲኖረው ትርጓሜውም የተለየ፤ ተቆርጦ የተለየ
                            ማለት ነው። ቅዱስ ማለት ከሀጥያት የጸዳና ንፁህ መሆን ማለት ቢሆንም፤ እርሱን ብቻ
                            ማለት ግን አይደለም። ቅዱስ ማለት ፍፁም የተለየና የላቀ ማለት ነው።
                        </p>
                    </ScrollReveal>

                    <BibleQuote
                        text="ንጉሡ ዖዝያን በሞተበት ዓመት እግዚአብሔርን በረጅምና ከፍ ባለ ዙፋን ላይ ተቀምጦ አየሁት፥ የልብሱም ዘርፍ መቅደሱን ሞልቶት ነበር። ሱራፌልም ከእርሱ በላይ ቆመው ነበር... አንዱም ለአንዱ፦ ቅዱስ፥ ቅዱስ፥ ቅዱስ፥ የሠራዊት ጌታ እግዚአብሔር፤ ምድር ሁሉ ከክብሩ ተሞልታለች ፡ እያለ ይጮኽ ነበር።"
                        reference="ኢሳይያስ 6:1-3"
                    />

                    <ScrollReveal>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            በዚህ ክፍል ውስጥ መላእክት በዜማ እግዚአብሔርን {'"'}ቅዱስ፤ ቅዱስ፤ ቅዱስ
                            {'"'}
                            እያሉ ይዘምሩለታል። በዕብራይስጥ ቋንቋ የአንድን ነገር ጥልቀት ለመግለጽ ከተፈለገ
                            ቃሉ ይደገማል። ነገር ግን በመላው መጽሃፍ ቅዱስ ውስጥ የአንድን ነገር ልህቀትና
                            ታላቅነት ለማመልከት ወደ ሦስተኛ ደረጃ ከፍ ተደርጎ ሶስት ጊዜ ተደጋግሞ የተነገረ
                            የእግዚአብሔር ባህሪ አንድ ብቻ ነው። እርሱም ቅድስና ነው።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            አይገርምም? መጽሃፍ ቅዱስ የትኛውም ስፍራ ላይ እግዚአብሔርን {'"'}ፍቅር፤
                            ፍቅር፤ ፍቅር{'"'} ወይም {'"'}ሁሉን ቻይ፤ ሁሉን ቻይ፤ ሁሉን ቻይ{'"'}{" "}
                            አይለውም። ቅድስናን በተመለከተ ግን ቃሉ የሚለው ዝም ብሎ {'"'}ቅዱስ ነው
                            {'"'} ወይም ደግሞ
                            {'"'}ቅዱስ፤ ቅዱስ ነው{'"'} ብቻ አይደለም፤ ነገር ግን {'"'}ቅዱስ ቅዱስ
                            ቅዱስ ነው!{'"'} ይላል። ይህ መደጋገም ደግሞ እግዚአብሔር ከፍጥረታቱ የተለየ
                            ብቻ ሳይሆን፤ እጅግ በጣም የተለየና ወደር በሌለው ልዩነት የገነነ አምላክ እንደሆነ
                            ያሳየናል።
                        </p>
                    </ScrollReveal>

                    <BibleQuote
                        text="እግዚአብሔር አምላካችን ቅዱስ ነውና... ስገዱለት"
                        reference="መዝ. 99:9"
                    />
                </section>

                <Divider />

                {/* ── Pillar 2 ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-4 flex items-center gap-2">
                            <Eye className="h-5 w-5 text-amber-400" />
                            <span className="font-sans text-xs uppercase tracking-widest text-amber-400">
                                The Encounter and Purification
                            </span>
                        </div>
                        <h2 className="mb-2 font-serif text-2xl font-bold text-slate-50 md:text-3xl">
                            <SectionNumber number="፪" />
                            ቅድስና በእግዚአብሔር
                        </h2>
                        <p className="mb-8 font-serif text-base text-amber-400/80">
                            {'"'}በቅዱሱ ፊት የመቆም ፍርሃት{'"'} እና የጸጋው ጣልቃ ገብነት
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            የሰው ልጅ ቅድስናን የሚቀበለው {'"'}በእግዚአብሔር{'"'} በኩል ነው። ቅድስና{" "}
                            {'"'}
                            በእግዚአብሔር{'"'} በኩል የሚገኝ ነው ስንል፣ የሰው ልጅ በራሱ ጥረት ቅዱስ
                            መሆን እንደማይችልና ከቅዱሱ አምላክ ጋር ሲገናኝ ያለውን ፍጹም ድካም መገንዘብን
                            ይጨምራል። ኃጢአተኛው ሰው በቅዱሱ አምላክ ፊት ሲቆም የራሱን ርኩሰት በግልጽ
                            ያያል።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <p className="mt-6 mb-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            በመጽሐፍ ቅዱስ ውስጥ አራት ታላላቅ ምሳሌዎችን እንመልከት፦
                        </p>
                    </ScrollReveal>

                    <ExamplesTabs />

                    <ScrollReveal>
                        <p className="mt-8 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            የሰው ልጅ በኤደን ገነት በነበረው ውድቀት ምክንያት ይህንን የመለኮት ነጸብራቅ
                            አጥቶ ነበር። እባቡ ለአዳምና ለሔዋን {'"'}እንደ እግዚአብሔር ትሆናላችሁ{'"'}{" "}
                            የሚል የሐሰት ተስፋ ሲሰጣቸው፣ ያለ እግዚአብሔር እርዳታ ቅዱስ መሆን እንደሚችሉ
                            በማሳመን ነበር። ሆኖም ግን፣ ቅድስና {'"'}በእግዚአብሔር{'"'} በኩል እንጂ
                            ከእግዚአብሔር ውጭ አይገኝም።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ዛሬ እኛ የምንቀደሰው በገዛ ኃይላችን ሳይሆን {'"'}በእግዚአብሔር{'"'}{" "}
                            (Through God) ነው። ይህ ሂደት በሁለት ታላላቅ መሠረቶች ላይ የቆመ ነው፦
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="mt-8 flex flex-col gap-4">
                            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 md:p-6">
                                <h4 className="mb-2 font-serif text-base font-semibold text-amber-400">
                                    በክርስቶስ ደም መታጠብ
                                </h4>
                                <p className="font-serif text-sm leading-[1.8] text-slate-300 md:text-base">
                                    {'"'}በኢየሱስ ክርስቶስ ሥጋ አንድ ጊዜ ፈጽሞ በመሠዋቱ ተቀድሰናል
                                    {'"'} (ዕብ. 10:10)። ክርስቶስ በመስቀል ላይ በከፈለው
                                    መሥዋዕትነት የቅድስናን በር ከፍቶልናል።
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 md:p-6">
                                <h4 className="mb-2 font-serif text-base font-semibold text-amber-400">
                                    በመንፈስ ቅዱስ ሥራ
                                </h4>
                                <p className="font-serif text-sm leading-[1.8] text-slate-300 md:text-base">
                                    ቅድስና የአንድ ቀን ክስተት ሳይሆን የሕይወት ዘመን ጉዞ ነው። መንፈስ
                                    ቅዱስ በውስጣችን በመኖር፣ አሮጌውን የኃጢአት ማንነት እየገፈፈ አዲሱን
                                    የክርስቶስን መልክ በእኛ ውስጥ ይሥላል።
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="mt-8 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ቅድስና በእግዚአብሔር ነው ስንል፣ በድካማችን ጊዜ የሚያበረታን፣ በንሥሐ
                            የሚያጥበንና በጸጋው የሚያሳድገን እርሱ ራሱ መሆኑን ማመን ነው። አማኝ በራሱ ጥረት
                            ቅዱስ ሊሆን ቢሞክር ውጤቱ {'"'}ራስን ማጽደቅ{'"'}{" "}
                            (Self-righteousness) ብቻ ይሆናል። በእግዚአብሔር ሲሆን ግን {'"'}
                            እውነተኛ ቅድስና{'"'} ይባላል።
                        </p>
                    </ScrollReveal>
                </section>

                <Divider />

                {/* ── Pillar 3 ── */}
                <section>
                    <ScrollReveal>
                        <div className="mb-4 flex items-center gap-2">
                            <Target className="h-5 w-5 text-amber-400" />
                            <span className="font-sans text-xs uppercase tracking-widest text-amber-400">
                                The Teleological Purpose
                            </span>
                        </div>
                        <h2 className="mb-2 font-serif text-2xl font-bold text-slate-50 md:text-3xl">
                            <SectionNumber number="፫" />
                            ቅድስና ለእግዚአብሔር
                        </h2>
                        <p className="mb-8 font-serif text-base text-amber-400/80">
                            ለተለየ ክብር የተቀደሰ (Consecrated) ሕይወት
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ቅድስና ለግል መንፈሳዊ ኩራት ወይም ለሰው ታይታ የሚደረግ ጌጥ አይደለም። የቅድስና
                            የመጨረሻው ግብ {'"'}ለእግዚአብሔር{'"'} (For God) መሆን ነው። በመጽሐፍ
                            ቅዱስ ትርጓሜ {'"'}ቅዱስ{'"'} ማለት {'"'}ለተለየ አገልግሎት የተለየ
                            {'"'} (Set apart for divine use) ማለት ነው። ቅድስና {'"'}
                            ለእግዚአብሔር{'"'} (For God) ነው ስንል፣ ሕይወታችን የራሳችን መሆኑ
                            አብቅቶ የእግዚአብሔር {'"'}መሣሪያ{'"'} መሆኑን ያመለክታል።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            በመጽሐፍ ቅዱስ ውስጥ ለዚህ ታላላቅ ምሳሌዎች አሉ፦
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="mt-6 flex flex-col gap-5">
                            {pillar3Examples.map((item, i) => (
                                <ScrollReveal key={item.title} delay={i * 0.05}>
                                    <div className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-5 md:p-6">
                                        <div className="mb-2 flex flex-wrap items-center gap-2">
                                            <h4 className="font-serif text-base font-semibold text-slate-50">
                                                {item.title}
                                            </h4>
                                            <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 font-sans text-xs text-amber-400">
                                                {item.ref}
                                            </span>
                                        </div>
                                        <p className="font-serif text-sm leading-[1.8] text-slate-300 md:text-base">
                                            {item.text}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="mt-8 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            የተቀደስነው ለራሳችን ዝና ሳይሆን {'"'}ለእግዚአብሔር{'"'} ክብር ነው።
                            ቅድስና ራስን ለአምላክ ለይቶ መስጠት ነው። ቅዱስ መሆን ማለት የእግዚአብሔርን
                            መልክ ማንጸባረቅ ነው። ፍቅሩን፣ ርኅራኄውን እና ጽድቁን በሕይወታችን ስንገልጥ{" "}
                            {'"'}ለእግዚአብሔር
                            {'"'} መኖራችን ይረጋገጣል።
                        </p>
                    </ScrollReveal>

                    <BibleQuote
                        text="ያለ ቅድስና ጌታን ሊያይ የሚችል የለም"
                        reference="ዕብ. 12:14"
                    />
                </section>

                <Divider />

                {/* ── Practical Applications ── */}
                <section>
                    <ScrollReveal>
                        <h2 className="mb-2 font-serif text-2xl font-bold text-slate-50 md:text-3xl">
                            <SectionNumber number="፬" />
                            ተግባራዊ የቅድስና ትግበራ
                        </h2>
                        <p className="mb-10 font-serif text-base text-amber-400/80">
                            ይህንን ጥልቅ እውነት በሕይወታችን እንዴት እንተርጉመው?
                        </p>
                    </ScrollReveal>

                    <ApplicationCards />
                </section>

                <Divider />

                {/* ── Conclusion ── */}
                <section>
                    <ScrollReveal>
                        <h2 className="mb-8 font-serif text-2xl font-bold text-slate-50 md:text-3xl">
                            ማጠቃለያ
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ቅድስና{" "}
                            <strong className="text-amber-400">ከእግዚአብሔር</strong>{" "}
                            የተሰጠ ስጦታ ነው፤{" "}
                            <strong className="text-amber-400">በእግዚአብሔር</strong>{" "}
                            ረዳትነትና በቃሉ መታደስ የሚከናወን ሂደት ነው፤{" "}
                            <strong className="text-amber-400">ለእግዚአብሔር</strong>{" "}
                            ክብር የሚቀርብ የሕይወት መሥዋዕት ነው። ቅድስና የክርስትና ሕይወት ማዕከላዊ ምሰሶ
                            ነው።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            ቅድስና ምርጫ ሳይሆን የክርስቶስ ተከታይ ለሆነ ሁሉ ግዴታ ነው። ቅድስና ሸክም
                            ሳይሆን ከእግዚአብሔር ጋር የመኖር ጥልቅ ደስታ ነው። ስለዚህ ከምንጩ
                            (ከእግዚአብሔር) እንጠጣ፣ በመንገዱ (በእግዚአብሔር) እንጓዝ፣ ለዓላማውም
                            (ለእግዚአብሔር) እንኑር።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="mt-6 font-serif text-base leading-[1.8] text-slate-200 md:text-lg">
                            በየዕለቱ በዚህ መለኮታዊ ጎዳና ላይ እንድንመላለስ የእግዚአብሔር ቸርነት ይርዳን።
                            እግዚአብሔር በሰጠን ጸጋ ተጠቅመን፣ በደሙ ታጥበን፣ ለመንፈሱ ታዝዘን በቅድስና
                            ጎዳና እንድንመላለስ የእርሱ ረድኤት አይለየን።
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.25}>
                        <div className="mt-16 flex flex-col items-center gap-4">
                            <div className="h-px w-16 bg-amber-500/40" />
                            <p className="font-serif text-sm text-slate-400">
                                ለእግዚአብሔር ክብር ይሁን
                            </p>
                            <div className="h-px w-16 bg-amber-500/40" />
                        </div>
                    </ScrollReveal>
                </section>
            </article>

            {/* ── Footer ── */}
            <footer className="border-t border-slate-700/30 px-6 py-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="font-serif text-sm text-slate-400">
                        ቅድስና፦ ከእግዚአብሔር ፣ በእግዚአብሔር ፣ ለእግዚአብሔር
                    </p>
                </div>
            </footer>
        </div>
    );
}
