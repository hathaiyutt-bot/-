import { Product, Review, FaqItem, Article } from '../types';

export const OFFICIAL_IMAGES = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1WiquiMxvMorq4iXT_63f6tCX8xRLM48eEtpbr9cX62mpAnarLqWZYvQh79IVO7MNS_psnGUl9p273ODWWLxn3rmC1ENYMfHCz1yZeh8RkgMytWJXbGEpVqzOhG2ol1rQWkvALYLbf5cfhIHX-f1Za1vu5nIsjU9vHRbLy1OMHM29ZLH-5qlH13riWUeC6oCYkm0fjFQgLRo3FumfHJKi0K11YZJNLKNfm68STXe7eKR0M1v2rGECvexQ',
  mascotSticker: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDknlDSLqbasELxVDPgaTbVz6eSErok7nLppUEu-wr36mo1hVGHMV295kvLK4ASqtdVDK-ij5RasnHDQ7DW8o6SgFfUwR4al-Pc7RB-n8K6GNZBXaYO-WlBo4pBDU4U9EU52FKfB-43lOj2tqDzTrwxrwz0fDDAZVvnaaqTK4sdyJklWqLOBVoalSsaliEhnPKfdPcQ4sdL3PBlcEi8cSKsivWdUhRtWG6IecGVB7md_Qb2aqTxjpmn',
  heroPond: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSE7jXsWe0GnNDmprcLZDI4wTu1FwVZqodY7LNDIwhJwm-jKLviR9BtNtOtaWqyOIvvVjfh-HIPX_69bd4NBCLLFUm1K0h8uYyeYEHZ5gGMx2uFuO5OaIS928TqloVCAGyyMVcBaFG5Mkalnr5csfcOP59ffjCKEuPW0NPF7IgQzgIpyk3k5d0dcWulrLxPbDoCSdrHQtY8SX5YhiWbAM5w3_QRL0AzFvvid0CpAHAXPnJQ9L4B35r',
  productFerment: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgPDVFWDs1VTAp8To9z_2f1CzfxV_BLB_N7vvQ_vPHkud9hoaYIw7xC-kjbuKehTz10V_Roi1SCaGIBcvXGTFYXiME5O-NJ7qKuokdZfOZIxsmsHT9F3JpGtSj77AMJFaikdXI1kP3ywlp7gk8JWAyjgOVgz8UXWO3CETfRc9fkYDImDqOAqYnp-1VJ3xcymMjfZveZHqiRipg02NoS5jZ0xvI5JuxXuOAmhekiDtfz9FETLXUrxkC',
  productPowder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3nY0vtDSq81ncjAYJqueoLaocnuqLl3iPAhRKTG7n4HPD3sdg-ZfVO3w6dCPPQGvW_VWdRD8-b_0Ti02n7PFTEvGgm8crDv4CvJjzfXZOA5rPEM4Y550YkroDxJsSuwW6XVbnbyfGdBrssYIZqLBPX8TSerNosmjorxXpchqRllbpCM8H3qkDP9lSN3eXDLiqEZRrxROuLDqUZHG4XQjtk-RjwiUTD8isi3AiLxRyEaxtMDiWUgQZ',
  productBioBottle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4OFaOdd800CH9m6vO7_Af24EMgMKYRe-QlOeUGOD0f6fHlETW8cpoWRv6KzgJFbIJ7yefhaPGu-TuplJzNo8lcUi23FgAUzKWQavmTRmm1pg-kHMWbhv8jHALg7gs4yYoQF-UUG_JSaAshclIYB0GDs8rdUQJU33qj4t6fytMviLleY0SCHsAkRUqffsm6gc6Un4TCTD__SgzrlfcjEE3RsR625lQifdKY1cemrsIySwzMqLGIOMD',
  productStarterKit: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALF6jeEvnCanPGRGsBb5ydP83k8aFryBMJvxcvwdhZrjAgAv0b7JtcuKGza0bQa2xZoLXtjrqZvUgSDNzvMwH3Hadao5EaJNeVRv6cJUgVZsvQNbh-tUd6chvnyj-r9IypTIaCY0fb1iXcbCFxTDFEcRmRPXnL_bBh2747_46kXpp44eyzmucgc2iB6f2wFuXKhtOPYxdEQYhyHK792smWDcK9HIAcyCvIXPq_ZgTzlNFaAX-Q1hCq',
  cartItem1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-4EZv9DDzpufjp5L8AEhzIEqjYIi-4CjtGo9p3ilX3ygX-V1Naee7frgZ1tBLq_G6a0mk6nva61eFEwHRH4sHSccMrhpvsGgEnmdZz3aEf-ogm9cDdM0UsQn4jR0ltvxIaJjB7CA3XFPPDll_BsQ0cbEj5En59DwD9MWFa_Z5n5p7lvK-aBopevR4eKSlcI0rZNLWHLCjaEDAxN4NoABrrLix1taDp8XitrY_fGe8RMGHLYkImn5b',
  cartItem2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJYFcbfgairrs1RhZwhTaHfLEtbQWRHavm9C8dPCZq6KAf_lxa8YnJqQ9vaT15GeLA5T0ovgnvpHfrKrpygBdhdlaonoQ5t-OhgjLLwPv-6FAgvuxrVNb-vXvLXgbzHzhlB-M5X2kEH9NBILOADC4_JIkKqeDf8DV5JNynjoYreN-7eJMTTigi0Gy5LWUZptVcxERk5QsZcaDXtvfSolVEmepwbypdC7tJJi0bSY0lwi790Um39X4M',
  userAvatar: 'https://lh3.googleusercontent.com/aida/AEtjO1VRNvyBY37EnzyfDpQryTQCZMwejQ1bdVGouA_OrPcLQHRvxalRmXZ7qNQVeJ-4k8-81qwk2JjD3gncDNvmgiUb6fmm0uxNT2ym8PAsF5dNPozKn2QyI2MoQFYegRZ5G_pTtcQkGm7Geog47--Q-tgsd-FiygEhvn6BVNyqjdj1ixBjbut5D88h2226znx4SaLtBhovNgLNobMKF7W48oft3GE4g4a9iXKM76A3ErForBKMvZILk6mfKw',
};

