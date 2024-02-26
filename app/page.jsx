"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if(pathname == "/"){  
      router.push('/login');
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
