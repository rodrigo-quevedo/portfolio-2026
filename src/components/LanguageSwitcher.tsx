"use client";

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { CircleFlag } from 'react-circle-flags';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const localeOptions = [
    { code: "es", label: "Español", flag: "es" },
    { code: "en", label: "English", flag: "us" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 right-6 z-50">
      <div className="inline-flex rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-1">
        {localeOptions.map((localeOption) => {
          const isActive = localeOption.code === currentLocale;
          return (
            <Link
              locale={localeOption.code}
              key={localeOption.code}
              href={pathname}
              className={`relative flex items-center justify-center gap-1.5 px-3 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-white text-slate-900/80 shadow-[0_8px_16px_rgba(59,130,246,0.25)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              aria-current={isActive ? 'page' : undefined}>
              <CircleFlag countryCode={localeOption.flag} className='w-3 h-3 md:w-5 md:h-5'/>
              <span className="text-xs font-semibold">{localeOption.code.toUpperCase()}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
