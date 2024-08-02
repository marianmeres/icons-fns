export const iconPhLightTaxiLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,106H227.48l-28-48.95a14,14,0,0,0-12.15-7h-23.3L151.58,18.8a13.93,13.93,0,0,0-13-8.8H117.42a13.93,13.93,0,0,0-13,8.8L91.94,50H68.64a14,14,0,0,0-12.15,7l-28,49H16a6,6,0,0,0,0,12H26v82a14,14,0,0,0,14,14H64a14,14,0,0,0,14-14V182H178v18a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V118h10a6,6,0,0,0,0-12ZM115.56,23.26A2,2,0,0,1,117.42,22h21.16a2,2,0,0,1,1.86,1.26L151.14,50H104.86ZM66.91,63a2,2,0,0,1,1.73-1H187.36a2,2,0,0,1,1.73,1l24.57,43H42.34ZM66,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V182H66Zm150,2H192a2,2,0,0,1-2-2V182h28v18A2,2,0,0,1,216,202Zm2-32H38V118H218ZM58,144a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12H64A6,6,0,0,1,58,144Zm112,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,144Z"/></svg>`;
}
