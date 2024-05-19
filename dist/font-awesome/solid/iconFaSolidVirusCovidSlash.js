export function iconFaSolidVirusCovidSlash(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c11.4-19.5 19.1-41.4 22.3-64.7H528v16c0 13.3 10.7 24 24 24s24-10.7 24-24V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v16H494.4c-4.2-30.7-16.3-58.8-34.1-82.3L484 125.9l11.3 11.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L472.7 46.7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L450.1 92l-23.8 23.8C402.8 97.9 374.7 85.8 344 81.6V48h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H280c-13.3 0-24 10.7-24 24s10.7 24 24 24h16V81.6c-30.7 4.2-58.8 16.3-82.3 34.1L189.9 92l11.3-11.3c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L134.1 79.8 38.8 5.1zm362.5 407L149.2 213.5c-1.5 6-2.7 12.2-3.5 18.5H112V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24V280h33.6c4.2 30.7 16.3 58.8 34.1 82.3L156 386.1l-11.3-11.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l56.6 56.6c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L189.9 420l23.8-23.8c23.5 17.9 51.7 29.9 82.3 34.1V464H280c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4c20.4-2.8 39.7-9.1 57.3-18.2z"/></svg>`;
}
