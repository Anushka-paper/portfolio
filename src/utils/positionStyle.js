// Desktop icon / Finder item positions are authored as Tailwind-style
// tokens (e.g. "top-10 left-5", "top-[33vh] left-30") so the admin form
// stays familiar. But Tailwind only generates CSS for class names it finds
// by statically scanning the source code — values typed into the admin
// panel and stored in MongoDB are invisible to that scan, so the resulting
// "top-40"/"left-50" classes never get real CSS and silently do nothing.
// This computes the equivalent inline style ourselves at render time,
// using Tailwind's own spacing scale (1 unit = 0.25rem), so any value
// entered in the admin works regardless of what Tailwind pre-generated.
const TOKEN_RE = /^(top|left|right|bottom)-(?:\[(.+)\]|(-?[\d.]+))$/;
const REM_PER_UNIT = 0.25;

export function positionToStyle(classString) {
  if (!classString) return undefined;

  const style = {};
  for (const token of classString.trim().split(/\s+/).filter(Boolean)) {
    const match = token.match(TOKEN_RE);
    if (!match) continue;
    const [, prop, bracketValue, scaleValue] = match;
    style[prop] = bracketValue !== undefined ? bracketValue : `${Number(scaleValue) * REM_PER_UNIT}rem`;
  }
  return style;
}
