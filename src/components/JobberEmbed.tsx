"use client";

import { useEffect } from "react";

const CLIENTHUB_ID = "aba6013d-7320-4c1a-924c-e85d9784875f-4962085";
const FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/aba6013d-7320-4c1a-924c-e85d9784875f/public/work_request/embedded_work_request_form?form_id=4962085";
const SCRIPT_SRC = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";

export default function JobberEmbed() {
  useEffect(() => {
    // Jobber's snippet reads its config via `document.currentScript`, which is
    // unreliable for scripts loaded with async=true (e.g. next/script's
    // deferred strategies). Inject it manually as a non-async, non-deferred
    // script so `document.currentScript` is set correctly during execution.
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = false;
    script.setAttribute("clienthub_id", CLIENTHUB_ID);
    script.setAttribute("form_url", FORM_URL);
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div id={CLIENTHUB_ID} className="shrink-0" />;
}
