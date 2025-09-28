export const iconFaBrandLinktree = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M32 173.4l125.8 0-89.4-85.4 49.5-51 85.2 87.8 0-124.8 73.9 0 0 124.8 85.2-87.6 49.4 50.8-89.4 85.2 125.7 0 0 70.5-126.4 0 90 87.6-49.3 49.8-122.2-123-122.2 123-49.5-49.6 90-87.6-126.4 0 0-70.5zM202.9 344.8l73.9 0 0 167.2-73.9 0 0-167.2z"/></svg>`;
}
