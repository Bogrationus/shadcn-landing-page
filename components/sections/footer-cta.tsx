import Link from "next/link";

import { FadeIn } from "@/components/fade-in";

export function FooterCtaSection() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <FadeIn className="space-y-2">
          <span className="text-xs uppercase tracking-[0.4em] text-fuchsia-300">prick_trip</span>
          <p className="max-w-md text-sm text-slate-300">
            Готовы к приключению? Присоединяйтесь к нашему сообществу и ловите анонсы свежих маршрутов раньше всех.
          </p>
        </FadeIn>
        <FadeIn className="flex flex-col gap-4 text-sm text-slate-200">
          <Link className="flex items-center gap-2 hover:text-fuchsia-300" href="https://instagram.com/prick_trip" target="_blank" rel="noreferrer">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400" /> Instagram
          </Link>
          <Link className="flex items-center gap-2 hover:text-sky-300" href="https://t.me/prick_chat" target="_blank" rel="noreferrer">
            <span className="h-2 w-2 rounded-full bg-sky-400" /> Telegram-чат
          </Link>
          <Link className="flex items-center gap-2 hover:text-emerald-300" href="mailto:hey@pricktrip.com">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> hey@pricktrip.com
          </Link>
        </FadeIn>
      </div>
    </footer>
  );
}
