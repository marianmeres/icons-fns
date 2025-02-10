export const iconLucideWashingMachine = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M3 6h3" /><path d="M17 6h.01" /><rect width="18" height="20" x="3" y="2" rx="2" /><circle cx="12" cy="13" r="5" /><path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" /></svg>`;
}
