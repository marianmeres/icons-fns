export const iconPhThinPaintBrushHouseholdThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.81,28.19a28,28,0,0,0-39.6,0l-.21.23L131.78,94.11,118.15,80.48a20,20,0,0,0-28.29,0L13.17,157.17a4,4,0,0,0,0,5.65l80,80a4,4,0,0,0,5.65,0l76.69-76.69a20,20,0,0,0,0-28.29l-13.63-13.63L227.58,68l.23-.21A28,28,0,0,0,227.81,28.19ZM96,234.34,73.66,212l25.17-25.18a4,4,0,0,0-5.65-5.65L68,206.34,49.66,188l25.17-25.18a4,4,0,0,0-5.65-5.65L44,182.34,21.66,160,72,109.65,146.35,184ZM222.26,62,153.41,121a4,4,0,0,0-.23,5.87l16.69,16.69a12,12,0,0,1,0,17L152,178.34,77.66,104,95.52,86.13a12,12,0,0,1,17,0l16.69,16.69a4,4,0,0,0,5.87-.23L194,33.74A20,20,0,0,1,222.26,62Z"/></svg>`;
}
