export default function fetchPath(path:string): string {
  return isProduction
    ? path.replace(/^\//, './')
    : path;
}