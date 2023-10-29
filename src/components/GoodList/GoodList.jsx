import goods from "../../goods.json";
import { GoodCard } from "../GoodCard/GoodCard";
export const GoodList = () => (
  <div className="GoodList">
    {goods.map((good) => (
      <GoodCard
        good={good}
        key={good.id}
      />
    ))}
  </div>
);