export const iconLucideDna = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="m10 16 1.5 1.5" /><path d="m14 8-1.5-1.5" /><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" /><path d="m16.5 10.5 1 1" /><path d="m17 6-2.891-2.891" /><path d="M2 15c6.667-6 13.333 0 20-6" /><path d="m20 9 .891.891" /><path d="M3.109 14.109 4 15" /><path d="m6.5 12.5 1 1" /><path d="m7 18 2.891 2.891" /><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" /></svg>`;
}
