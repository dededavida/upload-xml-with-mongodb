import api from "../infra/http/axios/api";
import NfeRequest from "../infra/http/sefaz/NfeRequest";
import Parser from "../infra/fast-xml-parser/Parser";

interface Request {
  chave: string;
  tipo_ambiente: string;
  cnpj: string;
  uf_autor: string;
}

class FindXmlToKey {
  public async execute({
    tipo_ambiente,
    uf_autor,
    cnpj,
    chave,
  }: Request): Promise<string> {
    const nfeRequest = new NfeRequest({ tipo_ambiente, uf_autor, cnpj, chave });

    const parser = new Parser();

    const request = await parser.jsonToXml(nfeRequest);

    const response = await api.post(
      "https://www1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx",
      request
    );

    const json = await parser.xmlToJson(response.data);

    return json;
  }
}

export default FindXmlToKey;
