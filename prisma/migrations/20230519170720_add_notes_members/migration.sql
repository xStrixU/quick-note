-- CreateTable
CREATE TABLE "notes_members" (
    "user_id" TEXT NOT NULL,
    "note_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "notes_members_user_id_note_id_key" ON "notes_members"("user_id", "note_id");

-- AddForeignKey
ALTER TABLE "notes_members" ADD CONSTRAINT "notes_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes_members" ADD CONSTRAINT "notes_members_note_id_fkey" FOREIGN KEY ("note_id") REFERENCES "notes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
