"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowRight } from "lucide-react";
import TravelLogsModal from "./TravelLogsModal";

interface TravelLogsProps {
  logs: TravelLog[];
  currentLocation: CurrentLocation;
}

const SUMMARY_COUNT = 5;

export default function TravelLogs({ logs, currentLocation }: TravelLogsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter out current base locations (Madurai/Karur) from the recent list
  const recentLogs = logs
    .filter(
      (log) =>
        log.location.toLowerCase() !== "madurai" &&
        log.location.toLowerCase() !== "karur"
    )
    .slice(0, SUMMARY_COUNT);

  const currentLabel =
    currentLocation.type === "override"
      ? "Currently here"
      : currentLocation.type === "weekend"
        ? "Weekend · Home"
        : "Weekday · Work";

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
          <Navigation className="text-secondary h-6 w-6" />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Travel Logs
          </h2>
          <p className="text-xs font-sans text-text-muted mt-1">
            tail -f gps_logs
          </p>
        </div>
      </div>

      {/* Current Location */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-4"
      >
        <div className="relative">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary" />
        </div>
        <div className="flex-1">
          <p className="text-white font-bold text-sm">
            {currentLocation.location}
          </p>
          <p className="text-[11px] text-primary/80">{currentLabel}</p>
        </div>
        <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
          📍 Now
        </span>
      </motion.div>

      {/* Recent Places */}
      <div className="space-y-3">
        {recentLogs.map((log, index) => (
          <motion.div
            key={log.location}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-3 rounded-xl bg-surface/50 border border-white/10 backdrop-blur-sm hover:border-primary/20 transition-colors"
          >
            <MapPin className="h-4 w-4 text-text-muted shrink-0" />
            <span className="text-white font-bold text-sm flex-1">
              {log.location}
            </span>
            <span className="text-xs text-text-muted">{log.latestDate}</span>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      {logs.length > SUMMARY_COUNT && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => setIsModalOpen(true)}
          className="mt-4 w-full py-3 rounded-xl border border-white/10 bg-surface/30 hover:border-primary/30 hover:bg-surface/50 transition-all text-sm text-text-muted hover:text-white flex items-center justify-center gap-2 group cursor-pointer"
        >
          cat gps_logs
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </motion.button>
      )}

      <TravelLogsModal
        logs={logs}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
