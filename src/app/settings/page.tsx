// app/settings/page.tsx
"use client";

import { redirect } from "next/navigation";

export default function SettingsPage() {
  return redirect("/settings/account");
}
