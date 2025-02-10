export const iconLucideDnaOff = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" /><path d="m17 6-2.891-2.891" /><path d="M2 15c3.333-3 6.667-3 10-3" /><path d="m2 2 20 20" /><path d="m20 9 .891.891" /><path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" /><path d="M3.109 14.109 4 15" /><path d="m6.5 12.5 1 1" /><path d="m7 18 2.891 2.891" /><path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" /></svg>`;
}
