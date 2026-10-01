import { useEffect } from "react";

// Closes an open popover on an outside click or Escape. `ref` should be a
// ref the caller created and attached to the popover's wrapping element;
// keeping refs out of any returned/reused state object avoids the
// react-hooks/refs lint rule flagging ordinary state reads as unsafe ref
// access (it can't tell a ref-bearing object apart from a plain one).
const usePopoverOutsideClose = (ref, isOpen, onClose) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, isOpen, onClose]);
};

export default usePopoverOutsideClose;
