import React from "react";

// --- Mock Data ---
const FAQData = [
  {
    category: "Getting Started",
    icon: "🚀",
    questions: [
      {
        q: "What is DTF Sheet and how does it work?",
        a: "DTF (Direct to Film) sheet is a transfer medium used in DTF printing. The design is printed onto the film, then adhesive powder is applied and cured, allowing the design to be transferred onto fabric using a heat press.",
      },
      {
        q: "How do I place my first order?",
        a: "You can place your order by uploading your design file (vector preferred) through our custom order page. Specify the size, quantity, and choose any additional services if required.",
      },
    ],
  },
  {
    category: "Design & Upload",
    icon: "🎨",
    questions: [
      {
        q: "What are the recommended dimensions for transfers?",
        a: "Standard sizes are 12x12 inches, 12x18 inches, or full roll prints (22 inches wide). Always leave a 0.25-inch margin around your design.",
      },
      {
        q: "Can I print multiple designs on one sheet?",
        a: "Yes, you can gang multiple designs onto a single sheet to maximize efficiency, as long as they fit within the printable area.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    icon: "🚚",
    questions: [
      {
        q: "What are the shipping times for transfers?",
        a: "Processing usually takes 1-2 business days, and shipping within Dhaka takes 1-3 business days. International shipping varies and details will be provided at checkout.",
      },
      {
        q: "How are the transfers packaged to prevent damage?",
        a: "All transfers are carefully rolled and shipped in sturdy mailing tubes to protect them from creasing and damage during transit.",
      },
    ],
  },
  {
    category: "Heat Pressing Tips",
    icon: "🔥",
    questions: [
      {
        q: "What temperature and pressure should I use?",
        a: "We generally recommend pressing at 300°F - 325°F (150°C - 163°C) for 10-15 seconds with medium-high pressure.",
      },
    ],
  },
];

// Reusable component for the Sidebar (Static links)
const FaqSidebar = ({ activeCategory, categories }) => (
  <div className="md:w-64 p-4 md:sticky md:top-4 h-fit bg-base-200/50 backdrop-blur-sm rounded-xl shadow-xl border border-base-content/10 mb-8 md:mb-0">
    <h3 className="text-xl font-bold mb-4 text-base-content border-b border-base-content/20 pb-2">
      Topics
    </h3>
    <ul className="menu menu-vertical p-0">
      {categories.map((cat, index) => (
        <li key={index}>
          <a
            className={`flex items-center space-x-2 text-base font-medium ${
              index === 0
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-300 hover:text-primary"
            }`}
            href={`#${cat.category.toLowerCase().replace(/\s/g, "-")}`}
          >
            <span className="text-xl">{cat.icon}</span>
            <span>{cat.category}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Reusable component for the FAQ Content
const FaqContent = ({ faqs }) => {
  return (
    <div className="flex-1 lg:max-w-4xl">
      {faqs.map((categoryData, catIndex) => (
        <section
          key={catIndex}
          id={categoryData.category.toLowerCase().replace(/\s/g, "-")}
          className="mb-10"
        >
          <h2 className="text-3xl font-extrabold text-base-content mb-6 mt-4 flex items-center">
            <span className="text-4xl mr-3">{categoryData.icon}</span>
            {categoryData.category}
          </h2>

          <div className="space-y-4">
            {categoryData.questions.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-arrow bg-base-100 shadow-lg rounded-xl border border-base-content/10"
              >
                <input
                  type="checkbox"
                  name={`faq-accordion-${catIndex}`}
                  id={`q-${catIndex}-${index}`}
                  className="peer"
                />

                <label
                  htmlFor={`q-${catIndex}-${index}`}
                  className="collapse-title text-xl font-semibold text-base-content peer-checked:text-primary transition duration-200"
                >
                  {item.q}
                </label>

                <div className="collapse-content bg-base-100/80 text-base-content p-4 border-t border-base-content/10">
                  <p className="leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

// Main Server Component
const App = () => {
  const categories = FAQData.map((c) => ({
    category: c.category,
    icon: c.icon,
  }));

  return (
    <div
      data-theme="dark"
      className="min-h-screen bg-base-300 font-sans p-4 sm:p-8"
    >
      {/* Page Header and Search Area */}
      <header className="text-center pt-8 pb-6 w-full max-w-6xl mx-auto shadow-lg">
        <h1 className="text-5xl font-extrabold text-black mb-2">
          DTF Help Center
        </h1>
        <p className="text-xl text-gray-700 mb-10">
          Quick answers to your most frequently asked questions.
        </p>
      </header>

      {/* Main Content Layout */}
      <main className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 mt-6">
        {/* Sidebar (Navigation) */}
        <FaqSidebar categories={categories} />

        {/* Main FAQ Content */}
        <FaqContent faqs={FAQData} />
      </main>

      {/* Footer/CTA Section */}
      <div className="w-full max-w-6xl mx-auto mt-20 p-8 bg-neutral text-neutral-content rounded-2xl shadow-lg text-center">
        <h3 className="text-3xl font-bold mb-3">
          Still Can&apos;t Find Your Answer?
        </h3>
        <p className="mb-6 text-gray-700">
          Our dedicated support team is here to help. Reach out to us directly.
        </p>
        <a
          href="mailto:primedtf71@gmail.com"
          className="btn btn-lg bg-primary text-primary-content hover:bg-primary-focus border-none rounded-full shadow-lg transition duration-300"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default App;
