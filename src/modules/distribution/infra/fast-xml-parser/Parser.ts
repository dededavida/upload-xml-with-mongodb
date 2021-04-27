import fastXmlParser from "fast-xml-parser";
import IParser from "@modules/distribution/fast-xml-parser/IParser";

export default class Parser implements IParser {
  public async jsonToXml(xml: Object): Promise<string> {
    const Parser = fastXmlParser.j2xParser;

    var parser = new Parser({
      attributeNamePrefix: "@",
      attrNodeName: "attr",
      ignoreAttributes: true,
      format: false,
      indentBy: "  ",
      supressEmptyNode: false,
    });

    const json = await parser.parse(xml);

    return json;
  }
  public async xmlToJson(json: string): Promise<string> {
    const xml = await fastXmlParser.parse(json, {
      attributeNamePrefix: "@_",
      attrNodeName: "attr",
      ignoreAttributes: true,
      ignoreNameSpace: false,
      allowBooleanAttributes: false,
      parseNodeValue: true,
      parseAttributeValue: false,
      trimValues: true,
      cdataPositionChar: "\\c",
      parseTrueNumberOnly: false,
      arrayMode: false,
    });

    return xml;
  }
}
