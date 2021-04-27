-- CreateTable
CREATE TABLE `Xmls` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chave_acesso` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `serie` VARCHAR(191) NOT NULL,
    `cnpj_emitente` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
