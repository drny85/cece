import { Item, ItemSizes } from "./typing";

export const data: Item[] = [
  {
    id: "1",
    name: "Hazy",
    description: "A hazy day",
    price: 32.99,
    percentageOff: 50,
    available: true,
    colors: [
      {
        color: "#212121",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          { size: ItemSizes.M, quantity: 2 },
        ],
      },
      {
        color: "#ffffff",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          {
            size: ItemSizes.M,
            quantity: 2,
          },
          {
            size: ItemSizes.L,
            quantity: 1,
          },
        ],
      },
    ],
    category: "Swing",
    tags: ["new arrival", "new in"],
    sizes: [ItemSizes.S, ItemSizes.M],
    images: [],
    image:
      "https://cdn-review.cupshe.com/cmc-admin/2023_12_29/13_56_570/1651ce1d-0aa1-4785-901b-ffc62ca721d4/CAA12E3M067AA/1.jpg?x-oss-process=image/format,avif/quality,q_100/resize,w_1500",
  },
  {
    id: "2",
    name: "Hazy",
    colors: [
      {
        color: "#212121",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          { size: ItemSizes.M, quantity: 2 },
        ],
      },
      {
        color: "#ffffff",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          {
            size: ItemSizes.M,
            quantity: 2,
          },
          {
            size: ItemSizes.L,
            quantity: 1,
          },
        ],
      },
    ],
    category: "Swing",
    tags: ["new arrival", "new in"],
    description: "A hazy day",
    price: 9.99,
    available: true,
    sizes: [ItemSizes.S, ItemSizes.M],
    images: [],
    image:
      "https://cdn-review.cupshe.com/cmc-admin/2023_12_29/13_56_570/1651ce1d-0aa1-4785-901b-ffc62ca721d4/CAA12E3M067AA/1.jpg?x-oss-process=image/format,avif/quality,q_100/resize,w_1500",
  },
  {
    id: "3",
    name: "Hazy",
    description: "A hazy day",
    price: 14.99,
    colors: [
      {
        color: "#212121",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          { size: ItemSizes.M, quantity: 2 },
        ],
      },
      {
        color: "#ffffff",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          {
            size: ItemSizes.M,
            quantity: 2,
          },
          {
            size: ItemSizes.L,
            quantity: 1,
          },
        ],
      },
    ],
    category: "Swing",
    tags: ["new arrival"],
    available: true,
    sizes: [ItemSizes.S, ItemSizes.M],
    images: [],
    image:
      "https://cdn-review.cupshe.com/cmc-admin/2023_12_29/13_56_570/1651ce1d-0aa1-4785-901b-ffc62ca721d4/CAA12E3M067AA/1.jpg?x-oss-process=image/format,avif/quality,q_100/resize,w_1500",
  },
  {
    id: "4",
    name: "Hazy",
    description: "A hazy day",
    price: 17.99,
    colors: [
      {
        color: "#212121",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          { size: ItemSizes.M, quantity: 2 },
        ],
      },
      {
        color: "#ffffff",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          {
            size: ItemSizes.M,
            quantity: 2,
          },
          {
            size: ItemSizes.L,
            quantity: 1,
          },
        ],
      },
    ],
    category: "Swing",
    tags: ["new arrival"],
    available: true,
    sizes: [ItemSizes.S, ItemSizes.M],
    images: [],
    image:
      "https://cdn-review.cupshe.com/cmc-admin/2023_12_29/13_56_570/1651ce1d-0aa1-4785-901b-ffc62ca721d4/CAA12E3M067AA/1.jpg?x-oss-process=image/format,avif/quality,q_100/resize,w_1500",
  },
  {
    id: "5",
    name: "Hazy",
    description: "A hazy day",
    price: 24.99,
    available: true,
    colors: [
      {
        color: "#212121",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          { size: ItemSizes.M, quantity: 2 },
        ],
      },
      {
        color: "#ffffff",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          {
            size: ItemSizes.M,
            quantity: 2,
          },
          {
            size: ItemSizes.L,
            quantity: 1,
          },
        ],
      },
    ],
    category: "Swing",
    tags: ["new arrival"],
    sizes: [ItemSizes.S, ItemSizes.M],
    images: [],
    image:
      "https://cdn-review.cupshe.com/cmc-admin/2023_12_29/13_56_570/1651ce1d-0aa1-4785-901b-ffc62ca721d4/CAA12E3M067AA/1.jpg?x-oss-process=image/format,avif/quality,q_100/resize,w_1500",
  },
  {
    id: "6",
    name: "Hazy",
    description: "A hazy day",
    price: 39.99,
    available: true,
    colors: [
      {
        color: "#212121",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          { size: ItemSizes.M, quantity: 2 },
        ],
      },
      {
        color: "#ffffff",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          {
            size: ItemSizes.M,
            quantity: 2,
          },
          {
            size: ItemSizes.L,
            quantity: 1,
          },
        ],
      },
    ],
    category: "Swing",
    tags: ["new arrival"],
    sizes: [ItemSizes.S, ItemSizes.M],
    images: [],
    image:
      "https://cdn-review.cupshe.com/cmc-admin/2023_12_29/13_56_570/1651ce1d-0aa1-4785-901b-ffc62ca721d4/CAA12E3M067AA/1.jpg?x-oss-process=image/format,avif/quality,q_100/resize,w_1500",
  },
  {
    id: "7",
    name: "Black V-Nect Bikini Top & High-Rise Retro Bottoms",
    description:
      "Elevate your beach style with our Beach Vibes Swim Shorts, designed for ultimate comfort and style under the sun. Crafted from quick-drying and lightweight fabric, these swim shorts are perfect for a day at the beach or lounging poolside.",
    price: 18.99,
    available: true,
    colors: [
      {
        color: "#212121",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          { size: ItemSizes.M, quantity: 2 },
        ],
      },
      {
        color: "#ffffff",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          {
            size: ItemSizes.M,
            quantity: 2,
          },
          {
            size: ItemSizes.L,
            quantity: 1,
          },
        ],
      },
    ],
    category: "Swing",
    tags: ["new in"],
    sizes: [ItemSizes.S, ItemSizes.M],
    images: [],
    image:
      "https://cdn-review.cupshe.com/cmc-admin/2023_12_29/13_56_570/1651ce1d-0aa1-4785-901b-ffc62ca721d4/CAA12E3M067AA/1.jpg?x-oss-process=image/format,avif/quality,q_100/resize,w_1500",
  },
  {
    id: "8",
    name: "Hazy",
    description:
      "Elevate your beach style with our Beach Vibes Swim Shorts, designed for ultimate comfort and style under the sun. Crafted from quick-drying and lightweight fabric, these swim shorts are perfect for a day at the beach or lounging poolside.",
    price: 29.99,
    available: true,
    sizes: [ItemSizes.S, ItemSizes.M, ItemSizes.L],
    colors: [
      {
        color: "#212121",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          { size: ItemSizes.M, quantity: 2 },
        ],
      },
      {
        color: "#ffffff",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          {
            size: ItemSizes.M,
            quantity: 2,
          },
          {
            size: ItemSizes.L,
            quantity: 1,
          },
        ],
      },
    ],
    category: "Swing",
    tags: ["new in"],
    images: [],
    image:
      "https://cdn-review.cupshe.com/cmc-admin/2023_12_29/13_56_570/1651ce1d-0aa1-4785-901b-ffc62ca721d4/CAA12E3M067AA/1.jpg?x-oss-process=image/format,avif/quality,q_100/resize,w_1500",
  },
  {
    id: "9",
    name: "Beach Vibes Swim Shorts",
    description:
      "Elevate your beach style with our Beach Vibes Swim Shorts, designed for ultimate comfort and style under the sun. Crafted from quick-drying and lightweight fabric, these swim shorts are perfect for a day at the beach or lounging poolside.",
    price: 19.99,
    available: true,
    colors: [
      {
        color: "#212121",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 3,
          },
          { size: ItemSizes.M, quantity: 2 },
        ],
      },
      {
        color: "#e76f51",
        availableSizes: [
          { size: ItemSizes.S, quantity: 3 },
          { size: ItemSizes.M, quantity: 3 },
          { size: ItemSizes.L, quantity: 3 },
          { size: ItemSizes.XL, quantity: 0 },
        ],
      },
      {
        color: "#ffffff",
        availableSizes: [
          {
            size: ItemSizes.S,
            quantity: 0,
          },
          {
            size: ItemSizes.M,
            quantity: 2,
          },
          {
            size: ItemSizes.L,
            quantity: 1,
          },
        ],
      },
    ],
    category: "Swing",
    percentageOff: 25,
    tags: ["new in"],
    careInstruction:
      "Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Cool iron if needed. Do not dry clean.",
    sizes: [ItemSizes.S, ItemSizes.M, ItemSizes.XL],
    images: [],
    image:
      "https://cdn-review.cupshe.com/cmc-admin/2023_12_29/13_56_570/1651ce1d-0aa1-4785-901b-ffc62ca721d4/CAA12E3M067AA/1.jpg?x-oss-process=image/format,avif/quality,q_100/resize,w_1500",
  },
];
