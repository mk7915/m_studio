// ─── Recruitment Consulting — work detail content (per language) ──────────────

export const recruitmentDetail = {
  en: {
    label: "Global Recruitment Consulting",
    title: "01 | Cross-Border Talent Acquisition",
    overview:
      "Operated as a professional recruitment consultant across Japan and Southeast Asia, delivering tailored talent acquisition solutions across various organizational levels and industries.",
    subheading: "Core Experience",
    items: [
      {
        label: "Japan",
        text: "Managed end-to-end recruitment in the temporary staffing sector, focusing on the IT, food/beverage, and real estate industries to resolve chronic labor shortages and support client operations.",
      },
      {
        label: "Overseas (Philippines & Thailand):",
        text: "Worked as a Recruiting Advisor (RA) to support companies with local and expatriate hiring, navigating diverse cultural environments to build strong organizational foundations.",
      },
      {
        label: "Global Agency",
        text: "Specialized in the Healthcare & Life Sciences division. Handled dual-sided consulting for highly specialized positions, including executive and R&D/biotech roles for global enterprises.",
      },
    ],
    tags: ["Talent Acquisition", "B2B Sales", "Global Operations", "Negotiation"],
    back: "Back to Home",
  },
  jp: {
    label: "人材採用コンサルティング",
    title: "01 |グローバル人材採用コンサルティング",
    overview:
      "日本および海外（東南アジア）を舞台に、多様な雇用形態やレイヤーにおける人材採用・組織課題の解決に従事。新規開拓からマッチング創出まで一貫して伴走しました。",
    subheading: "主な実績・経験",
    items: [
      {
        label: "日本",
        text: "派遣領域にてIT、食品飲料、不動産業界を中心に担当。新規クライアントの開拓から、現場スタッフの就業フォローまで一貫して行い、現場のオペレーション改善に貢献。",
      },
      {
        label: "海外（フィリピン・タイ）",
        text: "リクルーティングアドバイザー（RA）として、現地採用や日本人採用をサポート。文化や労働観が異なる環境下で、組織の基盤となる人材マッチングを支援。",
      },
      {
        label: "外資ハイクラス",
        text: "ヘルスケア・ライフサイエンス部門にて、外資系企業のバイオ・研究職といった専門性の高いポジションを担当。企業・求職者の両面型コンサルタントとして高度な折衝を経験。",
      },
    ],
    tags: ["採用コンサルティング", "法人営業", "グローバル環境", "折衝力"],
    back: "トップに戻る",
  },
} as const

// ─── Video Marketing & Production — work detail content (per language) ────────

