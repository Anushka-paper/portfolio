import { useState } from "react";
import { Check, Wifi } from "lucide-react";

const WifiPopover = () => {
  const [connected, setConnected] = useState(true);

  return (
    <div className="nav-popover">
      <div className="nav-popover__row">
        <span className="font-medium">Wi-Fi</span>
        <button
          type="button"
          role="switch"
          aria-checked={connected}
          onClick={() => setConnected((prev) => !prev)}
          className={`nav-popover__switch ${connected ? "nav-popover__switch--on" : ""}`}
        >
          <span className="nav-popover__switch-knob" />
        </button>
      </div>

      {connected && (
        <div className="nav-popover__row nav-popover__row--muted">
          <Wifi size={14} />
          <span className="flex-1">Anushka's Portfolio</span>
          <Check size={14} />
        </div>
      )}
    </div>
  );
};

export default WifiPopover;
