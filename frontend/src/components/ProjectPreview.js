import React, { useState } from "react";

function ProjectPreview({ image, title, imageClassName, placeholderClassName }) {
  const [hasImageError, setHasImageError] = useState(false);

  if (!image || hasImageError) {
    return (
      <div
        className={placeholderClassName}
        role="img"
        aria-label={`${title} preview unavailable`}
      >
        <span>Project preview</span>
        <strong>{title?.split(" – ")[0] || "Project"}</strong>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={`${title} project screenshot`}
      className={imageClassName}
      onError={() => setHasImageError(true)}
    />
  );
}

export default ProjectPreview;
