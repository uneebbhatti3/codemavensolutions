"use client";

import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFoundPage() {
  const navigate = useRouter(); // remove if using Next.js

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-[8rem] font-extrabold leading-none">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 text-center max-w-md mt-3">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved. Let&apos;s get you back on track.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {/* If you’re using Next.js, replace navigate(-1) with router.back() */}
        <Button className="w-full" onClick={() => navigate.push("/")}>
          Go Home
        </Button>
      </div>
    </div>
  );
}
