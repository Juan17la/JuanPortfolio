/**
 * Devicon CDN icon resolver.
 * Maps technology names / slugs to Devicon CDN paths.
 * Devicon provides official brand-colored SVG icons at:
 *   https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<tech>/<tech>-original.svg
 *   https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<tech>/<tech>-plain.svg
 */

const deviconMap: Record<string, string> = {
  // Java ecosystem
  java: "java/java-original",
  spring: "spring/spring-original",
  springboot: "spring/spring-original",

  // Frontend
  react: "react/react-original",
  tailwindcss: "tailwindcss/tailwindcss-plain",
  html5: "html5/html5-original",
  html: "html5/html5-original",
  css3: "css3/css3-original",
  css: "css3/css3-original",
  typescript: "typescript/typescript-original",
  javascript: "javascript/javascript-original",

  // Backend / DB
  postgresql: "postgresql/postgresql-original",
  mongodb: "mongodb/mongodb-original",
  nodedotjs: "nodejs/nodejs-original",
  nodejs: "nodejs/nodejs-original",
  python: "python/python-original",

  // .NET
  csharp: "csharp/csharp-original",
  "c#": "csharp/csharp-original",
  dotnet: "dot-net/dot-net-original",
  ".net": "dot-net/dot-net-original",

  // Mobile
  kotlin: "kotlin/kotlin-original",

  // Tools
  git: "git/git-original",
  docker: "docker/docker-original",
  figma: "figma/figma-original",
  jira: "jira/jira-original",
  notion: "notion/notion-original",
  linux: "linux/linux-original",

  // Fallbacks for common simpleicons slugs not in devicon
  // (we try to match by common name)
};

/**
 * Returns the Devicon CDN URL for a given tech name/slug.
 * Falls back to a generic gear icon if unknown.
 */
export function getTechIconUrl(iconSlug: string): string {
  const key = iconSlug.toLowerCase().trim();
  const mapped = deviconMap[key];

  if (mapped) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${mapped}.svg`;
  }

  // If no direct match, try partial matching (e.g. "nodejs" contains "node")
  for (const [slug, path] of Object.entries(deviconMap)) {
    if (key.includes(slug) || slug.includes(key)) {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;
    }
  }

  // Ultimate fallback: generic code icon from devicon
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${key}/${key}-original.svg`;
}
