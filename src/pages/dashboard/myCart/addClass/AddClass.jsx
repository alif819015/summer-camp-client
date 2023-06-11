import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hokes/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../../shared/sectionTitle/SectionTitle";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const onSubmit = (data) => {

    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then( imgResponse => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name, price, className, seats, email} = data;
            const newItem = {name, price: parseFloat(price), email, className, seats, image:imgURL}

            console.log(newItem)
            axiosSecure.post('/topClass',  newItem)
            .then( data => {
                console.log(data.data)
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })

  };
    return (
        <div className="my-5">
      <SectionTitle heading="add class"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-20 border-2 bg-purple-300 p-10">
        <div className="form-control w-full ">
          <input
            type="text"
            placeholder="Class Name"
            className="input input-bordered w-full "
            {...register("className", {required: true, maxLength: 80})}
          />
        </div>
        <div className="my-4 form-control w-full ">
          <input
            type="text"
            placeholder="Instructor name"
            {...register("name", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <input
            type="text"
            placeholder="Instructor email"
            {...register("email", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="my-4 form-control w-full ">
          <input
            type="text"
            placeholder="Available seats"
            {...register("seats", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <input
            type="text"
            placeholder="Price"
            {...register("price", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        
        <div className="form-control w-full my-4">
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input
          className="btn btn-active btn-accent"
          type="submit"
          value="Add button"
        />
      </form>
    </div>
  );
};

export default AddClass;