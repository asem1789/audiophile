import { useEffect } from "react";

function useOutsideClick({ refs, handler }) {
  const listener = (event) => {
    const arrRefs = Array.isArray(refs) ? refs : [refs];
    const isNotOutside = arrRefs.some((ref) =>
      ref?.current?.contains(event.target)
    );

    if (isNotOutside) return;

    handler();
  };

  useEffect(() => {
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refs, handler]);

  return null;
}

export default useOutsideClick;
