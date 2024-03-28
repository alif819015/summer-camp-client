const InstructorCard = ({ item }) => {
  const { image, name, email } = item;

  return (
    <div className="container mx-auto">
      <div className="card card-compact w-full md:max-w-sm lg:max-w-md xl:max-w-lg bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-48 md:h-56 lg:h-64 xl:h-80 w-full object-cover"
            src={image}
            alt="Instructor"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{email}</p>
          <div className="card-actions flex justify-end mt-4">
          <button className="Btn">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
