import TestimonialSampleImages from "../../../assets/images/TestimonialSampleImg.svg";

const Testimonial = ({
  img = TestimonialSampleImages,
  testimonial = `Materi yang disampaikan mudah dimengerti,
                   kualitas instruktur sangat baik serta  responnya yang cepat.
                   So, kursus disini sangat sangat saya rekomendasikan!!`,
  name = "John Doe",
  occupation = "Vice President",
}: TestimonialProps) => {
  return (
    <div className="flex flex-row gap-6 bg-testimonial-card items-center p-6 rounded-3xl drop-shadow-md w-3/4 mx-auto mb-4">
      <img src={img} alt={name} className="w-1/6" />
      <div className=" flex flex-col gap-4 py-4 ">
        <p className="text-xl font-medium text-justify">
          {`" ` + testimonial + ` "`}
        </p>
        <div className="flex flex-col w-fit">
          <p className="w-fit">{name}</p>
          <p className="w-fit">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
