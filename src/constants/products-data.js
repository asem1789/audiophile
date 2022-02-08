const HeadphonesInBoxDefault = [
  { name: "Headphone Unit", count: 1 },
  { name: "Replacement Earcups", count: 2 },
  { name: "User Manual", count: 1 },
  { name: "3.5mm 5m Audio Cable", count: 1 },
];

const SpeakersInBoxZx9 = [
  { name: "Speaker Unit", count: 2 },
  { name: "Speaker Cloth Panel", count: 2 },
  { name: "User Manual", count: 1 },
  { name: "3.5mm 10m Audio Cable", count: 1 },
  { name: "10m Optical Cable", count: 1 },
];

const SpeakersInBoxZx7 = [
  { name: "Speaker Unit", count: 2 },
  { name: "Speaker Cloth Panel", count: 2 },
  { name: "User Manual", count: 1 },
  { name: "3.5mm 10m Audio Cable", count: 1 },
  { name: "10m Optical Cable", count: 1 },
];

const EarphonesInBox = [
  { name: "Earphone Unit", count: 2 },
  { name: "Multi-size Earplugs", count: 6 },
  { name: "User Manual", count: 1 },
  { name: "USB-C Charging Cable", count: 1 },
  { name: "Travel Pouch", count: 1 },
];

const requireImg = (cat, name) => {
  return require(`../assets/images/${cat}/${name}`);
};

export const ProductsData = {
  headphones: [
    {
      id: "xx99-mark-ii-headphones",
      name: "xx99 mark ii headphones",
      price: 2999,
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      isNew: true,
      imgUrl: require("../assets/images/headphones/xx99-mark-ii-headphones.jpg"),
      inBox: [...HeadphonesInBoxDefault, { name: "Travel Bag", count: 1 }],
      gallery: [
        requireImg("headphones", "xx99-mark-ii-headphones-gallery-1.jpg"),
        requireImg("headphones", "xx99-mark-ii-headphones-gallery-2.jpg"),
        requireImg("headphones", "xx99-mark-ii-headphones-gallery-3.jpg"),
      ],
      features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

      The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
    },
    {
      id: "xx99-mark-i-headphones",
      name: "xx99 mark i headphones",
      price: 2199,
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      isNew: false,
      imgUrl: require("../assets/images/headphones/xx99-mark-i-headphones.jpg"),
      inBox: HeadphonesInBoxDefault,
      gallery: [
        requireImg("headphones", "xx99-mark-i-headphones-gallery-1.jpg"),
        requireImg("headphones", "xx99-mark-i-headphones-gallery-2.jpg"),
        requireImg("headphones", "xx99-mark-i-headphones-gallery-3.jpg"),
      ],
      features: `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.

      From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
    },
    {
      id: "xx59-Headphones",
      name: "xx59 Headphones",
      price: 899,
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      isNew: false,
      imgUrl: require("../assets/images/headphones/xx59-headphones.jpg"),
      inBox: HeadphonesInBoxDefault,
      gallery: [
        requireImg("headphones", "xx59-headphones-gallery-1.jpg"),
        requireImg("headphones", "xx59-headphones-gallery-2.jpg"),
        requireImg("headphones", "xx59-headphones-gallery-3.jpg"),
      ],
      features: `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

      More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
    },
  ],
  speakers: [
    {
      id: "zx9-speaker",
      name: "zx9 speaker",
      price: 3599,
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      isNew: true,
      imgUrl: require("../assets/images/speakers/zx9-speaker.jpg"),
      inBox: SpeakersInBoxZx9,
      gallery: [
        requireImg("speakers", "zx9-speaker-gallery-1.jpg"),
        requireImg("speakers", "zx9-speaker-gallery-2.jpg"),
        requireImg("speakers", "zx9-speaker-gallery-3.jpg"),
      ],
      features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

      Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.`,
    },
    {
      id: "zx7-speaker",
      name: "zx7 speaker",
      price: 3999,
      description:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      isNew: false,
      imgUrl: require("../assets/images/speakers/zx7-speaker.jpg"),
      inBox: SpeakersInBoxZx7,
      gallery: [
        requireImg("speakers", "zx7-speaker-gallery-1.jpg"),
        requireImg("speakers", "zx7-speaker-gallery-2.jpg"),
        requireImg("speakers", "zx7-speaker-gallery-3.jpg"),
      ],
      features: `Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

      The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.`,
    },
  ],
  earphones: [
    {
      id: "yx1-earphones",
      name: "yx1 earphones",
      price: 599,
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      isNew: true,
      imgUrl: require("../assets/images/earphones/yx1-wireless-earphones.jpg"),
      inBox: EarphonesInBox,
      gallery: [
        requireImg("earphones", "yx1-wireless-earphones-gallery-1.jpg"),
        requireImg("earphones", "yx1-wireless-earphones-gallery-2.jpg"),
        requireImg("earphones", "yx1-wireless-earphones-gallery-3.jpg"),
      ],
      features: `Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

      The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.`,
    },
  ],
};
