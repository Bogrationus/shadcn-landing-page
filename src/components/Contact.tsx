import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { TextareaHTMLAttributes } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  viewport: { once: true, amount: 0.3 },
};

function Textarea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      className="min-h-[160px] w-full rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      {...props}
    />
  );
}

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="container scroll-mt-24 space-y-12 py-24"
      {...fadeIn}
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Контакты
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Оставьте заявку — я отвечу в течение дня и предложу свободные даты.
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[1.4fr_1fr]">
        <form
          className="space-y-6 rounded-3xl border border-border/60 bg-card/70 p-8 shadow-xl"
          action="https://formspree.io/f/mkgwnqdy"
          method="POST"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Имя
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Ваше имя"
                className="rounded-2xl border-border/60 bg-background/70"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                className="rounded-2xl border-border/60 bg-background/70"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Сообщение
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Опишите запрос или желаемые даты встречи"
            />
          </div>
          <Button type="submit" size="lg" className="w-full font-semibold">
            Отправить запрос
          </Button>
        </form>
        <div className="flex flex-col justify-between rounded-3xl border border-border/60 bg-card/70 p-8 shadow-lg">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Другие способы связи</h3>
            <p className="text-sm text-muted-foreground">
              Если удобнее чат, пишите в Telegram — отвечаю с 10:00 до 19:00 по
              Москве.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="mt-6 w-full">
            <a
              href="https://t.me/tatiana_consult"
              target="_blank"
              rel="noreferrer"
              aria-label="Открыть Telegram"
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" /> Telegram
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
