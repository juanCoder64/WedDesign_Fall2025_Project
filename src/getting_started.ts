interface Window {
    ts: typeof import("typescript");
}

const localTs = window.ts;

const codeInput = document.getElementById("codeInput") as HTMLTextAreaElement | null;
const runBtn = document.getElementById("runBtn") as HTMLButtonElement | null;
const codeOutput = document.getElementById("codeOutput") as HTMLElement | null;
function run(): void {
    const code = codeInput?.value || "";
    if(codeOutput) {
        codeOutput.textContent = localTs.transpileModule(code, {
            compilerOptions: { module: localTs.ModuleKind.ESNext, target: localTs.ScriptTarget.ES2015 },
        }).outputText;
    }
}


runBtn?.addEventListener("click", run);

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => run());
} else {
    run();
}
