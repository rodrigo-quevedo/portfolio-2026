"use client";

import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";


export default function Page() {
    const pathname = usePathname();
    const currentLocale = useLocale();
    console.log("pathname", pathname);
    console.log("currentLocale", currentLocale);
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
}