export const videoMarketingDetail = {
  en: {
    label: "Video Marketing & Production",
    title: "02 | Video Marketing & Production",
    overview:
      "Combining video production with a strategic marketing mindset. Focusing on driving engagement and achieving business goals through powerful storytelling, while delivering high-end Motion Graphics using After Effects.",
    subheading: "Featured Projects",
    projects: [
      {
        title: "AI Training & Educational Content (yohaku with AI)",
        descriptionLabel: "Project:",
        description:
          "Created educational course video content (such as Gemini Basics) for an AI community platform, turning complex technical concepts into clear, engaging visual guides.",
        videoSrc: "/videos/gemini-lecture-demo.mp4",
      },
      {
        title: "Global Advertisement Campaigns (Nas Daily)",
        descriptionLabel: "Project:",
        description:
          "Edited ad campaign videos for Nas Daily, a world-renowned global media platform, tailoring content for maximum audience retention and high conversion rates.",
        videoSrc: "/videos/nas-daily-demo1.mp4",
      },
      {
        title: "Motion Graphics & Corporate Promotion",
        descriptionLabel: "Project:",
        description:
          "Designing customized, high-end motion graphics and animated promotional videos using After Effects to elevate corporate brand identity and product features.",
        videoSrc: "/videos/motion-demo.mp4",
      },
      {
        title: "Short-form SNS Video Production (Legal Sector)",
        descriptionLabel: "Project:",
        description:
          "Produced high-engagement short-form videos for Verybest Law Office, a major Japanese law firm. Focused on turning complex legal concepts into digestible, high-retention content on TikTok.",
        videoSrc: "/videos/tiktok-legal-demo.mp4",
      },
    ],
    tags: ["Premiere Pro", "After Effects", "SNS Strategy", "Motion Graphics"],
    back: "Back to Home",
  },
  jp: {
    label: "動画マーケティング・制作",
    title: "02 | 動画マーケティング・制作",
    overview:
      "動画制作の編集スキルに、動画クリエイティブ領域の営業代行・マーケティング視点を掛け合わせ、「ビジネスの成果に繋げる動画」を設計。さらにAfter Effectsを用いた独自のモーショングラフィックス制作により、企業のサービス紹介やプロモーション映像を手がけています。",
    subheading: "主な制作プロジェクト",
    projects: [
      {
        title: "AIコミュニティ向け教育・研修動画制作（yohaku with AI）",
        descriptionLabel: "特徴：",
        description:
          "AIコミュニティプラットフォーム「yohaku with AI」にて、Geminiの基礎解説をはじめとする教育系コース動画を制作。専門的な内容を、視覚的に分かりやすいビジュアルガイドへと落とし込み。",
        videoSrc: "/videos/gemini-lecture-demo.mp4",
      },
      {
        title: "モーショングラフィックス ＆ 企業プロモーション映像",
        descriptionLabel: "特徴：",
        description:
          "After Effectsを用いて、企業のブランドイメージやプロダクトの魅力を伝えるオリジナルのモーショングラフィックス・プロモーション映像を制作。",
        videoSrc: "/videos/motion-demo.mp4",
      },
      {
        title: "海外大手メディア 広告キャンペーン動画編集（Nas Daily）",
        descriptionLabel: "特徴：",
        description:
          "世界的に著名なグローバルメディア「Nas Daily」の広告キャンペーン動画の編集を担当。海外視聴者の視聴維持率やコンバージョン率を意識した、テンポと構成の最適化を実施。",
        videoSrc: "/videos/nas-daily-demo1.mp4",
      },
      {
        title: "大手法律事務所 SNSショート動画制作",
        descriptionLabel: "特徴：",
        description:
          "「ベリーベスト法律事務所」様のTikTok向けショート動画の編集を担当。法律という堅いテーマを、視聴維持率を意識したテンポの良い編集と視覚的な演出で、分かりやすくフックのあるコンテンツへと最適化。",
        videoSrc: "/videos/tiktok-legal-demo.mp4",
      },
    ],
    tags: ["Premiere Pro", "After Effects", "SNSマーケティング", "動画編集"],
    back: "トップに戻る",
  },
} as const

// ─── BtoB Customer Success — work detail content (per language) ───────────────

export const customerSuccessDetail = {
  en: {
    label: "BtoB Customer Success",
    title: "04 | BtoB Customer Success & Operations",
    overview:
      "Providing ongoing Customer Success (CS) and operational support for a BtoB AI training platform, ensuring corporate clients and learners have a seamless educational experience.",
    subheading: "Key Activities",
    items: [
      {
        label: "Corporate Client Support",
        text: "Serving as the primary point of contact for corporate clients, handling inquiries, and guiding them through the training funnel to ensure high satisfaction.",
      },
      {
        label: "Operations & Communication",
        text: "Managing day-to-day operations between sales and support teams to streamline communication and deliver prompt solutions to clients.",
      },
      {
        label: "Workspace Optimization",
        text: "Migrating client tracking and project data from Salesforce to Notion, creating a more intuitive workspace to improve overall support quality.",
      },
    ],
    tags: ["Customer Success", "BtoB Support", "Notion", "Client Care"],
    back: "Back to Home",
  },
  jp: {
    label: "BtoB カスタマーサクセス",
    title: "04 | BtoB カスタマーサクセス・運営サポート",
    overview:
      "法人向けAI人材育成プラットフォームにおいて、受講企業や受講生がスムーズに研修を進められるよう、日々のカスタマーサクセス（CS）および運営サポートを継続的に担当。",
    subheading: "主な業務内容",
    items: [
      {
        label: "法人顧客の伴走サポート",
        text: "研修を導入している企業の担当者様や受講生からの問い合わせに対応。日々のコミュニケーションを通じて、受講が円滑に進むよう親身に伴走。",
      },
      {
        label: "運営・窓口業務の最適化",
        text: "営業担当や社内メンバーと連携し、顧客対応が滞らないよう全体のオペレーションを管理。よりスピーディーで丁寧なサポート体制を維持。",
      },
      {
        label: "顧客管理環境の整備",
        text: "顧客対応をさらに円滑にするため、SalesforceからNotionへの案件管理の移管を進行中。チーム全員が顧客の状況をひと目で把握できる、使いやすい環境づくりも担当。",
      },
    ],
    tags: ["カスタマーサクセス", "法人サポート", "Notion", "顧客対応"],
    back: "トップに戻る",
  },
} as const

