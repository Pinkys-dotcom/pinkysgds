"use client";

import dynamic from "next/dynamic";

const JobberEmbed = dynamic(() => import("@/components/JobberEmbed"), { ssr: false });

export default function JobberEmbedLoader() {
  return <JobberEmbed />;
}
