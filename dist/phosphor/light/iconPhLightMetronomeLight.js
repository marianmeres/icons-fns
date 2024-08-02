export const iconPhLightMetronomeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M213.33,203.75l-28.45-89.41L212.43,84A6,6,0,0,0,203.55,76l-22.87,25.17L162.42,43.75A13.94,13.94,0,0,0,149.08,34H106.92a13.94,13.94,0,0,0-13.34,9.75l-50.91,160A14,14,0,0,0,56,222H200a14,14,0,0,0,13.34-18.25ZM187.45,162H141.56l34-37.39ZM105,47.39A2,2,0,0,1,106.92,46h42.16A2,2,0,0,1,151,47.39l20.36,64-46,50.61H68.55ZM201.6,209.18A1.94,1.94,0,0,1,200,210H56a2,2,0,0,1-1.9-2.61L64.73,174H191.27l10.62,33.39A1.94,1.94,0,0,1,201.6,209.18Z"/></svg>`;
}
