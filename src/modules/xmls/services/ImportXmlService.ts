import { getMongoManager, ObjectLiteral } from "typeorm";

interface Request {
  xml: ObjectLiteral;
  collection: string;
}

class ImportXmlService {
  public async execute({ xml, collection }: Request) {
    const manager = getMongoManager();
    await manager.insertOne(collection, xml);
  }
}

export default ImportXmlService;
