export const iconPhThinShuffleAngularThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.83,181.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L222.34,188H168a4,4,0,0,1-3.25-1.67L85.94,76H32a4,4,0,0,1,0-8H88a4,4,0,0,1,3.25,1.67L170.06,180h52.28l-17.17-17.17a4,4,0,0,1,5.66-5.66Zm-89.49-77.44a4,4,0,0,0,5.58-.93L170.06,76h52.28L205.17,93.17a4,4,0,0,0,5.66,5.66l24-24a4,4,0,0,0,0-5.66l-24-24a4,4,0,0,0-5.66,5.66L222.34,68H168a4,4,0,0,0-3.25,1.67L144.41,98.15A4,4,0,0,0,145.34,103.73Zm-34.68,48.54a4,4,0,0,0-5.58.93L85.94,180H32a4,4,0,0,0,0,8H88a4,4,0,0,0,3.25-1.67l20.34-28.48A4,4,0,0,0,110.66,152.27Z"/></svg>`;
}
