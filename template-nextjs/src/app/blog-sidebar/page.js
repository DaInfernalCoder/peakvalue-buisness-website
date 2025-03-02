"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogSidebarRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/blog");
  }, [router]);

  return (
    <div className="section">
      <div className="container text-center py-5">
        <h2>Redirecting to Blog...</h2>
        <p>Please wait while we redirect you to our blog page.</p>
      </div>
    </div>
  );
}
