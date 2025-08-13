import ServiceDetail from "./ServiceDetail";
import { Calculator } from "lucide-react";

const taxPreparationService = {
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
    },
    {
      question: "Can you help with previous years' unfiled returns?",
      answer: "Yes! We specialize in helping clients catch up on unfiled returns and can often negotiate penalty reductions with the IRS."
    }
  ]
};

const TaxPreparation = () => {
  return <ServiceDetail service={taxPreparationService} />;
};

export default TaxPreparation;