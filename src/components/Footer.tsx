export const Footer = () => {
  return (
    <footer
      id="footer"
      className="border-t"
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-10 text-center md:flex-row md:text-left">
        <span className="text-lg font-semibold">My New Landing</span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Crafted with shadcn/ui components.
        </p>
      </div>
    </footer>
  );
};
