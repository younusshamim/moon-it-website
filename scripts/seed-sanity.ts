/**
 * Seeds Sanity with the initial instructors + courses (migrated from the old
 * static `src/data` files), uploading the images from `/public` as assets.
 *
 * Run it (after `npx sanity login`) with the CLI so it uses your user token:
 *
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=<id> NEXT_PUBLIC_SANITY_DATASET=production \
 *     npx sanity exec scripts/seed-sanity.ts --with-user-token
 *
 * It is idempotent: documents that already exist (matched by slug) are skipped,
 * so re-running won't create duplicates or clobber Studio edits.
 */
import { randomUUID } from "node:crypto";
import { createReadStream } from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2024-01-01" });

const key = () => randomUUID().replace(/-/g, "").slice(0, 12);
const publicPath = (rel: string) =>
  path.join(process.cwd(), "public", rel.replace(/^\//, ""));

// --- Portable Text helpers -------------------------------------------------

type Span = { text: string; strong?: boolean };

const span = ({ text, strong }: Span) => ({
  _type: "span",
  _key: key(),
  text,
  marks: strong ? ["strong"] : [],
});

const block = (style: "normal" | "h3", spans: Span[], listItem?: "bullet") => ({
  _type: "block",
  _key: key(),
  style,
  ...(listItem ? { listItem, level: 1 } : {}),
  markDefs: [],
  children: spans.map(span),
});

const p = (text: string) => block("normal", [{ text }]);
const h3 = (text: string) => block("h3", [{ text }]);
const li = (text: string) => block("normal", [{ text }], "bullet");
const richP = (spans: Span[]) => block("normal", spans);

// --- Source data -----------------------------------------------------------

type InstructorSeed = {
  slug: string;
  name: string;
  picture: string;
  highlights: string[];
};

const instructors: InstructorSeed[] = [
  {
    slug: "yousuf-shahin",
    name: "ইঞ্জি. ইউছুপ শাহীন",
    picture: "/instructors/Yousuf-Shahin-Final.png",
    highlights: ["নেটওয়ার্কিং সিসিএনএ, গ্রাফিক ডিজাইন ও আইটি সাপোর্ট সার্ভিসেস"],
  },
  {
    slug: "abdus-sobhan-shamim",
    name: "ইঞ্জি. আবদুস সোবহান শামীম",
    picture: "/instructors/abdus-sobhan-shamim.png",
    highlights: ["কম্পিউটার টেকনোলজি বিশেষজ্ঞ"],
  },
  {
    slug: "sorna-saha",
    name: "শর্ণা শাহা",
    picture: "/instructors/sorna-saha.png",
    highlights: ["ফাইন আর্টস ইন্সট্রাক্টর"],
  },
  {
    slug: "hajera-shaheen",
    name: "হাজেরা শাহীন জেনি",
    picture: "/instructors/female-instructor.png",
    highlights: ["অফিস অ্যাপ্লিকেশন ইন্সট্রাক্টর"],
  },
  {
    slug: "iftikhar-hossain",
    name: "ইফতেখার হোসাইন",
    picture: "/instructors/iftikhar-hossain.png",
    highlights: ["গ্রাফিক ও UI/UX ডিজাইন বিশেষজ্ঞ", "আইটি সাপোর্ট সার্ভিসেস"],
  },
  {
    slug: "shekh-forid",
    name: "শেখ ফরিদ",
    picture: "/instructors/sekh-forid.png",
    highlights: ["ডিজিটাল মার্কেটিং ও ফ্রিল্যান্সিং বিশেষজ্ঞ"],
  },
  {
    slug: "ibrahim-kholil",
    name: "ইঞ্জি. ইব্রাহিম খলিল",
    picture: "/instructors/ibrahim-kholil.png",
    highlights: ["অটোক্যাড ও ইস্টিমেট-কস্টিং প্রোগ্রাম বিশেষজ্ঞ"],
  },
  {
    slug: "younus-shamim",
    name: "ইউনুছ শামীম",
    picture: "/instructors/younus-shamim.png",
    highlights: ["ওয়েব ডিজাইন ও ডেভেলপমেন্ট ইন্সট্রাক্টর"],
  },
  {
    slug: "faizul-karim-siam",
    name: "ফয়জুল করিম সিয়াম",
    picture: "/instructors/shezanul-hoque-khan.png",
    highlights: ["স্পোকেন ইংলিশ ও IELTS বিশেষজ্ঞ"],
  },
  {
    slug: "al-amin-mahmud",
    name: "আল আমিন মাহমুদ",
    picture: "/instructors/al-amin.png",
    highlights: ["জাপানিজ ল্যাঙ্গুয়েজ ইন্সট্রাক্টর", "ভিসা কনসাল্টেন্ট"],
  },
  {
    slug: "hasan-bin-momin",
    name: "হাফেজ মাওঃ হাসান বিন মমিন",
    picture: "/instructors/hasan-bin-momin.png",
    highlights: ["অ্যারাবিক ল্যাঙ্গুয়েজ ইন্সট্রাক্টর"],
  },
  {
    slug: "ariful-islam",
    name: "আরিফুল ইসলাম",
    picture: "/instructors/ariful-islam.png",
    highlights: ["কোরিয়ান ল্যাঙ্গুয়েজ ইন্সট্রাক্টর"],
  },
  {
    slug: "rubel-rana",
    name: "রুবেল রানা",
    picture: "/instructors/male-instructor.png",
    highlights: [
      "জার্মানিতে ১৫ বছর বসবাস ও শিক্ষা",
      "Goethe সার্টিফায়েড প্রশিক্ষক",
      "১০+ বছর শিক্ষকতার অভিজ্ঞতা",
    ],
  },
  {
    slug: "sirajuddin",
    name: "সিরাজ উদ্দিন",
    picture: "/instructors/sirajuddin.png",
    highlights: ["ইতালিয়ান ল্যাঙ্গুয়েজ ইন্সট্রাক্টর"],
  },
];

type CourseSeed = {
  slug: string;
  name: string;
  category: string;
  briefDescription: string;
  descriptionParagraphs: string[];
  thumbnail: string;
  youtubeUrl?: string;
  variations: Array<{
    variationId: string;
    name: string;
    subtitle?: string;
    recommended?: boolean;
    pricing: {
      fee: number;
      discount?: {
        type: "amount" | "percentage";
        value: number;
        endDate: string;
      };
    };
  }>;
  features: string[];
  curriculum: Array<{ title: string; topics: string[] }>;
  instructorSlugs: string[];
  about: ReturnType<typeof block>[];
  isAffiliated?: boolean;
};

const courses: CourseSeed[] = [
  {
    slug: "german-language",
    name: "জার্মান ল্যাঙ্গুয়েজ",
    category: "language-course",
    briefDescription:
      "মুন আইটি'তে জার্মান ভাষার A1, A2 ও B1 লেভেলের কোর্স চলমান। অভিজ্ঞ প্রশিক্ষকের তত্ত্বাবধানে স্ট্যান্ডার্ড ক্যারিকুলামে শিখুন জার্মান ভাষা।",
    descriptionParagraphs: [
      "জার্মানিতে উচ্চশিক্ষা, চাকরি কিংবা স্থায়ীভাবে বসবাসের জন্য জার্মান ভাষা জানা অত্যন্ত গুরুত্বপূর্ণ। মুন আইটি'তে রয়েছে A1, A2 এবং B1 — এই তিনটি লেভেলের সম্পূর্ণ কোর্স।",
      "Goethe Institut-এর অনুরূপ স্ট্যান্ডার্ড ক্যারিকুলাম ও Netzwerk neu বইয়ের আলোকে ক্লাস পরিচালিত হয়। প্রতিটি লেভেল শেষে রয়েছে মক টেস্টের সুযোগ।",
      "জার্মানিতে ১৫ বছর বসবাস ও শিক্ষাগ্রহণ করা অভিজ্ঞ প্রশিক্ষকের কাছ থেকে শেখার পাশাপাশি জার্মান ভিসা প্রসেসিংয়ে সর্বোচ্চ সহযোগিতা পাবেন।",
    ],
    thumbnail: "/courses/german-language.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    variations: [
      {
        variationId: "a1",
        name: "লেভেল A1",
        subtitle: "শুরু থেকে — সম্পূর্ণ বিগিনার লেভেল",
        pricing: {
          fee: 12000,
          discount: { type: "amount", value: 2000, endDate: "2026-12-31" },
        },
      },
      {
        variationId: "a2",
        name: "লেভেল A2",
        subtitle: "প্রাথমিক দক্ষতা অর্জনের পরবর্তী লেভেল",
        pricing: { fee: 14000 },
      },
      {
        variationId: "b1",
        name: "লেভেল B1",
        subtitle: "ইন্টারমিডিয়েট লেভেল — ভিসা ও জব প্রায়োরিটির জন্য",
        pricing: { fee: 16000 },
      },
    ],
    features: [
      "প্রতি লেভেল ৩-৪ মাসে সম্পন্ন হবে",
      "সপ্তাহে ২ দিন অফলাইন ক্লাস",
      "জার্মান ভিসা প্রসেসিংয়ে সর্বোচ্চ সহযোগিতা",
      "ল্যাঙ্গুয়েজ ক্লাব সুবিধা",
      "স্ট্যান্ডার্ড কোর্স ক্যারিকুলাম ও মক টেস্ট",
      "অভিজ্ঞ জার্মান ভাষা প্রশিক্ষক",
    ],
    curriculum: [
      {
        title: "মৌলিক ভিত্তি ও উচ্চারণ",
        topics: [
          "জার্মান বর্ণমালা ও সঠিক উচ্চারণ",
          "সম্ভাষণ ও আত্মপরিচয়",
          "সংখ্যা, সময় ও তারিখ",
          "মৌলিক শব্দভাণ্ডার",
        ],
      },
      {
        title: "দৈনন্দিন কথোপকথন",
        topics: [
          "পরিবার ও পরিচিতি নিয়ে কথা বলা",
          "কেনাকাটা ও দাম জিজ্ঞাসা",
          "দিকনির্দেশনা ও যাতায়াত",
          "রেস্তোরাঁ ও খাবার অর্ডার",
        ],
      },
      {
        title: "ব্যাকরণ ও বাক্যগঠন",
        topics: [
          "Artikel (der, die, das) ও Nomen",
          "Verben ও বর্তমান কাল",
          "বাক্য গঠনের নিয়ম",
          "Akkusativ ও Dativ-এর প্রাথমিক ধারণা",
        ],
      },
      {
        title: "শব্দভাণ্ডার ও পঠন দক্ষতা",
        topics: [
          "থিম-ভিত্তিক শব্দভাণ্ডার সম্প্রসারণ",
          "ছোট অনুচ্ছেদ ও সংলাপ পড়া",
          "তথ্য খুঁজে বের করা",
          "Netzwerk neu বইয়ের অনুশীলন",
        ],
      },
      {
        title: "লিসেনিং ও স্পিকিং",
        topics: [
          "অডিও শুনে বোঝা ও উত্তর দেওয়া",
          "সাবলীল কথোপকথন অনুশীলন",
          "উচ্চারণ ও স্বরভঙ্গি উন্নয়ন",
          "জোড়ায় ও দলগত অনুশীলন",
        ],
      },
      {
        title: "পরীক্ষা প্রস্তুতি ও মক টেস্ট",
        topics: [
          "Goethe ফরম্যাট অনুযায়ী প্রস্তুতি",
          "লেভেলভিত্তিক মক টেস্ট",
          "রাইটিং ও স্পিকিং মূল্যায়ন",
          "পরীক্ষার কৌশল ও ফিডব্যাক",
        ],
      },
    ],
    instructorSlugs: ["rubel-rana"],
    about: [
      p(
        "মুন আইটি'র জার্মান ল্যাঙ্গুয়েজ কোর্সটি সাজানো হয়েছে আন্তর্জাতিক মানের ক্যারিকুলাম অনুসরণ করে, যেন শিক্ষার্থীরা ধাপে ধাপে A1 থেকে B1 পর্যন্ত আত্মবিশ্বাসের সাথে জার্মান ভাষায় দক্ষ হয়ে উঠতে পারেন।",
      ),
      h3("কোর্সে যা শিখবেন"),
      li("জার্মান ভাষার ব্যাকরণ, শব্দভাণ্ডার ও সঠিক উচ্চারণ"),
      li("দৈনন্দিন কথোপকথন ও বাস্তব জীবনের পরিস্থিতিতে ভাষার ব্যবহার"),
      li("রিডিং, রাইটিং, লিসেনিং ও স্পিকিং — চারটি দক্ষতার সমন্বিত অনুশীলন"),
      li("Goethe Institut পরীক্ষার ধরন অনুযায়ী মক টেস্ট"),
      h3("কাদের জন্য উপযোগী"),
      richP([
        { text: "যারা জার্মানিতে " },
        { text: "উচ্চশিক্ষা, চাকরি বা স্থায়ী বসবাসের", strong: true },
        {
          text: " পরিকল্পনা করছেন, কিংবা নতুন একটি ভাষা শিখে নিজের ক্যারিয়ারকে এগিয়ে নিতে চান — এই কোর্সটি তাদের জন্য আদর্শ।",
        },
      ]),
    ],
    isAffiliated: false,
  },
  {
    slug: "graphics-design",
    name: "প্রফেশনাল গ্রাফিক ডিজাইন",
    category: "it-course",
    briefDescription:
      "গ্রাফিক ডিজাইন একটি জনপ্রিয় ও সৃজনশীল পেশা। Adobe Photoshop, Illustrator সহ বিভিন্ন সফটওয়্যার ব্যবহার করে বিজনেস কার্ড, লোগো, ব্রোশিওর, ফ্লায়ার সহ ৫০+ প্রজেক্ট ডিজাইন শিখুন।",
    descriptionParagraphs: [
      "গ্রাফিক ডিজাইন বর্তমান সময়ে একটি জনপ্রিয় পেশা। এ কাজটি একই সাথে আনন্দদায়ক এবং সৃজনশীল। যদি আপনার মাঝে ক্রিয়েটিভিটি থাকে আর স্বাধীনভাবে কাজ করতে চান তাহলে প্রফেশনাল অথবা ফ্রিল্যান্স গ্রাফিক ডিজাইনার হিসেবে গড়ে তুলতে পারেন নিজেকে।",
      "এ কোর্সটি বিজনেজ কার্ড, আইডি কার্ড, লোগো ডিজাইন, ব্রোশিওর ডিজাইন, ক্যালেন্ডার ডিজাইন, লেটারহেড, ফ্লায়ার কার্ড ও মকাপ ডিজাইন সহ প্রায় ৫০টি প্রজেক্ট ডিজাইনের সমন্বয়ে গঠিত।",
      "ইন্ডাস্ট্রির অভিজ্ঞ ডিজাইনারদের কাছ থেকে হাতে-কলমে শিখুন এবং আপনার পোর্টফোলিও তৈরি করুন। ফ্রিল্যান্সিং এবং আন্তর্জাতিক বাজারে সফল হওয়ার জন্য প্রয়োজনীয় সকল দক্ষতা অর্জন করুন।",
    ],
    thumbnail: "/courses/graphic-design-new.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=graphics-design-demo",
    variations: [
      {
        variationId: "photoshop",
        name: "৩ মাস মেয়াদী",
        subtitle: "ফটো এডিটিং, রিটাচিং ও ম্যানিপুলেশন",
        pricing: { fee: 8000 },
      },
      {
        variationId: "complete",
        name: "৬ মাস মেয়াদী",
        subtitle: "Photoshop + Illustrator — ৫০+ প্রজেক্ট সহ",
        recommended: true,
        pricing: {
          fee: 14500,
          discount: { type: "amount", value: 6000, endDate: "2027-09-20" },
        },
      },
    ],
    features: [
      "কোর্সের সময়কাল ৪-৬ মাস",
      "সপ্তাহে ৩ দিন অফলাইন ক্লাস",
      "Adobe Photoshop & Illustrator মাস্টারি",
      "৫০+ বাস্তব প্রজেক্ট কাজের অভিজ্ঞতা",
      "ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার",
      "লাইফটাইম সাপোর্ট এবং ক্লাস রেকর্ড",
    ],
    curriculum: [
      {
        title: "ডিজাইনের মৌলিক ধারণা",
        topics: [
          "ডিজাইন প্রিন্সিপাল ও কম্পোজিশন",
          "কালার থিওরি ও কালার পরিচিতি",
          "টাইপোগ্রাফি ও ফন্ট নির্বাচন",
          "ডিজাইন সফটওয়্যার ও ইন্টারফেস পরিচিতি",
        ],
      },
      {
        title: "Adobe Photoshop মাস্টারি",
        topics: [
          "লেয়ার, মাস্ক ও সিলেকশন টুলস",
          "ফটো রিটাচিং ও কালার কারেকশন",
          "ফটো ম্যানিপুলেশন ও কম্পোজিটিং",
          "ব্যানার ও সোশ্যাল মিডিয়া পোস্ট ডিজাইন",
        ],
      },
      {
        title: "Adobe Illustrator মাস্টারি",
        topics: [
          "পেন টুল ও ভেক্টর শেইপ তৈরি",
          "লোগো ও আইকন ডিজাইন",
          "টাইপোগ্রাফি ও আর্টওয়ার্ক তৈরি",
          "ইলাস্ট্রেশন ও প্যাটার্ন ডিজাইন",
        ],
      },
      {
        title: "ব্র্যান্ডিং ও আইডেন্টিটি ডিজাইন",
        topics: [
          "বিজনেস কার্ড ও আইডি কার্ড ডিজাইন",
          "লেটারহেড ও ব্র্যান্ড গাইডলাইন",
          "ব্রোশিওর ও ক্যাটালগ ডিজাইন",
          "লোগো ভ্যারিয়েশন ও ব্র্যান্ড কিট তৈরি",
        ],
      },
      {
        title: "প্রিন্ট ও মার্কেটিং ডিজাইন",
        topics: [
          "ফ্লায়ার ও পোস্টার ডিজাইন",
          "ক্যালেন্ডার ও ইনভাইটেশন কার্ড ডিজাইন",
          "প্যাকেজিং ও লেবেল ডিজাইন",
          "প্রিন্ট-রেডি ফাইল প্রস্তুতকরণ (Bleed, CMYK)",
        ],
      },
      {
        title: "মকআপ, পোর্টফোলিও ও ফ্রিল্যান্সিং",
        topics: [
          "রিয়েলিস্টিক মকআপ ডিজাইন",
          "প্রজেক্ট প্রেজেন্টেশন তৈরি",
          "পোর্টফোলিও সাজানো ও পাবলিশ করা",
          "ফ্রিল্যান্স মার্কেটপ্লেসে কাজ শুরু করার কৌশল",
        ],
      },
    ],
    instructorSlugs: ["iftikhar-hossain"],
    about: [
      p(
        "মুন আইটি'র প্রফেশনাল গ্রাফিক ডিজাইন কোর্স আপনাকে একজন দক্ষ ডিজাইনার হিসেবে গড়ে তুলবে। Adobe Creative Suite-এর শক্তিশালী টুলস ব্যবহার করে আপনি শিখবেন কীভাবে পেশাদার মানের ডিজাইন তৈরি করতে হয়।",
      ),
      h3("কোর্সে যা শিখবেন"),
      li("Adobe Photoshop এবং Illustrator এর সম্পূর্ণ দক্ষতা"),
      li("ডিজাইন নীতি, রঙ তত্ত্ব এবং টাইপোগ্রাফি"),
      li("ব্র্যান্ডিং, লোগো এবং প্যাকেজিং ডিজাইন"),
      li("প্রকৃত প্রকল্পের মাধ্যমে বাস্তব অভিজ্ঞতা"),
      h3("কাদের জন্য উপযোগী"),
      richP([
        { text: "যারা " },
        { text: "ক্রিয়েটিভ ফিল্ডে ক্যারিয়ার", strong: true },
        { text: " গড়তে চান অথবা " },
        { text: "ফ্রিল্যান্সিং এ আগ্রহী", strong: true },
        {
          text: ", এবং নিজের সৃজনশীলতা দিয়ে আয় করতে চান — এই কোর্সটি আপনার জন্য আদর্শ।",
        },
      ]),
    ],
    isAffiliated: true,
  },
];

// --- Seeding ---------------------------------------------------------------

async function uploadImage(rel: string) {
  const filename = path.basename(rel);
  const asset = await client.assets.upload(
    "image",
    createReadStream(publicPath(rel)),
    { filename },
  );
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function seedInstructors() {
  const bySlug = new Map<string, string>();
  const existing: { slug: string; _id: string }[] = await client.fetch(
    `*[_type == "instructor"]{ "slug": slug.current, _id }`,
  );
  for (const row of existing) if (row.slug) bySlug.set(row.slug, row._id);

  for (const [index, item] of instructors.entries()) {
    if (bySlug.has(item.slug)) {
      console.log(`↷ instructor exists: ${item.name}`);
      continue;
    }
    console.log(`↑ uploading image for ${item.name}…`);
    const picture = await uploadImage(item.picture);
    const doc = await client.create({
      _type: "instructor",
      name: item.name,
      slug: { _type: "slug", current: item.slug },
      picture,
      highlights: item.highlights,
      order: (index + 1) * 10,
    });
    bySlug.set(item.slug, doc._id);
    console.log(`✓ created instructor: ${item.name}`);
  }

  return bySlug;
}

async function seedCourses(instructorIds: Map<string, string>) {
  const existing: string[] = await client.fetch(
    `*[_type == "course"].slug.current`,
  );
  const existingSet = new Set(existing);

  for (const [index, item] of courses.entries()) {
    if (existingSet.has(item.slug)) {
      console.log(`↷ course exists: ${item.name}`);
      continue;
    }
    console.log(`↑ uploading thumbnail for ${item.name}…`);
    const thumbnail = await uploadImage(item.thumbnail);

    const instructorRefs = item.instructorSlugs.map((slug) => {
      const _ref = instructorIds.get(slug);
      if (!_ref) throw new Error(`Missing instructor for slug: ${slug}`);
      return { _type: "reference", _key: key(), _ref };
    });

    await client.create({
      _type: "course",
      name: item.name,
      slug: { _type: "slug", current: item.slug },
      category: item.category,
      thumbnail,
      briefDescription: item.briefDescription,
      descriptionParagraphs: item.descriptionParagraphs,
      youtubeUrl: item.youtubeUrl,
      priceModel: "variations",
      variations: item.variations.map((v) => ({
        _type: "courseVariation",
        _key: key(),
        variationId: v.variationId,
        name: v.name,
        subtitle: v.subtitle,
        recommended: v.recommended ?? false,
        pricing: {
          _type: "coursePricing",
          fee: v.pricing.fee,
          ...(v.pricing.discount
            ? { discount: { _type: "courseDiscount", ...v.pricing.discount } }
            : {}),
        },
      })),
      features: item.features,
      curriculum: item.curriculum.map((m) => ({
        _type: "curriculumModule",
        _key: key(),
        title: m.title,
        topics: m.topics,
      })),
      instructors: instructorRefs,
      about: item.about,
      isAffiliated: item.isAffiliated ?? false,
      order: (index + 1) * 10,
    });
    console.log(`✓ created course: ${item.name}`);
  }
}

async function main() {
  const { projectId, dataset } = client.config();
  console.log(`Seeding project "${projectId}" / dataset "${dataset}"…`);
  const instructorIds = await seedInstructors();
  await seedCourses(instructorIds);
  console.log("\nDone ✔");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
