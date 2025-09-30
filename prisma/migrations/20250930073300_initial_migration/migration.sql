-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('Pending', 'Completed');

-- CreateTable
CREATE TABLE "public"."Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "image_url" TEXT,
    "status" "public"."Status" NOT NULL DEFAULT 'Pending',

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
