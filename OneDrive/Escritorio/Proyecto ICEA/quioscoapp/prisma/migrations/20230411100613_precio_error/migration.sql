/*
  Warnings:

  - You are about to drop the column `Precio` on the `producto` table. All the data in the column will be lost.
  - Added the required column `precio` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `producto` DROP COLUMN `Precio`,
    ADD COLUMN `precio` DOUBLE NOT NULL;
