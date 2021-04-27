import IFindXmlToKeyDTO from "../../../dtos/IFindXmlToKeyDTO";

export default class Envelope {
  "soap:Envelope": SoapEnvelope;

  constructor(props: IFindXmlToKeyDTO) {
    this["soap:Envelope"] = new SoapEnvelope(props);
  }
}

class SoapEnvelope {
  attr: SoapEnvelopeAttr;
  "soap:Header": string;
  "soap:Body": SoapBody;

  constructor(props: IFindXmlToKeyDTO) {
    this["soap:Body"] = new SoapBody(props);
    this.attr = new SoapEnvelopeAttr();
    this["soap:Header"] = "";
  }
}

class SoapEnvelopeAttr {
  "xmlns:soap": string;
  "xmlns:nfed": string;

  constructor() {
    this["xmlns:soap"] = "http://www.w3.org/2003/05/soap-envelope";
    this["xmlns:nfed"] =
      "http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe";
  }
}

class SoapBody {
  "nfed:nfeDistDFeInteresse": NfedNfeDistDFeInteresse;

  constructor(props: IFindXmlToKeyDTO) {
    this["nfed:nfeDistDFeInteresse"] = new NfedNfeDistDFeInteresse(props);
  }
}

class NfedNfeDistDFeInteresse {
  "nfed:nfeDadosMsg": NfedNfeDadosMsg;
  constructor(props: IFindXmlToKeyDTO) {
    this["nfed:nfeDadosMsg"] = new NfedNfeDadosMsg(props);
  }
}

class NfedNfeDadosMsg {
  distDFeInt: DistDFeInt;

  constructor(props: IFindXmlToKeyDTO) {
    const { chave, cnpj, tipo_ambiente, uf_autor } = props;

    this.distDFeInt = new DistDFeInt(
      tipo_ambiente,
      uf_autor,
      cnpj,
      new ConsChNFe(chave)
    );
  }
}

class DistDFeInt {
  attr: DistDFeIntAttr;
  tpAmb: string;
  cUFAutor: string;
  CNPJ: string;
  consChNFe: ConsChNFe;

  constructor(
    tpAmb: string,
    cufAutor: string,
    cnpj: string,
    consChNFe: ConsChNFe
  ) {
    this.attr = new DistDFeIntAttr();
    this.tpAmb = tpAmb;
    this.cUFAutor = cufAutor;
    this.CNPJ = cnpj;
    this.consChNFe = consChNFe;
  }
}

class DistDFeIntAttr {
  "xmlns": string;
  "xmlns:xsi": string;
  "versao": string;
  "xsi:schemaLocation": string;

  constructor() {
    this["xmlns"] = "http://www.portalfiscal.inf.br/nfe";
    this["xmlns:xsi"] = "http://www.w3.org/2001/XMLSchema-instance";
    this["versao"] = "1.01";
    this["xmlns:xsi"] =
      "http://www.portalfiscal.inf.br/nfedistDFeInt_v1.01.xsd";
  }
}

class ConsChNFe {
  chNFe: string;

  constructor(chNFe: string) {
    this.chNFe = chNFe;
  }
}
