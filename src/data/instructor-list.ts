import type { Instructor } from "@/types/course";

export const instructors = {
  yousufShahin: {
    name: "ইঞ্জি. ইউছুপ শাহীন",
    picture: "/instructors/Yousuf-Shahin-Final.png",
    highlights: ["নেটওয়ার্কিং সিসিএনএ, গ্রাফিক ডিজাইন ও আইটি সাপোর্ট সার্ভিসেস"],
  },
  abdusSobhanShamim: {
    name: "ইঞ্জি. আবদুস সোবহান শামীম",
    picture: "/instructors/abdus-sobhan-shamim.png",
    highlights: ["কম্পিউটার টেকনোলজি বিশেষজ্ঞ"],
  },
  sornaSaha: {
    name: "শর্ণা শাহা",
    picture: "/instructors/sorna-saha.png",
    highlights: ["ফাইন আর্টস ইন্সট্রাক্টর"],
  },
  hajeraShaheen: {
    name: "হাজেরা শাহীন জেনি",
    picture: "/instructors/female-instructor.png",
    highlights: ["অফিস অ্যাপ্লিকেশন ইন্সট্রাক্টর"],
  },
  iftikharHossain: {
    name: "ইফতেখার হোসাইন",
    picture: "/instructors/iftikhar-hossain.png",
    highlights: ["গ্রাফিক ও UI/UX ডিজাইন বিশেষজ্ঞ", "আইটি সাপোর্ট সার্ভিসেস"],
  },
  shekhForid: {
    name: "শেখ ফরিদ",
    picture: "/instructors/sekh-forid.png",
    highlights: ["ডিজিটাল মার্কেটিং ও ফ্রিল্যান্সিং বিশেষজ্ঞ"],
  },
  ibrahimKholil: {
    name: "ইঞ্জি. ইব্রাহিম খলিল",
    picture: "/instructors/ibrahim-kholil.png",
    highlights: ["অটোক্যাড ও ইস্টিমেট-কস্টিং প্রোগ্রাম বিশেষজ্ঞ"],
  },
  younusShamim: {
    name: "ইউনুছ শামীম",
    picture: "/instructors/younus-shamim.png",
    highlights: ["ওয়েব ডিজাইন ও ডেভেলপমেন্ট ইন্সট্রাক্টর"],
  },
  faizulKarimSiam: {
    name: "ফয়জুল করিম সিয়াম",
    picture: "/instructors/shezanul-hoque-khan.png",
    highlights: ["স্পোকেন ইংলিশ ও IELTS বিশেষজ্ঞ"],
  },
  alAminMahmud: {
    name: "আল আমিন মাহমুদ",
    picture: "/instructors/al-amin.png",
    highlights: ["জাপানিজ ল্যাঙ্গুয়েজ ইন্সট্রাক্টর", "ভিসা কনসাল্টেন্ট"],
  },
  hasanBinMomin: {
    name: "হাফেজ মাওঃ হাসান বিন মমিন",
    picture: "/instructors/hasan-bin-momin.png",
    highlights: ["অ্যারাবিক ল্যাঙ্গুয়েজ ইন্সট্রাক্টর"],
  },
  arifulIslam: {
    name: "আরিফুল ইসলাম",
    picture: "/instructors/ariful-islam.png",
    highlights: ["কোরিয়ান ল্যাঙ্গুয়েজ ইন্সট্রাক্টর"],
  },
  rubelRana: {
    name: "রুবেল রানা",
    picture: "/instructors/male-instructor.png",
    highlights: [
      "জার্মানিতে ১৫ বছর বসবাস ও শিক্ষা",
      "Goethe সার্টিফায়েড প্রশিক্ষক",
      "১০+ বছর শিক্ষকতার অভিজ্ঞতা",
    ],
  },
  sirajuddin: {
    name: "সিরাজ উদ্দিন",
    picture: "/instructors/sirajuddin.png",
    highlights: ["ইতালিয়ান ল্যাঙ্গুয়েজ ইন্সট্রাক্টর"],
  },
} satisfies Record<string, Instructor>;

export const instructorList: Instructor[] = Object.values(instructors);
export default instructorList;