export const PRODUCTS: Product[] = [
  {
    id: 'prod-ferment',
    name: 'น้ำหมักผสมอาหารกุ้ง (สูตรเข้มข้น)',
    subtitle: 'สูตรเข้มข้นพิเศษสำหรับคลุกอาหารกุ้ง กลิ่นหอมเย้ายวน กุ้งกินเก่ง',
    category: 'ferment',
    categoryLabel: 'น้ำหมักผสมอาหาร',
    price: 590,
    originalPrice: 650,
    size: 'แกลลอน 5 ลิตร',
    unit: 'แกลลอน',
    badge: 'สินค้าขายดี',
    badgeColor: 'primary',
    image: OFFICIAL_IMAGES.productFerment,
    alt: 'แกลลอนน้ำหมักผสมอาหารกุ้ง สูตรเข้มข้น 5 ลิตร กุ้งน้อยโปรไบโอติก',
    description: 'สูตรเข้มข้นมาตรฐานเพื่อการจัดการฟาร์ม บรรจุแกลลอนพร้อมใช้งานทันที ช่วยเคลือบเม็ดอาหารกุ้งให้คงทนในน้ำได้นาน ลดการสูญเสียสารอาหาร พร้อมเสริมสารชีวภาพและจุลินทรีย์ที่ช่วยระบบย่อยในตัวกุ้ง',
    mixingRatio: '20-30 มล. ต่อน้ำสะอาด 100 มล. ต่ออาหารกุ้ง 1-2 กิโลกรัม คลุกเคล้าแล้วผึ่งลม 15 นาที',
    features: [
      'เคลือบอาหารเม็ดได้แน่นหนา ไม่ละลายทลายตัวในน้ำง่าย',
      'ช่วยกระตุ้นการกินอาหารของกุ้งในทุกช่วงวัย',
      'ลดปริมาณอาหารเหลือตกค้างพื้นบ่อ ป้องกันน้ำเน่าเสีย',
      'ผลิตจากวัตถุดิบชีวภาพธรรมชาติ 100% ปลอดภัยต่อผู้ใช้'
    ]
  },
  {
    id: 'prod-powder',
    name: 'โปรไบโอติกชนิดผงสำหรับบ่อกุ้ง',
    subtitle: 'สปอร์จุลินทรีย์บริสุทธิ์ สำหรับบำบัดน้ำและย่อยสลายของเสียก้นบ่อ',
    category: 'powder',
    categoryLabel: 'โปรไบโอติก',
    price: 850,
    originalPrice: 950,
    size: 'ซองฟอยล์ 1 กก. (กล่องบรรจุ 10 ซอง)',
    unit: 'ซอง',
    badge: 'สูตรยอดนิยม',
    badgeColor: 'secondary',
    image: OFFICIAL_IMAGES.productPowder,
    alt: 'ซองฟอยล์โปรไบโอติกชนิดผงสำหรับบ่อกุ้ง กุ้งน้อยโปรไบโอติก',
    description: 'สปอร์จุลินทรีย์บาซิลลัสบริสุทธิ์ชนิดแห้ง ทนความร้อนสูง ช่วยดูแลสิ่งแวดล้อมพื้นบ่อ ย่อยสลายขี้กุ้งและเศษซากแพลงก์ตอน ควบคุมแอมโมเนียและไนไตรท์ในน้ำได้อย่างมีประสิทธิภาพ',
    mixingRatio: '50-100 กรัม ต่อบ่อ 1 ไร่ (สัปดาห์ละ 1-2 ครั้ง ขึ้นอยู่กับความหนาแน่นกุ้ง)',
    features: [
      'ความเข้มข้นสปอร์สูงกว่า 1x10^9 CFU ต่อกรัม',
      'ย่อยสลายเลนและแก๊สไข่เน่า (H2S) พื้นบ่อได้รวดเร็ว',
      'ปรับน้ำโปร่ง สีน้ำคงที่ ค่า pH สมดุล ไม่แกว่ง',
      'สามารถนำไปขยายเชื้อด้วยกากน้ำตาลต่อได้'
    ]
  },
  {
    id: 'prod-bio',
    name: 'ผลิตภัณฑ์บำรุงและปรับสภาพทางชีวภาพ',
    subtitle: 'สารชีวภาพบำรุงทางเดินอาหารและเพิ่มภูมิคุ้มกันตามธรรมชาติ',
    category: 'bio',
    categoryLabel: 'น้ำหมักผสมอาหาร',
    price: 420,
    originalPrice: 480,
    size: 'ขวด 1,000 มล.',
    unit: 'ขวด',
    badge: 'สูตรฟาร์ม',
    badgeColor: 'tertiary',
    image: OFFICIAL_IMAGES.productBioBottle,
    alt: 'ขวดสารชีวภาพบำรุงทางเดินอาหารกุ้ง 1000 มล.',
    description: 'สารสกัดเอนไซม์ธรรมชาติและเปปไทด์ชีวภาพ ช่วยส่งเสริมสุขภาพทางเดินอาหาร ลำไส้แน่น ตับโตสีน้ำตาลเข้ม สุขภาพกุ้งสมบูรณ์พร้อมลอกคราบสม่ำเสมอ',
    mixingRatio: '10-15 มล. ต่ออาหารกุ้ง 1 กก. คลุกให้ทั่วก่อนให้กุ้งกินวันละ 2 มื้อ',
    features: [
      'เสริมสารอาหารจำเป็นต่อการสร้างเปลือกและการเจริญเติบโต',
      'ลำไส้เต็ม ไม่ขาดตอน กุ้งกระปรี้กระเปร่า',
      'เพิ่มอัตรารอดและลดความเครียดช่วงสภาพอากาศเปลี่ยนแปลง',
      'ใช้งานได้ทั้งกุ้งขาวแวนนาไมและกุ้งกุลาดำ'
    ]
  },
  {
    id: 'prod-starter',
    name: 'ชุดทดลองสำหรับฟาร์ม (Starter Kit)',
    subtitle: 'ครบชุดประหยัด น้ำหมัก 5 ลิตร + ผงโปรไบโอติก 1 กก. พร้อมคู่มือ',
    category: 'starter',
    categoryLabel: 'ชุดทดลองสำหรับฟาร์ม',
    price: 790,
    originalPrice: 1040,
    size: 'ชุดทดลอง 1 เซ็ต (ประหยัด ฿250)',
    unit: 'เซ็ต',
    badge: 'คุ้มค่าสำหรับทดลอง',
    badgeColor: 'orange',
    image: OFFICIAL_IMAGES.productStarterKit,
    alt: 'ชุดทดลองสำหรับฟาร์มกุ้ง Starter Kit กุ้งน้อยโปรไบโอติก',
    description: 'เหมาะสำหรับฟาร์มที่ต้องการทดลองใช้ในบ่อเดี่ยว หรือเริ่มรอบการเลี้ยงใหม่ ประกอบด้วยน้ำหมักเข้มข้น 5 ลิตร 1 แกลลอน + ผงโปรไบโอติก 1 ซอง พร้อมตารางแนะนำการคลุกอาหารตลอดลูปการเลี้ยง',
    mixingRatio: 'ปฏิบัติตามสมุดคู่มือการใช้ที่แนบไปในกล่องพัสดุ',
    features: [
      'ครบสูตรทั้งดูแลทางเดินอาหารและคุณภาพน้ำในเซ็ตเดียว',
      'เหมาะสำหรับบ่อขนาด 1-2 ไร่ ทดลองได้ 1-2 สัปดาห์',
      'มีตารางคำนวณปริมาณการให้อาหารและสัดส่วนที่ชัดเจน',
      'จัดส่งฟรีพร้อมเอกสารแนะนำจากทีมนักวิชาการสัตว์น้ำ'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'พี่สมชาย',
    initials: 'สช',
    province: 'สุราษฎร์ธานี',
    farmType: 'ฟาร์มกุ้งขาว 4 บ่อ (บ่อ PE)',
    rating: 5,
    comment: 'ใช้น้ำหมักคลุกอาหารกุ้งตัวนี้แล้วคลุกง่าย อาหารไม่เละ กุ้งกินอาหารหมดรอบดี ทางร้านให้คำแนะนำการใช้เข้าใจง่ายครับ',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800'
  },
  {
    id: 'rev-2',
    author: 'บังดล',
    initials: 'บด',
    province: 'จันทบุรี',
    farmType: 'ฟาร์มกุ้งกุลาดำ 3 บ่อดิน',
    rating: 5,
    comment: 'สั่งชุดทดลองมาลองใช้ก่อน กลิ่นหมักหอมธรรมชาติ พนักงานตอบแชตไว ให้บริการดีมาก จะสั่งแกลลอนใหญ่ต่อแน่นอน',
    badgeBg: 'bg-sky-100',
    badgeText: 'text-sky-800'
  },
  {
    id: 'rev-3',
    author: 'คุณนภา',
    initials: 'นภ',
    province: 'ฉะเชิงเทรา',
    farmType: 'ฟาร์มกุ้งระบบปิด 6 บ่อ',
    rating: 5,
    comment: 'จัดส่งรวดเร็ว บรรจุภัณฑ์แน่นหนาไม่รั่วซึม มีเอกสารคำแนะนำแปะมาพร้อมกล่อง ชัดเจนดีค่ะ',
    badgeBg: 'bg-indigo-100',
    badgeText: 'text-indigo-800'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'สินค้าใช้กับกุ้งประเภทไหนได้บ้าง?',
    answer: 'สามารถใช้งานได้ทั้งกุ้งขาวแวนนาไม (Vannamei), กุ้งกุลาดำ (Black Tiger) และกุ้งก้ามกราม โดยใช้คลุกเคล้ากับอาหารเม็ดตามสัดส่วนที่ระบุ หรือใช้สาดลงในบ่อน้ำเพื่อบำบัดคุณภาพน้ำ'
  },
  {
    id: 'faq-2',
    question: 'วิธีใช้สินค้าต้องทำอย่างไร?',
    answer: 'ใช้งานง่าย เพียงผสมน้ำหมักกับน้ำสะอาดเล็กน้อยแล้วคลุกเคล้ากับอาหารเม็ดตามคำแนะนำบนฉลาก ผึ่งลมไว้ในที่ร่ม 10-15 นาที เพื่อให้น้ำหมักซึมเข้าเม็ดอาหารก่อนนำไปหว่านให้กุ้งตามรอบปกติ'
  },
  {
    id: 'faq-3',
    question: 'มีขนาดสินค้าอะไรให้เลือกบ้าง?',
    answer: 'มีตั้งแต่ขนาดทดลอง 1 ลิตร / 1 กิโลกรัม ไปจนถึงขนาดแกลลอน 5 ลิตร, 20 ลิตร และแบบยกลังสำหรับการสั่งซื้อในปริมาณมากสำหรับฟาร์มใหญ่'
  },
  {
    id: 'faq-4',
    question: 'สามารถสั่งซื้อจำนวนมากสำหรับฟาร์มขนาดใหญ่ได้หรือไม่?',
    answer: 'สามารถสั่งซื้อราคาส่งได้ ทางเรามีเรทราคาพิเศษสำหรับฟาร์มกุ้งขนาดกลางและขนาดใหญ่ พร้อมบริการจัดส่งรถกระบะ/รถบรรทุกส่งตรงถึงหน้าฟาร์ม'
  },
  {
    id: 'faq-5',
    question: 'มีบริการจัดส่งและเก็บเงินปลายทางหรือไม่?',
    answer: 'มีบริการจัดส่งผ่านขนส่งเอกชน (Flash Express / Kerry Express) ครอบคลุมทั่วประเทศไทย พร้อมรองรับทั้งการโอนชำระเงินล่วงหน้าและการเก็บเงินปลายทาง'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'เทคนิคการคลุกอาหารกุ้งด้วยน้ำหมักโปรไบโอติกให้ติดทน ไม่ละลายทิ้งเปล่า',
    excerpt: 'เคล็ดลับในการคลุกเคล้าอาหารเม็ดให้ตัวน้ำหมักซึมลึกถึงแกนกลาง เพื่อลดการชะล้างเมื่อเม็ดอาหารจมลงสู่น้ำ',
    readTime: '3 นาที',
    date: '22 ก.ย. 2026',
    category: 'เทคนิคการเลี้ยง',
    content: [
      'ปัญหาที่เกษตรกรผู้เลี้ยงกุ้งพบบ่อยคือ เมื่อนำอาหารที่คลุกโปรไบโอติกหรือวิตามินไปหว่านในบ่อ ตัวสารเคลือบมักละลายหลุดออกไปก่อนที่กุ้งจะได้กินอาหาร',
      'ข้อแนะนำคือ ควรผสมน้ำหมักกุ้งน้อยกับน้ำสะอาดในอัตราส่วน 1:2 ก่อน จากนั้นค่อยๆ พรมลงบนอาหารเม็ดขณะคลุกเคล้า ไม่ควรเททีเดียวทั้งหมด',
      'หลังจากคลุกเคล้าจนเม็ดอาหารชุ่มชื้นสม่ำเสมอ ให้นำไปผึ่งลมในที่ร่มที่อากาศถ่ายเทสะดวกประมาณ 15 นาที จะช่วยให้น้ำหมักดูดซึมและแห้งเคลือบผิวเม็ดอาหารได้คงทน'
    ]
  },
  {
    id: 'art-2',
    title: 'การจัดการของเสียพื้นบ่อและแก๊สพิษด้วยจุลินทรีย์กลุ่มบาซิลลัส',
    excerpt: 'ทำความเข้าใจกลไกการย่อยสลายขี้กุ้งและเศษอาหารก้นบ่อ เพื่อรักษาสมดุลน้ำใส ไร้กลิ่นแอมโมเนีย',
    readTime: '4 นาที',
    date: '18 ก.ย. 2026',
    category: 'คุณภาพน้ำ',
    content: [
      'เมื่อเข้าสู่ช่วงกุ้งอายุ 45 วันขึ้นไป ปริมาณอาหารที่ให้ต่อวันจะเพิ่มขึ้นอย่างมาก ส่งผลให้เกิดการสะสมของเสียและขี้กุ้งบริเวณพื้นบ่อ',
      'การเติมสปอร์จุลินทรีย์บริสุทธิ์กลุ่ม Bacillus subtilis และ Bacillus licheniformis อย่างสม่ำเสมอ จะช่วยเร่งกระบวนการย่อยสลายสารอินทรีย์โดยไม่แย่งออกซิเจนจากตัวกุ้ง',
      'ควรเปิดเครื่องตีน้ำให้อากาศหมุนเวียนได้ดีหลังการสาดจุลินทรีย์ เพื่อให้จุลินทรีย์กระจายตัวได้ทั่วถึงทั้งบ่อ'
    ]
  },
  {
    id: 'art-3',
    title: 'เตรียมบ่อกุ้งอย่างไรให้พร้อมก่อนปล่อยลูกกุ้งพี (PL)',
    excerpt: 'ขั้นตอนการกำจัดศัตรูพืช การสร้างสีน้ำ และการเติมจุลินทรีย์เพื่อสร้างอาหารธรรมชาติสำหรับลูกกุ้ง',
    readTime: '5 นาที',
    date: '10 ก.ย. 2026',
    category: 'เตรียมบ่อ',
    content: [
      'การเตรียมบ่อที่ดีคือหัวใจสำคัญของความสำเร็จในรอบการเลี้ยง การตากก้นบ่อให้แห้งสนิทและการตรวจวัดค่าความเป็นกรด-ด่าง (pH) จะช่วยลดเชื้อก่อโรคได้อย่างมีนัยสำคัญ',
      'ก่อนปล่อยลูกกุ้ง 7 วัน ควรเติมน้ำหมักชีวภาพร่วมกับโปรไบโอติกผงเพื่อสร้างสีน้ำและกระตุ้นการเจริญเติบโตของโรติเฟอร์และแพลงก์ตอนพืชที่มีประโยชน์'
    ]
  }
];

export const FARM_CONTACT_INFO = {
  name: 'กุ้งน้อยโปรไบโอติก (Kung Noi Bio-Aqua)',
  slogan: 'เพื่อกุ้งแข็งแรง โตไว น้ำใส ไร้กลิ่น',
  phone: '089-123-4567',
  phoneDisplay: '089-123-4567',
  lineId: '@883nmhsl',
  lineUrl: 'https://line.me/R/ti/p/@883nmhsl',
  facebook: 'กุ้งน้อยโปรไบโอติก - ผลิตภัณฑ์ฟาร์มกุ้ง',
  tiktok: '@kungnoiprobiotic',
  address: 'ศูนย์กระจายสินค้ากุ้งน้อยโปรไบโอติก ตำบลบางกรูด อำเภอบ้านโพธิ์ จังหวัดฉะเชิงเทรา 24140',
  bankName: 'ธนาคารกสิกรไทย (Kasikorn Bank)',
  bankAccount: '142-8-99234-1',
  accountName: 'บจก. กุ้งน้อย ไบโอ-อควา (ไทยแลนด์)',
  promptPay: '089-123-4567'
};
