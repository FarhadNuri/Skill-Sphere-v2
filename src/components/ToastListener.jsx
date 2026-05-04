'use client';

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const ToastListener = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const toastKey = searchParams.get("toast");
    if (!toastKey) {
      return;
    }

    if (toastKey === "login") {
      toast.success("Welcome back!");
    } else if (toastKey === "logout") {
      toast.success("Logged out.");
    } else if (toastKey === "signup") {
      toast.success("Account created! Please log in.");
    }

    const params = new URLSearchParams(searchParams.toString());
    params.delete("toast");
    const next = params.toString();
    router.replace(next ? `${pathname}?${next}` : pathname);
  }, [pathname, router, searchParams]);

  return null;
};

export default ToastListener;
