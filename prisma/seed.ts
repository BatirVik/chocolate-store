import prisma from "./client";

async function seed() {
  await prisma.product.createMany({
    data: [
      {
        name: "Dark Chocolate Delight",
        description: "Rich, 70% cocoa dark chocolate with a smooth finish",
        priceCents: 299,
        isAvailable: true,
      },
      {
        name: "Milk Chocolate Dream",
        description: "Creamy milk chocolate with a hint of vanilla",
        priceCents: 249,
        isAvailable: true,
      },
      {
        name: "Hazelnut Crunch",
        description: "Milk chocolate with roasted hazelnuts for crunch",
        priceCents: 350,
        isAvailable: true,
      },
      {
        name: "Mint Dark Sensation",
        description: "Dark chocolate infused with refreshing mint",
        priceCents: 299,
        isAvailable: true,
      },
      {
        name: "Sea Salt Caramel",
        description: "Chocolate with gooey caramel and a hint of sea salt",
        priceCents: 399,
        isAvailable: true,
      },
      {
        name: "Raspberry Dark Bliss",
        description: "Dark chocolate with tangy raspberry filling",
        priceCents: 329,
        isAvailable: true,
      },
      {
        name: "Almond Joy",
        description: "Milk chocolate mixed with roasted almonds",
        priceCents: 310,
        isAvailable: true,
      },
      {
        name: "White Chocolate Silk",
        description: "Smooth, creamy white chocolate for a delicate taste",
        priceCents: 275,
        isAvailable: true,
      },
      {
        name: "Espresso Bite",
        description: "Dark chocolate with a burst of espresso flavor",
        priceCents: 289,
        isAvailable: true,
      },
      {
        name: "Orange Zest Dark",
        description: "Dark chocolate with a touch of orange zest",
        priceCents: 299,
        isAvailable: true,
      },
    ],
  });
}

seed();
