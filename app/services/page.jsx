const Services = () => {
  const services = [
    {
      icon: "fa-user-plus",
      title: "Registration",
      desc: "Create your Sweet Treats account to unlock personalized features, save favorites, and track your dessert progress.",
    },
    {
      icon: "fa-chart-line",
      title: "Dashboard",
      desc: "Access your personal dashboard to view saved recipes, recent activity, and customized dessert suggestions.",
    },
    {
      icon: "fa-lightbulb",
      title: "Suggest Recipe",
      desc: "Share your own creative dessert ideas with us — our team will test and feature your recipes on Sweet Treats!",
    },
    {
      icon: "fa-calendar-days",
      title: "Meal Planner Tool",
      desc: "Plan your week’s desserts and meals with our interactive planner — making baking schedules simple and organized.",
    },
    {
      icon: "fa-cart-shopping",
      title: "Create Shopping List",
      desc: "Automatically generate a shopping list from your chosen recipes — so you never miss an ingredient again.",
    },
    {
      icon: "fa-book-open-reader",
      title: "View Text Tutorials",
      desc: "Follow step-by-step written tutorials for every dessert, from quick fixes to professional-level sweets.",
    },

  ];

  return (
    <main>
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Explore the tools and features designed to make your dessert journey
          easy, fun, and delicious!
        </p>
      </div>

      <section className="services-grid">
        {services.map((service, index) => (
          <article key={index} className="service-card">
            <h1 className={`fa-solid ${service.icon}`}></h1>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Services;
