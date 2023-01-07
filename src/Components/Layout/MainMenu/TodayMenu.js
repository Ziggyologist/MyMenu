import styles from "./TodayMenu.module.scss";
import OptionItem from "./OptionItem";

const TodayMenu = props => {
  const categories = [
    {
      name: "salad",
      href: "🥗",
      alt: "salad logo",
    },
    {name: "soup", href: "🍲", alt: "soup logo"},
    {
      name: "herbs",
      href: "🍄",
      alt: "herbs logo",
    },
    {name: "chicken", href: "🍗", alt: "chicken logo"},
    {name: "pasta", href: "🍝", alt: "pasta logo"},
    {name: "noodle", href: "🥡", alt: "noodle logo"},
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingArea}>
        <h1>Today's Menu</h1>
        <button>show all</button>
      </div>

      <div className={styles.options}>
        {categories.map((category, idx) => (
          <OptionItem
            name={category.name}
            src={category.href}
            alt={category.alt}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
export default TodayMenu;
