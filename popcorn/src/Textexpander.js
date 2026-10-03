import { useState } from "react";

export default function Challange() {
  return (
    <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <TextExpander>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        eveniet aut soluta! Reprehenderit, nulla quibusdam nam quas magni
        corrupti saepe aliquid numquam suscipit optio? Nam rerum voluptatum quis
        dolorem ducimus.
      </TextExpander>

      <TextExpander
        collapsedNumwords={20}
        expandButtonText="Show text"
        collapsButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        eveniet aut soluta! Reprehenderit, nulla quibusdam nam quas magni
        corrupti saepe aliquid numquam suscipit optio? Nam rerum voluptatum quis
        dolorem ducimus.
      </TextExpander>

      <TextExpander className="box" expanded={true} background="white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        eveniet aut soluta! Reprehenderit, nulla quibusdam nam quas magni
        corrupti saepe aliquid numquam suscipit optio? Nam rerum voluptatum quis
        dolorem ducimus.
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumwords = 10,
  expandButtonText = "Show more",
  collapsButtonText = "Show less",
  buttonColor = "#1f39cd",
  expanded = false,
  className,
  children,
  background = "",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumwords).join(" ") + "...";

  const buttonStyle = {
    background: background,
    cursor: "pointer",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span> {displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapsButtonText : expandButtonText}
      </button>
    </div>
  );
}
