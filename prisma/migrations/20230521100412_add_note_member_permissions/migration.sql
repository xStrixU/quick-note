-- CreateEnum
CREATE TYPE "NoteMemberPermission" AS ENUM ('EDIT', 'VIEW');

-- AlterTable
ALTER TABLE "notes_members" ADD COLUMN     "permission" "NoteMemberPermission" NOT NULL DEFAULT 'VIEW';
