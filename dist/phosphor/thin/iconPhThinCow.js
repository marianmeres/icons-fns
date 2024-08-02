export const iconPhThinCow = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,192a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8H96A4,4,0,0,1,100,192Zm76-4H160a4,4,0,0,0,0,8h16a4,4,0,0,0,0-8Zm-76-72a8,8,0,1,0,8,8A8,8,0,0,0,100,116Zm56,0a8,8,0,1,0,8,8A8,8,0,0,0,156,116Zm85.3,3.59A12,12,0,0,1,232,124H196v38.08A36,36,0,0,1,176,228H80a36,36,0,0,1-20-65.92V124H24a12,12,0,0,1-9.32-4.41,11.82,11.82,0,0,1-2.47-9.85A52.11,52.11,0,0,1,63.22,68H76.34A52,52,0,0,1,52,24a4,4,0,0,1,8,0,44.05,44.05,0,0,0,44,44h48a44.05,44.05,0,0,0,44-44,4,4,0,0,1,8,0,52,52,0,0,1-24.34,44h13.12a52.11,52.11,0,0,1,51,41.74A11.82,11.82,0,0,1,241.3,119.59ZM60,116V104A35.94,35.94,0,0,1,73.41,76H63.22a44.09,44.09,0,0,0-43.14,35.31,3.82,3.82,0,0,0,.81,3.21A4,4,0,0,0,24,116Zm116,48H80a28,28,0,0,0,0,56h96a28,28,0,0,0,0-56Zm12-5.94V104a28,28,0,0,0-28-28H96a28,28,0,0,0-28,28v54.06A35.88,35.88,0,0,1,80,156h96A35.88,35.88,0,0,1,188,158.06Zm47.92-46.75A44.09,44.09,0,0,0,192.78,76H182.59A35.94,35.94,0,0,1,196,104v12h36a4,4,0,0,0,3.13-1.48A3.82,3.82,0,0,0,235.92,111.31Z"/></svg>`;
}
