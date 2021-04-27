import { Router } from "express";
import DistributionController from "../../../../modules/distribution/controller/DistributionController";
import XmlsController from "../../../../modules/xmls/controller/XmlsController";

const router = Router();
const distributionController = new DistributionController();
const xmlsController = new XmlsController();

router.post("/", xmlsController.create);
router.get("/emissao", distributionController.show);

export default router;
