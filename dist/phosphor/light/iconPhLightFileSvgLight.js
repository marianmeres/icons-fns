export const iconPhLightFileSvgLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212.24,83.75l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,1,0,12,0V88A6,6,0,0,0,212.24,83.75ZM158,46.48,193.52,82H158ZM85.83,196.05a18.85,18.85,0,0,1-8.3,13.81C72.71,213.05,66.66,214,61.16,214a59.38,59.38,0,0,1-14.67-2,6,6,0,0,1,3.23-11.56c3.71,1,15.58,3.11,21.19-.62a6.85,6.85,0,0,0,3-5.34c.57-4.43-2.08-6.26-14.2-9.76-9.31-2.69-23.37-6.75-21.57-20.94a18.61,18.61,0,0,1,8.08-13.54c11.11-7.49,29.18-3,31.2-2.48a6,6,0,0,1-3,11.6c-3.79-1-15.85-2.95-21.45.84a6.59,6.59,0,0,0-2.88,5.08c-.41,3.22,2.14,4.78,13,7.91C72.93,176.08,87.85,180.39,85.83,196.05Zm63.82-42-20,56a6,6,0,0,1-11.3,0l-20-56a6,6,0,1,1,11.3-4L124,190.15,138.35,150a6,6,0,0,1,11.3,4ZM214,184v16.87a6,6,0,0,1-1.67,4.15A28.06,28.06,0,0,1,192,214c-16.54,0-30-15.25-30-34s13.46-34,30-34a27.43,27.43,0,0,1,15.36,4.77,6,6,0,0,1-6.72,10A15.25,15.25,0,0,0,192,158c-9.92,0-18,9.87-18,22s8.08,22,18,22a15.7,15.7,0,0,0,10-3.74V190h-2a6,6,0,0,1,0-12h8A6,6,0,0,1,214,184Z"/></svg>`;
}
