export const iconLucideCircuitBoard = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M11 9h4a2 2 0 0 0 2-2V3" /><circle cx="9" cy="9" r="2" /><path d="M7 21v-4a2 2 0 0 1 2-2h4" /><circle cx="15" cy="15" r="2" /></svg>`;
}
