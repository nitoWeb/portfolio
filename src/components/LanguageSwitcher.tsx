"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(locale: string) {
    const segments = pathname.split("/");

    segments[1] = locale;

    const newPath = segments.join("/");
    router.push(newPath);
  }

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      defaultValue={pathname.split("/")[1] || "pt"}
    >
      <option value="pt">Português</option>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}