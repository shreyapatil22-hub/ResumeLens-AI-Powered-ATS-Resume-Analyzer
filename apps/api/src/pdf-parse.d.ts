declare module "pdf-parse" {
  function parse(buffer: Buffer): Promise<{ text: string; numpages: number }>;
  export default parse;
}
