import axios from "axios";
import fs from "fs";
import https from "https";

const agent = new https.Agent({
  cert: fs.readFileSync(
    `./src/modules/distribution/infra/http/cert/certificate.crt`,
    "utf8"
  ),
  key: fs.readFileSync(
    `./src/modules/distribution/infra/http/cert/key.key`,
    "utf8"
  ),
  passphrase: "vopak2020",
  rejectUnauthorized: false,
});

const api = axios.create({
  headers: { "Content-Type": "text/xml" },
  httpsAgent: agent,
});

export default api;
