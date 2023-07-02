export const symConverter = (str) => {
    str = str.replace(/&amp;/g, '&');
    str = str.replace(/&gt;/g, '>');
    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&quot;/g, '"');
    str = str.replace(/&#039;/g, "'");
    str = str.replace(/&micro;/g, 'µ');
    str = str.replace(/&Sigma;/g, 'Σ');
    str = str.replace(/&Nu;/g, 'ν');
    str = str.replace(/&Omicron;/g, 'ο');
    str = str.replace(/&Pi;/g, 'π');
    str = str.replace(/&lrm;/g, '');
    str = str.replace(/&oacute;/g, 'ó');
    str = str.replace(/&eacute;/g, 'é');
    str = str.replace(/&ldquo;/g, '“');
    str = str.replace(/&rdquo;/g, '”');
    str = str.replace(/&hellip;/g, '…');
    return str;
};
