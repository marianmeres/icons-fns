export function iconFaSolidPersonSkiingNordic(props) {
    // Backward compatible signature support: fn(cls, size, style)
    if (props === null || props === undefined)
        props = {};
    if (typeof props !== 'object')
        props = { class: props || '' };
    if (arguments.length > 1)
        props.size ??= arguments[1];
    if (arguments.length > 2)
        props.style ??= arguments[2];
    // 
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M336 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM227.2 160c1.9 0 3.8 .1 5.6 .3L201.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9L291.3 464H202.8l41.1-88.1-32.4-20.3c-7.8-4.9-14.7-10.7-20.6-17.3L132.2 464H99.7l54.2-257.6c4.6-1.5 9-4.1 12.7-7.8l23.1-23.1c9.9-9.9 23.4-15.5 37.5-15.5zM121.4 198.6c.4 .4 .8 .8 1.3 1.2L67 464H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H159.3c.4 0 .9 0 1.3 0H319.3c.5 0 1 0 1.4 0H504c39.8 0 72-32.2 72-72v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 13.3-10.7 24-24 24H434.6l27.6-179.3c10.5-5.2 17.8-16.1 17.8-28.7c0-17.7-14.3-32-32-32H426.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3l-23.1 23.1c-12.5 12.5-12.5 32.8 0 45.3zm308 89.4L402.3 464H357.8l21.6-75.6c5.9-20.6-2.6-42.6-20.7-53.9L302 299l30.9-82.4 5.1 12.3C353 264.7 387.9 288 426.7 288h2.7z"/></svg>`;
}
