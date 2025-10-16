export const Footer = () => {
  return (
    <footer
      id="footer"
      className="border-t"
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-10 text-center md:flex-row md:text-left">
        <span className="text-lg font-semibold">PRICK!-лючения</span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Путешествуем смело и экологично. Свяжись с нами в Telegram: @prick_trip.
        </p>
      </div>
    </footer>
  );
};
