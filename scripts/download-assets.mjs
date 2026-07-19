#!/usr/bin/env node
/**
 * Baixa todas as imagens/binários referenciados pelos arquivos `.asset.json`
 * do projeto para uma pasta local. Útil para quem quer ter todas as fotos
 * do site em disco (por exemplo, após clonar do GitHub).
 *
 * Uso:
 *   node scripts/download-assets.mjs                 # baixa para ./assets-export
 *   node scripts/download-assets.mjs ./minha-pasta   # baixa para outra pasta
 *
 * Requisitos: Node 18+ (usa fetch nativo).
 */
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const CDN_BASE = "https://extensao-usp-pybotch.lovable.app";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = join(ROOT, "src", "assets");
const OUT_DIR = join(ROOT, process.argv[2] ?? "assets-export");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (entry.name.endsWith(".asset.json")) out.push(p);
  }
  return out;
}

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

const files = await walk(SRC_DIR);
console.log(`Encontrados ${files.length} arquivos .asset.json`);

let ok = 0, skip = 0, fail = 0;
for (const f of files) {
  const meta = JSON.parse(await readFile(f, "utf8"));
  const rel = relative(SRC_DIR, f).replace(/\.asset\.json$/, "");
  const dest = join(OUT_DIR, rel);
  if (await exists(dest)) { skip++; continue; }
  await mkdir(dirname(dest), { recursive: true });
  const url = CDN_BASE + meta.url;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    ok++;
    if (ok % 20 === 0) console.log(`  ${ok}/${files.length}...`);
  } catch (e) {
    fail++;
    console.warn(`FALHOU ${rel}: ${e.message}`);
  }
}
console.log(`\nConcluído: ${ok} baixados, ${skip} já existiam, ${fail} falharam.`);
console.log(`Saída em: ${OUT_DIR}`);
