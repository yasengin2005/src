import { useState } from "react";

const MyComponent = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodItem").value;
    document.getElementById("foodItem").value = "";

    setFoods((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    const filteredItems = foods.filter((_, i) => i !== index);

    setFoods(filteredItems);
  };

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li
            key={index}
            onClick={() => handleRemoveFood(index)}
            style={{
              cursor: "pointer",
            }}
          >
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodItem" placeholder="insert new food" />
      <button onClick={handleAddFood} className="button">
        Add food
      </button>
    </div>
  );
};

export default MyComponent;
