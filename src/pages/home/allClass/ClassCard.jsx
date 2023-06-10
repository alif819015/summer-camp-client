const ClassCard = ({ user }) => {
  const { image, InstructorName, className, availableSeats, price } = user;
  return (
    <div className="my-8 card card-compact w-auto bg-base-100 shadow-xl">
      <figure>
        <img className="h-[200px] w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-black card-title">{className}</h2>
        <p>
          <span className="font-semibold text-orange-600">InstructorName:</span>{" "}
          {InstructorName}
        </p>
        <p>
          <span className="font-semibold text-orange-600">
            AvailableSeats:{" "}
          </span>
          {availableSeats}
        </p>
        <p>
          <span className="font-semibold text-green-700">Price: </span>${price}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-secondary">
            Select Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
