import { useParams, Navigate } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";
import { Calculator, BookOpen, TrendingUp, Users } from "lucide-react";

const services = {
  "tax-preparation": {
    id: "tax-preparation",
    title: "Tax Preparation",
    tagline: "Expert tax services that maximize your returns and minimize your stress",
    description: "Our comprehensive tax preparation services ensure accuracy, compliance, and maximum savings for individuals and businesses.",
    icon: Calculator,
    benefits: [
      "Maximize deductions and credits with expert guidance",
      "100% accuracy guarantee with audit protection",
      "Year-round tax planning to minimize future liabilities",
      "Electronic filing for faster refunds",
      "Dedicated tax professional assigned to your account",
      "Secure document portal for easy file sharing",
      "Real-time status updates throughout the process",
      "Comprehensive review of previous years' returns"
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "We review your tax situation and gather necessary documents to understand your unique needs."
      },
      {
        title: "Preparation & Review",
        description: "Our experts prepare your return, maximizing deductions while ensuring complete accuracy."
      },
      {
        title: "Filing & Support",
        description: "We file your return electronically and provide ongoing support for any questions or audits."
      }
    ],
    pricing: [
      {
        name: "Basic",
        price: "$149",
        features: [
          "Simple individual returns",
          "W-2 income only",
          "Standard deduction",
          "E-filing included",
          "Basic support"
        ]
      },
      {
        name: "Professional",
        price: "$399",
        features: [
          "Complex individual returns",
          "Multiple income sources",
          "Itemized deductions",
          "Investment income",
          "Priority support",
          "Audit protection"
        ],
        highlighted: true
      },
      {
        name: "Business",
        price: "Custom",
        features: [
          "Business tax returns",
          "Multi-state filing",
          "Quarterly estimates",
          "Tax planning sessions",
          "Dedicated accountant",
          "Year-round support"
        ]
      }
    ],
    faqs: [
      {
        question: "When should I start preparing my taxes?",
        answer: "We recommend starting as soon as you receive all your tax documents, typically by early February. This gives us ample time to maximize your deductions and ensure accuracy."
      },
      {
        question: "What documents do I need to provide?",
        answer: "Common documents include W-2s, 1099s, receipts for deductions, previous year's return, and any business income/expense records. We'll provide a complete checklist during consultation."
      },
      {
        question: "How long does the tax preparation process take?",
        answer: "Simple returns can be completed within 2-3 business days. Complex returns may take 5-7 business days. We'll provide a timeline during your initial consultation."
      },
      {
        question: "What if I get audited?",
        answer: "Our Professional and Business plans include audit protection. We'll represent you and handle all IRS communications at no additional charge."
      }
    ]
  },
  "bookkeeping": {
    id: "bookkeeping",
    title: "Bookkeeping Services",
    tagline: "Keep your books balanced and your business thriving",
    description: "Professional bookkeeping services that give you real-time insights into your financial health.",
    icon: BookOpen,
    benefits: [
      "Real-time financial reporting and dashboards",
      "Monthly bank and credit card reconciliation",
      "Accounts payable and receivable management",
      "Expense categorization and tracking",
      "Cloud-based access from anywhere",
      "Integration with popular accounting software",
      "Dedicated bookkeeping team",
      "Monthly financial review meetings"
    ],
    process: [
      {
        title: "Setup & Integration",
        description: "We connect your accounts and set up your customized bookkeeping system."
      },
      {
        title: "Daily Management",
        description: "Our team handles all daily bookkeeping tasks, keeping your records current."
      },
      {
        title: "Monthly Reporting",
        description: "Receive detailed financial reports and insights to guide business decisions."
      }
    ],
    pricing: [
      {
        name: "Starter",
        price: "$299",
        features: [
          "Up to 50 transactions/month",
          "Basic financial statements",
          "Monthly reconciliation",
          "Email support",
          "QuickBooks integration"
        ]
      },
      {
        name: "Growth",
        price: "$599",
        features: [
          "Up to 200 transactions/month",
          "Advanced reporting",
          "Weekly updates",
          "Dedicated support",
          "Multi-user access",
          "Custom categories"
        ],
        highlighted: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited transactions",
          "Daily bookkeeping",
          "Custom workflows",
          "API integrations",
          "Priority support",
          "On-site training"
        ]
      }
    ],
    faqs: [
      {
        question: "How quickly can you get my books up to date?",
        answer: "Most businesses are fully caught up within 1-2 weeks. We'll provide a specific timeline after reviewing your current situation."
      },
      {
        question: "Which accounting software do you support?",
        answer: "We work with QuickBooks, Xero, Wave, and most major accounting platforms. We can also recommend the best solution for your needs."
      },
      {
        question: "Can you help with past bookkeeping cleanup?",
        answer: "Absolutely! We specialize in cleaning up messy books and getting businesses back on track with accurate financial records."
      },
      {
        question: "How do you ensure data security?",
        answer: "We use bank-level encryption, secure cloud storage, and strict access controls. All team members sign NDAs and undergo background checks."
      }
    ]
  },
  "financial-planning": {
    id: "financial-planning",
    title: "Financial Planning",
    tagline: "Strategic guidance for your financial future",
    description: "Comprehensive financial planning services to help you achieve your business and personal goals.",
    icon: TrendingUp,
    benefits: [
      "Customized financial roadmap for your goals",
      "Cash flow optimization strategies",
      "Investment planning and portfolio management",
      "Risk assessment and mitigation",
      "Retirement and succession planning",
      "Tax-efficient wealth strategies",
      "Regular strategy review sessions",
      "Access to financial planning software"
    ],
    process: [
      {
        title: "Discovery Meeting",
        description: "We learn about your goals, current situation, and create a comprehensive financial picture."
      },
      {
        title: "Strategy Development",
        description: "Our team develops a customized financial plan with specific recommendations and timelines."
      },
      {
        title: "Implementation & Monitoring",
        description: "We help implement strategies and continuously monitor progress, adjusting as needed."
      }
    ],
    pricing: [
      {
        name: "Essential",
        price: "$199",
        features: [
          "Annual financial review",
          "Basic planning tools",
          "Budget analysis",
          "Goal tracking",
          "Email support"
        ]
      },
      {
        name: "Comprehensive",
        price: "$499",
        features: [
          "Quarterly reviews",
          "Investment guidance",
          "Tax strategies",
          "Estate planning basics",
          "Priority support",
          "Mobile app access"
        ],
        highlighted: true
      },
      {
        name: "Wealth Management",
        price: "1% AUM",
        features: [
          "Full wealth management",
          "Monthly reviews",
          "Direct investment management",
          "Advanced tax planning",
          "Family office services",
          "24/7 support"
        ]
      }
    ],
    faqs: [
      {
        question: "What's included in a financial plan?",
        answer: "Our plans include cash flow analysis, investment recommendations, tax strategies, risk management, estate planning basics, and a clear roadmap to achieve your goals."
      },
      {
        question: "How often should I review my financial plan?",
        answer: "We recommend quarterly reviews for most clients, with major updates annually or when significant life changes occur."
      },
      {
        question: "Do you manage investments directly?",
        answer: "Yes, our Wealth Management tier includes direct investment management. Other tiers provide guidance and recommendations."
      },
      {
        question: "Can you work with my existing advisors?",
        answer: "Absolutely! We regularly collaborate with attorneys, insurance agents, and other professionals to ensure comprehensive planning."
      }
    ]
  },
  "payroll": {
    id: "payroll",
    title: "Payroll Services",
    tagline: "Streamlined payroll that keeps your team happy",
    description: "Full-service payroll processing that ensures accurate, on-time payments and complete compliance.",
    icon: Users,
    benefits: [
      "Automated payroll processing and direct deposits",
      "Tax filing and compliance management",
      "Employee self-service portal",
      "Time tracking integration",
      "Benefits administration support",
      "Garnishment and deduction handling",
      "Year-end W-2 and 1099 preparation",
      "Dedicated payroll specialist"
    ],
    process: [
      {
        title: "Payroll Setup",
        description: "We gather employee information and set up your customized payroll system."
      },
      {
        title: "Processing & Payment",
        description: "Submit hours, we handle everything else - calculations, deposits, and tax filings."
      },
      {
        title: "Compliance & Reporting",
        description: "Stay compliant with automated tax filings and receive detailed payroll reports."
      }
    ],
    pricing: [
      {
        name: "Small Team",
        price: "$39",
        features: [
          "Up to 5 employees",
          "$4 per employee after",
          "Direct deposit",
          "Tax filing",
          "Basic support"
        ]
      },
      {
        name: "Growing Business",
        price: "$79",
        features: [
          "Up to 25 employees",
          "$3 per employee after",
          "Employee portal",
          "Time tracking",
          "Priority support",
          "Custom reports"
        ],
        highlighted: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited employees",
          "Multi-state payroll",
          "Benefits integration",
          "API access",
          "Dedicated specialist",
          "Custom workflows"
        ]
      }
    ],
    faqs: [
      {
        question: "How quickly can you set up our payroll?",
        answer: "Most businesses are up and running within 2-3 business days. Complex setups with multiple states may take up to a week."
      },
      {
        question: "What about payroll taxes?",
        answer: "We handle all payroll tax calculations, deposits, and filings at federal, state, and local levels. You're fully covered."
      },
      {
        question: "Can employees access their pay stubs online?",
        answer: "Yes! All plans except Small Team include an employee self-service portal for pay stubs, W-2s, and personal information updates."
      },
      {
        question: "Do you handle contractor payments?",
        answer: "Yes, we can process 1099 contractor payments and handle year-end 1099 form preparation and distribution."
      }
    ]
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <ServiceDetail service={service} />;
};

export default ServicePage;