export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  tags: string[];
  coverImage?: string;
  contentHtml: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "modern-bookkeeping-automation",
    title: "Modern Bookkeeping: Automation that Scales",
    excerpt:
      "How automation, bank feeds, and rules-based categorization reduce errors and free up time for insights.",
    date: "2025-01-15",
    author: "Jane Doe, CPA",
    tags: ["Bookkeeping", "Automation"],
    coverImage: "/placeholder.svg",
    contentHtml: `
      <p>Bookkeeping has evolved far beyond spreadsheets. Modern cloud tools connect bank feeds, apply smart rules, and reconcile in near real time. The result is fewer errors and more time for analysis.</p>
      <h2>Key benefits</h2>
      <ul>
        <li>Faster month-end closes</li>
        <li>Higher accuracy and auditability</li>
        <li>Better cash flow visibility</li>
      </ul>
      <p>With automation handling the repetitive work, accounting teams can focus on strategic decisions that drive growth.</p>
    `,
  },
  {
    slug: "tax-planning-2025",
    title: "Tax Planning in 2025: What to Expect",
    excerpt:
      "A practical look at evolving regulations and how businesses can stay compliant while optimizing liabilities.",
    date: "2025-02-02",
    author: "Michael Chan, EA",
    tags: ["Taxes", "Compliance"],
    coverImage: "/placeholder.svg",
    contentHtml: `
      <p>Tax guidance continues to evolve, and proactive planning remains the best defense against surprises. From credits to entity selection, early planning reduces risks.</p>
      <h2>Action items</h2>
      <ol>
        <li>Review quarterly estimates and withholdings</li>
        <li>Document nexus and sales tax exposure</li>
        <li>Audit R&D, energy, and hiring credits</li>
      </ol>
      <p>Partner with a specialist who monitors changes and translates law into practical steps for your business.</p>
    `,
  },
  {
    slug: "cashflow-mastery",
    title: "Cash Flow Mastery: 7 Tactics for Stability",
    excerpt:
      "From payment terms to forecasting, here are seven tactics that immediately improve cash reliability.",
    date: "2025-03-10",
    author: "Ava Patel, CFO",
    tags: ["Cash Flow", "Forecasting"],
    coverImage: "/placeholder.svg",
    contentHtml: `
      <p>Cash is a system. Tighten collections, negotiate terms, and forecast realistically to avoid crunches.</p>
      <h2>Seven tactics</h2>
      <ul>
        <li>Shorten receivable cycles with automated reminders</li>
        <li>Encourage digital payments</li>
        <li>Segment customers by risk and set limits</li>
        <li>Model multiple scenarios monthly</li>
        <li>Stage expenses to match inflows</li>
        <li>Build a rolling 13-week cash forecast</li>
        <li>Secure a line of credit before you need it</li>
      </ul>
      <p>Small adjustments compound into durable stability over time.</p>
    `,
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);