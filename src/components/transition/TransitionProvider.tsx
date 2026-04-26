"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface TransitionContextType {
  navigateTo: (href: string, clickX: number, clickY: number) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => { },
  isTransitioning: false,
});

export const usePageTransition = () => useContext(TransitionContext);

// Fun terminal-style messages
const funMessages = [
  "$ cd /next-page",
  "Compiling vibes...",
  "sudo navigate --smooth",
  "git checkout new-page",
  "npm run adventure",
  "Loading awesomeness...",
  "Teleporting in 3...2...1...",
  "brew install next-page",
  "Ctrl+C'ing old page...",
  "echo 'almost there'",
  "Warming up pixels...",
  "Reticulating splines...",
  "pip install good-vibes",
  "rm -rf boring-page",
  "docker pull next-page",
  "ssh noufal@next-page",
  "cat /dev/random > page",
  "chmod +x awesome.sh",
  "wget new-experience.tar.gz",
  "Deploying dopamine...",
  "Parsing the matrix...",
  "Injecting creativity...",
  "Buffering brilliance...",
  "Syncing brain cells...",
  "Defragmenting thoughts...",
  "curl -s new-page | render",
  "Spawning new thread...",
  "make clean && make page",
  "tar -xvf next-page.tar.gz",
  "Allocating good vibes...",
];

// Timing — two layers staggered, then exit both
const LAYER1_DURATION = 0.85; // secondary layer
const LAYER2_DELAY = 0.2; // primary layer starts after this
const LAYER2_DURATION = 0.75; // primary layer
const NAVIGATE_AT = 0.9; // when to trigger navigation
const EXIT_DURATION = 0.7;

export default function TransitionProvider({
  children,
}: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState<"idle" | "enter" | "exit">("idle");
  const [message, setMessage] = useState("");
  const [clickOrigin, setClickOrigin] = useState({ x: 50, y: 50 });
  const pendingHref = useRef<string | null>(null);
  const hasNavigated = useRef(false);

  const pickMessage = useCallback(() => {
    setMessage(funMessages[Math.floor(Math.random() * funMessages.length)]);
  }, []);

  // When pathname changes after navigation, trigger exit
  useEffect(() => {
    if (hasNavigated.current) {
      hasNavigated.current = false;
      // Brief hold then exit
      const timer = setTimeout(() => {
        setPhase("exit");
        const exitTimer = setTimeout(() => {
          setPhase("idle");
          setIsTransitioning(false);
        }, EXIT_DURATION * 1000 + 150);
        return () => clearTimeout(exitTimer);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const navigateTo = useCallback(
    (href: string, clickX: number, clickY: number) => {
      if (href === pathname || isTransitioning) return;

      const xPercent = (clickX / window.innerWidth) * 100;
      const yPercent = (clickY / window.innerHeight) * 100;
      setClickOrigin({ x: xPercent, y: yPercent });

      pickMessage();
      setIsTransitioning(true);
      setPhase("enter");
      pendingHref.current = href;

      setTimeout(() => {
        hasNavigated.current = true;
        window.scrollTo(0, 0);
        router.push(href);
      }, NAVIGATE_AT * 1000);
    },
    [pathname, isTransitioning, router, pickMessage],
  );

  const originStr = `${clickOrigin.x}% ${clickOrigin.y}%`;

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      {children}

      {/* Layered transition overlay */}
      <AnimatePresence>
        {phase !== "idle" && (
          <div className="fixed inset-0 z-9999 pointer-events-none">
            {/* Layer 1: Mint accent — expands first */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: "#4FFFB0" }}
              initial={{ clipPath: `circle(0% at ${originStr})`, y: 0 }}
              animate={{
                clipPath: `circle(150% at ${originStr})`,
                y: phase === "exit" ? "-100%" : 0,
              }}
              transition={{
                clipPath: {
                  duration: LAYER1_DURATION,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: {
                  duration: EXIT_DURATION,
                  ease: [0.76, 0, 0.24, 1],
                  delay: phase === "exit" ? 0.25 : 0,
                },
              }}
            />

            {/* Layer 2: Teal */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: "#1C8C6E" }}
              initial={{ clipPath: `circle(0% at ${originStr})`, y: 0 }}
              animate={{
                clipPath: `circle(150% at ${originStr})`,
                y: phase === "exit" ? "-100%" : 0,
              }}
              transition={{
                clipPath: {
                  duration: LAYER1_DURATION * 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.08,
                },
                y: {
                  duration: EXIT_DURATION,
                  ease: [0.76, 0, 0.24, 1],
                  delay: phase === "exit" ? 0.15 : 0,
                },
              }}
            />

            {/* Layer 3: Deep teal */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: "#0B3655" }}
              initial={{ clipPath: `circle(0% at ${originStr})`, y: 0 }}
              animate={{
                clipPath: `circle(150% at ${originStr})`,
                y: phase === "exit" ? "-100%" : 0,
              }}
              transition={{
                clipPath: {
                  duration: LAYER2_DURATION,
                  ease: [0.22, 1, 0.36, 1],
                  delay: LAYER2_DELAY * 0.8,
                },
                y: {
                  duration: EXIT_DURATION,
                  ease: [0.76, 0, 0.24, 1],
                  delay: phase === "exit" ? 0.07 : 0,
                },
              }}
            />

            {/* Layer 4: Darkest — arrives last, slides up first on exit */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: "#052640" }}
              initial={{ clipPath: `circle(0% at ${originStr})`, y: 0 }}
              animate={{
                clipPath: `circle(150% at ${originStr})`,
                y: phase === "exit" ? "-100%" : 0,
              }}
              transition={{
                clipPath: {
                  duration: LAYER2_DURATION,
                  ease: [0.22, 1, 0.36, 1],
                  delay: LAYER2_DELAY,
                },
                y: {
                  duration: EXIT_DURATION,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
            />

            {/* Fun message — centered on the dark layer */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "exit" ? 0 : 1 }}
              transition={{
                duration: phase === "exit" ? 0.15 : 0.3,
                delay: phase === "exit" ? 0 : LAYER2_DELAY + 0.15,
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <span className="text-lg md:text-xl font-heading font-bold tracking-wide text-primary">
                  {message}
                </span>
                <motion.span
                  className="inline-block w-2.5 h-5 bg-primary/80 rounded-sm"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
