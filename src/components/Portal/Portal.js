import { forwardRef, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

const Portal = forwardRef(({ children, ...props }, elRef) => {
  const modal = useMemo(() => {
    const newEl = document.createElement("div");
    return newEl;
  }, []);

  useEffect(() => {
    document.body.appendChild(modal);

    return () => {
      document.body.removeChild(modal);
    };
  });

  return createPortal(
    <div ref={elRef} {...props}>
      {children}
    </div>,
    modal
  );
});

export default Portal;
