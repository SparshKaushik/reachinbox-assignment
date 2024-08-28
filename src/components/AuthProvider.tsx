/* eslint-disable @next/next/no-img-element */
"use client";

import { Loader2Icon } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { api } from "~/lib/axios";
import { auth$ } from "~/lib/states/auth";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { env } from "~/env";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const path = usePathname();

  const [isLoading, setIsLoading] = useState(true);

  const auth = auth$.get();

  useEffect(() => {
    api.interceptors.request.use((config) => {
      const auth = auth$.get();
      if (auth) {
        config.headers.Authorization = "Bearer " + auth.accessToken;
      }
      return config;
    });
    // api.interceptors.response.use(
    //   (res) => res,
    //   async (err: AxiosError) => {
    //     const auth = auth$.get();
    //       if (err.response?.status === 401 && auth?.refreshToken) {
    //         await api
    //           .post("/auth/refreshtoken", {
    //             refreshToken: auth?.refreshToken,
    //           })
    //           .then((res) => {
    //             const data = res.data as {
    //               accessToken: string;
    //               refreshToken: string;
    //             };
    //             auth$.set((prev) => {
    //               if (!prev) return null;
    //               return {
    //                 ...prev,
    //                 accessToken: data.accessToken,
    //                 refreshToken: data.refreshToken,
    //               };
    //             });
    //           })
    //           .catch(() => {
    //             toast.error("Session Expired! Please log in again.");
    //             auth$.set(null);
    //             return;
    //           });
    //         await query.refetchQueries();
    //       }
    //   },
    // );
    setIsLoading(false);
  }, [auth]);

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader2Icon className="size-10 animate-spin" />
      </div>
    );

  if (auth || path.startsWith("/redirect")) {
    return children;
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between">
      <header className="relative flex h-16 w-full items-center justify-center border-b border-muted-border bg-black">
        <img alt="ReachInbox" src="/logo.png" />
      </header>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Card className="flex h-fit min-w-[40dvw] flex-col items-center gap-6 p-8">
          <span className="text-xl font-semibold"> Create a new account</span>
          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-2">
            <img alt="Google" src="/google.svg" className="size-8" />
            Sign Up with Google
          </button>

          <Button asChild>
            <Link
              href={`https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${
                env.NEXT_PUBLIC_REDIRECT_URL
              }/redirect`}
            >
              Create an Account
            </Link>
          </Button>

          <div className="space-x-1">
            <span className="text-muted-foreground">
              Already have an account?
            </span>
            <Link href="/login">Sign In</Link>
          </div>
        </Card>
      </div>
      <footer className="flex h-10 w-full items-center justify-center border-t border-muted-border bg-muted">
        <span className="text-muted-foreground">
          © 2023 Reachinbox. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
