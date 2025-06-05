CREATE TABLE IF NOT EXISTS `User` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,           -- cuid() generated in Prisma
  `email` VARCHAR(255) NOT NULL UNIQUE,             -- login identifier
  `name`  VARCHAR(255) NOT NULL,                    -- display name
  `password` VARCHAR(255) NOT NULL,                 -- bcrypt hash
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3) Documents table
CREATE TABLE IF NOT EXISTS `Document` (
  `id` VARCHAR(191) NOT NULL PRIMARY KEY,           -- cuid() generated in Prisma
  `code` VARCHAR(255) NOT NULL UNIQUE,              -- 8‑char nanoid invite code
  `ownerEmail` VARCHAR(255) NOT NULL,               -- FK to User.email
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `fk_document_owner`
    FOREIGN KEY (`ownerEmail`) REFERENCES `User`(`email`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
