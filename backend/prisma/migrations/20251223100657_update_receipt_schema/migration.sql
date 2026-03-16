/*
  Warnings:

  - Made the column `price` on table `ReceiptItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `ReceiptItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Receipt" ADD COLUMN     "subtotal" DECIMAL(65,30),
ALTER COLUMN "list_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ReceiptItem" ADD COLUMN     "pricePerUnit" DECIMAL(65,30),
ADD COLUMN     "taxRate" DECIMAL(65,30),
ADD COLUMN     "unit" TEXT NOT NULL DEFAULT 'adet',
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL,
ALTER COLUMN "quantity" SET DEFAULT 1,
ALTER COLUMN "quantity" SET DATA TYPE DECIMAL(65,30);
