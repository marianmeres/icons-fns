export const iconPhRegularFlashlight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,16H72A16,16,0,0,0,56,32V77.33a16.12,16.12,0,0,0,3.2,9.6L80,114.67V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V114.67l20.8-27.74a16.12,16.12,0,0,0,3.2-9.6V32A16,16,0,0,0,184,16ZM72,32H184V56H72V32Zm91.2,73.07a16.12,16.12,0,0,0-3.2,9.6V224H96V114.67a16.12,16.12,0,0,0-3.2-9.6L72,77.33V72H184v5.33ZM136,120v32a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z"/></svg>`;
}
