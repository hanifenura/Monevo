-- CreateTable
CREATE TABLE "ListInvitation" (
    "invitation_id" SERIAL NOT NULL,
    "list_id" INTEGER NOT NULL,
    "invited_by" INTEGER NOT NULL,
    "invite_code" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'viewer',
    "expires_at" TIMESTAMP(3) NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "used_by" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "used_at" TIMESTAMP(3),
    "max_uses" INTEGER NOT NULL DEFAULT 1,
    "uses_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ListInvitation_pkey" PRIMARY KEY ("invitation_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ListInvitation_invite_code_key" ON "ListInvitation"("invite_code");

-- AddForeignKey
ALTER TABLE "ListInvitation" ADD CONSTRAINT "ListInvitation_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "ShoppingList"("list_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListInvitation" ADD CONSTRAINT "ListInvitation_invited_by_fkey" FOREIGN KEY ("invited_by") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListInvitation" ADD CONSTRAINT "ListInvitation_used_by_fkey" FOREIGN KEY ("used_by") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
