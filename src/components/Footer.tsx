import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-border/60 bg-background/80"
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {year} Татьяна</p>
        <a
          href="#hero"
          className="rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Наверх
        </a>
      </div>
    </motion.footer>
  );
}
