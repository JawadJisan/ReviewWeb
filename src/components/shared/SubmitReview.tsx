import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

export default function SubmitReview() {
  const [prosFields, setProsFields] = useState([""]);
  const [consFields, setConsFields] = useState([""]);
  const [review, setReview] = useState("");

  const [ratings, setRatings] = useState({
    qualityRating: 0,
    priceRating: 0,
    serviceRating: 0,
  });

  const ratingChanged = (newRating: number, type: string) => {
    setRatings({
      ...ratings,
      [type]: newRating,
    });
  };

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
    const formData = {
      review,
      ratings,
      pros: prosFields,
      cons: consFields,
    };
    console.log("Form Data", formData);
  };

  return (
    <div className="max-w-4xl bg-primary-50 mt-5 rounded-3xl mb-5 wrapper mx-auto p-5">
      <div className="text-lg font-semibold mb-4">
        Leave feedback about this
      </div>
      <div className="text-sm mb-4">
        Logged in as abc abc.
        <a className="text-blue-600" href="#">
          Edit your profile
        </a>
        .{" "}
        <a className="text-blue-600" href="#">
          Log out?
        </a>{" "}
        Required fields are marked <span className="text-red-500">*</span>
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor="review"
        >
          Write your review
          <span className="text-red-500">*</span>
        </label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          id="review"
          placeholder="Write your review"
          rows="4"
        />
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-1">
          <div className="text-sm font-medium text-gray-900 mr-2">Quality </div>
          <ReactStars
            count={5}
            onChange={(newRating) => ratingChanged(newRating, "qualityRating")}
            size={30}
            // isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
        <div className="flex items-center mb-1">
          <div className="text-sm font-medium text-gray-900 mr-2">Price</div>
          <ReactStars
            count={5}
            onChange={(newRating) => ratingChanged(newRating, "priceRating")}
            size={30}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
        <div className="flex items-center mb-1">
          <div className="text-sm font-medium text-gray-900 mr-2">Service</div>
          <ReactStars
            count={5}
            onChange={(newRating) => ratingChanged(newRating, "serviceRating")}
            size={30}
            // isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="border border-green-500 rounded p-4">
          <div className="flex items-center mb-2">
            <MdThumbUp className="text-green-500 mr-2 size-[25px]" />
            <div className="text-sm font-medium text-gray-900">PROS</div>
          </div>
          {prosFields.map((field, index) => (
            <div key={index} className="flex items-center mb-2">
              <CheckSquareIcon className="text-green-500 mr-2" />
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
        <div className="border border-red-500 rounded p-4">
          <div className="flex items-center mb-2">
            <MdThumbDown className="text-red-500 mr-2 size-[25px] " />
            <div className="text-sm font-medium text-gray-900">CONS</div>
          </div>
          {consFields.map((field, index) => (
            <div key={index} className="flex items-center mb-2">
              <CheckSquareIcon className="text-red-500 mr-2" />
              <Input
                value={field}
                placeholder="Write here!"
                onChange={(e) =>
                  handleFieldChange(index, e.target.value, "cons")
                }
              />
              <button
                onClick={() => handleRemoveField(index, "cons")}
                className="text-red-500 ml-2 focus:outline-none"
              >
                &#10006;
              </button>
            </div>
          ))}
          <Button
            onClick={() => handleAddField("cons")}
            className="mt-2 bg-red-500 text-white"
          >
            + Add Field
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={handleSubmit} className="button text-white">
          Submit Review
        </Button>
      </div>
    </div>
  );
}

function CheckSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function SquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