// ─── Web Development — work detail content (per language) ─────────────────────

export const webDevelopmentDetail = {
  en: {
    label: "Web Development",
    title: "03 | Web Applications & Site Development",
    overview:
      "Developing custom web applications and content management systems (CMS) to solve real-world problems and support business growth. Capable of handling everything from front-end UI implementation to database design and cloud deployment.",
    subheading: "Featured Projects",
    projects: [
      {
        title: "Multilingual Portfolio Website (This Site)",
        techStackLabel: "Tech Stack:",
        techStack: "Next.js, TypeScript, Tailwind CSS",
        featuresLabel: "Features:",
        features:
          "Designed and built this portfolio site itself, featuring an English/Japanese language toggle, dark mode, and a clean, well-organized codebase to showcase work in a polished, interactive format.",
      },
      {
        title: "Family Budget & Analytics Web Application",
        techStackLabel: "Tech Stack:",
        techStack: "React, Next.js, Tailwind CSS (deployed on Vercel)",
        featuresLabel: "Features:",
        features:
          "Built a secure, mobile-responsive dashboard for household budgeting, multi-category expense tracking, and data visualization, with a focus on intuitive UI/UX and clean state management.",
        video: true,
      },
      {
        title: "Corporate Website",
        techStackLabel: "Tech Stack:",
        techStack: "WordPress, PHP, Custom CSS",
        featuresLabel: "Features:",
        features:
          "Built a localized corporate website for the Thailand branch manufacturing company, with a clean, professional layout and structured navigation designed to communicate technical credibility and drive business inquiries. (URL: pending client approval)",
      },
    ],
    tags: ["React", "Next.js", "WordPress", "Tailwind CSS"],
    back: "Back to Home",
  },
  jp: {
    label: "Web開発・プログラミング",
    title: "03 | Webアプリケーション開発・サイト構築",
    overview:
      "日常の課題解決やビジネスの成長を支援するためのWebアプリケーション開発、およびWordPressを用いたコーポレートサイト構築を担当。デザインの実装からデータベース連携、Vercel等のクラウド環境へのデプロイまで一貫して対応可能です。",
    subheading: "主な開発プロジェクト",
    projects: [
       {
        title: "多言語対応 ポートフォリオサイト（本サイト）",
        techStackLabel: "技術スタック：",
        techStack: "Next.js, TypeScript, Tailwind CSS",
        featuresLabel: "特徴：",
        features:
          "本ポートフォリオサイト自体の設計・実装を担当。日本語/英語の言語切り替えやダークモードに対応し、コードの可読性とモダンなアニメーションにこだわった構成。",
      },
      {
        title: "家計簿・収支分析Webアプリケーション",
        techStackLabel: "技術スタック：",
        techStack: "React, Next.js, Tailwind CSS（Vercelにてデプロイ）",
        featuresLabel: "特徴：",
        features:
          "家庭の収支管理・カテゴリ別の支出分析・データの可視化を行うダッシュボードアプリ。直感的に使えるUI/UXと、シンプルで保守しやすい状態管理を意識して構築。",
        video: true,
      },
      {
        title: "公式コーポレートサイト",
        techStackLabel: "技術スタック：",
        techStack: "WordPress, PHP, カスタムCSS",
        featuresLabel: "特徴：",
        features:
          "（会社名）向け公式Webサイトを制作。製造業としての技術力・信頼性が伝わるクリーンなデザインと、問い合わせにつながる導線設計を意識して構築（※現在ポートフォリオへのURL掲載は確認中のため非公開）。",
      },

    ],
    tags: ["React", "Next.js", "WordPress", "Tailwind CSS"],
    back: "トップに戻る",
  },
} as const
