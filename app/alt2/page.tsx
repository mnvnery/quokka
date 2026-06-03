"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TRANSFORM = "matrix(0.13333333,0,0,-0.13333333,0,333.33333)";

const LETTER_PATHS = [
  "m 1443.04,998.34 c -153.96,153.96 -129,420.15 74.88,537.71 24.47,14.11 50.92,24.8 78.34,31.59 121.86,30.19 242.87,-4.34 327.3,-88.76 132.48,-132.48 132.48,-348.06 0,-480.54 -132.49,-132.481 -348.04,-132.481 -480.52,0 z M 2514.06,665.59 2342.84,836.82 c -28.21,28.2 -36.51,71.039 -19.87,107.289 130.85,284.971 61.77,639.921 -207.51,850.811 -104.97,82.22 -232.37,132.72 -365.15,144.92 -226.16,20.77 -441.83,-64.15 -592.39,-232.11 -238.631,-266.22 -237.178,-676.36 2.82,-941.359 139.92,-154.5 331.24,-231.742 522.55,-231.742 100.35,0 200.67,21.34 293.59,63.871 36.6,16.762 79.73,9.039 108.19,-19.418 l 171.24,-171.242 257.75,257.75",
  "m 3094.35,534.301 c -334.32,0 -606.32,272.008 -606.32,606.329 v 760.5 h 364.52 v -760.5 c 0,-133.33 108.47,-241.802 241.8,-241.802 133.34,0 241.82,108.472 241.82,241.802 v 760.5 h 364.51 v -760.5 c 0,-334.321 -271.99,-606.329 -606.33,-606.329",
  "m 4492.81,1578.24 c -87.01,0 -174.02,-33.12 -240.27,-99.36 -132.48,-132.48 -132.48,-348.06 0,-480.54 132.49,-132.481 348.05,-132.481 480.54,0 132.48,132.48 132.48,348.06 0,480.54 -66.25,66.24 -153.26,99.36 -240.27,99.36 z m 0,-1043.611 c -180.36,0 -360.71,68.652 -498.02,205.949 -274.61,274.622 -274.61,721.452 0,996.052 274.61,274.62 721.43,274.62 996.04,0 274.61,-274.6 274.61,-721.43 0,-996.052 C 4853.52,603.281 4673.17,534.629 4492.81,534.629",
  "m 6022.9,1171.44 479.37,729.69 h -436.14 l -356.97,-543.37 c -17.52,-26.67 -59.02,-14.26 -59.02,17.66 v 525.71 H 5285.63 V 581.09 h 364.51 v 345.988 c 0,30.473 38.43,43.852 57.35,19.973 L 5997.42,581.09 h 465.05 l -437.9,552.73 c -8.61,10.87 -9.29,26.03 -1.67,37.62",
  "m 7298.27,1171.44 479.37,729.69 H 7341.5 l -356.97,-543.37 c -17.52,-26.67 -59.02,-14.26 -59.02,17.66 v 525.71 H 6561 V 581.09 h 364.51 v 345.988 c 0,30.473 38.43,43.852 57.35,19.973 L 7272.79,581.09 h 465.05 l -437.9,552.73 c -8.61,10.87 -9.29,26.03 -1.67,37.62",
  "m 8138.58,1277.24 v 53.45 c 0,130.05 99.73,242.11 229.62,248.53 138.84,6.86 254,-104.13 254,-241.51 v -60.47 c 0,-17.75 -14.39,-32.15 -32.15,-32.15 h -419.32 c -17.75,0 -32.15,14.4 -32.15,32.15 z m 227.2,666.62 c -331,-7.83 -591.71,-286.43 -591.71,-617.53 V 581.09 h 364.51 v 267.332 c 0,17.758 14.4,32.148 32.15,32.148 h 419.32 c 17.76,0 32.15,-14.39 32.15,-32.148 V 581.09 h 364.51 v 756.62 c 0,339.19 -279.95,614.22 -620.93,606.15",
];

const EASE = [0.22, 1, 0.36, 1] as const;
const CURVE_SPRING = { type: "spring" as const, stiffness: 300, damping: 14, mass: 0.9 };

const FLAT_PATH   = "M 20,20 C 174,20 526,20 680,20";
const CURVED_PATH = "M 20,20 C 174,245 526,245 680,20";

function fadeUp(delay: number, active: boolean, duration = 0.55) {
  return {
    initial: { opacity: 0, y: 50 },
    animate: active ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { delay, duration, ease: EASE },
  };
}

