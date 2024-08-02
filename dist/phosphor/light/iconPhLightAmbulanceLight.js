export const iconPhLightAmbulanceLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M82,120a6,6,0,0,1,6-6h18V96a6,6,0,0,1,12,0v18h18a6,6,0,0,1,0,12H118v18a6,6,0,0,1-12,0V126H88A6,6,0,0,1,82,120Zm172,0v64a14,14,0,0,1-14,14H221.4a30,30,0,0,1-58.8,0H109.4a30,30,0,0,1-58.8,0H32a14,14,0,0,1-14-14V72A14,14,0,0,1,32,58H184a6,6,0,0,1,6,6V74h36.58a13.93,13.93,0,0,1,13,8.8l14,35A6.1,6.1,0,0,1,254,120ZM190,86v28h49.14l-10.7-26.74A2,2,0,0,0,226.58,86ZM32,186H50.6a30,30,0,0,1,58.8,0h53.2A30.1,30.1,0,0,1,178,165.48V70H32a2,2,0,0,0-2,2V184A2,2,0,0,0,32,186Zm66,6a18,18,0,1,0-18,18A18,18,0,0,0,98,192Zm112,0a18,18,0,1,0-18,18A18,18,0,0,0,210,192Zm32-8V126H190v36.07c.66,0,1.33-.07,2-.07a30.05,30.05,0,0,1,29.4,24H240A2,2,0,0,0,242,184Z"/></svg>`;
}
