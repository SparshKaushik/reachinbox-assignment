"use client";

import { Loader2 } from "lucide-react";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { auth$ } from "~/lib/states/auth";

export default function Redirect() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const next = searchParams.get("next") ?? "/";
    if (token) {
      auth$.set({
        accessToken: token,
      });
    }
    redirect(next);
  }, [searchParams]);

  return (
    <div className="flex h-screen w-screen items-center justify-center gap-4">
      <Loader2 className="size-8 animate-spin" />
      Logging you in...
    </div>
  );
}
