import React, { useState } from "react";
import capitalizeFirstLetter from "../../utils/helpers/functions";

export default function TemplateCard({ template }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <div className="template-item p-3 border rounded-lg border-primary">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-2xl">
            {template.templateName.toLocaleUpperCase()}{" "}
          </h4>
          <button
            onClick={() => setIsEditOpen(!isEditOpen)}
            id="dropdownMenuIconHorizontalButton"
            data-dropdown-toggle="dropdownDotsHorizontal"
            className="inline-flex items-center py-1 px-2 text-sm font-medium text-center text-gray-900 bg-primary_faded rounded-lg hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-primary"
            type="button"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
          <div
            id="dropdownDotsHorizontal"
            className={`${
              isEditOpen ? null : "hidden"
            }  z-10 w-44 bg-overlay text-white_faded rounded divide-y divide-gray-1=800 shadow `}
          >
            <ul
              className="py-1 text-sm"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a href="#" className="block py-2 px-4">
                  Edit Template
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4">
                  Delete Template
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5">
          {template.exercises.map((exercise, i) => (
            <div className="font-semibold text-xl mb-2" key={i}>
              <h5 className="text-primary_faded">
                {capitalizeFirstLetter(exercise.exerciseName)}
              </h5>
              <span>{exercise.sets} x </span>
              <span>{exercise.reps}</span>
              <span className="ml-2 text-white_faded text-sm">
                {exercise.weight} lbs
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}