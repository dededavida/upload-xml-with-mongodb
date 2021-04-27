import express, { NextFunction, Request, Response } from "express";
import xmlParser from "express-xml-bodyparser";
import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import routes from "@shared/infra/http/routes/index.routes";
import "@shared/infra/typeorm/migrations";
import "@prisma/index";

const app = express();

app.use(express.json());
app.use(
  xmlParser({
    trim: false,
    explicitArray: false,
    normalize: false,
    normalizeTags: false,
    attrNameProcessors: [
      function (attr) {
        return "@" + attr;
      },
    ],
    mergeAttrs: true,
  })
);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    console.log(err);

    return response.status(500).json({
      status: "error",
      message: "Erro no servido interno",
    });
  }
);

app.use(routes);

app.listen(3333, () => {
  console.log(`🍄 Servidor iniciado na porta 3333!`);
});
