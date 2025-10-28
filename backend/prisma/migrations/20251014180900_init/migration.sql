/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `List` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `Receipt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_category_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_list_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."List" DROP CONSTRAINT "List_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Receipt" DROP CONSTRAINT "Receipt_list_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserListAccess" DROP CONSTRAINT "UserListAccess_list_id_fkey";

-- AlterTable
ALTER TABLE "Receipt" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."Item";

-- DropTable
DROP TABLE "public"."List";

-- CreateTable
CREATE TABLE "ShoppingList" (
    "list_id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_shared" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ShoppingList_pkey" PRIMARY KEY ("list_id")
);

-- CreateTable
CREATE TABLE "ListItem" (
    "item_id" SERIAL NOT NULL,
    "list_id" INTEGER NOT NULL,
    "category_id" INTEGER,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL(65,30),
    "source" "Source" DEFAULT 'manual',
    "is_checked" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "checkedById" INTEGER,
    "checkedAt" TIMESTAMP(3),

    CONSTRAINT "ListItem_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "ReceiptItem" (
    "id" SERIAL NOT NULL,
    "receiptId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "price" DECIMAL(65,30),
    "quantity" INTEGER,

    CONSTRAINT "ReceiptItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingListShare" (
    "id" SERIAL NOT NULL,
    "list_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "ShoppingListShare_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShoppingListShare_list_id_user_id_key" ON "ShoppingListShare"("list_id", "user_id");

-- AddForeignKey
ALTER TABLE "ShoppingList" ADD CONSTRAINT "ShoppingList_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserListAccess" ADD CONSTRAINT "UserListAccess_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "ShoppingList"("list_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListItem" ADD CONSTRAINT "ListItem_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "ShoppingList"("list_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListItem" ADD CONSTRAINT "ListItem_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListItem" ADD CONSTRAINT "ListItem_checkedById_fkey" FOREIGN KEY ("checkedById") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "ShoppingList"("list_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptItem" ADD CONSTRAINT "ReceiptItem_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "Receipt"("receipt_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingListShare" ADD CONSTRAINT "ShoppingListShare_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "ShoppingList"("list_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingListShare" ADD CONSTRAINT "ShoppingListShare_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
