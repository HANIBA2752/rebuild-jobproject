import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error("Error fetching job:", err));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{job.position}</h1>
      <p className="text-gray-700 mt-2">Trending: {job.trending}</p>
      <p className="text-gray-700 mt-2">Skills: {job.skills}</p>
    </div>
  );
};

export default JobDetail;
