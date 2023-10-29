import "./GoodCard.scss";
export const GoodCard = ({ good }) => (
  <div
    className="GoodCard"
    style={{ color: good.color }}
  >
    <h2>{good.name}</h2>
  </div>
);