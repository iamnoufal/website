"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const logs = [
  { id: 1, location: "Bangalore, India", date: "2024", status: "Current Base" },
  { id: 2, location: "Coimbatore, India", date: "2020-2024", status: "Education" },
  { id: 3, location: "Chennai, India", date: "2018", status: "Visit" },
  { id: 4, location: "Kerala, India", date: "Origin", status: "Home" },
];

export default function TravelLogs() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
          <Navigation className="text-orange-500 h-6 w-6" />
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

      <div className="relative border-l border-white/10 ml-6 space-y-8">
        {logs.map((log, index) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8"
          >
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-surface border border-white/20 ring-4 ring-surface" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-text-muted shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold">{log.location}</h3>
                  <p className="text-xs text-text-muted">{log.status}</p>
                </div>
              </div>
              <div className="pl-8 sm:pl-0">
                <span className="text-xs font-sans py-1 px-2 rounded bg-black/20 text-orange-400 border border-orange-500/10">
                  {log.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
