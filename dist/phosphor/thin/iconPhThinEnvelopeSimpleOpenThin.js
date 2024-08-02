export const iconPhThinEnvelopeSimpleOpenThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.22,92.67l-96-64a4,4,0,0,0-4.44,0l-96,64A4,4,0,0,0,28,96V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V96A4,4,0,0,0,226.22,92.67ZM128,36.81,217,96.11,144.17,148H111.83L39.05,96.11ZM216,204H40a4,4,0,0,1-4-4V103.76l72.22,51.5a4,4,0,0,0,2.33.74h34.9a4,4,0,0,0,2.33-.74L220,103.76V200A4,4,0,0,1,216,204Z"/></svg>`;
}
