export const iconLucideFileCog = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m3.2 12.9-.9-.4" /><path d="m3.2 15.1-.9.4" /><path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" /><path d="m4.9 11.2-.4-.9" /><path d="m4.9 16.8-.4.9" /><path d="m7.5 10.3-.4.9" /><path d="m7.5 17.7-.4-.9" /><path d="m9.7 12.5-.9.4" /><path d="m9.7 15.5-.9-.4" /><circle cx="6" cy="14" r="3" /></svg>`;
}
