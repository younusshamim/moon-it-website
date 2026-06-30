import type { CourseType } from "@/types/course-legacy";

const courseList: CourseType[] = [
  {
    id: 1,
    name: "প্রফেশনাল গ্রাফিক ডিজাইন",
    slug: "professional-graphic-design",
    title:
      "এ কোর্সটি বিজনেজ কার্ড, আইডি কার্ড, লগো ডিজাইন, ব্রোশিওর ডিজাইন, ক্যালেন্ডার ডিজাইন, লেটারহেড, ফ্লায়ার কার্ড ও মকাপ ডিজাইন সহ প্রায় ৫০টি প্রজেক্ট ডিজাইনের সমন্বয়ে গঠিত।",
    description1:
      "গ্রাফিক ডিজাইন বর্তমান সময়ে একটি জনপ্রিয় পেশা। এ কাজটি একই সাথে আনন্দদায়ক এবং সৃজনশীল। যদি আপনার মাঝে ক্রিয়েটিভিটি থাকে আর স্বাধীনভাবে কাজ করতে চান তাহলে প্রফেশনাল অথবা ফ্রিল্যান্স গ্রাফিক ডিজাইনার হিসেবে গড়ে তুলতে পারেন নিজেকে।",
    description2:
      "এ কোর্সটি বিজনেজ কার্ড, আইডি কার্ড, লগো ডিজাইন, ব্রোশিওর ডিজাইন, ক্যালেন্ডার ডিজাইন, লেটারহেড, ফ্লায়ার কার্ড ও মকাপ ডিজাইন সহ প্রায় ৫০টি প্রজেক্ট ডিজাইনের সমন্বয়ে গঠিত।",
    category: "it",
    image: "/courses/graphic-design-new.jpg",
    fee: 14500,
    discount: { type: "amount", value: 6000, endDate: "09/20/2024" },
    metorIds: [2, 1],
    services: [
      {
        title: "কোর্সের সময়কাল ৪-৬ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ১.৫-০২ ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ক্লাস",
        description: "যারা কিছুটা দুর্বল, তাদের জন্য রয়েছে এক্সট্রা সাপোর্ট ক্লাসের ব্যবস্থা।",
        image: "/icons/unlimited-support.png",
      },
      {
        title: "থাকছে গুরুত্বপূর্ণ ক্লাসের রেকর্ড",
        description:
          "থাকছে গুরুত্বপূর্ণ সব ক্লাসের রেকর্ড, যেনো ক্লাস রেকর্ড দেখে প্র্যাক্টিস চালিয়ে যেতে পারেন।",
        image: "/icons/recording.png",
      },
    ],
    curriculum: [
      {
        title: "Introduction to Graphic Design",
        modules: [
          {
            title: "Foundations of Graphic Design",
            lessons: [
              {
                title: "What is Graphic Design?",
                details: "Definition, purpose, and real-life applications",
              },
              {
                title: "Demand for Graphic Design",
                details: "Industry scope and opportunities",
              },
              {
                title: "Role of a Graphic Designer",
                details: "Local and international career paths",
              },
              {
                title: "Course Module Overview",
                details: "Learning roadmap and expectations",
              },
              {
                title: "Software Installation & PC Requirements",
                details: "Adobe Creative Suite setup and system specifications",
              },
            ],
          },
        ],
      },
      {
        title: "Photoshop for Beginners",
        modules: [
          {
            title: "Getting Started with Photoshop",
            lessons: [
              {
                title: "Introduction to Adobe Photoshop",
                details: "Workspace and tools",
              },
              {
                title: "Draw a National Flag",
                details: "Hands-on beginner project",
              },
              {
                title: "Passport, Stamp & 3R Image Setup",
                details: "Practical exercises",
              },
              {
                title: "Mastering the Pen Tool",
                details: "Precise selection techniques",
              },
              {
                title: "Shape Design with Gradients",
                details: "Creative color blending",
              },
              {
                title: "ID Card Design",
                details: "Professional document creation",
              },
              {
                title: "Travel Ad Banner",
                details: "Advertisement design basics",
              },
              {
                title: "Brush Customization",
                details: "Using and creating custom brushes",
              },
              {
                title: "Watermark Removal",
                details: "Content editing techniques",
              },
              {
                title: "Document Editing",
                details: "Certificate, NID, Birth Certificate with Clone Stamp",
              },
              {
                title: "File Formats & Color Modes",
                details: "Smart Object, RGB, CMYK, Layer Management",
              },
              {
                title: "Dress Color Change",
                details: "Photo manipulation with clothing edits",
              },
              {
                title: "Basic Photo Retouching",
                details: "Improving image quality",
              },
            ],
          },
        ],
      },
      {
        title: "Illustrator for Beginners",
        modules: [
          {
            title: "Getting Started with Illustrator",
            lessons: [
              {
                title: "Introduction to Adobe Illustrator",
                details: "Workspace and tools",
              },
              {
                title: "Draw a National Flag",
                details: "Beginner vector exercise",
              },
              {
                title: "ID Card Design & File Formats",
                details: "Practical design work",
              },
              {
                title: "Illustrator Essentials",
                details:
                  "Align, Character, Paragraph, Arrange, Symbol, Transform, Transparency, Pathfinder, Gradient",
              },
              {
                title: "Image Vector Tracing",
                details: "Converting raster to vector",
              },
              { title: "Creating Shapes", details: "Shape design techniques" },
            ],
          },
          {
            title: "Printing Design Projects",
            lessons: [
              {
                title: "Visiting Card / Business Card",
                details: "Professional branding material",
              },
              {
                title: "Letterhead & Invoice Design",
                details: "Business stationery",
              },
              { title: "Event Pass / Post Card", details: "Event branding" },
              { title: "Flyer Design", details: "Marketing design project" },
              {
                title: "Bi-fold & Tri-fold Brochure",
                details: "Advanced layout design",
              },
            ],
          },
        ],
      },
      {
        title: "Design Principles & Creative Theory",
        modules: [
          {
            title: "Core Design Principles",
            lessons: [
              {
                title: "Design Principles",
                details:
                  "Contrast, Hierarchy, Proximity, Whitespace, Balance, Alignment, Repetition, Simplicity",
              },
              { title: "Color Theory", details: "Psychology and color usage" },
              { title: "Typography", details: "Font usage and design impact" },
              {
                title: "Font Management",
                details: "Organizing and using fonts",
              },
              {
                title: "Golden Ratio & Rule of Thirds",
                details: "Design balance techniques",
              },
            ],
          },
        ],
      },
      {
        title: "Photoshop Advanced",
        modules: [
          {
            title: "Professional Photoshop Projects",
            lessons: [
              {
                title: "Image Retouching",
                details: "Advanced photo enhancements",
              },
              {
                title: "Image Manipulation",
                details: "Creative composite designs",
              },
              { title: "Poster Design", details: "Marketing poster creation" },
              {
                title: "Social Media Ads & Covers",
                details: "Engaging online graphics",
              },
              {
                title: "Mockup Presentation",
                details: "Client-ready project presentation",
              },
              { title: "Billboard Design", details: "Large-scale advertising" },
              {
                title: "Thumbnail Design",
                details: "YouTube and digital media thumbnails",
              },
              {
                title: "Product Design & Branding",
                details: "Packaging and brand identity",
              },
            ],
          },
        ],
      },
      {
        title: "Illustrator Advanced",
        modules: [
          {
            title: "Professional Illustrator Projects",
            lessons: [
              { title: "Poster Design", details: "Mahfil/Political posters" },
              {
                title: "Invoice & Calendar Design",
                details: "Wall & desk calendar projects",
              },
              {
                title: "Book Cover Design",
                details: "Creative publishing materials",
              },
              { title: "Typography Design", details: "Advanced font styling" },
              {
                title: "Packaging Design",
                details: "Retail & e-commerce packaging",
              },
            ],
          },
          {
            title: "Logo Design & Branding",
            lessons: [
              {
                title: "Introduction to Logo Design",
                details: "History and purpose",
              },
              {
                title: "Logo Design Process",
                details: "From concept to completion",
              },
              { title: "Sketch to Vector", details: "Practical logo creation" },
              {
                title: "Branding & Presentation",
                details: "Identity systems and mockups",
              },
              {
                title: "Case Studies & Practice",
                details: "Real-world examples",
              },
            ],
          },
        ],
      },
      {
        title: "AI-Powered Design Tools",
        modules: [
          {
            title: "AI in Design",
            lessons: [
              {
                title: "Free & Premium Tools",
                details: "Exploring AI design resources",
              },
              {
                title: "Prompt Engineering",
                details: "Crafting effective prompts",
              },
              {
                title: "AI Image Generation",
                details: "Creating assets with AI",
              },
              {
                title: "Social Media Design with AI",
                details: "Smart content creation",
              },
              {
                title: "AI Design Review",
                details: "Analyzing and improving designs with AI",
              },
            ],
          },
        ],
      },
      {
        title: "Professional Development",
        modules: [
          {
            title: "Building a Creative Career",
            lessons: [
              {
                title: "Portfolio Development",
                details: "Showcasing your best work",
              },
              { title: "Market Research", details: "Finding opportunities" },
              { title: "Pricing Models", details: "Setting competitive rates" },
              {
                title: "Marketing for Designers",
                details: "Personal branding & outreach",
              },
            ],
          },
          {
            title: "Job & Freelancing Pathways",
            lessons: [
              {
                title: "Local Marketplace Jobs",
                details: "Employment opportunities",
              },
              {
                title: "Freelancing Platforms",
                details: "Upwork, Fiverr, and beyond",
              },
              {
                title: "Remote Work Guidelines",
                details: "Working internationally",
              },
            ],
          },
        ],
      },
      {
        title: "Additional Facilities & Support",
        modules: [
          {
            title: "Course Conditions & Benefits",
            lessons: [
              {
                title: "Attendance Requirement",
                details: "Minimum 90% class attendance",
              },
              {
                title: "Trainer’s Instructions",
                details: "Following guidance for success",
              },
              { title: "Lifetime Support", details: "Post-course mentoring" },
              {
                title: "Recorded Classes",
                details: "Access to video recordings",
              },
              {
                title: "Real Case Studies",
                details: "Industry-based learning",
              },
              {
                title: "Premium Source Files & Kits",
                details: "Exclusive resources",
              },
              {
                title: "Dedicated Facebook Group",
                details: "Networking and support",
              },
              {
                title: "Practice Lab Support",
                details: "Hands-on practice opportunities",
              },
              {
                title: "Virtual Internship",
                details: "Practical work experience",
              },
              {
                title: "Career Guidance",
                details: "Long-term professional success",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "ডিজিটাল মার্কেটিং উইথ ফ্রিল্যান্সিং",
    slug: "digital-marketing-with-freelancing",
    title:
      "এ কোর্সটি Search Engine Optimization, Search Engine Marketing এবং Social Media Marketing সহ একটি Business গ্রোও করার সকল নিয়ম ও অনলাইন আয়ের কলাকৌশল নিয়ে গঠিত।",
    description1:
      "আধুনিক বিশ্বে নিজেকে ও নিজের ব্যবসার অস্তিত্ব টিকিয়ে রাখতে হলে ডিজিটাল মার্কেটিং শেখার কোনো বিকল্প নেই। বর্তমান সময়ে ডিজিটাল মার্কেটিং একটি অপরিহার্য অংশ। কারণ মানুষ এখন যেকোন পন্য ক্রয় করার আগে ইন্টারনেটে ঐ পন্য সম্পর্কে জেনে বুঝে তারপরে ক্রয় করে।",
    description2:
      "এ কোর্সটি Search Engine Optimization, Search Engine Marketing এবং Social Media Marketing সহ একটি Business গ্রোও করার সকল নিয়ম ও অনলাইন আয়ের কলাকৌশল নিয়ে গঠিত।",
    category: "it",
    image: "/courses/digital-marketing.jpg",
    fee: 14500,
    discount: { type: "amount", value: 5000, endDate: "09/20/2024" },
    metorIds: [4],
    services: [
      {
        title: "কোর্সের সময়কাল ৩-৪ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ১.৫-২ ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "থাকছে গুরুত্বপূর্ণ ক্লাসের রেকর্ড",
        description:
          "থাকছে গুরুত্বপূর্ণ সব ক্লাসের রেকর্ড, যেনো ক্লাস রেকর্ড দেখে প্র্যাক্টিস চালিয়ে যেতে পারেন।",
        image: "/icons/recording.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "অনলাইন সাপোর্ট এন্ড প্র্যাক্টিস",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন সরাসরি, লাইভে।",
        image: "/icons/unlimited-support.png",
      },
    ],
    curriculum: [
      {
        title: "Digital Marketing Foundations",
        modules: [
          {
            title: "Digital Marketing Fundamentals",
            lessons: [
              {
                title: "Digital Marketing Overview",
                details: "Definition, scope, digital marketing ecosystem",
              },
              {
                title: "Marketing Strategy Development",
                details: "Creating comprehensive digital marketing plans",
              },
              {
                title: "Audience Segmentation",
                details: "Targeting techniques, customer persona creation",
              },
              {
                title: "Digital Marketing Terminology",
                details: "Key terms, metrics, industry-specific vocabulary",
              },
            ],
          },
        ],
      },
      {
        title: "Social Media Marketing Strategies",
        modules: [
          {
            title: "Facebook Marketing Mastery",
            lessons: [
              {
                title: "Facebook Marketing Foundations",
                details: "Platform overview, marketing potential",
              },
              {
                title: "Page Optimization",
                details: "Creating and optimizing business pages",
              },
              {
                title: "Content Strategy",
                details: "Developing engaging Facebook content",
              },
              {
                title: "Facebook Groups Marketing",
                details: "Community building, engagement techniques",
              },
              {
                title: "Facebook Advertising",
                details: "Ad campaigns, targeting, management",
              },
              {
                title: "Advanced Targeting",
                details: "Sophisticated audience segmentation",
              },
              {
                title: "Analytics and Reporting",
                details: "Performance tracking, insights interpretation",
              },
              {
                title: "Campaign Management",
                details: "Scaling and optimizing ad campaigns",
              },
              {
                title: "Ad Design Techniques",
                details: "Creating compelling visual advertisements",
              },
            ],
          },
          {
            title: "Pinterest Marketing",
            lessons: [
              {
                title: "Pinterest Marketing Introduction",
                details: "Platform opportunities, marketing potential",
              },
              {
                title: "Business Account Creation",
                details: "Setting up and optimizing Pinterest profile",
              },
              {
                title: "Account Management",
                details: "Content curation, board organization",
              },
              {
                title: "Content Strategy",
                details: "Creating engaging visual content",
              },
              {
                title: "Pinterest Advertising",
                details: "Ad types, campaign creation",
              },
              {
                title: "SEO and Organic Growth",
                details: "Strategies for increasing visibility",
              },
              {
                title: "Advanced Marketing Techniques",
                details: "Sophisticated Pinterest marketing strategies",
              },
            ],
          },
          {
            title: "LinkedIn Marketing",
            lessons: [
              {
                title: "LinkedIn Marketing Fundamentals",
                details: "Professional networking, B2B marketing",
              },
              {
                title: "Content Strategy",
                details: "Professional content development",
              },
              {
                title: "Network Building",
                details: "Connection and networking strategies",
              },
              {
                title: "LinkedIn Advertising",
                details: "Professional targeted advertising",
              },
              {
                title: "Sales and Lead Generation",
                details: "Using Sales Navigator effectively",
              },
              {
                title: "B2B Marketing",
                details: "Strategies for business-to-business marketing",
              },
              {
                title: "Personal Branding",
                details: "Profile optimization, career growth",
              },
            ],
          },
          {
            title: "Instagram Marketing",
            lessons: [
              {
                title: "Instagram Marketing Introduction",
                details: "Platform overview, marketing strategies",
              },
              {
                title: "Content Strategy",
                details: "Creating visually engaging content",
              },
              {
                title: "Instagram Advertising",
                details: "Ad types, campaign creation",
              },
              {
                title: "Advanced Targeting",
                details: "Audience segmentation techniques",
              },
              {
                title: "Ad Campaign Management",
                details: "Scaling and optimizing campaigns",
              },
            ],
          },
          {
            title: "TikTok Advertising",
            lessons: [
              {
                title: "TikTok Advertising Fundamentals",
                details: "Platform overview, advertising opportunities",
              },
              {
                title: "Advertising Objectives",
                details: "Campaign goals and strategies",
              },
              {
                title: "Ad Creation Techniques",
                details: "Designing effective TikTok ads",
              },
              {
                title: "Advanced Ad Strategies",
                details: "Sophisticated campaign management",
              },
              {
                title: "Tracking and Analytics",
                details: "Pixel implementation, event tracking",
              },
              {
                title: "E-commerce Promotion",
                details: "App and product promotion techniques",
              },
              {
                title: "Campaign Optimization",
                details: "Performance analysis and improvement",
              },
              {
                title: "Industry Insights",
                details: "Case studies and marketing trends",
              },
            ],
          },
        ],
      },
      {
        title: "Video and Search Marketing",
        modules: [
          {
            title: "YouTube Video Marketing",
            lessons: [
              {
                title: "Content Ideation",
                details: "Generating compelling video content ideas",
              },
              {
                title: "Video Editing Tools",
                details: "Software introduction and basic techniques",
              },
              {
                title: "Video Production",
                details: "Creating promotional and engaging content",
              },
              {
                title: "Channel Optimization",
                details: "YouTube channel setup and management",
              },
              {
                title: "SEO and Keyword Research",
                details: "Optimizing video content for search",
              },
              {
                title: "Competitor Analysis",
                details: "Analyzing and learning from competitors",
              },
              {
                title: "Promotional Campaigns",
                details: "Paid video promotion strategies",
              },
              {
                title: "Monetization Strategies",
                details: "YouTube revenue generation techniques",
              },
            ],
          },
          {
            title: "Google Marketing",
            lessons: [
              {
                title: "Google Ads Introduction",
                details: "Platform overview and account setup",
              },
              {
                title: "Search Ads",
                details: "Creating and optimizing search advertisements",
              },
              {
                title: "Display Ads",
                details: "Visual advertising strategies",
              },
              {
                title: "Video Ads",
                details: "Video advertising on Google platforms",
              },
              {
                title: "Shopping Ads",
                details: "E-commerce product advertising",
              },
              {
                title: "App Campaigns",
                details: "Mobile app promotion techniques",
              },
              {
                title: "Analytics and Optimization",
                details: "Performance tracking and improvement",
              },
            ],
          },
        ],
      },
      {
        title: "Advanced Marketing Technologies",
        modules: [
          {
            title: "Web Analytics",
            lessons: [
              {
                title: "Technical Basics",
                details: "Web analytics fundamentals",
              },
              {
                title: "Google Tag Manager Setup",
                details: "Implementation and configuration",
              },
              {
                title: "Google Analytics 4 Mastery",
                details: "Advanced tracking and insights",
              },
              {
                title: "E-commerce Analytics",
                details: "Growth insights and strategies",
              },
              {
                title: "Pixel Implementation",
                details: "Facebook Pixel setup for iOS updates",
              },
            ],
          },
        ],
      },
      {
        title: "Freelancing and Professional Development",
        modules: [
          {
            title: "Freelancing Marketplaces",
            lessons: [
              {
                title: "Fiverr Marketplace",
                details: "Profile creation, service offerings",
              },
              {
                title: "Upwork Strategies",
                details: "Effective client acquisition",
              },
              {
                title: "LinkedIn Client Hunting",
                details: "Professional networking and lead generation",
              },
              {
                title: "Payment Solutions",
                details: "Payoneer and international transactions",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "অটোক্যাড 2D & 3D",
    slug: "auto-cad-2d-3d",
    title:
      "AutoCAD- Computer Aided Design একটি ইঞ্জিনিয়ারিং ড্রয়িং প্রোগ্রামের নাম। সহজে বললে অটোক্যাড একটি ডিজাইন ও ড্রাফটিং সফটওয়্যার।",
    description1:
      "AutoCAD- Computer Aided Design একটি ইঞ্জিনিয়ারিং ড্রয়িং প্রোগ্রামের নাম। সহজে বললে অটোক্যাড একটি ডিজাইন ও ড্রাফটিং সফটওয়্যার। AutoCAD সফটওয়্যারটি Civil ও Architecture ইঞ্জিনিয়ারদের জন্য বিল্ডিং ডিজাইনিংয়ের ক্ষেত্রে খুবই গুরুত্বপূর্ণ একটি সফটওয়্যার। এ ছাড়াও Mechanical ও Electrical ইঞ্জিনিয়ারিং এর জন্য ব্যবহৃত হয়ে থাকে।",
    description2:
      "আমাদের এই কোর্সটিতে স্টুডেন্টদের বেসিক থেকে এডভান্স লেভেল ড্রয়িং শেখানো হবে। বেসিক সফটওয়্যার ইন্সটল করা থেকে A to Z সকল টুলস এর কাজ সহ প্রজেক্ট ভিত্তিক ফ্লোর প্ল্যান, ইলিভেশন, সেকশান, ফাউন্ডেশন ও বাস্তব সাইট সুপার ভিশন এর মাধ্যমে আমাদের এই কোর্সটি সাজানো।",
    category: "it",
    image: "/courses/auto-cad.jpg",
    fee: 14500,
    discount: { type: "amount", value: 5000, endDate: "09/20/2024" },
    metorIds: [5],
    services: [
      {
        title: "কোর্সের সময়কাল ৪ মাস+",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ২ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "প্রফেশনাল ইঞ্জিনিয়ার দ্বারা ক্লাস প্রদান",
        description:
          "স্কিল ডেভেলপ করুন প্রফেশনাল/দক্ষ ইঞ্জিনিয়ারদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "প্র্যাকটিক্যাল সাইট সুপারভিশন",
        description:
          "সফটওয়্যারে কাজের পাশাপাশি ইন্জিনিয়ারের সাথে প্র্যাকটিক্যাল সাইট সুপারভিশনের সুযোগ।",
        image: "/icons/005-practice.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ক্লাস",
        description: "যারা কিছুটা দুর্বল, তাদের জন্য রয়েছে এক্সট্রা সাপোর্ট ক্লাসের ব্যবস্থা।",
        image: "/icons/unlimited-support.png",
      },
    ],
    curriculum: [
      {
        title: "Course Introduction and Software Basics",
        modules: [
          {
            title: "Course Overview",
            lessons: [
              {
                title: "Course Structure",
                details:
                  "Course advantages, disadvantages, outcomes, and student goals",
              },
              {
                title: "Technical Preparation",
                details:
                  "PC configuration guidelines, software setup for AutoCAD",
              },
              {
                title: "Communication and Feedback",
                details: "Social media connectivity, Gmail setup, Q&A session",
              },
            ],
          },
          {
            title: "AutoCAD Interface Fundamentals",
            lessons: [
              {
                title: "User Interface Navigation",
                details:
                  "Application Menu, Quick Access Toolbar, Ribbon, Working Space",
              },
              {
                title: "Basic Drawing Tools",
                details: "Line, Circle, Rectangle, Hatch tools and techniques",
              },
              {
                title: "Document Setup",
                details:
                  "Unit Setup, Dimension Setup, Text Setup (Single Line & Multiline)",
              },
              {
                title: "Selection Techniques",
                details:
                  "Window Selection, Cross Selection, Deselection methods",
              },
            ],
          },
        ],
      },
      {
        title: "Advanced Drawing and Modification Techniques",
        modules: [
          {
            title: "Comprehensive Drawing Tools",
            lessons: [
              {
                title: "Advanced Drawing Commands",
                details:
                  "Arc, Area, Align, Array, Block, Break, Construction Line, Donut, Ellipse",
              },
              {
                title: "Geometric Manipulation",
                details:
                  "Copy, Move, Rotate, Scale, Mirror, Stretch, Trim, Extend, Fillet, Chamfer",
              },
              {
                title: "Annotation and Management",
                details:
                  "Dimension Styles, Text Editing, Layer Management, Line Types, Line Weights",
              },
            ],
          },
        ],
      },
      {
        title: "Architectural Design Fundamentals",
        modules: [
          {
            title: "Layer and Drawing Preparation",
            lessons: [
              {
                title: "Layer Management",
                details:
                  "Creating, organizing, and managing layers for architectural drawings",
              },
            ],
          },
          {
            title: "Floor Plan Design",
            lessons: [
              {
                title: "Regulatory Compliance",
                details:
                  "BNBC (Bangladesh National Building Code) Standards, FAR Calculation",
              },
              {
                title: "Room Design Principles",
                details:
                  "Standard Room Dimensions, Architectural Graphical Symbols, Room Orientation",
              },
              {
                title: "Floor Plan Creation",
                details: "Drawing Templates, Design Rules, Plan Development",
              },
            ],
          },
          {
            title: "Comprehensive Architectural Drawings",
            lessons: [
              {
                title: "Ground and Roof Floor Plans",
                details: "Creating detailed ground floor and roof floor plans",
              },
              {
                title: "Architectural Elevations",
                details: "Designing and drafting four building elevations",
              },
              {
                title: "Architectural Sections",
                details:
                  "Creating cross-sectional views and understanding section concepts",
              },
              {
                title: "Working Drawings",
                details:
                  "Dimensioning, Window & Door Scheduling, Slab Layout Plans",
              },
            ],
          },
          {
            title: "Detailed Architectural Drawings",
            lessons: [
              {
                title: "Space-Specific Detailing",
                details: "Detailed drawings for Toilet, Kitchen, Stair Designs",
              },
              {
                title: "Additional Architectural Details",
                details:
                  "Detailing for Doors, Windows, Grills, Gardens, Verandas",
              },
            ],
          },
        ],
      },
      {
        title: "Structural Design Drawings",
        modules: [
          {
            title: "Structural Drawing Fundamentals",
            lessons: [
              {
                title: "Structural Codes and Standards",
                details:
                  "ACI (American Concrete Institute) and BNBC Structural Codes",
              },
            ],
          },
          {
            title: "Column and Foundation Drawings",
            lessons: [
              {
                title: "Column Layout",
                details: "Grid Placement, Column Marking, Dimensioning",
              },
              {
                title: "Column Scheduling",
                details: "Preparing comprehensive column schedules",
              },
              {
                title: "Footing Design",
                details: "Footing Layout, Dimensioning, Footing Schedules",
              },
            ],
          },
          {
            title: "Beam and Slab Detailing",
            lessons: [
              {
                title: "Beam Layout",
                details: "Beam Marking, Dimensioning, Long and Short Sections",
              },
              {
                title: "Slab Reinforcement",
                details: "Rebar Placement, Detailing, Reinforcement Rules",
              },
            ],
          },
          {
            title: "Advanced Structural Elements",
            lessons: [
              {
                title: "Specialized Structural Drawings",
                details:
                  "Stair Reinforcement, Shear Wall, Underground Water Reservoir (UGWR), Overhead Water Tank (OHWT)",
              },
              {
                title: "Foundation Advanced Detailing",
                details: "Pile Cap Layout, Pile Scheduling, Pile Cap Sections",
              },
            ],
          },
        ],
      },
      {
        title: "Building Services Drawings",
        modules: [
          {
            title: "Electrical Systems",
            lessons: [
              {
                title: "Electrical Layout",
                details: "Adding Electrical Symbols, Preparing Wiring Layout",
              },
              {
                title: "Single Line Diagram",
                details:
                  "Creating Comprehensive Electrical Single Line Diagrams",
              },
            ],
          },
          {
            title: "Plumbing Systems",
            lessons: [
              {
                title: "Plumbing Layout",
                details: "Adding Plumbing Symbols, Pipe Layout in Plans",
              },
              {
                title: "Plumbing Sections",
                details: "Drawing Detailed Plumbing Sections",
              },
            ],
          },
          {
            title: "Regulatory Submissions",
            lessons: [
              {
                title: "Authority Drawing Preparation",
                details:
                  "RAUJK, Pouroshova, City Corporation Sheet Preparation",
              },
              {
                title: "Survey Data Processing",
                details:
                  "Reading Survey Files, AutoCAD Input, Drawing Existing Information",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "কম্পিউটার আইটি সাপোর্ট সার্ভিসেস",
    slug: "computer-it-support-services",
    title:
      "এ কোর্সটি ইংরেজি টাইপিং, বাংলা টাইপিং সহ  Ms Word, Ms Excel, Ms Power Point,  Ms Access ও বেসিক হার্ডওয়্যার, সফটওয়্যার, নেটওয়ার্কিং, এসেম্বলিং, ডি-এসেম্বলিং ও ট্রাবলসুটিং ইত্যাদি কাজ নিয়ে গঠিত।",
    description1:
      "বর্তমান সময়ের ইন্ডাস্ট্রি ও নিয়োগ কর্তারা খুঁজছেন আইটিতে দক্ষ পেশাজীবি। আর সেই চাহিদাকে সঙ্গী করে দেশীয় ও আন্তর্জাতিক অঙ্গনে জনপ্রিয় হয়ে উঠেছে Computer IT Support কোর্সটি।",
    description2:
      "এ কোর্সটি ইংরেজি টাইপিং, বাংলা টাইপিং সহ  Ms Word, Ms Excel, Ms Power Point,  Ms Access ও বেসিক হার্ডওয়্যার, সফটওয়্যার, নেটওয়ার্কিং, এসেম্বলিং, ডি-এসেম্বলিং ও ট্রাবলসুটিং ইত্যাদি কাজ নিয়ে গঠিত।",
    category: "it",
    image: "/courses/it-support.jpg",
    fee: 10500,
    discount: { type: "amount", value: 2000, endDate: "09/20/2024" },
    metorIds: [1, 2],
    services: [
      {
        title: "কোর্সের সময়কাল ৬ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ১.৫ ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "সরকারি সার্টিফিকেট অর্জন",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে সরকারি সার্টিফিকেট অর্জনের সুযোগ, যা দেশ-বিদেশে অধিক গ্রহনযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ক্লাস",
        description: "যারা কিছুটা দুর্বল, তাদের জন্য রয়েছে এক্সট্রা সাপোর্ট ক্লাসের ব্যবস্থা।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
  {
    id: 4,
    name: "কম্পিউটার অফিস অ্যাপ্লিকেশন",
    slug: "computer-office-application",
    title:
      "এ কোর্সটি ইংরেজি টাইপিং, বাংলা টাইপিং সহ  Ms Word, Ms Excel, Ms Power Point,  Ms Access ও বেসিক হার্ডওয়্যার, সফটওয়্যারের কাজ নিয়ে গঠিত।",
    description1:
      "কম্পিউটার অফিস প্রোগ্রাম হল একটি সর্বজনিন কোর্স। অফিস-আদালত শিক্ষা প্রতিষ্ঠান, হাসপাতাল সহ সবধরনের প্রতিষ্ঠান দৈনন্দিন কাজে কম্পিউটার লিখা-লিখি, হিসাব-নিকাশ, ডাটা এন্ট্রি ও অনলাইন কাজের জন্য এ কোর্সের স্কীল থাকা আবশ্যক।",
    description2:
      "এ কোর্সটি ইংরেজি টাইপিং, বাংলা টাইপিং সহ  Ms Word, Ms Excel, Ms Power Point,  Ms Access ও বেসিক হার্ডওয়্যার, সফটওয়্যারের কাজ নিয়ে গঠিত।",
    category: "it",
    image: "/courses/office-application.jpg",
    fee: 7500,
    discount: { type: "amount", value: 2000, endDate: "09/20/2024" },
    metorIds: [3, 2],
    services: [
      {
        title: "কোর্সের সময়কাল ৩/৬ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ১.৫-২ ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "সরকারি সার্টিফিকেট অর্জন",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে সরকারি সার্টিফিকেট অর্জনের সুযোগ, যা দেশ-বিদেশে অধিক গ্রহনযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ও ল্যাব প্র্যাক্টিস",
        description:
          "দুর্বল শিক্ষার্থীদের জন্য অতিরিক্ত সাপোর্ট ক্লাস এবং ক্লাস টাইম ছাড়াও ল্যাবে প্র্যাক্টিসের সুযোগ।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
  {
    id: 6,
    name: "নেটওয়ার্কিং (CCNA, MTCNA)",
    slug: "networking-ccna-mtcna",
    title:
      "বেসিক নেটওয়ার্কিং থেকে শুরু করে Routing Protocol, Switching Protocol, সহ Server Mantainace এর বেশ কিছু প্রটোকল নিয়ে এ কোর্সটি সাজানো হয়েছে।",
    description1:
      "যারা নেটওয়ার্কিং সম্পর্কে জানতে আগ্রহী বা নেটওয়ার্কিং কে পেশা হিসেবে নিতে চান তাদের জন্য নেটওয়ার্কিং শিক্ষার শুরু হতে পারে CCNA কোর্সটি দিয়ে। নেটওয়ার্কিং বিষয়ক যতধরনের কোর্স বর্তমানে প্রচলিত রয়েছে তার মধ্যে Cisco Certified Networking কোর্সগুলো হচ্ছে পূর্বের সকল কোর্সের চেয়ে চাহিদা সম্পন্ন। এর কোর্স কারিকুলাম অত্যন্ত আধুনিক ও সময়োপযোগী।",
    description2:
      "বেসিক নেটওয়ার্কিং থেকে শুরু করে Routing Protocol, Switching Protocol, সহ Server Mantainace এর বেশ কিছু প্রটোকল নিয়ে এ কোর্সটি সাজানো হয়েছে।",
    category: "it",
    image: "/courses/networking.jpg",
    fee: 12500,
    discount: { type: "amount", value: 4000, endDate: "09/20/2024" },
    metorIds: [1],
    services: [
      {
        title: "কোর্সের সময়কাল ৪ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ২ দিন ক্লাস",
        description:
          "সপ্তাহে ২দিন প্রতিটি ক্লাস ২ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "কোর্স শেষে থাকছে দক্ষতার সার্টিফিকেট",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে দক্ষতার সার্টিফিকেট অর্জনের সুযোগ, যা দেশ-বিদেশে অধিক গ্রহনযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ক্লাস",
        description: "যারা কিছুটা দুর্বল, তাদের জন্য রয়েছে এক্সট্রা সাপোর্ট ক্লাসের ব্যবস্থা।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
  {
    id: 7,
    name: "ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট",
    slug: "web-design-and-development",
    title:
      "এই কোর্সটিতে HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, PHP, Laravel, MySQL ব্যাসিক টু এডভান্স শেখানো হবে এবং প্রফেশনাল কিছু ওয়েব সাইট তৈরি করার মাধ্যমে কোর্সটি সম্পন্ন করা হবে।",
    description1:
      "বর্তমানে বিশ্বে ওয়েব ডিজাইন ও ডেভলপমেন্টের চাহিদা দিন দিন বেড়েই চলছে। বর্তমানে যেকোনো কোম্পানি তার ব্যবসার ব্র্যান্ড ভ্যালু বৃদ্ধি, ব্র্যান্ড ইম্প্রেশন তৈরি করার জন্য এবং মার্কেটিং এর বিভিন্ন খাতে অযথা ব্যয় কমিয়ে ওয়েব সাইট ডেভালপমেন্টকে বেছে নিচ্ছে। বাংলাদেশে অনেক দক্ষ ওয়েব ডিজাইনার আছেন যারা ঘরে বসে মাসে লাখ টাকার উপরে ইনকাম করছেন। যার ফলে দিন দিন ওয়েব ডিজাইন & ডেভলপমেন্টের কাজের চাহিদাও বাড়ছে।",
    description2:
      "এই কোর্সটিতে HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, PHP, Laravel, MySQL ব্যাসিক টু এডভান্স শেখানো হবে এবং প্রফেশনাল কিছু ওয়েব সাইট তৈরি করার মাধ্যমে কোর্সটি সম্পন্ন করা হবে।",
    category: "it",
    image: "/courses/web-design-new.jpg",
    fee: 12500,
    discount: { type: "amount", value: 4000, endDate: "09/20/2024" },
    metorIds: [6],
    services: [
      {
        title: "কোর্সের সময়কাল ৬ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ২ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "সরকারি সার্টিফিকেট অর্জন",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে সরকারি সার্টিফিকেট অর্জনের সুযোগ, যা দেশ-বিদেশে অধিক গ্রহনযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ক্লাস",
        description: "যারা কিছুটা দুর্বল, তাদের জন্য রয়েছে এক্সট্রা সাপোর্ট ক্লাসের ব্যবস্থা।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
  {
    id: 8,
    name: "স্পোকেন ইংলিশ",
    slug: "spoken-english",
    title:
      "ইংরেজিতে সাবলীলভাবে কথা বলতে পারা এই যুগে একটি গুরুত্বপূর্ণ দক্ষতা ও স্মার্টনেস। স্পোকেন ইংলিশ স্কিল থাকলে জীবনের প্রতিটি পর্যায়েই এগিয়ে থাকা যায়। পড়াশোনা, ক্যারিয়ার, প্রতিযোগিতামূলক পরীক্ষা, বিদেশে উচ্চশিক্ষা, এমনকি বিদেশ ভ্রমণের ক্ষেত্রে ও ইংরেজি বলার বা ইংরেজির সঠিক উচ্চারণের দক্ষতা অর্জন বেশ জরুরি।",
    description1:
      "ইংরেজিতে সাবলীলভাবে কথা বলতে পারা এই যুগে একটি গুরুত্বপূর্ণ দক্ষতা ও স্মার্টনেস। স্পোকেন ইংলিশ স্কিল থাকলে জীবনের প্রতিটি পর্যায়েই এগিয়ে থাকা যায়। পড়াশোনা, ক্যারিয়ার, প্রতিযোগিতামূলক পরীক্ষা, বিদেশে উচ্চশিক্ষা, এমনকি বিদেশ ভ্রমণের ক্ষেত্রে ও ইংরেজি বলার বা ইংরেজির সঠিক উচ্চারণের দক্ষতা অর্জন বেশ জরুরি।",
    description2:
      "Spoken English কোর্সের নাম শুনলেই আমরা অনেকেই ভয় পাই। সুনির্দিষ্ট কৌশল ও যুগোপযোগী টিচিং মেথড প্রয়োগের কারণে একজন শিক্ষার্থী খুব দূর্বল হলেও স্বল্প সময়ে সবল হওয়া সম্ভব যদি নিয়মিত ক্লাস করে। সেই লক্ষ্যে আয়োজন করেছি ইংরেজি শেখার সময়োপযোগী কোর্স Spoken English ।",
    description3:
      "আমাদের এই কোর্সটিতে পাচ্ছেন Speaking, Writing, Phonetics, Presentation & Basic Grammar. ",
    category: "language",
    image: "/courses/spoken-english.jpg",
    fee: 6500,
    discount: { type: "percentage", value: 50, endDate: "09/20/2024" },
    metorIds: [7],
    services: [
      {
        title: "কোর্সের সময়কাল ৩ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ১.৫ ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "আউটডোর ক্লাস ও মূল্যায়ন পরীক্ষা",
        description: "থাকছে আউটডোর ক্লাসের সুযোগ ও ২টি মূল্যায়ন পরীক্ষা।",
        image: "/icons/special-class.png",
      },
      {
        title: "আধুনিক ও স্ট্যান্ডার্ড কোর্স ক্যারিকুলাম",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আধুনিক ও স্ট্যান্ডার্ড ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "ল্যাঙ্গুয়েজ ক্লাব সুবিধা",
        description: "ল্যাঙ্গুয়েজ ক্লাবে স্টুডেন্টরা আনলিমিটেড প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/club.png",
      },
    ],
  },
  {
    id: 9,
    name: "অ্যারাবিক ল্যাঙ্গুয়েজ",
    slug: "arabic-language",
    title:
      "এ কোর্সের মাধ্যমে প্রচলিত আরবি শব্দভান্ডার, বেসিক ছরফ, বেসিক নাহু, বহুল পাঠিত কোরআনের ছোট সূরা গুলোর শাব্দিক বঙ্গানুবাদ, ছোট-বড় বাক্য গঠন সহ যেকোন পরিবেশে আরবি ভাষায় প্রেজেন্টেশনের দক্ষতা তৈরী হবে। ইনশাআল্লাহ।",
    description1:
      "বর্তমান বিশ্বে প্রচলিত ভাষাগুলোর মধ্যে আরবি ভাষার অবস্থান চতুর্থ নম্বরে। পৃথিবীব্যাপী প্রায় ৪৫ কোটি মানুষ আরবি ভাষায় কথা বলে, যার মধ্যে প্রধানত সৌদি আরব ও মধ্যপ্রাচ্যের দেশগুলো উল্লেখযোগ্য। গোটা পৃথিবীতে বর্তমানে ২২টি দেশের রাষ্ট্রভাষা আরবি। এ ছাড়া অন্য মুসলিম দেশগুলোতেও আরবি ভাষার ব্যবহার দিনদিন বাড়ছে। আধুনিক বিশ্বে আরবি ভাষা শিক্ষার কারণ হল আরবদের সাথে বিশ্বব্যাপী যোগাযোগ করা। তার সাথে আরবি আমাদের ধর্মীয় ভাষা। ",
    description2:
      "এ কোর্সের মাধ্যমে প্রচলিত আরবি শব্দভান্ডার, বেসিক ছরফ, বেসিক নাহু, বহুল পাঠিত কোরআনের ছোট সূরা গুলোর শাব্দিক বঙ্গানুবাদ, ছোট-বড় বাক্য গঠন সহ যেকোন পরিবেশে আরবি ভাষায় প্রেজেন্টেশনের দক্ষতা তৈরী হবে। ইনশাআল্লাহ।",
    description3:
      "আমাদের এই কোর্সটি একদম জিরো থেকে শুরু হবে, তাই যেকোন শ্রেণী পেশার শিক্ষার্থী অংশগ্রহণ করতে পারবেন।",
    category: "language",
    image: "/courses/arabic.jpg",
    fee: 9500,
    discount: { type: "percentage", value: 50, endDate: "09/20/2024" },
    metorIds: [10],
    services: [
      {
        title: "কোর্সের সময়কাল ৪ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ২ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "কোর্স শেষে থাকছে দক্ষতার সার্টিফিকেট",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে ভাষা দক্ষতার সার্টিফিকেট অর্জনের সুযোগ, যা দেশ-বিদেশে অধিক গ্রহনযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "আধুনিক ও স্ট্যান্ডার্ড কোর্স ক্যারিকুলাম",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আধুনিক ও স্ট্যান্ডার্ড ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "ল্যাঙ্গুয়েজ ক্লাব সুবিধা",
        description: "ল্যাঙ্গুয়েজ ক্লাবে স্টুডেন্টরা আনলিমিটেড প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/club.png",
      },
    ],
  },
  {
    id: 10,
    name: "কোরিয়ান ল্যাঙ্গুয়েজ",
    slug: "korean-language",
    title:
      "বাংলাদেশিদের কোরিয়ান ভাষা শিখার প্রধান কারন হচ্ছে কোরিয়াতে গিয়ে চাকরি করা অথবা পড়াশুনা করা। প্রযুক্তির দিক থেকে যে দেশ গুলো পৃথিবীতে শীর্ষে তার মধ্যে কোরিয়া অন্যতম। কোরিয়া হচ্ছে প্রযুক্তিগত দিক দিয়ে পুরো বিশ্বের গুরু। সেক্ষেত্রে কোরিয়ান ভাষা শিখে খুব সহজেই কোরিয়াতে গিয়ে আপনি পড়াশোনা এবং ভালো বেতনে চাকরি করতে পারবেন।",
    description1:
      "বাংলাদেশিদের কোরিয়ান ভাষা শিখার প্রধান কারন হচ্ছে কোরিয়াতে গিয়ে চাকরি করা অথবা পড়াশুনা করা। প্রযুক্তির দিক থেকে যে দেশ গুলো পৃথিবীতে শীর্ষে তার মধ্যে কোরিয়া অন্যতম। কোরিয়া হচ্ছে প্রযুক্তিগত দিক দিয়ে পুরো বিশ্বের গুরু। সেক্ষেত্রে কোরিয়ান ভাষা শিখে খুব সহজেই কোরিয়াতে গিয়ে আপনি পড়াশোনা এবং ভালো বেতনে চাকরি করতে পারবেন।",
    description2: "",
    category: "language",
    image: "/courses/korean-language.jpg",
    fee: 15000,
    discount: { type: "amount", value: 5000, endDate: "09/20/2024" },
    metorIds: [8],
    services: [
      {
        title: "কোর্সের সময়কাল ৪ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩-৫ দিন ক্লাস",
        description:
          "প্রতিটি ক্লাস সপ্তাহে ৩-৫দিন ২ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "ল্যাঙ্গুয়েজ ক্লাব সুবিধা",
        description: "ল্যাঙ্গুয়েজ ক্লাবে স্টুডেন্টরা আনলিমিটেড প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/club.png",
      },
      {
        title: "কোর্স শেষে থাকছে দক্ষতার সার্টিফিকেট",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে ভাষা দক্ষতার সার্টিফিকেট অর্জনের সুযোগ, যা দেশ-বিদেশে অধিক গ্রহনযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "আধুনিক ও স্ট্যান্ডার্ড কোর্স ক্যারিকুলাম",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আধুনিক ও স্ট্যান্ডার্ড ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "দক্ষিণ কোরিয়াতে ১০বছরের অভিজ্ঞতা সম্পন্ন ইপিএস কর্মী ও শিক্ষক দারা ক্লাস পরিচালনা।",
        image: "/icons/industry-expert.png",
      },
    ],
  },
  {
    id: 11,
    name: "জাপানিজ ল্যাঙ্গুয়েজ",
    slug: "japanese-language",
    title:
      "মুন আইটি’তে জাপানিজ ভাষার দুটি কোর্স N5/N4 চলমান রয়েছে। একবারে হিরাগানা, কাতাগানা বর্ণমালা থেকে শুরু করে  সহজ ও সাবলিল ভাবে বাংলা ভাষার মাধ্যমে জাপানিজ ভাষা ও জাপানিজ সংস্কৃতি শিখোনো হয়।",
    description1:
      "জাপান একটি চিত্তাকর্ষক দেশ, যা সারা বিশ্ব থেকে অনেক ছাত্র, কর্মজীবী ও পর্যটকদের স্বাগত জানায়। যারা কাজ বা লেখাপড়ার সূত্রে জাপানে থাকার পরিকল্পনা করছেন, তাঁদের জন্য জাপানিজ ভাষা শেখা অনেকটা বাধ্যতামূলক। জাপানে স্টুডেন্ট ভিসা বা ওয়ার্ক ভিসার জন্য আবেদনের প্রাথমিক যোগ্যতা হচ্ছে জাপানিজ ভাষা জানা।",
    description2:
      "মুন আইটি’তে জাপানিজ ভাষার দুটি কোর্স N5/N4 চলমান রয়েছে। একবারে হিরাগানা, কাতাগানা বর্ণমালা থেকে শুরু করে  সহজ ও সাবলিল ভাবে বাংলা ভাষার মাধ্যমে জাপানিজ ভাষা ও জাপানিজ সংস্কৃতি শিখানো হবে এই কোর্সটিতে।",
    description3:
      "ফেনী জেলা শহরের মধ্যে আমরাই সর্ব প্রথম  জাপানিজ ভাষা শিখানোর পাশাপাশি অত্যান্ত দক্ষতার সাথে Student's visa & work visa প্রসেসিং করছি। বিস্তারিত জানতে চলে আসুন আমাদের অফিসে এবং সরাসরি কথা বলুন আমাদের Expert দের সাথে।",
    category: "language",
    image: "/courses/japanese-language.jpg",
    fee: 20000,
    discount: { type: "amount", value: 5000, endDate: "09/20/2024" },
    metorIds: [9],
    services: [
      {
        title: "কোর্সের সময়কাল ৪-৬ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ২ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "জাপানিজ ভিসা প্রসেসিংয়ে সর্বোচ্চ সহযোগিতা",
        description:
          "পরিপূর্ণভাবে কোর্স সম্পন্নকারী প্রশিক্ষণার্থীদের জাপানিজ ভিসা প্রসেসিংয়ে সর্বোচ্চ সহযোগিতা প্রদান করা হবে।",
        image: "/icons/nirborjoggo-institute.png",
      },
      {
        title: "ল্যাঙ্গুয়েজ ক্লাব সুবিধা",
        description: "ল্যাঙ্গুয়েজ ক্লাবে স্টুডেন্টরা আনলিমিটেড প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/club.png",
      },
      {
        title: "আধুনিক ও স্ট্যান্ডার্ড কোর্স ক্যারিকুলাম",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আধুনিক ও স্ট্যান্ডার্ড ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "JLPT/NAT পরীক্ষা পাশের টিপস এন্ড ট্রিক্স",
        description:
          "JLPT/NAT পরীক্ষায় সফল হতে প্রয়োজনীয় টিপস ও কৌশল শিখুন এবং আপনার প্রস্তুতি আরও শক্তিশালী করুন।",
        image: "/icons/it.png",
      },
      {
        title: "জব/স্কাইপি ইন্টারভিউ স্পেশাল ক্লাস",
        description:
          "জব এবং স্কাইপি ইন্টারভিউয়ের জন্য বিশেষ প্রস্তুতি ক্লাস, যেখানে রিয়েল-টাইম প্রাকটিসের সুযোগ থাকবে।",
        image: "/icons/special-class.png",
      },
      {
        title: "ফ্রি মক টেস্ট সুবিধা",
        description:
          "পরীক্ষার আগে নিজেকে যাচাই করতে ফ্রি মক টেস্টের সুবিধা নিন এবং আত্মবিশ্বাস বাড়ান।",
        image: "/icons/meeting.png",
      },
    ],
  },
  {
    id: 20,
    name: "জার্মান ল্যাঙ্গুয়েজ",
    slug: "german-language",
    title:
      "মুন আইটি’তে জার্মান ভাষার তিনটি কোর্স A1/ A2/ B1 চলমান রয়েছে। একদম বেসিক থেকে শুরু করে  সহজ ও সাবলিল ভাবে বাংলা ভাষার মাধ্যমে জার্মান ভাষা শিখতে পারবেন এই কোর্সটিতে।",
    description1:
      "মুন আইটি’তে জার্মান ভাষার তিনটি কোর্স A1/ A2/ B1 চলমান রয়েছে। একদম বেসিক থেকে শুরু করে  সহজ ও সাবলিল ভাবে বাংলা ভাষার মাধ্যমে জার্মান ভাষা শিখতে পারবেন এই কোর্সটিতে।",
    description2:
      "জার্মানিতে বসবাস বা চাকুরির জন্য জার্মান ভাষ খুবই গুরুত্বপূর্ণ। স্টুডেন্ট ভিসা, জব ভিসা, আউসবিল্ডুং ভিসা, জব সার্চিং ভিসা, ফ্যামিলি ভিসা যেভাবেই আমরা জার্মানিতে যাইনা কেনো আমাদের জার্মান ভাষা জানাই হচ্ছে প্রথম শর্ত।",
    description3:
      "IELTS করা স্টুডেন্ট ভিসার প্রার্থীদেরও জার্মানিতে জব প্রায়োরিটির জন্য জার্মান ভাষা খুবই গুরুত্বপূর্ণ।",
    category: "language",
    image: "/courses/german-language.jpg",
    fee: 0,
    discount: null,
    metorIds: [13],
    services: [
      {
        title: "প্রতি লেভেল ৩-৪ মাসে সম্পন্ন হবে।",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ২ দিন অফলাইন ক্লাস",
        description: "এছাড়াও সপ্তাহে ১/২দিন থাকবে অনলাইন সাপোর্ট ক্লাস।",
        image: "/icons/timetable.png",
      },
      {
        title: "জার্মান ভিসা প্রসেসিংয়ে সর্বোচ্চ সহযোগিতা",
        description:
          "পরিপূর্ণভাবে কোর্স সম্পন্নকারী প্রশিক্ষণার্থীদের জার্মান ভিসা প্রসেসিংয়ে সর্বোচ্চ সহযোগিতা প্রদান করা হবে।",
        image: "/icons/nirborjoggo-institute.png",
      },
      {
        title: "ল্যাঙ্গুয়েজ ক্লাব সুবিধা",
        description: "ল্যাঙ্গুয়েজ ক্লাবে স্টুডেন্টরা আনলিমিটেড প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/club.png",
      },
      {
        title: "স্ট্যান্ডার্ড কোর্স ক্যারিকুলাম ও মক টেস্ট",
        description:
          "Netzwerk neu বইয়ের আলোকে কোর্স সম্পন্ন করা হবে এবং Goethe Institut-এর অনুরূপ ২টি মক টেস্টের সুযোগ থাকবে।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "অভিজ্ঞ জার্মান ভাষা প্রশিক্ষক",
        description:
          "জার্মানে ১৫ বছর বসবাস ও শিক্ষাগ্রহণ করা প্রশিক্ষকের কাছ থেকে শেখার সুযোগ।",
        image: "/icons/industry-expert.png",
      },
    ],
  },
  {
    id: 21,
    name: "ইতালিয়ান ল্যাঙ্গুয়েজ",
    slug: "italian-language",
    title: "আমরা ফেনীতে এই প্রথম মুন আইটি'তে নিয়ে এসেছি ইতালিয়ান ভাষা কোর্সটি",
    description1: "আমরা ফেনীতে এই প্রথম মুন আইটি'তে নিয়ে এসেছি ইতালিয়ান ভাষা কোর্সটি।",
    description2:
      "১৮ বছর ইতালিতে থাকার ও ইতালিয়ান স্কুলে পড়ানোর অভিজ্ঞতা সম্পন্ন শিক্ষকের কাছে শিখুন ইতালিয়ান ভাষা এবং সাথে নিন সর্বোচ্চ সাপোর্ট।",
    description3: " ইতালিতে বসবাস বা চাকরির জন্য ইতালিয়ান ভাষা খুবই গুরুত্বপূর্ণ।",
    category: "language",
    image: "/courses/italian-language.jpeg",
    fee: 0,
    discount: null,
    metorIds: [14],
    services: [
      {
        title: "কোর্সের সময়সীমা ২ মাস+/-",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন অফলাইন ক্লাস",
        description: "সপ্তাহে ১/২দিন থাকবে অনলাইন সাপোর্ট ক্লাস।",
        image: "/icons/timetable.png",
      },
      {
        title: "ইতালিয়ান ভিসা প্রসেসিংয়ে সর্বোচ্চ সহযোগিতা",
        description:
          "পরিপূর্ণভাবে কোর্স সম্পন্নকারী প্রশিক্ষণার্থীদের ইতালিয়ান ভিসা প্রসেসিংয়ে সর্বোচ্চ সহযোগিতা প্রদান করা হবে।",
        image: "/icons/nirborjoggo-institute.png",
      },
      {
        title: "ল্যাঙ্গুয়েজ ক্লাব সুবিধা",
        description: "ল্যাঙ্গুয়েজ ক্লাবে স্টুডেন্টরা আনলিমিটেড প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/club.png",
      },
      {
        title: "স্ট্যান্ডার্ড কোর্স ক্যারিকুলাম ও মক টেস্ট",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আধুনিক ও স্ট্যান্ডার্ড ক্যারিকুলাম অনুযায়ী এবং কোর্স শেষে মক টেস্টের সুযোগ থাকবে।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "অভিজ্ঞ ইতালিয়ান ভাষা প্রশিক্ষক",
        description: "অভিজ্ঞ ইতালিয়ান ভাষা প্রশিক্ষকের কাছ থেকে শেখার সুযোগ।",
        image: "/icons/industry-expert.png",
      },
    ],
  },
  {
    id: 12,
    name: "ফাইন আর্টস টেকনোলজি- চারুকলা",
    slug: "fine-arts-technical-arts",
    title:
      "আপনি যদি MPO ভুক্ত স্কুল/মাদ্রাসায় ১০ম/১১তম গ্রেডে চারু ও কারুকলা বিষয়ে সহকারী শিক্ষক হিসেবে চাকরিতে আগ্রহী হোন তাহলে ১বছর মেয়াদি এ্যাডভান্সড সার্টিফিকেট এই কোর্সটি আপনার জন্য",
    description1:
      "আপনি যদি MPO ভুক্ত স্কুল/মাদ্রাসায় ১০ম/১১তম গ্রেডে চারু ও কারুকলা বিষয়ে সহকারী শিক্ষক হিসেবে চাকরিতে আগ্রহী হোন তাহলে ১বছর মেয়াদি এ্যাডভান্সড সার্টিফিকেট এই কোর্সটি আপনার জন্য",
    description2: "ভর্তির যোগ্যতাঃ যেকোন সালে যেকোন বিষয়ে স্নাতক/ফাজিল/অনার্স/সমমান পাশ",
    category: "advanced",
    image: "/courses/fine-arts-new.jpg",
    fee: 0,
    discount: null,
    metorIds: [12],
    services: [
      {
        title: "কোর্সের সময়কাল ১ বছর",
        description:
          "BTEB এর অধীনে ১ বছরে ২ টি সেমিস্টার, প্রতি সেমিস্টার ৬ মাস করে।",
        image: "/icons/schedule.png",
      },
      {
        title: "ফ্রাইডে শিফট ক্লাস",
        description:
          "চাকুরিজীবী ও ব্যাবসায়ীদের সুবিধার্থে বন্ধের দিনে অনলাইন/অফলাইন ক্লাস সুবিধা।",
        image: "/icons/timetable.png",
      },
      {
        title: "BTEB বোর্ড কর্তৃক কোর্স ক্যারিকুলাম",
        description: "কারিগরি বোর্ড ও শিক্ষামন্ত্রনালয় কর্তৃক প্রণিত কোর্স ক্যারিকুলাম।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ইন্সট্রাক্টর",
        description:
          "দেশ সেরা বাচাইকৃত বাস্তব অভিজ্ঞতা সম্পন্ন শিক্ষকদের তত্বাবধানে ক্লাস করার ‍সুযোগ।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "BTEB সরকারি সার্টিফিকেট অর্জন",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে BTEB সরকারি সার্টিফিকেট অর্জন ও NTRC শিক্ষক নিবন্ধন পরিক্ষার মাধ্যমে MPO শিক্ষক হওয়ার সুযোগ।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "আনলিমিটেড সাপোর্ট",
        description: "অফলাইন ক্লাস ছাড়াও অনলাইনে সর্বোচ্চ সাপোর্ট ও রিসোর্স প্রদান।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
  {
    id: 13,
    name: "কম্পিউটার টেকনোলজি - ICT",
    slug: "computer-technology",
    title:
      "আপনি যদি MPO ভুক্ত স্কুল/মাদ্রাসায় ১০ম/১১তম গ্রেডে ICT বিষয়ে সহকারী শিক্ষক হিসেবে চাকরিতে আগ্রহী হোন তাহলে ১বছর মেয়াদি এ্যাডভান্সড সার্টিফিকেট এই কোর্সটি আপনার জন্য।",
    description1:
      "আপনি যদি MPO ভুক্ত স্কুল/মাদ্রাসায় ১০ম/১১তম গ্রেডে ICT বিষয়ে সহকারী শিক্ষক হিসেবে চাকরিতে আগ্রহী হোন তাহলে ১বছর মেয়াদি এ্যাডভান্সড সার্টিফিকেট এই কোর্সটি আপনার জন্য।",
    description2: "ভর্তির যোগ্যতাঃ যেকোন সালে যেকোন বিষয়ে স্নাতক/ফাজিল/অনার্স/সমমান পাশ।",
    category: "advanced",
    image: "/courses/ict-new.jpg",
    fee: 0,
    discount: null,
    metorIds: [11],
    services: [
      {
        title: "কোর্সের সময়কাল ১ বছর",
        description:
          "BTEB এর অধীনে ১ বছরে ২ টি সেমিস্টার, প্রতি সেমিস্টার ৬ মাস করে।",
        image: "/icons/schedule.png",
      },
      {
        title: "ফ্রাইডে শিফট ক্লাস",
        description:
          "চাকুরিজীবি ও ব্যাবসায়ীদের সুবিধার্থে বন্ধের দিনে অনলাইন/অফলাইন ক্লাস সুবিধা।",
        image: "/icons/timetable.png",
      },
      {
        title: "BTEB সরকারি সার্টিফিকেট অর্জন",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে BTEB সরকারি সার্টিফিকেট অর্জন ও NTRC শিক্ষক নিবন্ধন পরিক্ষার মাধ্যমে MPO শিক্ষক হওয়ার সুযোগ।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "BTEB বোর্ড কর্তৃক কোর্স ক্যারিকুলাম",
        description: "কারিগরি বোর্ড ও শিক্ষামন্ত্রনালয় কর্তৃক প্রণিত কোর্স ক্যারিকুলাম।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ইন্সট্রাক্টর",
        description:
          "দেশ সেরা বাচাইকৃত বাস্তব অভিজ্ঞতা সম্পন্ন শিক্ষকদের তত্বাবধানে ক্লাস করার ‍সুযোগ।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "আনলিমিটেড সাপোর্ট",
        description: "অফলাইন ক্লাস ছাড়াও অনলাইনে সর্বোচ্চ সাপোর্ট ও রিসোর্স প্রদান।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
  {
    id: 14,
    name: "কম্পিউটার সায়েন্স টেকনোলজি",
    slug: "computer-science-technology",
    title:
      "এ কোর্সে মূলত, Computer Science, Civil, Architecture ও Electrical ইঞ্জিনিয়ারদের একাডেমিক ক্যারিকুলাম অনুযায়ী ট্রেনিং করানো হবে। ",
    description1:
      "আমাদের কোর্সটি কম্পিউটার সায়েন্স ও টেকনোলজির শিক্ষার্থীদের জন্য ডিজাইন করা হয়েছে, যেখানে তারা ইন্ডাস্ট্রি এক্সপার্টদের তত্ত্বাবধানে পছন্দের ক্যাটাগরিতে দক্ষতা অর্জন করতে পারবেন। কম্পিউটার ও আইটি সম্পর্কিত যেকোনো কোর্স এই ট্রেনিং প্রোগ্রামের আওতায় নিতে পারবেন।",
    description2:
      "Diploma বা B.Sc Engineering শিক্ষার্থীদের ৯০% কর্মজীবনে বিভিন্ন টেকনিক্যাল ইন্ডাস্ট্রিতে কাজ করেন। এসব প্রতিষ্ঠানে কাজের আগে একাডেমিক কারিকুলাম অনুযায়ী তাদের ইন্টার্নশিপ করতে হয়, যা Industrial Attachment বা Industrial Training হিসেবে পরিচিত। আমাদের প্রোগ্রাম এই বাস্তব অভিজ্ঞতা অর্জনের জন্য উপযুক্ত প্ল্যাটফর্ম সরবরাহ করবে।",
    category: "industrial",
    image: "/courses/diploma-computer.jpg",
    fee: 12000,
    discount: null,
    metorIds: [],
    services: [
      {
        title: "কোর্সের সময়কাল ৩-৪ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ১.৫ ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "Industrial Attachment সার্টিফিকেট অর্জন",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে পাবেন Industrial Attachment সার্টিফিকেট ও সরকারি বোর্ড সার্টিফিকেট গ্রহণের সুযোগ, যা কর্মক্ষেত্রে সর্বাধিক গ্রহণযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ক্লাস",
        description: "যারা কিছুটা দুর্বল, তাদের জন্য রয়েছে এক্সট্রা সাপোর্ট ক্লাসের ব্যবস্থা।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
  {
    id: 15,
    name: "ডাটা টেলিকমিউনিকেশন এন্ড নেটওয়ার্ক টেকনোলজি",
    slug: "data-telecomunication-and-networking",
    title:
      "এ কোর্সে মূলত, Computer Science, Civil, Architecture ও Electrical ইঞ্জিনিয়ারদের একাডেমিক ক্যারিকুলাম অনুযায়ী ট্রেনিং করানো হবে। ",
    description1:
      "আমাদের কোর্সটি ডাটা টেলিকমিউনিকেশন ও নেটওয়ার্ক টেকনোলজির শিক্ষার্থীদের জন্য ডিজাইন করা হয়েছে, যেখানে তারা ইন্ডাস্ট্রি এক্সপার্টদের তত্ত্বাবধানে নেটওয়ার্ক ইঞ্জিনিয়ার হিসেবে গড়ে উঠতে পারবেন। নেটওয়ার্ক বা আইটি সম্পর্কিত যেকোনো কোর্স এই ট্রেনিং প্রোগ্রামের আওতায় নিতে পারবেন।",
    description2:
      "যারা Diploma Engineering বা B.sc Engineering এ পড়েন, তাদের ৯০% ই চাকুরী ক্ষেত্রে বিভিন্ন Technical ইন্ডাস্ট্রিতে কাজ করেন, আর এই সব প্রতিষ্ঠানে কাজ করার পূর্বে তাদেরকে প্র্যাক্টিক্যাল নলেজ অর্জনের জন্য কোনো না কোনো প্রতিষ্ঠানে একাডেমিক ক্যারিকুলাম অনুযায়ী Internship করতে হয়। আর Internship এর এই Course টাকে বলা হয় Industrial Attachment বা Industrial Training.",
    category: "industrial",
    image: "/courses/diploma-data-telecomunication.jpg",
    fee: 12000,
    discount: null,
    metorIds: [],
    services: [
      {
        title: "কোর্সের সময়কাল ৩-৪ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ১.৫ ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "Industrial Attachment সার্টিফিকেট অর্জন",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে Industrial Attachment সার্টিফিকেট অর্জনের সুযোগ, যা কর্মক্ষেত্রে অধিক গ্রহনযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ক্লাস",
        description: "যারা কিছুটা দুর্বল, তাদের জন্য রয়েছে এক্সট্রা সাপোর্ট ক্লাসের ব্যবস্থা।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
  {
    id: 16,
    name: "সিভিল টেকনোলজি",
    slug: "civil-technology",
    title:
      "এ কোর্সে মূলত, Computer Science, Civil, Architecture ও Electrical ইঞ্জিনিয়ারদের একাডেমিক ক্যারিকুলাম অনুযায়ী ট্রেনিং করানো হবে। ",
    description1:
      "এই কোর্সে সিভিল টেকনোলজির শিক্ষার্থীরা ড্রয়িংয়ে দক্ষ হওয়ার পাশাপাশি বাস্তব সাইট সুপারভিশনের অভিজ্ঞতা অর্জনের সুযোগ পাবেন। AutoCAD 2D, 3D MAX, Estimate & Costing সহ যেকোনো সম্পর্কিত কোর্স এই ট্রেনিংয়ের আওতায় নিতে পারবেন।",
    description2:
      "যারা Diploma Engineering বা B.sc Engineering এ পড়েন, তাদের ৯০% ই চাকুরী ক্ষেত্রে বিভিন্ন Technical ইন্ডাস্ট্রিতে কাজ করেন, আর এই সব প্রতিষ্ঠানে কাজ করার পূর্বে তাদেরকে প্র্যাক্টিক্যাল নলেজ অর্জনের জন্য কোনো না কোনো প্রতিষ্ঠানে একাডেমিক ক্যারিকুলাম অনুযায়ী Internship করতে হয়। আর Internship এর এই Course টাকে বলা হয় Industrial Attachment বা Industrial Training.",
    category: "industrial",
    image: "/courses/diploma-civil.jpg",
    fee: 12000,
    discount: null,
    metorIds: [],
    services: [
      {
        title: "কোর্সের সময়কাল ৩-৪ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ১.৫ ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "Industrial Attachment সার্টিফিকেট অর্জন",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে পাবেন Industrial Attachment সার্টিফিকেট ও সরকারি বোর্ড সার্টিফিকেট গ্রহণের সুযোগ, যা কর্মক্ষেত্রে সর্বাধিক গ্রহণযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ক্লাস",
        description: "যারা কিছুটা দুর্বল, তাদের জন্য রয়েছে এক্সট্রা সাপোর্ট ক্লাসের ব্যবস্থা।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
  {
    id: 17,
    name: "আর্কিটেকচার এন্ড ইন্টেরিয়র টেকনোলজি",
    slug: "architectural-and-interior-technology",
    title:
      "এ কোর্সে মূলত, Computer Science, Civil, Architecture ও Electrical ইঞ্জিনিয়ারদের একাডেমিক ক্যারিকুলাম অনুযায়ী ট্রেনিং করানো হবে। ",
    description1:
      "এই কোর্সে আর্কিটেকচার ও ইন্টেরিয়র টেকনোলজির শিক্ষার্থীরা ড্রয়িংয়ে দক্ষ হওয়ার পাশাপাশি বাস্তব সাইট সুপারভিশনের অভিজ্ঞতা অর্জনের সুযোগ পাবেন। AutoCAD 2D, 3D MAX, Estimate & Costing সহ যেকোনো সম্পর্কিত কোর্স এই ট্রেনিংয়ের আওতায় নিতে পারবেন।",
    description2:
      "যারা Diploma Engineering বা B.sc Engineering এ পড়েন, তাদের ৯০% ই চাকুরী ক্ষেত্রে বিভিন্ন Technical ইন্ডাস্ট্রিতে কাজ করেন, আর এই সব প্রতিষ্ঠানে কাজ করার পূর্বে তাদেরকে প্র্যাক্টিক্যাল নলেজ অর্জনের জন্য কোনো না কোনো প্রতিষ্ঠানে একাডেমিক ক্যারিকুলাম অনুযায়ী Internship করতে হয়। আর Internship এর এই Course টাকে বলা হয় Industrial Attachment বা Industrial Training ।",
    category: "industrial",
    image: "/courses/diploma-architectire.jpg",
    fee: 12000,
    discount: null,
    metorIds: [],
    services: [
      {
        title: "কোর্সের সময়কাল ৩-৪ মাস",
        description:
          "এছাড়াও একজন স্টুডেন্ট কোর্সের সিলেবাস কমপ্লিট হওয়া পর্যন্ত প্র্যাক্টিসের সুযোগ পাবে।",
        image: "/icons/schedule.png",
      },
      {
        title: "সপ্তাহে ৩ দিন ক্লাস",
        description:
          "সপ্তাহে ৩দিন প্রতিটি ক্লাস ১.৫ ঘন্টা করে অনুষ্ঠিত হবে। এছাড়াও গ্রুপ ভিত্তিক অনলাইন সাপোর্ট থাকবে।",
        image: "/icons/timetable.png",
      },
      {
        title: "Industrial Attachment সার্টিফিকেট অর্জন",
        description:
          "সফলভাবে কোর্স সম্পন্ন করে পাবেন Industrial Attachment সার্টিফিকেট ও সরকারি বোর্ড সার্টিফিকেট গ্রহণের সুযোগ, যা কর্মক্ষেত্রে সর্বাধিক গ্রহণযোগ্য।",
        image: "/icons/bteb-certificate.png",
      },
      {
        title: "এডভান্সড কোর্স মডিউল",
        description:
          "কোর্সের সিলেবাস বেসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে আন্তর্জাতিক ক্যারিকুলাম অনুযায়ী।",
        image: "/icons/advance-course-module.png",
      },
      {
        title: "ইন্ড্রাষ্ট্রি এক্সপার্ট ট্রেইনার",
        description:
          "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন হাতে-কলমে।",
        image: "/icons/industry-expert.png",
      },
      {
        title: "দুর্বলদের জন্য এক্সট্রা সাপোর্ট ক্লাস",
        description: "যারা কিছুটা দুর্বল, তাদের জন্য রয়েছে এক্সট্রা সাপোর্ট ক্লাসের ব্যবস্থা।",
        image: "/icons/unlimited-support.png",
      },
    ],
  },
];

export default courseList;
