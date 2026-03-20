"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ExternalLink, X, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useCallback, useRef } from "react";

interface TravelLogsModalProps {
  logs: TravelLog[];
  isOpen: boolean;
  onClose: () => void;
}

export default function TravelLogsModal({
  logs,
  isOpen,
  onClose,
}: TravelLogsModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key and manage Lenis scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Block all wheel/touch events from reaching the page
    const blockScroll = (e: Event) => {
      e.stopPropagation();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();

      // Capture wheel + touch events on the overlay to prevent page scroll
      const overlay = overlayRef.current;
      if (overlay) {
        overlay.addEventListener("wheel", blockScroll, { passive: false });
        overlay.addEventListener("touchmove", blockScroll, { passive: false });
      }
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
      window.__lenis?.start();

      const overlay = overlayRef.current;
      if (overlay) {
        overlay.removeEventListener("wheel", blockScroll);
        overlay.removeEventListener("touchmove", blockScroll);
      }
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start justify-center"
          style={{ overscrollBehavior: "contain" }}
          onClick={onClose}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] mt-[7vh] mx-4 rounded-2xl bg-surface border border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="text-white font-heading font-bold text-xl">
                    All Travel Logs
                  </h2>
                  <p className="text-xs text-text-muted mt-0.5">
                    cat travel_history.log | sort -r
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4 text-text-muted" />
              </button>
            </div>

            {/* Scrollable Timeline */}
            <div
              className="overflow-y-auto p-6 flex-1"
              style={{ overscrollBehavior: "contain" }}
            >
              <div className="relative border-l border-white/10 ml-3 space-y-6">
                {logs.map((log, index) => (
                  <motion.div
                    key={log.location}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    className="relative pl-7"
                  >
                    {/* Timeline dot */}
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary/50 border-2 border-primary ring-4 ring-surface" />

                    {/* Location card */}
                    <div className="rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-white font-bold text-sm">
                          {log.location}
                        </h3>
                        <ChevronRight className="h-3 w-3 text-text-muted" />
                        <span className="text-xs text-text-muted">
                          {log.visits.length} visit
                          {log.visits.length > 1 ? "s" : ""}
                        </span>
                      </div>

                      {/* All visits */}
                      <div className="space-y-2">
                        {log.visits.map((visit, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs"
                          >
                            <Calendar className="h-3 w-3 text-text-muted shrink-0" />
                            <span className="text-primary font-medium bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                              {visit.date}
                            </span>
                            <span className="text-text-muted">
                              {visit.status}
                            </span>
                            {visit.link && (
                              <Link
                                href={visit.link.startsWith("http") ? visit.link : `/blog/${visit.link}`}
                                target={visit.link.startsWith("http") ? "_blank" : undefined}
                                rel={visit.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-primary hover:text-accent transition-colors ml-auto"
                              >
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
