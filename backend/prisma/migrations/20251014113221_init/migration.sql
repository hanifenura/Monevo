-- CreateEnum
CREATE TYPE "Role" AS ENUM ('owner', 'editor', 'viewer');

-- CreateEnum
CREATE TYPE "Source" AS ENUM ('manual', 'ocr');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('cash', 'card', 'other');

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "List" (
    "list_id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_shared" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "List_pkey" PRIMARY KEY ("list_id")
);

-- CreateTable
CREATE TABLE "UserListAccess" (
    "access_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "list_id" INTEGER NOT NULL,
    "role" "Role" NOT NULL,
    "invited_by" INTEGER,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserListAccess_pkey" PRIMARY KEY ("access_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color_code" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Item" (
    "item_id" SERIAL NOT NULL,
    "list_id" INTEGER NOT NULL,
    "category_id" INTEGER,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL(65,30),
    "source" "Source",
    "is_checked" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "Receipt" (
    "receipt_id" SERIAL NOT NULL,
    "list_id" INTEGER NOT NULL,
    "store_name" TEXT,
    "total_amount" DECIMAL(65,30),
    "receipt_date" TIMESTAMP(3),
    "payment_method" "PaymentMethod",
    "tax_rate" DECIMAL(65,30),
    "tax_amount" DECIMAL(65,30),
    "currency" TEXT NOT NULL DEFAULT 'TRY',
    "image_url" TEXT,
    "ocr_text" TEXT,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("receipt_id")
);

-- CreateTable
CREATE TABLE "Expense" (
    "expense_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "category_id" INTEGER,
    "total_amount" DECIMAL(65,30) NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("expense_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserListAccess_user_id_list_id_key" ON "UserListAccess"("user_id", "list_id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_color_code_key" ON "Category"("color_code");

-- CreateIndex
CREATE UNIQUE INDEX "Expense_user_id_category_id_month_year_key" ON "Expense"("user_id", "category_id", "month", "year");

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserListAccess" ADD CONSTRAINT "UserListAccess_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserListAccess" ADD CONSTRAINT "UserListAccess_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "List"("list_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserListAccess" ADD CONSTRAINT "UserListAccess_invited_by_fkey" FOREIGN KEY ("invited_by") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "List"("list_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "List"("list_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;
