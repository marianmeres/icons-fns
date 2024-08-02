export const iconPhThinAmbulanceThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M84,120a4,4,0,0,1,4-4h20V96a4,4,0,0,1,8,0v20h20a4,4,0,0,1,0,8H116v20a4,4,0,0,1-8,0V124H88A4,4,0,0,1,84,120Zm168,0v64a12,12,0,0,1-12,12H219.71a28,28,0,0,1-55.42,0H107.71a28,28,0,0,1-55.42,0H32a12,12,0,0,1-12-12V72A12,12,0,0,1,32,60H184a4,4,0,0,1,4,4V76h38.58a12,12,0,0,1,11.15,7.54l14,35A4,4,0,0,1,252,120ZM188,84v32h54.09L230.3,86.51A4,4,0,0,0,226.58,84ZM32,188H52.29a28,28,0,0,1,55.42,0h56.58A28.05,28.05,0,0,1,180,166.71V68H32a4,4,0,0,0-4,4V184A4,4,0,0,0,32,188Zm68,4a20,20,0,1,0-20,20A20,20,0,0,0,100,192Zm112,0a20,20,0,1,0-20,20A20,20,0,0,0,212,192Zm32-8V124H188v40.29A28,28,0,0,1,219.71,188H240A4,4,0,0,0,244,184Z"/></svg>`;
}
