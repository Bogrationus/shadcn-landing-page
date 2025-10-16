"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, Send } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const trips = [
  {
    title: "Фератты Йесеники",
    dates: "15–17 ноября",
    description: "Высотные маршруты Чехии, отрабатываем работу на перилах и кайфуем в термах."
  },
  {
    title: "Сплав Влтава",
    dates: "3–5 мая",
    description: "Весенний чилл в малой группе: рафтинг + дегустации локального сидра и сыра."
  },
  {
    title: "Альпы Швейцарии",
    dates: "22–28 июля",
    description: "Глэмпинг среди четырёхтысячников, треккинг на рассветах и уроки альпинизма."
  }
];

const testimonials = [
  {
    quote:
      "Ехала за видами, а получила ещё и смелость. Поддержка команды и чёткая организация — космос!",
    author: "Марина, Берлин"
  },
  {
    quote:
      "Лучший формат путешествий: камерно, насыщенно и без туристических банальностей. Уже жду следующую поездку.",
    author: "Андрей, Прага"
  },
  {
    quote:
      "Фератты с @lingvopunk — это когда страх высоты исчезает, потому что рядом гид, который ведёт и вдохновляет.",
    author: "Оля, Брно"
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    alt: "Свет рассвета над альпийской вершиной"
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    alt: "Гид ведёт группу по горному хребту"
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    alt: "Вид на долину и реку из палаточного лагеря"
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    alt: "Ночной костёр в окружении гор"
  },
  {
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    alt: "Сплав по горной реке"
  },
  {
    src: "https://images.unsplash.com/photo-1500534318256-75500733cbcc?auto=format&fit=crop&w=900&q=80",
    alt: "Тропа на скалах под облаками"
  },
  {
    src: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=80",
    alt: "Команда путешественников на вершине"
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    alt: "Уютный горный лагерь на закате"
  }
] as const;

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const createFadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.8, ease: "easeOut", delay }
  });

  const createScaleIn = (delay = 0) => ({
    initial: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.6, ease: "easeOut", delay }
  });

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,70,239,0.18),_transparent_55%)]" />
      <section className="relative isolate flex min-h-[90vh] items-center py-24">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        >
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f17]/80 via-[#0f0f17]/85 to-[#0f0f17]" />
        <div className="container relative z-10 flex w-full max-w-[1280px] flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto flex max-w-2xl flex-col gap-6"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.9, ease: "easeOut" }}
          >
            <span className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-200">
              prick_trip
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Нестандартные путешествия по Европе
            </h1>
            <p className="text-base text-white/80 sm:text-lg">
              Индивидуальные маршруты, которые собирает @lingvopunk, чтобы ты возвращался не уставшим, а вдохновлённым. Без толп,
              с продуманной логистикой и поддержкой гида 24/7.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://t.me/prick_chat"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
              >
                Записаться
              </Link>
              <Link
                href="#trips"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "group w-full sm:w-auto"
                )}
              >
                Смотреть маршруты
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative py-20">
        <div className="container w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <motion.div className="space-y-6 text-left sm:text-center" {...createFadeInUp()}>
            <h2 className="text-2xl font-semibold text-white sm:text-4xl">О проекте</h2>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              @lingvopunk — горный гид, который превращает тревел в терапию: маршруты подбираются под настроение группы.
              Концепция простая — малые группы, максимум впечатлений и гибкий график. Каждая поездка — это комьюнити людей,
              которые любят высоту, разговоры у костра и новые смыслы.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="trips" className="relative py-20">
        <div className="container w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" {...createFadeInUp()}>
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-4xl">Ближайшие походы</h2>
              <p className="text-sm text-white/70 sm:text-base">Выбирай, что откликается: от фератт до водных приключений.</p>
            </div>
            <Link
              href="https://t.me/prick_chat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Присоединиться к чату
              <Send className="h-4 w-4" />
            </Link>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {trips.map((trip, index) => (
              <motion.article
                key={trip.title}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_60px_-25px_rgba(56,189,248,0.25)] backdrop-blur"
                {...createFadeInUp(index * (shouldReduceMotion ? 0 : 0.1))}
              >
                <div className="space-y-4">
                  <span className="inline-flex w-fit rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-300">
                    {trip.dates}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{trip.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{trip.description}</p>
                </div>
                <Link
                  href="https://t.me/prick_chat"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "ghost" }), "mt-8 w-fit text-emerald-300 hover:text-emerald-100")}
                >
                  Забронировать место
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12" {...createFadeInUp()}>
            <h2 className="text-2xl font-semibold text-white sm:text-4xl">Галерея эмоций</h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">Восьмёрка кадров, которые лучше любых слов расскажут про vibe prick_trip.</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {galleryImages.map(({ src, alt }, index) => (
              <motion.div
                key={src}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
                {...createScaleIn(index * (shouldReduceMotion ? 0 : 0.05))}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12" {...createFadeInUp()}>
            <h2 className="text-2xl font-semibold text-white sm:text-4xl">Отзывы</h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">Слова тех, кто уже выбирал нестандартный путь.</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-[0_25px_60px_-30px_rgba(16,185,129,0.35)]"
                {...createFadeInUp(index * (shouldReduceMotion ? 0 : 0.1))}
              >
                <p className="text-sm leading-relaxed text-white/80">“{testimonial.quote}”</p>
                <footer className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  {testimonial.author}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-sky-400/10 to-emerald-400/20 p-10 text-center shadow-[0_35px_120px_-45px_rgba(217,70,239,0.6)]"
            {...createFadeInUp()}
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(217,70,239,0.35),_transparent_65%)]" />
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Готов в путь?</h2>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              Подпишись, чтобы ловить анонсы и инсайды путешествий первым.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://instagram.com/prick_trip"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "flex w-full items-center justify-center gap-2 sm:w-auto")}
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </Link>
              <Link
                href="https://t.me/prick_chat"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "flex w-full items-center justify-center gap-2 sm:w-auto"
                )}
              >
                <Send className="h-5 w-5" />
                Telegram-чат
              </Link>
              <Link
                href="mailto:hello@pricktrip.eu"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "flex w-full items-center justify-center gap-2 border border-white/20 bg-white/5 text-sm text-white/80 hover:border-white/40 hover:text-white sm:w-auto"
                )}
              >
                <Mail className="h-5 w-5" />
                hello@pricktrip.eu
              </Link>
            </div>
          </motion.div>
          <p className="mt-8 text-center text-xs text-white/40">© {new Date().getFullYear()} prick_trip. Сделано с любовью к горам.</p>
        </div>
      </section>
    </main>
  );
}
