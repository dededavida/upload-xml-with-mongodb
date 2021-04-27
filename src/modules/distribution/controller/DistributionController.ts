import { Response, Request } from "express";
import FindXmlToKey from "../services/FindXmlToKey";

export default class DistributionController {
  public async show(request: Request, response: Response): Promise<Response> {
    const xmlDownloadService = new FindXmlToKey();

    const { chave, tipo_ambiente, cnpj, uf_autor } = request.body;

    const xml = await xmlDownloadService.execute({
      chave,
      tipo_ambiente,
      cnpj,
      uf_autor,
    });

    return response.json(xml);
  }
}
