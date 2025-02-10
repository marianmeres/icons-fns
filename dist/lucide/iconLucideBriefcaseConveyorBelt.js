export const iconLucideBriefcaseConveyorBelt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M10 20v2" /><path d="M14 20v2" /><path d="M18 20v2" /><path d="M21 20H3" /><path d="M6 20v2" /><path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" /><rect x="4" y="6" width="16" height="10" rx="2" /></svg>`;
}