function QuokkaLogo({ onLanded }: { onLanded: () => void }) {
  const onLandedRef = useRef(onLanded);
  useEffect(() => {
    // Fire 250ms before the logo animation ends (delay 0.15 + duration 0.9 − 0.25)
    const t = setTimeout(() => onLandedRef.current(), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "101%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        <svg
          viewBox="130 74 1068 206"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-label="Quokka"
        >
          <g transform={TRANSFORM}>
            {LETTER_PATHS.map((d, i) => (
              <path key={i} fill="#BBBEF6" d={d} />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

function CurvedText({
  visible,
  curved,
  onCurveComplete,
}: {
  visible: boolean;
  curved: boolean;
  onCurveComplete: () => void;
}) {
  return (
    <svg
      viewBox="0 0 700 240"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      <defs>
        <motion.path
          id="textArcAlt2"
          fill="none"
          initial={{ d: FLAT_PATH }}
          animate={{ d: curved ? CURVED_PATH : FLAT_PATH }}
          transition={curved ? CURVE_SPRING : { duration: 0 }}
          onAnimationComplete={curved ? onCurveComplete : undefined}
        />
        <clipPath id="textWipeAlt2">
          <motion.rect
            x="0" y="-20" height="280"
            initial={{ width: 0 }}
            animate={{ width: visible ? 700 : 0 }}
            transition={{ delay: 0, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </clipPath>
      </defs>
      <motion.g
        clipPath="url(#textWipeAlt2)"
        initial={{ rotate: 8, y: -50 }}
        animate={{ rotate: visible ? 0 : 8, y: visible ? 0 : -50 }}
        style={{ transformOrigin: "350px 120px" }}
        transition={{ delay: 0, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <text
          fill="#BBBEF6"
          fontSize="40"
          fontWeight="500"
          fontFamily="Nunito, sans-serif"
          letterSpacing="5"
        >
          <textPath href="#textArcAlt2" startOffset="50%" textAnchor="middle">
            INTERIORS AND SPACES
          </textPath>
        </text>
      </motion.g>
    </svg>
  );
}

function InstagramIcon({ large = false }: { large?: boolean }) {
  const size = large ? 40 : 28;
  const padding = large ? "p-3" : "p-2.5";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-quokka-lavender text-quokka-purple ${padding}`}
      aria-hidden="true"
    >
      <FaInstagram size={size} />
    </span>
  );
}

function LinkedInIcon({ large = false }: { large?: boolean }) {
  const size = large ? 40 : 28;
  const padding = large ? "p-3" : "p-2.5";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-quokka-lavender text-quokka-purple ${padding}`}
      aria-hidden="true"
    >
      <FaLinkedinIn size={size} />
    </span>
  );
}

function ConstructionNotice() {
  return (
    <div className="rounded-t-xl mx-auto w-fit px-5 lg:px-8 pt-5 pb-16 lg:pb-20 text-center bg-quokka-lavender text-quokka-purple">
      <p className="font-extrabold text-lg lg:text-xl uppercase">
        Site under construction,
        <br />
        check back soon!
      </p>
    </div>
  );
}

export default function Home() {
  const [textVisible, setTextVisible] = useState(false);
  const [curved, setCurved] = useState(false);
  const [isFinal, setIsFinal] = useState(false);

  // Fallback: if path-morph callback doesn't fire, force final after 3s
  useEffect(() => {
    if (!curved) return;
    const t = setTimeout(() => setIsFinal(true), 3000);
    return () => clearTimeout(t);
  }, [curved]);

  return (
    <main className="min-h-screen flex flex-col bg-quokka-purple text-quokka-lavender font-nunito">

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col min-h-screen relative overflow-hidden">
        <motion.nav className="fixed bottom-8 right-8 z-10" {...fadeUp(0, isFinal)}>
          <a
            href="mailto:hello@quokkainteriors.com"
            className="font-extrabold text-xl tracking-wide uppercase hover:opacity-70 transition-opacity"
          >
            Contact
          </a>
        </motion.nav>

        <div className="flex-1 flex flex-col items-center justify-start py-12 px-8">
          <div className="w-full">
            <QuokkaLogo onLanded={() => { setTextVisible(true); setCurved(true); }} />
          </div>
          <div className="w-full mt-2" style={{ maxWidth: "60vw" }}>
            <CurvedText
              visible={textVisible}
              curved={curved}
              onCurveComplete={() => setIsFinal(true)}
            />
          </div>
        </div>

        <div className="px-8 pb-8">
          <motion.div className="flex items-center gap-4" {...fadeUp(0.1, isFinal)}>
            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
              <LinkedInIcon />
            </a>
          </motion.div>
        </div>

        {/* Banner is last — gated on isFinal with extra delay */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 100 }}
          animate={isFinal ? { opacity: 1, y: 30 } : { opacity: 0, y: 100 }}
          transition={{
            y: { delay: 0.25, type: "spring", stiffness: 260, damping: 16 },
            opacity: { delay: 0.25, duration: 0.2 },
          }}
        >
          <ConstructionNotice />
        </motion.div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden flex flex-col min-h-screen relative overflow-hidden px-5 pt-10">
        <div>
          <QuokkaLogo onLanded={() => { setTextVisible(true); setCurved(true); }} />
          <div className="mt-1 mx-auto" style={{ maxWidth: "70vw" }}>
            <CurvedText
              visible={textVisible}
              curved={curved}
              onCurveComplete={() => setIsFinal(true)}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-evenly pt-6 pb-40">
          <motion.a
            href="mailto:hello@quokkainteriors.com"
            className="font-extrabold text-xl tracking-wide uppercase hover:opacity-70 transition-opacity"
            {...fadeUp(0, isFinal)}
          >
            Contact
          </motion.a>
          <motion.a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity" {...fadeUp(0.08, isFinal)}>
            <InstagramIcon large />
          </motion.a>
          <motion.a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity" {...fadeUp(0.16, isFinal)}>
            <LinkedInIcon large />
          </motion.a>
        </div>

        <motion.div
          className="absolute bottom-0 w-full left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 80 }}
          animate={isFinal ? { opacity: 1, y: 20 } : { opacity: 0, y: 80 }}
          transition={{
            y: { delay: 0.25, type: "spring", stiffness: 260, damping: 16 },
            opacity: { delay: 0.25, duration: 0.2 },
          }}
        >
          <ConstructionNotice />
        </motion.div>
      </div>

    </main>
  );
}
