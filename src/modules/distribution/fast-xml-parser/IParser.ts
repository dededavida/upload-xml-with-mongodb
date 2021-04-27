interface IParser {
  jsonToXml(xml: Object): Promise<string>;
  xmlToJson(json: string): Promise<string>;
}

export default IParser;
