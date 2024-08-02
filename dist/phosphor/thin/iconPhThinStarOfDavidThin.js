export const iconPhThinStarOfDavidThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196.61,128l30.86-54A4,4,0,0,0,224,68H162.33L131.47,14a4,4,0,0,0-6.94,0L93.66,68H32a4,4,0,0,0-3.47,6l30.85,54L28.53,182A4,4,0,0,0,32,188H93.66l30.87,54a4,4,0,0,0,6.94,0l30.86-54H224a4,4,0,0,0,3.47-6Zm20.5-52L192,119.94,166.9,76Zm-29.72,52-29.7,52L98.3,180,68.59,128,98.3,76l59.39,0ZM128,24.06l25.12,44H102.87ZM38.89,76H89.08L64,119.94Zm0,103.92L64,136.06,89.08,180Zm89.11,52-25.13-44h50.25ZM166.9,180,192,136.06,217.11,180Z"/></svg>`;
}
