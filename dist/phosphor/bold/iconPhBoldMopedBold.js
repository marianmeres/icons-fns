export const iconPhBoldMopedBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,124c-1.22,0-2.43.06-3.62.16L175.24,35.79A12,12,0,0,0,164,28H132a12,12,0,0,0,0,24h23.68l30.23,80.6A44.28,44.28,0,0,0,171,152h-29.2L119.24,91.79A12,12,0,0,0,108,84H28a12,12,0,0,0,0,24h4v2.92A60.14,60.14,0,0,0,0,164a12,12,0,0,0,12,12h4.74a44,44,0,0,0,86.52,0h65.48A44,44,0,1,0,212,124ZM48,130.05a12,12,0,0,0,8-11.32V108H99.68l16.5,44H26.06A36,36,0,0,1,48,130.05ZM60,188a20,20,0,0,1-18.32-12H78.32A20,20,0,0,1,60,188Zm152,0a20,20,0,1,1,20-20A20,20,0,0,1,212,188Z"/></svg>`;
}
