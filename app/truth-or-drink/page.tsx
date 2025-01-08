'use client';
import { useState } from "react";
import Names from "@/app/components/truthdrinkpage/Names";
import Cards from "../components/truthdrinkpage/Cards";
import CategorySelector from "../components/truthdrinkpage/CategorySelector";
import cousinsQuestions from "@/app/data/cousin";
import friendsQuestions from "@/app/data/friends";
import partnersQuestions from "@/app/data/partners";
import spicyQuestions from "@/app/data/spicy";

const questionMap: { [key: string]: string[] } = {
  cousins: cousinsQuestions,
  friends: friendsQuestions,
  partners: partnersQuestions,
  spicy: spicyQuestions,
};

function TruthDrink() {
  const [names, setNames] = useState<string[]>([]);
  const [nameModal, setNameModal] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string>("cousins");
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [currentName, setCurrentName] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const handleNames = (data: string) => setNames([...names, data]);

  const handleCategorySelect = (category: string) => {
    setCurrentCategory(category);
    setCurrentQuestion(""); // Reset the current question
  };

  const handleShuffle = () => {
    if (names.length === 0) {
      alert("Please add names first.");
      return;
    }

    const currentIndex = count >= names.length ? 0 : count;
    const categoryQuestions = questionMap[currentCategory];

    setCurrentName(names[currentIndex]);
    setCurrentQuestion(
      categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]
    );

    setCount(currentIndex + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Truth or Drink Game</h1>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setNameModal(true)}
          className="bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600"
        >
          Add Name
        </button>

        <CategorySelector
          categories={["cousins", "friends", "partners", "spicy"]}
          onSelect={handleCategorySelect}
        />

        <Cards currentQuestion={currentQuestion} currentUser={currentName} />

        <button
          onClick={handleShuffle}
          className="bg-green-500 text-white p-2 rounded-md shadow-md hover:bg-green-600"
        >
          Shuffle
        </button>
      </div>

      {nameModal && (
        <Names
          onSendData={handleNames}
          names={names}
          closeModal={() => setNameModal(false)}
        />
      )}
    </div>
  );
}

export default TruthDrink;
