-- CreateEnum
CREATE TYPE "PRICE" AS ENUM ('CHEAP', 'REGULAR', 'EXPENSIVE');

-- CreateTable
CREATE TABLE "Restaurants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "price" "PRICE" NOT NULL,
    "main_image" TEXT NOT NULL,
    "images" TEXT[],
    "location_id" INTEGER,
    "cuisinie_id" INTEGER,
    "close_time" TEXT NOT NULL,
    "open_time" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cuisinie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cuisinie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "restaurant_id" INTEGER NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurants_slug_key" ON "Restaurants"("slug");

-- AddForeignKey
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_cuisinie_id_fkey" FOREIGN KEY ("cuisinie_id") REFERENCES "Cuisinie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
