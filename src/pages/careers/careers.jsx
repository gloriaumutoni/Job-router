import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const career = useLoaderData();
  return (
    <div className="careers">
      {career.map((career) => (
        <Link to='/' key={career.id}>
            <p>{career.title}</p>
            <p>based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

//loader function
export const CareersLoader = async () => {
  let res = await fetch("http://localhost:4000/careers");
  return res.json();
};
