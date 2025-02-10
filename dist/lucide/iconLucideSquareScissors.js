export const iconLucideSquareScissors = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><rect width="20" height="20" x="2" y="2" rx="2" /><circle cx="8" cy="8" r="2" /><path d="M9.414 9.414 12 12" /><path d="M14.8 14.8 18 18" /><circle cx="8" cy="16" r="2" /><path d="m18 6-8.586 8.586" /></svg>`;
}
