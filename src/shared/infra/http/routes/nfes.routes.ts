import { Router } from "express";
import DistributionController from "../../../../modules/distribution/controller/DistributionController";
import XmlsController from "../../../../modules/xmls/controller/XmlsController";

const router = Router();
const distributionController = new DistributionController();
const xmlNfeController = new XmlsController();

router.post("/", xmlNfeController.create);

router.get("/emissao", distributionController.show);

router.get("/", xmlNfeController.show);

export default router;
