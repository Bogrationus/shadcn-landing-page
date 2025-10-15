import { Suspense, lazy, useEffect, useState } from "react";

const Button = lazy(() =>
  import("./ui/button").then((module) => ({ default: module.Button })),
);

const ArrowUpToLine = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.ArrowUpToLine })),
);

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <Suspense fallback={null}>
          <Button
            onClick={goToTop}
            className="fixed bottom-4 right-4 opacity-90 shadow-md"
            size="icon"
          >
            <Suspense fallback={null}>
              <ArrowUpToLine className="h-4 w-4" aria-hidden />
            </Suspense>
          </Button>
        </Suspense>
      )}
    </>
  );
};
