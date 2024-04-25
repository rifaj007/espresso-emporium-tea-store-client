import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import addCoffeeBg from "../assets/images/more/add-coffee-bg.png";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    fetch('http://localhost:5000/coffees', {
      method: "POST",
      headers: {
         "content-type": "application/json"
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)

      if(data.insertedId){
         Swal.fire({
            title: 'Success!',
            text: 'Coffee added sucessfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      }
    })

    form.reset();
  };

  return (
    <div
      className="pt-12 mb-[120px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${addCoffeeBg})` }}
    >
      <div className="container">
        <div className="inline-block mb-12">
          <Link
            className="flex gap-4 items-center hover:bg-[#D2B48C] rounded-lg py-2 px-2  duration-300"
            to="/"
          >
            <FaArrowLeft className="text-2xl text-[#331A15]" />
            <div className="relative text-[30px] font-rancho text-[#374151] inline-block">
              <h2 className="blur-[6px] absolute select-none ">Back to home</h2>
              Back to home
            </div>
          </Link>
        </div>

        <div className="bg-[#F4F3F0] py-[70px] px-[112px] rounded-lg">
          <div className="text-center">
            <div className="relative text-[45px] font-rancho text-[#374151] inline-block mb-8">
              <h2 className="blur-[6px] absolute select-none ">
                Add New Coffee
              </h2>
              Add New Coffee
            </div>
            <p className="text-lg text-[#1B1A1AB3] font-raleway">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at <br /> its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed <br /> to using Content
              here.
            </p>
          </div>

          <form
            onSubmit={handleAddCoffee}
            className="grid grid-cols-2 gap-6 text-left mt-8"
          >
            <div>
              <label
                className="text-[#1B1A1ACC] text-xl font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <br />
              <input
                className="h-12 w-full rounded-md p-3 text-[#1B1A1A99] text-base mt-4"
                type="text"
                name="name"
                id="name"
                placeholder="Enter coffee name"
              />
            </div>

            <div>
              <label
                className="text-[#1B1A1ACC] text-xl font-semibold"
                htmlFor="chef"
              >
                Chef
              </label>
              <br />
              <input
                className="h-12 w-full rounded-md p-3 text-[#1B1A1A99] text-base mt-4"
                type="text"
                name="chef"
                id="chef"
                placeholder="Enter coffee chef"
              />
            </div>

            <div>
              <label
                className="text-[#1B1A1ACC] text-xl font-semibold"
                htmlFor="supplier"
              >
                Supplier
              </label>
              <br />
              <input
                className="h-12 w-full rounded-md p-3 text-[#1B1A1A99] text-base mt-4"
                type="text"
                name="supplier"
                id="supplier"
                placeholder="Enter coffee supplier"
              />
            </div>

            <div>
              <label
                className="text-[#1B1A1ACC] text-xl font-semibold"
                htmlFor="taste"
              >
                Taste
              </label>
              <br />
              <input
                className="h-12 w-full rounded-md p-3 text-[#1B1A1A99] text-base mt-4"
                type="text"
                name="taste"
                id="taste"
                placeholder="Enter coffee taste"
              />
            </div>

            <div>
              <label
                className="text-[#1B1A1ACC] text-xl font-semibold"
                htmlFor="category"
              >
                Category
              </label>
              <br />
              <input
                className="h-12 w-full rounded-md p-3 text-[#1B1A1A99] text-base mt-4"
                type="text"
                name="category"
                id="category"
                placeholder="Enter coffee category"
              />
            </div>

            <div>
              <label
                className="text-[#1B1A1ACC] text-xl font-semibold"
                htmlFor="details"
              >
                Details
              </label>
              <br />
              <input
                className="h-12 w-full rounded-md p-3 text-[#1B1A1A99] text-base mt-4"
                type="text"
                name="details"
                id="details"
                placeholder="Enter coffee details"
              />
            </div>

            <div className="col-start-1 col-end-3">
              <label
                className="text-[#1B1A1ACC] text-xl font-semibold"
                htmlFor="photo"
              >
                Photo
              </label>
              <br />
              <input
                className="h-12 w-full rounded-md p-3 text-[#1B1A1A99] text-base mt-4"
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter photo URL"
              />
            </div>

            <input
              className="col-start-1 col-end-3 text-[#331A15] text-2xl font-rancho rounded-md w-full cursor-pointer bg-[#D2B48C] border-2 border-[#331A15] py-2"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
