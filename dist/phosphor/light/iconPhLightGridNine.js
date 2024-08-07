export const iconPhLightGridNine = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50ZM102,146V110h52v36Zm52,12v36H102V158ZM38,110H90v36H38Zm64-12V62h52V98Zm64,12h52v36H166Zm52-46V98H166V62h50A2,2,0,0,1,218,64ZM40,62H90V98H38V64A2,2,0,0,1,40,62ZM38,192V158H90v36H40A2,2,0,0,1,38,192Zm178,2H166V158h52v34A2,2,0,0,1,216,194Z"/></svg>`;
}
