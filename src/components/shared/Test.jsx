import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdCheckBox } from "react-icons/md";

export default function SubmitReview() {
  const [prosFields, setProsFields] = useState([""]);
  const [consFields, setConsFields] = useState([""]);

  const handleAddField = (type) => {
    if (type === "pros") {
      setProsFields([...prosFields, ""]);
    } else if (type === "cons") {
      setConsFields([...consFields, ""]);
    }
  };

  const handleRemoveField = (index, type) => {
    if (type === "pros") {
      const newProsFields = [...prosFields];
      newProsFields.splice(index, 1);
      setProsFields(newProsFields);
    } else if (type === "cons") {
      const newConsFields = [...consFields];
      newConsFields.splice(index, 1);
      setConsFields(newConsFields);
    }
  };

  const handleFieldChange = (index, value, type) => {
    if (type === "pros") {
      const newProsFields = [...prosFields];
      newProsFields[index] = value;
      setProsFields(newProsFields);
    } else if (type === "cons") {
      const newConsFields = [...consFields];
      newConsFields[index] = value;
      setConsFields(newConsFields);
    }
  };

  const handleSubmit = () => {
    // Use prosFields and consFields arrays in your form submission logic
    console.log("Pros:", prosFields);
    console.log("Cons:", consFields);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl bg-primary-50 mt-5 rounded-3xl mb-5 wrapper mx-auto p-4">
      {/* ... Other JSX content ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="border border-green-500 rounded p-4">
          <div className="flex items-center mb-2">{/* ... */}</div>
          {prosFields.map((field, index) => (
            <div key={index} className="flex items-center mb-2">
              <MdCheckBox className="text-green-500 mr-2" />
              <Input
                value={field}
                placeholder="Write here!"
                onChange={(e) =>
                  handleFieldChange(index, e.target.value, "pros")
                }
              />
              <button
                onClick={() => handleRemoveField(index, "pros")}
                className="text-red-500 ml-2 focus:outline-none"
              >
                &#10006;
              </button>
            </div>
          ))}
          <Button
            onClick={() => handleAddField("pros")}
            className="mt-2 bg-green-500 text-white"
          >
            + Add Field
          </Button>
        </div>
        {/* ... Similar structure for consFields ... */}
      </div>
      <div className="flex justify-center">
        <Button onClick={handleSubmit} className="bg-red-500 text-white">
          Submit Review
        </Button>
      </div>
    </div>
  );
}

// Other icon components remain the same
