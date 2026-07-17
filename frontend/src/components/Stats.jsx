const stats = [
  {
    number: "98%",
    title: "Accuracy"
  },
  {
    number: "50K+",
    title: "Articles Checked"
  },
  {
    number: "<2 Sec",
    title: "Average Response"
  },
  {
    number: "24/7",
    title: "Availability"
  }
];

export default function Stats() {
  return (
    <section className="stats">

      {stats.map((item, index) => (

        <div className="stat-card" key={index}>

          <h2>{item.number}</h2>

          <p>{item.title}</p>

        </div>

      ))}

    </section>
  );
}