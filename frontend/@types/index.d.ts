// // custom-fc.ts : enhances declaration of FC namespace
// import * as origFC from "fullcalendar";

// Probably won't use this lol sometimes I just mix the languages
type Option<T> = T | undefined | null;

type Fetch = (info: RequestInfo, init?: RequestInit) => Promise<Response>;

declare const __APP_VERSION__: string;
