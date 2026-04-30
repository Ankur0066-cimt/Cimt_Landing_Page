import React from "react";

interface CornerBracketsProps {
  color?: "orange" | "blue";
  size?: number;
  thickness?: number;
  className?: string;
  inset?: number;
  /** Which corners to show */
  corners?: Array<"tl" | "tr" | "bl" | "br">;
}

/**
 * Decorative L-shaped corner brackets that frame a container.
 * Renders absolutely positioned, so the parent must be relative.
 */
const CornerBrackets: React.FC<CornerBracketsProps> = ({
  color = "orange",
  size = 28,
  thickness = 3,
  className = "",
  inset = -10,
  corners = ["tl", "tr", "bl", "br"],
}) => {
  const hex = color === "orange" ? "#EF7F44" : "#2A3B7E";

  const base: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    pointerEvents: "none",
  };

  const show = (key: string) => corners.includes(key as "tl" | "tr" | "bl" | "br");

  return (
    <div className={`pointer-events-none ${className}`}>
      {show("tl") && (
        <span
          style={{
            ...base,
            top: inset,
            left: inset,
            borderTop: `${thickness}px solid ${hex}`,
            borderLeft: `${thickness}px solid ${hex}`,
            borderTopLeftRadius: 4,
          }}
        />
      )}
      {show("tr") && (
        <span
          style={{
            ...base,
            top: inset,
            right: inset,
            borderTop: `${thickness}px solid ${hex}`,
            borderRight: `${thickness}px solid ${hex}`,
            borderTopRightRadius: 4,
          }}
        />
      )}
      {show("bl") && (
        <span
          style={{
            ...base,
            bottom: inset,
            left: inset,
            borderBottom: `${thickness}px solid ${hex}`,
            borderLeft: `${thickness}px solid ${hex}`,
            borderBottomLeftRadius: 4,
          }}
        />
      )}
      {show("br") && (
        <span
          style={{
            ...base,
            bottom: inset,
            right: inset,
            borderBottom: `${thickness}px solid ${hex}`,
            borderRight: `${thickness}px solid ${hex}`,
            borderBottomRightRadius: 4,
          }}
        />
      )}
    </div>
  );
};

export default CornerBrackets;