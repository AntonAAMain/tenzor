export const isLocal = process.env.IS_LOCAL === "TRUE";

export const imgPrefix = isLocal ? "" : "/public";
