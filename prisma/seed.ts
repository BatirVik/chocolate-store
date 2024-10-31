import { prisma } from "./client";
import fs from "fs/promises";
import path from "path";

const MOCK_PRODUCTS_JSON_PATH = path.resolve(
  import.meta.dirname,
  "..",
  "mock",
  "products.json",
);

async function seed() {
  const content = await fs.readFile(MOCK_PRODUCTS_JSON_PATH, "utf8");
  const data = JSON.parse(content);
  await prisma.product.createMany({ data });
}

seed();
