import { Response, Request } from "express";
import ImportXmlService from "../services/ImportXmlService";
import prisma from "@prisma/index";

export default class XmlsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const xmlService = new ImportXmlService();

    const xml = request.body;

    const [source] = Object.keys(xml);

    const [type] = source.split("Proc");

    await xmlService.execute({ xml, collection: type });

    return response.json(xml);
  }
  public async show(request: Request, response: Response): Promise<Response> {
    const xmls = await prisma.xmls.findMany({
      where: {
        AND: request.body,
      },
    });

    return response.json(xmls);
  }
}
