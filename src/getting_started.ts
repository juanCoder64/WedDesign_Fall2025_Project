interface Window {
    ts: typeof import("typescript");
}

const localTs = window.ts;

const codeInput = document.getElementById("codeInput") as HTMLTextAreaElement | null;
const runBtn = document.getElementById("runBtn") as HTMLButtonElement | null;
const codeOutput = document.getElementById("codeOutput") as HTMLElement | null;
