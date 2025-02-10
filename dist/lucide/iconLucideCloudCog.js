export const iconLucideCloudCog = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="17" r="3" /><path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" /><path d="m15.7 18.4-.9-.3" /><path d="m9.2 15.9-.9-.3" /><path d="m10.6 20.7.3-.9" /><path d="m13.1 14.2.3-.9" /><path d="m13.6 20.7-.4-1" /><path d="m10.8 14.3-.4-1" /><path d="m8.3 18.6 1-.4" /><path d="m14.7 15.8 1-.4" /></svg>`;
}
