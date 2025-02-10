export const iconLucideMonitorSpeaker = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M5.5 20H8" /><path d="M17 9h.01" /><rect width="10" height="16" x="12" y="4" rx="2" /><path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" /><circle cx="17" cy="15" r="1" /></svg>`;
}
